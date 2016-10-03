@builtin "whitespace.ne"

main -> null
    | main  statement

statement -> _ "statement" _
