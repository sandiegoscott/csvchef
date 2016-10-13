# CSV Chef

@{% function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
} %}

@builtin "string.ne"

main -> null | main statement # {% function(d) { return flatten(d); } %}

statement -> write | replace | insert

write -> "to" __ field __ write_append_prepend __ string _
{% function(d) { return JSON.parse(["\"", d[2], ":str.append(@@@", d[6], "@@@\""].join("")).replace(/@@@/g, "\""); } %}

replace -> "in" __ field __ "replace" __ exp __ "with" __ string _
{% function(d) { return JSON.parse(["\"", d[2], ":str.replace(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); } %}

insert -> "in" __ field __ before_after __ exp __ "insert" __ string _
{% function(d) { return JSON.parse(["\"", d[2], ":str.insert_before(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); } %}


write_append_prepend -> "write" | "append" | "prepend"
before_after -> "before" | "after"



row                 -> "to" __ string __ "write" __ string                    {% function (d) { return operation("WRITE", d); } %}

exp                 -> string | regexp
string              -> quoted_string | unquoted_string
quoted_string       -> quote quoted_char:* quote       {% function (d) { return d[1].join(""); } %}
unquoted_string     -> unquoted_char:*                 {% function (d) { return d[0].join(""); } %}
field               ->  [a-zA-Z0-9]
regexp              -> "/abc/"   # "/" string "/" # 

quote               -> "\""                             {% id %}
quoted_char         -> [^"]                             {% id %}
unquoted_char       -> [^ "]                            {% id %}

newline             -> "\r" "\n"                        {% empty %}
                    | "\r" | "\n"                      {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                   -> wschar:* {% function(d) {return null;} %}
__                  -> wschar:+ {% function(d) {return null;} %}
wschar              -> [ \t\v\f] {% id %}
