
@{%
  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

NOT WORKING - EXTRACT COMMANDS FROM VARYING DEPTHS IN nearley result

  // assumes arg is array
  function extract_element(a) {
      switch(a.length) {
      case 0:  // null or []
          return null;
          break;
      case 1:  // nested [ ]
          return extract_element(a[0])
          break;
      default: // command
          if (a[0].class != Array) {
            return a;
          } else {
            return a.map(extract_elements);
          }
      }
  }

  function extract_commands(d) {
    dd = d.map(extract_element);
    return dd.filter(function(e){ return e.length != 0 });
  }

  function command_write(d) {
    colname = d[2][0];
    string = d[6][0];
    return ["WRITE", colname, string];
  }
%}

@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}

cmds              -> null
                   | cmd
                   | cmd newline cmds                 #{% function(d) { return flatten(d); } %}

cmd               -> "to" __ string __ "write" __ string    {% function (d) { return command_write(d); } %}

string             -> quoted_string                   #{% id %} # {% function (d) { console.log(JSON.stringify(d[0], null, 4)); return d[0].join(""); } %}
                   | unquoted_string

quoted_string      -> quote quoted_char:* quote       {% function (d) { return d[1].join(""); } %}

unquoted_string    -> unquoted_char:*                 {% function (d) { return d[0].join(""); } %}

quote             -> "\""                             {% id %}
quoted_char       -> [^"]                             {% id %}
unquoted_char     -> [^ "]                            {% id %}

newline           -> "\r" "\n"                        {% empty %}
                   | "\r" | "\n"                      {% empty %}

# Whitespace: `_` is optional, `__` is mandatory.
_                 -> wschar:* {% function(d) {return null;} %}
__                -> wschar:+ {% function(d) {return null;} %}
wschar            -> [ \t\v\f] {% id %}
