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
    {"name": "main", "symbols": []},
    {"name": "main", "symbols": ["main", "statement", "_"]},
    {"name": "statement", "symbols": ["b"]},
    {"name": "statement", "symbols": ["c"]},
    {"name": "b$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "b", "symbols": ["b$string$1"]},
    {"name": "c$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "c$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "c", "symbols": ["c$string$1", "__", "c$string$2"], "postprocess": 
        function(d) {
            return JSON.parse(["\"", d.join("."), "\""].join(""));
        }
        }
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
