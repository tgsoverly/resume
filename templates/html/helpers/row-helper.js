module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('row', function(value, options) {
    if((value)%4 == 0){
       return options.fn(this);
    } else {
       return options.inverse(this);
    }
  });
}
