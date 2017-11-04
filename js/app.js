var data;
/* Get the project information in JSON Format */
$.getJSON("js/json/projects.json", function(json) {
    data = json;
    $.get("templates/project.hbs", function(templateData) {
        var template = Handlebars.compile(templateData);
        data.forEach(function(entry) {
            $('#project-placeholder').append(template(entry)).fadeIn();
        });
    });


});
/* Get a specific project by specifying the project's id */
function getProject(id) {
    for(var i in data) {
        if(data.hasOwnProperty(i)) {
            if (data[i].id === id) {
                return data[i];
            }
        }
    }
}
/*
Open the modal dialog with a specific project's information.
The input is the project's id
 */
function openModal(id) {
    var project = getProject(id);
    $("#project-text").html(project.description);
    $("#project-image").attr("src",project.imagePath);
    $(".modal-title").text(project.name);
    $("#project-modal").modal()
}