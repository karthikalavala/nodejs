var request = require('request');

var st = request("http://www.pluralsight.com/");


st.on('data', function(chunk){
    console.log(">>DATA READ>." + chunk);
});


st.on('end', function(){
    console.log(">>DONE READ>.");
});
