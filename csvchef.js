// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "operation$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operation$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operation$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operation", "symbols": ["operation$string$1", "__", "field", "__", "operation$string$2", "__", "string_or_regexp", "__", "operation$string$3", "__", "string"]},
    {"name": "string_or_regexp", "symbols": ["string"]},
    {"name": "string_or_regexp", "symbols": ["regexp"]},
    {"name": "string$string$1", "symbols": [{"literal":"'"}, {"literal":"x"}, {"literal":"y"}, {"literal":"z"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "string", "symbols": ["string$string$1"]},
    {"name": "field$string$1", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "field", "symbols": ["field$string$1"]},
    {"name": "regexp$string$1", "symbols": [{"literal":"/"}, {"literal":"a"}, {"literal":"b"}, {"literal":"c"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "regexp", "symbols": ["regexp$string$1"]}
]
  , ParserStart: "operation"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
