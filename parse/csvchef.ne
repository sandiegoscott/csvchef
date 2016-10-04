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

replace -> "in" __ field __ "replace" __ string_or_regexp __ "with" __ string _
{% function(d) { return JSON.parse(["\"", d[2], ":str.replace(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); } %}

insert -> "in" __ field __ before_after __ string_or_regexp __ "insert" __ string _
{% function(d) { return JSON.parse(["\"", d[2], ":str.insert_before(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); } %}

string_or_regexp -> string | regexp

write_append_prepend -> "write" | "append" | "prepend"
before_after -> "before" | "after"

string ->  dqstring | sqstring
field  ->  [a-zA-Z0-9]
regexp -> "/abc/"   # "/" string "/" # 

# Whitespace: `_` is optional, `__` is mandatory.
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \f\t\v] {% id %}
