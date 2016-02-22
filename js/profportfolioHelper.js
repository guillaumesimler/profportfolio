// The aim of this files is to format the JSON into html


var HTMLprojectStart = '<article  id="project-%index%" class="row %data%"></article>';
var HTMLprojectText= '<div class="col-xs-12 col-sm-8" id="textblock-%index%"></div>'
var HTMLprojectName = '<h3>%data%</h3>';
var HTMLprojectCompany = '<div><p>A project at <a href="%data%" target="_blank"><b>%data%</b></a>, a company of <a href="%data%" target="_blank"><b>%data%</b></a>';
var HTMLprojectPosition =', managed as <b>%data%</b></p></div>';
var HTMLprojectDescription ='<div class="projectdescription"><p><b>Project description:</b></b></p><p>%data%</p></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectLocation = '<div class="location-text">%data%</div><br>';
var HTMLprojectProblems = '<div class="col-xs-12"><b>Key challenges:</b> <ul>%data%</ul></div>';
var HTMLprojectSolutions = '<div class="col-xs-12"><b>Key solutions:</b> <ul>%data%</ul></div>';
var HTMLprojectOutput = '<div class="col-xs-12"><b>Output</b><p>%data%</p></div>';
var HTMLprojectLesson = '<div class="col-xs-12 "><b>Key learnings:</b> <ul>%data%</ul></div>';
var HTMLprojectImage = '<div class="col-sm-4 mobile_display media"><picture> <source media srcst="images/%data%-400_1x.jpg 1x, images/%data%-400_2x 2x"><img class="img-responsive" src="images/%data%-400_1x.jpg" alt="%alt%"></picture></div>';

var HTMLprojectVideo = '<div class="col-sm-4 mobiledisplay embed-responsive embed-responsive-16by9 video"><iframe class="embed-responsive-item video media" src="%data%" alt="%alt%"></iframe></div>';