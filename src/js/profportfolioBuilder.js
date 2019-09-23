// The aim of this files is to format the JSON into html


let HTMLprojectStart = '<article id="project-%index%" class="row %data%"> <div class="col-xs-12 col-sm-8" id="textblock-%index%"></div></article>';
let HTMLprojectName = '<h3>%data%</h3>';
let HTMLprojectCompany = '<div><p>A project at <a href="%data%" target="_blank"><b>%data%</b></a>, a company of <a href="%data%" target="_blank"><b>%data%</b></a>, managed as <b>%data%</b></p></div>';
let HTMLprojectDescription = '<div class="projectdescription"><p><b>Project description:</b></b></p><p>%data%</p></div>';
let HTMLprojectDates = '<div class="date-text">%data%</div>';
let HTMLprojectLocation = '<div class="location-text">%data%</div><br>';
let HTMLprojectProblems = '<div class="col-xs-12"><b>Key challenges:</b> <ul>%data%</ul></div>';
let HTMLprojectSolutions = '<div class="col-xs-12"><b>Key solutions:</b> <ul>%data%</ul></div>';
let HTMLprojectOutput = '<div class="col-xs-12"><b>Output</b><p>%data%</p></div>';
let HTMLprojectLesson = '<div class="col-xs-12 "><b>Key learning:</b> <ul>%data%</ul></div>';
let HTMLprojectImage = '<div class="col-sm-4 mobile_display media"><picture> <source media srcst="images/%data%-400_1x.jpg 1x, images/%data%-400_2x 2x"><img class="img-responsive" src="images/%data%-400_1x.jpg" alt="%alt%"></picture></div>';
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
};
/** Build up the elements
 *
 */
let buildPage = function(tag) {
    $.getJSON("data/input.json", function (json) {
        let projects = json.projects;
        let index = 1;
        let builder = new projectBuilder();

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

// Builders
/** display
 *
 * builds the data
 *
 * @param _selector
 */
/*
function display(_selector) {

    var data = '%data%';
    var index = 1

    projects.addButton(_selector);

    // An if selector will be needed later


    projects.projects.forEach(function(project) {
        if (projects.selection(_selector, project)) {
            // format the var

            var formatedprojectStart = HTMLprojectStart.replace('%index%', index);
            var formatedprojectText = HTMLprojectText.replace('%index%', index);

            var formatedprojectName = HTMLprojectName.replace(data, project.name);
            var formatedprojectPosition = HTMLprojectPosition.replace(data, project.position);
            var formatedprojectCompany = HTMLprojectCompany.replace(data, project.companyUrl);
            formatedprojectCompany = formatedprojectCompany.replace(data, project.company);
            formatedprojectCompany = formatedprojectCompany.replace(data, project.groupUrl);
            formatedprojectCompany = formatedprojectCompany.replace(data, project.group);
            formatedprojectCompany = formatedprojectCompany + formatedprojectPosition;
            var formatedprojectDates = HTMLprojectDates.replace(data, project.dates);
            var formatedprojectLocation = HTMLprojectLocation.replace(data, project.location);
            var formatedprojectDescription = HTMLprojectDescription.replace(data, project.description);
            var formatedprojectProblems = HTMLprojectProblems.replace(data, project.keyProblems);
            var formatedprojectSolutions = HTMLprojectSolutions.replace(data, project.keySolutions);
            var formatedprojectOutput = HTMLprojectOutput.replace(data, project.output);
            var formatedprojectLesson = HTMLprojectLesson.replace(data, project.lesson);

            var formatedprojectMedia = HTMLprojectImage.replace(/%data%/g, project.image);
            formatedprojectMedia = formatedprojectMedia.replace('%alt%', project.alt);

            if (project.video !== '#') {
                formatedprojectMedia = HTMLprojectVideo.replace(data, project.video);
                formatedprojectMedia = formatedprojectMedia.replace('%alt%', project.alt);
            }

            // add the elements to the website

            if ((index % 2) !== 0) {
                formatedprojectStart = formatedprojectStart.replace(data, "article-ir");
                $('#project_section').append(formatedprojectStart);

                var target = $('#project-' + index);
                target.append(formatedprojectText);
                target.append(formatedprojectMedia);
            } else {
                formatedprojectStart = formatedprojectStart.replace(data, "article-re");
                $('#project_section').append(formatedprojectStart);

                var target = $('#project-' + index);
                target.append(formatedprojectMedia);
                target.append(formatedprojectText);
            };


            //add the text block

            target = $('#textblock-' + index);
            target.append(formatedprojectName);
            target.append(formatedprojectDates);
            target.append(formatedprojectLocation);
            target.append(formatedprojectCompany);
            target.append(formatedprojectDescription);
            target.append(formatedprojectProblems);
            target.append(formatedprojectSolutions);
            target.append(formatedprojectOutput);
            target.append(formatedprojectLesson);

            // increment with index
            index++;

        }

    });
}

// sub functions

projects.selection = function(_selector, element) {
    var _result = false;

    element.tag.forEach(function(t) {
        if (t === _selector) {
            _result = true;

            return _result;
        }
    });

    return _result;
}

projects.addButton = function(_selector) {
    $('#buttonCaption').remove()
    var newButton = oldButton.replace('%data%', _selector);
    $(newButton).insertAfter($('.btn-group'));
}

// Run the builder

projects.display('top');


// Run the selector

function selector(_input) {
    $('#project_section').children().remove();
    projects.display(_input);
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
*/
