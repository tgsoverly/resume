module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('section', function(name, icon, options) {
    // let section = '<div class="row"><div class="column small-12">';
    // section += '<h1><i class="fa fa-'+icon+'" aria-hidden="true"></i> '+name+'</h1>';
    // section += '</div></div>';
    // return section
      return '<h1><i class="fa fa-'+icon+'" aria-hidden="true"></i> '+name+'</h1>';
  });
}
