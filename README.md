Professional Portfolio
====
A project designed by Guillaume Simler. It was started in Feb 2016 and its aim is to give an overview of my professional project portfolio. This is especially important as my whole business career is unconventional: I work more on a project-basis than on classical jobs. I was not independant but worked mostly on the fridges of the corporations, taking care of their "bad boys" 

----
Page organization & files
----
The main page is not hard coded. The page setup is driven by javascript. 
* The main files are
  - profportfolio.html : the main page
  - profportfolioBuilder.js : the file containing the JSON and the related programs to build the website
  - profportfolioHelper.js : this file helps to format the JSON into HTML
  - profportfolio.css : the css file
  - temp.html: this file is the helper of the helper
* The additional API, libraries or frameworks are used:
  - Bootstrap (loaded via maxCDN): responsive grid system, design, dropdown menu 
  - picturefill (loaded by files): add <picture> elements for Safari (iOS, OS), help its responsiveness
  - jQUERY (loaded via google CDN): allow the use of this DOM modifying framework  

----
Future developments
----
Currently the file is generated by a JSON. In future a database might be more suitable

----
Latest Update
----
- Feb 21, 2016: debug the functionality, improve layout and extent content
- Feb 20, 2016: build the functionality of the page (JS), structured the grid (bootstrap) and insert first css elements
- Feb 19, 2016: add DOM structure, add JSON structure
- Feb 18, 2016: Files setup 



----
Description of the JSON "projects"

* projects (main object)
* tag (array of strings): the tag will be used a project selector. 5 selectors will be allowed. 
  - "top" for the top projects to be loaded as default
  - "management" for management relevant projects
  - "finance" for finance projects
  - "innovation"
  - "sales"
* "name" (string): the name of the project
* "company" (string): the name of the legal entity
* "companyUrl" (string): a link to the company's website if available (else #)
* "group" (string): the name of its mother company
* "groupUrl" (string): a link to the group's website if available (else #)
* "position" (string): my position
* "dates" (string - format MM/YYYY - MM/YYYY): the period of time spend there
* "location" (string, place (country) ): the main place of the project 
* "description" (variable, a string): a brief description of the problem
* "keyProblems" (variable - list in string): the top 3 problems
* "keySolutions" (variable-list in string): the top 3 solutions
* "output" (variable - string, partially a list): the results
* "lesson" (variable - string, partially a list): the key learnings
* "image": "a link to a media if available",
* "video": "link to a media if available"
* "alt" (string): the alternative text to the media data 
