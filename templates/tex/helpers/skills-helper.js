var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('skills', function(skills, options) {
    //Since this would be a giant pain to do in latex because of the way columns
    //are formatted, going to just create the text in javascript and return
    let columnCount = 4;
    let chunkedSkills = _.chunk(skills, columnCount);

    let text = ""
    _.each(chunkedSkills, function(chunkOfSkills){

      let maxRows = _.maxBy(chunkOfSkills, function(s){ return s.items.length }).items.length
      let rowIndex;
      let columnIndex;

      //The skill name
      text += "\\begin{table}[h]"
      text += "\\begin{tabular}{"+Array(columnCount+1).join("p{3.7cm}")+"}\n";
      let sections = _.map(chunkOfSkills, "section");
      text += "\\textbf{"+sections.join(" } & \\textbf{ ")+" } \\\\\n";
      text += "\\hline\n";

      //Do the rows first because that is how latex wants it, and it is different than html because
      //it really does have to be on one line, not in elements on different lines.
      for (rowIndex = 0; rowIndex < maxRows; rowIndex++) {
        let row = [];
        for(columnIndex = 0; columnIndex < chunkOfSkills.length; columnIndex++){
            let items = chunkOfSkills[columnIndex].items
            if(items.length>rowIndex){
                //Add the skill name
                row.push(items[rowIndex].name);
            }else{
               // This skill doesn't have this many rows
               row.push("");
            }
        }
        //Combine the row with the & deliminator for columns
        text += row.join(" & ")+" \\\\\n";
      }
      text += "\\end{tabular}\n"
      text += "\\end{table}\n"
      text += "\\smallskip\n"

    })
    //Since this isn't js
    return new Handlebars.SafeString(text);
  });
}

/*
\begin{tabular}{llllll}
\textbf{Languages}     & \textbf{Frameworks}    & \textbf{Databases}   & \textbf{Build Systems} & \textbf{Testing Systems} & \textbf{Other Syntaxes }\\
\hline
Java          & Grails         & PostgreSQL  & Maven         & JUnit           & HTML  \\
Groovy        & EmberJS        & Oracle      & Ant           & Mokito          & CSS  \\
Ruby          & NodeJS         & SQL Server  & Ivy           & Jenkins         & Markdown  \\
JavaScript    & Sinatra        & Redis       & Grunt         & Jasmine         & LESS  \\
CoffeeScript  & Ruby on Rails  & MySQL       & Rake          & CircleCI        & SCSS  \\
Bash          &                & MongoDB     & NPM           & Travis          & XML  \\
MATLAB        &                &             & Gradle        &                 & JSON  \\
C             &                &             &               &                 & \LaTeX  \\
SQL           &                &             &               &                 &   \\
\end{tabular}

\bigskip

\begin{tabular}{llllll}
\textbf{Deployment Servers}  & \textbf{Operating Systems}   & \textbf{Protocols}   & \textbf{Version Control} & \textbf{Design Concepts} &  \\
\hline
Tomcat              & OS X                & REST        & Git             & MVC             &  \\
httpd               & Linux               & SOAP        & Subversion      & IoC             &  \\
Google Cloud        & Windows             & SSL         &                 & SOA             &  \\
Heroku              &                     &             &                 & Agile           &  \\
                    &                     &             &                 & Scrum           &  \\
\end{tabular}
\smallskip
*/
