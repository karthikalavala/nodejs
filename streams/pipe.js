var request = require('request');

var st = request("http://www.pluralsight.com/");

st.pipe(process.stdout);

 //request("http://www.pluralsight.com/").pipe(process.stdout);
