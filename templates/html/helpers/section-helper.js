module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('section', function(name, icon, options) {
      return '<h1><i class="fa fa-'+icon+'" aria-hidden="true"></i> '+name+'</h1>';
  });
}
