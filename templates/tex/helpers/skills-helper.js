var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('skills', function(skills, options) {
    //Since this would be a giant pain to do in latex because of the way columns
    //are formatted, going to just create the text in javascript and return
    let columnCount = 6;
    let maxRows = _.maxBy(skills, function(s){ return s.items.length }).items.length
    let chunkedSkills = _.chunk(skills, columnCount);

    let text = ""
    _.each(chunkedSkills, function(chunkOfSkills){
      //The skill name
      text += "\\begin{tabular}{"+Array(columnCount+1).join("l")+"}\n";
      text += "\\textbf{"+_.map(chunkOfSkills, "section").join("} & \\textbf{")+"} \\\\\n";
      text += "\\hline\n";
      text += "\\end{tabular}\n"
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
