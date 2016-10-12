// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  function write(d) {
    col = d[3];
    colname = d[4];
    return JSON.parse(["\"", col, ":", colname, "\""].join(""));
  }

  function appendItem(a, b) { return function (d) { return d[a].concat([d[b]]); } };
  function appendItemChar(a, b) { return function (d) { return d[a].concat(d[b]); } };
  function empty(d) { return []; };
  function emptyStr(d) { return ""; };
var grammar = {
    ParserRules: [
    {"name": "cmd", "symbols": ["field", "__", "field"], "postprocess": function(d) { return flatten(d); }},
    {"name": "field", "symbols": ["quoted_field"]},
    {"name": "field", "symbols": ["unquoted_field"]},
    {"name": "quoted_field$ebnf$1", "symbols": []},
    {"name": "quoted_field$ebnf$1", "symbols": ["quoted_char", "quoted_field$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "quoted_field", "symbols": ["quote", "quoted_field$ebnf$1", "quote"], "postprocess": function (d) { return d[1].join(""); }},
    {"name": "unquoted_field$ebnf$1", "symbols": []},
    {"name": "unquoted_field$ebnf$1", "symbols": ["unquoted_char", "unquoted_field$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "unquoted_field", "symbols": ["unquoted_field$ebnf$1"], "postprocess": function (d) { return d[0].join(""); }},
    {"name": "quote", "symbols": [{"literal":"\""}], "postprocess": id},
    {"name": "quoted_char", "symbols": [/[^"]/], "postprocess": id},
    {"name": "unquoted_char", "symbols": [/[^ "]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\v\f]/], "postprocess": id}
]
  , ParserStart: "cmd"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
