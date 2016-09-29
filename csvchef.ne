# CSV Chef

#@builtin "string.ne"
@builtin "whitespace.ne"

operation -> "in" __ field __ "replace" __ string_or_regexp __ "with" __ string

#operation -> field __ "replace" __ string_or_regexp

string_or_regexp -> string | regexp

string -> "'xyz'"   # sqstring
field  -> "Name"    # string
regexp -> "/abc/"   # "/" string "/"
