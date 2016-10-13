@{%
function operation( op, d ) {
    //console.log("------")
    //console.log(op, JSON.stringify(d));
    //console.log("------")
    switch(op) {
        case "WRITE":
            column = d[2][0];
            string = d[6][0];
            return ["WRITE", column, string];
            break;
        case "REPLACE":
            column = d[2][0];
            expression = d[6];
            string = d[10][0];
            return ["REPLACE", column, expression, string];
            break;
        default:
            return ["UNKNOWN"];
    }

}

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

rows                -> null
                     | row
                     | rows newline row                                                 {% appendItem(0,2) %}

row                 -> "to" __ column __ "write" __ string                              {% function (d) { return operation("WRITE", d); } %}
                     | "in" __ column __ "replace" __ string __ "with" __ string        {% function (d) { return operation("REPLACE", d); } %}

column              -> string                           {% id %}

string              -> unquoted_string                  {% id %}
                     | quoted_string                    {% id %}
quoted_string       -> quote quoted_char:* quote        {% function (d) { return d[1].join(""); } %}
unquoted_string     -> unquoted_char:*                  {% function (d) { return d[0].join(""); } %}

quote               -> "\""                             {% id %}
quoted_char         -> [^"]                             {% id %}
unquoted_char       -> [^ "]                            {% id %}
newline             -> "\r" "\n"                        {% empty %}
                     | "\r"                             {% empty %}
                     | "\n"                             {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                 -> wschar:*                           {% function(d) {return null;} %}
__                -> wschar:+                           {% function(d) {return null;} %}
wschar            -> [ \t\v\f]                          {% id %}
