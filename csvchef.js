// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
 function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
} 

function nth(n) {
    return function(d) {
        return d[n];
    };
}


function $(o) {
    return function(d) {
        var ret = {};
        Object.keys(o).forEach(function(k) {
            ret[k] = d[o[k]];
        });
        return ret;
    };
}
var grammar = {
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dstrchar", "dqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sstrchar", "sqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": [/[^`]/, "btstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "strescape", "symbols": [/["'\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "main", "symbols": []},
    {"name": "main", "symbols": ["main", "statement"], "postprocess": function(data) { return flatten(data); }},
    {"name": "statement", "symbols": ["write"]},
    {"name": "statement", "symbols": ["replace"]},
    {"name": "statement", "symbols": ["insert"]},
    {"name": "write$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write", "symbols": ["write$string$1", "__", "field", "__", "write_append_prepend", "__", "string", "_"], "postprocess": function(d) { return JSON.parse(["\"", d[2], ":str.append(@@@", d[6], "@@@\""].join("")).replace(/@@@/g, "\""); }},
    {"name": "replace$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "replace$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "replace$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "replace", "symbols": ["replace$string$1", "__", "field", "__", "replace$string$2", "__", "string_or_regexp", "__", "replace$string$3", "__", "string", "_"], "postprocess": function(d) { return JSON.parse(["\"", d[2], ":str.replace(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); }},
    {"name": "insert$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "insert$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "insert", "symbols": ["insert$string$1", "__", "field", "__", "before_after", "__", "string_or_regexp", "__", "insert$string$2", "__", "string", "_"], "postprocess": function(d) { return JSON.parse(["\"", d[2], ":str.insert_before(", d[6], ",@@@", d[10], "@@@)\""].join("")).replace(/@@@/g, "\""); }},
    {"name": "string_or_regexp", "symbols": ["string"]},
    {"name": "string_or_regexp", "symbols": ["regexp"]},
    {"name": "write_append_prepend$string$1", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$1"]},
    {"name": "write_append_prepend$string$2", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$2"]},
    {"name": "write_append_prepend$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "write_append_prepend", "symbols": ["write_append_prepend$string$3"]},
    {"name": "before_after$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "before_after", "symbols": ["before_after$string$1"]},
    {"name": "before_after$string$2", "symbols": [{"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "before_after", "symbols": ["before_after$string$2"]},
    {"name": "string", "symbols": ["dqstring"]},
    {"name": "string", "symbols": ["sqstring"]},
    {"name": "field$string$1", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "field", "symbols": ["field$string$1"]},
    {"name": "regexp$string$1", "symbols": [{"literal":"/"}, {"literal":"a"}, {"literal":"b"}, {"literal":"c"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "regexp", "symbols": ["regexp$string$1"]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
