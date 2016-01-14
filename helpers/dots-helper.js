module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('dots', function(value, block) {
    var accum = '';
    for (var i = 0; i < 10; ++i){
      if(i<value){
        accum+='<i class="fa fa-circle"></i>';
      }else{
        accum+='<i class="fa fa-circle-thin"></i>';
      }
    }
    return accum;
  });
}
