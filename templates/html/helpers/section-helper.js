module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('section', function(value, options) {
      return '<h1>'+value+'</h1>';
  });
}
