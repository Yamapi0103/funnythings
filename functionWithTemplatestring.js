var greet, upperCaseExpr;

upperCaseExpr = function(textParts, ...expressions) {
  // textParts => ['Hi ', '. You look ', '!']
  // expressions=> [${name}, ${adjective}]
  return textParts.reduce(function(text, textPart, i) {
    return text + expressions[i - 1].toUpperCase() + textPart;
  });
};

greet = function(name, adjective) {
  return upperCaseExpr`Hi ${name}. You look ${adjective}!`;
};

// 執行 greet('greg', 'awesome')
//輸出： Hi GREG. You look AWESOME!