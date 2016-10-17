// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

function operation( op, d ) {
    //console.log("------")
    //console.log(op, JSON.stringify(d));
    //console.log("------")
    switch(op) {
        case "write_pend":
            column = d[2];
            op     = d[4]
            string = d[6];
            return [op, column, string];
            break;
        case "replace":
            column = d[2];
            expression = d[6];
            string = d[10];
            return ["replace", column, expression, string];
            break;
        case "insert":
            column = d[2];
            before_after = d[4];
            target = d[6];
            string = d[10];
            return ["insert", column, before_after, target, string];
            break;
        default:
            return ["ERROR", "Unknown operation " + op]; // won't reach this line
    }

}

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
var grammar = {
    ParserRules: [
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
    {"name": "wschar", "symbols": [/[ \t\v\f]/], "postprocess": function(d) { return d[0]; }},
    {"name": "match$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match", "symbols": ["match$string$1", "__", "column", "__", "match$string$2", "__", "regexp"]},
    {"name": "regexp", "symbols": ["string"]}
]
  , ParserStart: "match"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
