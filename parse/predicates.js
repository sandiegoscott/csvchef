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
    {"name": "predicates", "symbols": []},
    {"name": "predicates", "symbols": ["predicate"]},
    {"name": "predicates", "symbols": ["predicates", "newline", "predicate"], "postprocess": appendItem(0,2)},
    {"name": "predicate", "symbols": []},
    {"name": "predicate", "symbols": ["comparison"]},
    {"name": "predicate", "symbols": ["match"]},
    {"name": "predicate", "symbols": ["match_split"]},
    {"name": "predicate", "symbols": ["type"]},
    {"name": "comparison$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparison", "symbols": ["comparison$string$1", "__", "column", "__", "compares", "__", "string"]},
    {"name": "compares$string$1", "symbols": [{"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares", "symbols": ["compares$string$1"]},
    {"name": "compares$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares", "symbols": ["compares$string$2"]},
    {"name": "compares$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares$string$5", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares", "symbols": ["compares$string$3", "__", "compares$string$4", "__", "compares$string$5"]},
    {"name": "compares$string$6", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares$string$7", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares", "symbols": ["compares$string$6", "__", "compares$string$7"]},
    {"name": "compares$string$8", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares$string$9", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compares", "symbols": ["compares$string$8", "__", "compares$string$9"]},
    {"name": "match$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match", "symbols": ["match$string$1", "__", "column", "__", "match$string$2", "__", "regexp"]},
    {"name": "match_split$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match_split$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match_split$string$3", "symbols": [{"literal":")"}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match_split$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "match_split", "symbols": ["match_split$string$1", "__", "column", "__", "match_split$string$2", "separator", "match_split$string$3", "index", {"literal":"]"}, "__", "match_split$string$4", "__", "regexp"]},
    {"name": "regexp", "symbols": ["string"]},
    {"name": "separator$ebnf$1", "symbols": ["quoted_char"]},
    {"name": "separator$ebnf$1", "symbols": ["quoted_char", "separator$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "separator", "symbols": ["quote", "separator$ebnf$1", "quote"]},
    {"name": "char", "symbols": [/[^ \t\v\f]/], "postprocess": function(d) { return d[0]; }},
    {"name": "index", "symbols": [/[0-9:+]/]},
    {"name": "type$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1", "__", "column", "__", "type$string$2", "__", "field_type"]},
    {"name": "type$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type$string$5", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$3", "__", "column", "__", "type$string$4", "__", "type$string$5", "__", "field_type"]},
    {"name": "field_type$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"p"}, {"literal":"h"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "field_type", "symbols": ["field_type$string$1"]},
    {"name": "field_type$string$2", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "field_type", "symbols": ["field_type$string$2"]}
]
  , ParserStart: "predicates"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
