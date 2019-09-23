// The aim of this files is to format the JSON into html


let HTMLprojectStart = '<article id="project-%index%" class="row %data%">';
let HTMLprojectHeader =   '<div class="col-xs-12 col-sm-8" id="textblock-%index%"></div></article>';
let HTMLprojectName = '<h3>%data%</h3>';
let HTMLprojectCompany = '<div><p>A project at <a href="%data%" target="_blank"><b>%data%</b></a>, a company of <a href="%data%" target="_blank"><b>%data%</b></a>, managed as <b>%data%</b></p></div>';
let HTMLprojectDescription = '<div class="projectdescription"><p><b>Project description:</b></b></p><p>%data%</p></div>';
let HTMLprojectDates = '<div class="date-text">%data%</div>';
let HTMLprojectLocation = '<div class="location-text">%data%</div><br>';
let HTMLprojectProblems = '<div class="col-xs-12"><b>Key challenges:</b> <ul>%data%</ul></div>';
let HTMLprojectSolutions = '<div class="col-xs-12"><b>Key solutions:</b> <ul>%data%</ul></div>';
let HTMLprojectOutput = '<div class="col-xs-12"><b>Output</b><p>%data%</p></div>';
let HTMLprojectLesson = '<div class="col-xs-12 "><b>Key learning:</b> <ul>%data%</ul></div>';
let HTMLprojectImage = '<div class="col-sm-4 mobile_display media"><picture> <source media srcst="images/%data%-400_1x.jpg 1x, images/%data%-400_2x 2x"><img class="img-fluid" src="images/%data%-400_1x.jpg" alt="%alt%"></picture></div>';
let HTMLprojectVideo = '<div class="col-sm-4 mobiledisplay embed-responsive embed-responsive-16by9 video"><iframe class="embed-responsive-item video media" src="%data%" alt="%alt%"></iframe></div>';

const startTag = $("#project_section");

/** function projectBuilder
 *
 * The projectBuilder object/class for the project
 */
let projectBuilder = function () {
    let self = this;

    /** @function displayProject
     *
     * builds the section comprising the articles
     *
     * @param project
     * @param index
     * @return {*}
     */
    this.displayProject = function (project, index) {

        self.buildProjectStart(index);

        let articleContent = self.buildProjectContent(project);
        let sectionTag = $("#project-"+ index);
        let textSection = HTMLprojectHeader.replace("%index%", index);
        let mediumSection = self.getProjectMedium(project);

        if (index % 2 === 0) {
            $("#project-" + index).addClass("article-ir");
            sectionTag.append(textSection);
            sectionTag.append(mediumSection);
        } else {
            $("#project-" + index).addClass("article-re");
            sectionTag.append(mediumSection);
            sectionTag.append(textSection);
        }
        let domTarget = $("#textblock-" + index);
        domTarget.append(articleContent);

        index = index + 1;
        return index;
    };

    /** function buildProjectStart
     *
     *  tag/section for every new elements
     *
     *  @param index
     */
    this.buildProjectStart = function (index) {
        let formatedProjectStart = HTMLprojectStart;

        formatedProjectStart = formatedProjectStart.replace(/%index%/g, index);
        startTag.append(formatedProjectStart);
    };

    /** @function buildProjectContent
     *
     * composes and inserts the template element
     *
     * @param project
     * @return {string}
     */
    this.buildProjectContent = function (project) {

        let content = self.fillInput(HTMLprojectName, [project.name]);
        content += self.fillInput(HTMLprojectDates, [project.dates]);
        content += self.fillInput(HTMLprojectLocation, [project.location]);
        content += self.fillInput(HTMLprojectCompany, [project.companyUrl,
            project.company,
            project.groupURL,
            project.group,
            project.position]);
        content += self.fillInput(HTMLprojectDescription, [project.description]);
        content += self.fillList("Key Challenges", project.keyProblems);
        content += self.fillList("Key solutions", project.keySolutions);
        content += self.fillInput(HTMLprojectOutput, [project.output]);
        content += self.fillList("Key Learnings", project.lesson);
        return content;
    };

    /** @function fillInput
     *
     * inserts the content in the template
     * @param input_string {string} part of the template to be modified
     * @param replace_list {list} elements to be filled
     * @return {string} the modified input_string
     */
    this.fillInput = function (input_string, replace_list) {
        replace_list.forEach(function (el) {
            input_string = input_string.replace("%data%", el);
        });

        return input_string;
    };

    /** @function fillList
     *
     * builds the part of the template using lists
     *
     * @param header {string} the title of the lists
     * @param input_list {list} the list to be filled in
     * @return {string}
     */
    this.fillList = function(header, input_list) {
        let output = "<b>" + header + ":</b><ul>";

        input_list.forEach(function (el) {
            output += "<li>" + el + "</li>";
        });

        output += "</ul>";
        return output;
    };

    this.getProjectMedium = function(project) {
        let output;
        if (project.image === "#") {
            output = self.fillInput(HTMLprojectVideo, [
                project.video,
                project.alt,
                project.video,
                project.alt]);
        } else {
            output = self.fillInput(HTMLprojectImage, [
                project.image,
                project.alt,
                project.image,
                project.alt]);
        }

        return output;
    };
};
/** Build up the elements
 *
 */
let buildPage = function(tag) {
    $.getJSON("data/input.json", function (json) {
        let projects = json.projects;
        let index = 1;
        let builder = new projectBuilder();
        $("#project-type").text(tag);

        projects.forEach(function (project) {

            if (tag == project.tag[0] || tag == project.tag[1] || tag == project.tag[2]) {
                index = builder.displayProject(project, index);
            }
        });
    });
};

buildPage("top");


/** Selection process
 *
 * @param _input
 */
function selector(_input) {
    $('#project_section').children().remove();
    buildPage(_input);
};

$('#button-finance').on('click', function() {
    selector('finance');
});

$('#button-management').on('click', function() {
    selector('management');
});


$('#button-sales').on('click', function() {
    selector('sales');
});

$('#button-innovation').on('click', function() {
    selector('innovation');
});