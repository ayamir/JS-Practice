var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
alert(matches.index);
alert(matches.input);
alert(matches[0]);
alert(matches[1]);
alert(matches[2]);
