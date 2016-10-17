
@include "./basic.ne"

match               -> "where" __ column __ "matches" __ regexp

regexp              -> string
