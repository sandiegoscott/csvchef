# CSV Chef

The most common file in use for transferring data from one location to another is the comma-separated file, or CSV (sometimes "character-separated file)"). A common use case has the user wanting to manipulate the file in certain ways before using it as input.

This project will produce a web application allowing one to write instructions in a domain-specific language (DSL) for manipulating a CSV file, all in the browser. The DSL will allow column and row operations, plus string processing. The CSV file will be converted to a Javascript object by the PapaParse library. The DSL will be parsed by the npm package 'nearley' to direct the operations to perform on the CSV object. Finally, the processed object will be converted to a CSV file for downloading.