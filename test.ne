@builtin "whitespace.ne"

main -> null
    | main statement _

statement -> b | c

b -> "bow"

c -> "cow" __ "dog" {%
    function(d) {
        return JSON.parse(["\"", d.join("."), "\""].join(""));
    }
%}