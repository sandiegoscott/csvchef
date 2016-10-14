#
#  CSV Chef
#

rows                -> null
                     | row
                     | rows newline row                                                 {% appendItem(0,2) %}

row                 -> "to" __ column __ write_pend __ string                           {% function (d) { return operation("write_pend", d); } %}
                     | "in" __ column __ "replace" __ string __ "with" __ string        {% function (d) { return operation("replace", d); } %}
                     | "in" __ column __ before_after __ string __ "insert" __ string   {% function (d) { return operation("insert", d); } %}

write_pend          -> "write"                          {% function(d) { return d[0]; } %}
                     | "append"                         {% function(d) { return d[0]; } %}
                     | "prepend"                        {% function(d) { return d[0]; } %}

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


@{%
function operation( op, d ) {
    //console.log("------")
    //console.log(op, JSON.stringify(d));
    //console.log("------")
    switch(op) {
        case "write_pend":
            column = d[2];
            op     = d[4]
            string = d[6];
            return [op, column, string];
            break;
        case "replace":
            column = d[2];
            expression = d[6];
            string = d[10];
            return ["replace", column, expression, string];
            break;
        case "insert":
            column = d[2];
            before_after = d[4];
            target = d[6];
            string = d[10];
            return ["insert", column, before_after, target, string];
            break;
        default:
            return ["ERROR", "Unknown operation " + op]; // won't reach this line
    }

}

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}
