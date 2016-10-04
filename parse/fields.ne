
@{% function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
} %}

@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

cmds              -> null
                   | cmds _ cmd                       {% function(d) { return flatten(d); } %}

cmd               -> "to" __ "Name" __ "write" __ quoted_field    #{% appendItem(0,2) %}

field             -> unquoted_field                   {% id %}
                   | quote quoted_field quote           {% function (d) { return d[1]; } %}

unquoted_field    -> null                            {% emptyStr %}
                   | unquoted_field char             {% appendItemChar(0,1) %}

#quoted_field      -> quoted_field quoted_field_char  {% appendItemChar(0,1) %}

quoted_field      -> quote notquote:* quote          {% appendItemChar(0,2) %}

quote             -> "\""
notquote          -> [^"]

quoted_field_char -> null | [^"]                      {% id %}

char              -> [^ \"\r\n\t\v\f]                {% id %}


# Whitespace: `_` is optional, `__` is mandatory.
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \r\n\t\v\f] {% id %}
