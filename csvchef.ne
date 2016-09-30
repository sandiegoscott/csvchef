# CSV Chef

@builtin "whitespace.ne"
@builtin "string.ne"

operation -> "in" __ field __ "replace" __ string_or_regexp __ "with" __ string {%
    function(d) {
        return JSON.parse(["\"", d[2], ":str.replace(", d[6], ",@?^", d[10], "@?^)\""].join("")).replace(/@@@/g, "\"");
    }
%}

#  parse("\""+d[2]+":replace.("+d[6]+",\""+d[10]+"\"\"");   [ 'in::Name::replace::/abc/::with::xyz' ]   str.replace("Microsoft", "W3Schools");

#operation -> field __ "replace" __ string_or_regexp   

string_or_regexp -> string | regexp

string ->  dqstring  # "'xyz'"   # 
field  -> "Name"    # string
regexp -> "/abc/"   # "/" string "/"
