@{%
function operation( op, d ) {
    //console.log("------")
    //console.log(op, JSON.stringify(d));
    //console.log("------")
    switch(op) {
        case "WRITE":
            column = d[2];
            string = d[6];
            return ["WRITE", column, string];
            break;
        case "REPLACE":
            column = d[2];
            expression = d[6];
            string = d[10];
            return ["REPLACE", column, expression, string];
            break;
        case "INSERT":
            column = d[2];
            before_after = d[4];
            target = d[6];
            string = d[10];
            return ["INSERT", column, before_after, target, string];
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
                     | "in" __ column __ before_after __ string __ "insert" __ string   {% function (d) { return operation("INSERT", d); } %}

write_append_prepend -> "write" | "append" | "prepend"
before_after        -> "before"                         {% function(d) { return d[0]; } %}
                     | "after"                          {% function(d) { return d[0]; } %}

column              -> string                           {% function(d) { return d[0]; } %}

string              -> unquoted_string                  {% function(d) { return d[0]; } %}
                     | quoted_string                    {% function(d) { return d[0]; } %}
quoted_string       -> quote quoted_char:* quote        {% function(d) { return d[1].join(""); } %}
unquoted_string     -> unquoted_char:*                  {% function(d) { return d[0].join(""); } %}

quote               -> "\""                             {% function(d) { return d[0]; } %}
quoted_char         -> [^"]                             {% function(d) { return d[0]; } %}
unquoted_char       -> [^ "]                            {% function(d) { return d[0]; } %}
newline             -> "\r" "\n"                        {% empty %}
                     | "\r"                             {% empty %}
                     | "\n"                             {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                 -> wschar:*                           {% function(d) { return null; } %}
__                -> wschar:+                           {% function(d) { return null; } %}
wschar            -> [ \t\v\f]                          {% function(d) { return d[0]; } %}
