// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
 function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
} 

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
var grammar = {
    ParserRules: [
    {"name": "cmds", "symbols": []},
    {"name": "cmds", "symbols": ["cmds", "_", "cmd"], "postprocess": function(d) { return flatten(d); }},
    {"name": "cmd$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd$string$2", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd$string$3", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd", "symbols": ["cmd$string$1", "__", "cmd$string$2", "__", "cmd$string$3", "__", "quoted_field"]},
    {"name": "field", "symbols": ["unquoted_field"], "postprocess": id},
    {"name": "field", "symbols": ["quote", "quoted_field", "quote"], "postprocess": function (d) { return d[1]; }},
    {"name": "unquoted_field", "symbols": [], "postprocess": emptyStr},
    {"name": "unquoted_field", "symbols": ["unquoted_field", "char"], "postprocess": appendItemChar(0,1)},
    {"name": "quoted_field$ebnf$1", "symbols": []},
    {"name": "quoted_field$ebnf$1", "symbols": ["notquote", "quoted_field$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "quoted_field", "symbols": ["quote", "quoted_field$ebnf$1", "quote"], "postprocess": appendItemChar(0,2)},
    {"name": "quote", "symbols": [{"literal":"\""}]},
    {"name": "notquote", "symbols": [/[^"]/]},
    {"name": "quoted_field_char", "symbols": []},
    {"name": "quoted_field_char", "symbols": [/[^"]/], "postprocess": id},
    {"name": "char", "symbols": [/[^ \"\r\n\t\v\f]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \r\n\t\v\f]/], "postprocess": id}
]
  , ParserStart: "cmds"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
