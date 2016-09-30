# CSV Chef

@builtin "whitespace.ne"
@builtin "string.ne"

# does not handle white space at start
main -> null | main replace

replace -> "in" __ field __ "replace" __ string_or_regexp __ "with" __ string _ {%
    function(d) {
        return JSON.parse(["\"", d[2], ":str.replace(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\"");
    }
%}

string_or_regexp -> string | regexp

string ->  dqstring | sqstring
field  -> "Name"    # string
regexp -> "/abc/"   # "/" string "/" # 
