function doGet() {
  var tmp = HtmlService.createTemplateFromFile('page')
  return tmp.evaluate();
}
