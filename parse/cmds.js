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


var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
var grammar = {
    ParserRules: [
    {"name": "cmds", "symbols": []},
    {"name": "cmds", "symbols": ["cmd"]},
    {"name": "cmds", "symbols": ["cmd", "newline", "cmds"], "postprocess": function(d) { return flatten(d); }},
    {"name": "cmd$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd$string$2", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd$string$3", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cmd", "symbols": ["cmd$string$1", "__", "cmd$string$2", "__", "cmd$string$3", "__", "field"], "postprocess": function (d) { return d[6]; }},
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
    {"name": "newline", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}]},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\v\f]/], "postprocess": id}
]
  , ParserStart: "cmds"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
