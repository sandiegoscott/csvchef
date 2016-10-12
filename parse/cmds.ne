
@{%
  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  function write(d) {
    col = d[3];
    colname = d[4];
    return JSON.parse(["\"", col, ":", colname, "\""].join(""));
  }
%}

@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

cmds              -> null
                   | cmd
                   | cmd newline cmds                  {% function(d) { return flatten(d); } %}

cmd               -> "to" __ "Name" __ "write" __ field    {% function (d) { return d[6]; } %}

field             -> quoted_field
                   | unquoted_field

quoted_field      -> quote quoted_char:* quote        {% function (d) { return d[1].join(""); } %}

unquoted_field    -> unquoted_char:*                  {% function (d) { return d[0].join(""); } %}

quote             -> "\""                             {% id %}
quoted_char       -> [^"]                             {% id %}
unquoted_char     -> [^ "]                            {% id %}

newline           -> "\r" "\n"                        {% empty %}
                   | "\r" | "\n"                      {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                 -> wschar:* {% function(d) {return null;} %}
__                -> wschar:+ {% function(d) {return null;} %}
wschar            -> [ \t\v\f] {% id %}
