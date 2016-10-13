// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

function operation( op, d ) {
    //console.log("------")
    //console.log(op, JSON.stringify(d));
    //console.log("------")
    switch(op) {
        case "WRITE":
            column = d[2];
            string = d[6];
            return ["WRITE", column, string];
            break;
        case "REPLACE":
            column = d[2];
            expression = d[6];
            string = d[10];
            return ["REPLACE", column, expression, string];
            break;
        case "INSERT":
            column = d[2];
            before_after = d[4];
            target = d[6];
            string = d[10];
            return ["INSERT", column, before_after, target, string];
            break;
        default:
            return ["UNKNOWN"];
    }

}

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
var grammar = {
    ParserRules: [
    {"name": "rows", "symbols": []},
    {"name": "rows", "symbols": ["row"]},
    {"name": "rows", "symbols": ["rows", "newline", "row"], "postprocess": appendItem(0,2)},
    {"name": "row$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row$string$2", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row", "symbols": ["row$string$1", "__", "column", "__", "row$string$2", "__", "string"], "postprocess": function (d) { return operation("WRITE", d); }},
    {"name": "row$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row", "symbols": ["row$string$3", "__", "column", "__", "row$string$4", "__", "string", "__", "row$string$5", "__", "string"], "postprocess": function (d) { return operation("REPLACE", d); }},
    {"name": "row$string$6", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row$string$7", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "row", "symbols": ["row$string$6", "__", "column", "__", "before_after", "__", "string", "__", "row$string$7", "__", "string"], "postprocess": function (d) { return operation("INSERT", d); }},
    {"name": "write_append_prepend$string$1", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$1"]},
    {"name": "write_append_prepend$string$2", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$2"]},
    {"name": "write_append_prepend$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$3"]},
    {"name": "before_after$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "before_after", "symbols": ["before_after$string$1"], "postprocess": function(d) { return d[0]; }},
    {"name": "before_after$string$2", "symbols": [{"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "before_after", "symbols": ["before_after$string$2"], "postprocess": function(d) { return d[0]; }},
    {"name": "column", "symbols": ["string"], "postprocess": function(d) { return d[0]; }},
    {"name": "string", "symbols": ["unquoted_string"], "postprocess": function(d) { return d[0]; }},
    {"name": "string", "symbols": ["quoted_string"], "postprocess": function(d) { return d[0]; }},
    {"name": "quoted_string$ebnf$1", "symbols": []},
    {"name": "quoted_string$ebnf$1", "symbols": ["quoted_char", "quoted_string$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "quoted_string", "symbols": ["quote", "quoted_string$ebnf$1", "quote"], "postprocess": function(d) { return d[1].join(""); }},
    {"name": "unquoted_string$ebnf$1", "symbols": []},
    {"name": "unquoted_string$ebnf$1", "symbols": ["unquoted_char", "unquoted_string$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "unquoted_string", "symbols": ["unquoted_string$ebnf$1"], "postprocess": function(d) { return d[0].join(""); }},
    {"name": "quote", "symbols": [{"literal":"\""}], "postprocess": function(d) { return d[0]; }},
    {"name": "quoted_char", "symbols": [/[^"]/], "postprocess": function(d) { return d[0]; }},
    {"name": "unquoted_char", "symbols": [/[^ "]/], "postprocess": function(d) { return d[0]; }},
    {"name": "newline", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) { return null; }},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) { return null; }},
    {"name": "wschar", "symbols": [/[ \t\v\f]/], "postprocess": function(d) { return d[0]; }}
]
  , ParserStart: "rows"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
