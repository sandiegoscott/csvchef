@{%
  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  function appendItem(a, b) { return function (d) { return d[a].concat([d[b]]); } };
  function appendItemChar(a, b) { return function (d) { return d[a].concat(d[b]); } };
  function empty(d) { return []; };
  function emptyStr(d) { return ""; };
%}

cmd               -> field __ field                   {% function(d) { return flatten(d); } %}

field             -> quoted_field
                   | unquoted_field

quoted_field      -> quote quoted_char:* quote        {% function (d) { return d[1].join(""); } %}

unquoted_field    -> unquoted_char:*                  {% function (d) { return d[0].join(""); } %}

quote             -> "\""                             {% id %}
quoted_char       -> [^"]                             {% id %}

unquoted_char     -> [^ "]                            {% id %}

# Whitespace: `_` is optional, `__` is mandatory.
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f] {% id %}
