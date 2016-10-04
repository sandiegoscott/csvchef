
token             -> null                             #{% id %}
                  | char token                        #{% id %}

char              -> [^ "\r\n\f\t\v]                  {% function (d) { return JSON.parse( '{"char": "C"}' ); }  %}
