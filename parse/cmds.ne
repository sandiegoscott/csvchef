
@{%
    function depth( a ) {
        if (a.constructor === Array) {
            return 1 + depth(a[0]);
        } else {
            return 0;
        }
    }
    
    function remove_nesting( d ) {
        if (d.constructor === Array & d.length === 1) {
            return remove_nesting(d[0]);
        } else {
            return d;
        }
    }

    function operation( op, d ) {
        switch(op) {
            case "WRITE":
                colname = d[2][0];
                string = d[6][0];
                return ["WRITE", colname, string];
                break;
            default:
                return ["UNKNOWN"];
        }

    }
%}

@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

rows              -> null
                   | row
                   | rows newline row                                       {% appendItem(0,2) %}

row               -> "to" __ string __ "write" __ string                    {% function (d) { return operation("WRITE", d); } %}

string             -> quoted_string
                   | unquoted_string

quoted_string      -> quote quoted_char:* quote       {% function (d) { return d[1].join(""); } %}

unquoted_string    -> unquoted_char:*                 {% function (d) { return d[0].join(""); } %}

quote             -> "\""                             {% id %}
quoted_char       -> [^"]                             {% id %}
unquoted_char     -> [^ "]                            {% id %}

newline           -> "\r" "\n"                        {% empty %}
                   | "\r" | "\n"                      {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                 -> wschar:* {% function(d) {return null;} %}
__                -> wschar:+ {% function(d) {return null;} %}
wschar            -> [ \t\v\f] {% id %}
