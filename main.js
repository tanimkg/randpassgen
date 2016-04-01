exports.generate = function generate (length, ucase, symbol) {
    // setting defaults
    var ucase = typeof ucase !== 'undefined' ?  ucase : true;
    var symbol = typeof symbol !== 'undefined' ?  symbol : true;
    var length = typeof length !== 'undefined' ?  length : 6;

    // generating output
    var output = '';
    var chars = 'abcdefghijklmnopqrst0123456789';
    if (ucase) chars += "ABCDEFGHIJKLMNOPQRST";
    if (symbol) chars += "!~@#$%^&*()_-=+[{]}\|'.,/";
    
    if (isNaN(length)) {console.log ("Length is not a number"); return;}
    
    for (i = 0; i < length; i++) {
        output += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(output);
    return output;
}

//generate(12, false, false);