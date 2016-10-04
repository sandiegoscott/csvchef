// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "token", "symbols": []},
    {"name": "token", "symbols": ["char", "token"]},
    {"name": "char", "symbols": [/[^ "\r\n\f\t\v]/], "postprocess": function (d) { return JSON.parse( '{"char": "C"}' ); }}
]
  , ParserStart: "token"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
