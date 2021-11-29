const log = window.console.log;
var text = "cat, bat, sat, fat";
var pattern = /.at/;

var matches = text.match(pattern);
log(matches.index);
log(matches[0]);
log(pattern.lastIndex);

var result = text.replace("at", "ond");
log(result);

result = text.replace(/at/g, "ond");
log(result);

result = text.replace(/(.at)/g, "word ($1)");
log(result);

function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt";
      case ">":
        return "&gt";
      case "&":
        return "&amp";
      case '"':
        return "&quot";
    }
  });
}
log(htmlEscape('<p class="greeting">Hello world!</p>'));
