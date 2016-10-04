@builtin "string.ne"

@{% function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
} %}

main    -> null
        | main _ uqstring           #{% function(d) { return flatten(d); } %}

# unquoted string
uqstring -> ustrchar:*  {% function(d) {return d[1].join(""); } %}

ustrchar -> [^\\"\'\n] {% id %}
    | "\\" strescape {%
    function(d) {
        return JSON.parse("\""+d.join("")+"\"");
    }
%}

strescape -> ["'\\/bfnrt] {% id %}
    | "u" [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] {%
    function(d) {
        return d.join("");
    }
%}


# Whitespace: `_` is optional, `__` is mandatory.
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \r\n\t\v\f] {% id %}
