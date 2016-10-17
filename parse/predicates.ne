#
#  predicates
#

@include "./basic.ne"

predicates          -> null
                     | predicate
                     | predicates newline predicate                                           {% appendItem(0,2) %}

predicate           -> null
                     | comparison
                     | match
                     | match_split
                     | type

comparison          -> "where" __ column __ compares __ string

compares            -> "equals"
                     | "contains"
                     | "does" __ "not" __ "contain"
                     | "starts" __ "with"
                     | "ends" __ "with"

match               -> "where" __ column __ "matches" __ regexp

match_split         -> "where" __ column __ "split(" separator ")[" index "]" __ "matches" __ regexp

regexp              -> string

separator           -> quote quoted_char:+ quote

char                -> [^ \t\v\f]                                                             {% function(d) { return d[0]; } %}

index               -> [0-9:+]

type                -> "where" __ column __ "is" __ field_type
                     | "where" __ column __ "is" __ "not" __ field_type

field_type          -> "alpha"
                     | "numeric"
