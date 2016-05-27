module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('section', function(value, options) {
      // {\large \textbf{COMPUTER SKILLS:}}\\
      return '{\\large \\textbf{'+value+':}}\\\\';
  });
}
