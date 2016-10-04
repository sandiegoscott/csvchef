// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "test$ebnf$1$string$1", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "test$ebnf$1", "symbols": ["test$ebnf$1$string$1"], "postprocess": id},
    {"name": "test$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "test$ebnf$2", "symbols": []},
    {"name": "test$ebnf$2$subexpression$1", "symbols": [{"literal":"x"}, {"literal":"y"}, {"literal":"z"}]},
    {"name": "test$ebnf$2", "symbols": ["test$ebnf$2$subexpression$1", "test$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "test$ebnf$3", "symbols": [{"literal":"p"}]},
    {"name": "test$ebnf$3", "symbols": [{"literal":"p"}, "test$ebnf$3"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "test", "symbols": ["test$ebnf$1", "test$ebnf$2", "test$ebnf$3"]}
]
  , ParserStart: "test"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
