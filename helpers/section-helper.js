module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('section', function(value, block) {
    return '<h1>'+value+'</h1>';
  });
}
