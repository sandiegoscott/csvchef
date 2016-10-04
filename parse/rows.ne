
@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

rows              -> row
                   | rows newline row                {% appendItem(0,2) %}

row               -> field
                   | row __ field                    {% appendItem(0,2) %}

field             -> unquoted_field                  {% id %}
                   | "\"" quoted_field "\""          {% function (d) { return d[1]; } %}

quoted_field      -> null                            {% emptyStr %}
                   | quoted_field quoted_field_char  {% appendItemChar(0,1) %}

quoted_field_char -> [^"]                            {% id %}
#                   | "\"" "\""                       {% function (d) { return "\""; } %}

unquoted_field    -> null                            {% emptyStr %}
                   | unquoted_field char             {% appendItemChar(0,1) %}

char              -> [^ "\r\n\f\t\v]                  {% id %}

newline           -> "\r" "\n"                       {% empty %}
                   | "\r" | "\n"                     {% empty %}


# Whitespace: `_` is optional, `__` is mandatory.
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \f\t\v] {% id %}
