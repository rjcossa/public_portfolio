var data;
$.getJSON("js/json/projects.json", function(json) {
    data = json;
    $.get("templates/project.hbs", function(templateData) {
        var template = Handlebars.compile(templateData);
        data.forEach(function(entry) {
            $('#project-placeholder').append(template(entry)).fadeIn();
        });
    });


});

function getProject(id) {
    for(var i in data) {
        if(data.hasOwnProperty(i)) {
            if (data[i].id === id) {
                return data[i];
            }
        }
    }
}

function openModal(id) {
    var project = getProject(id);
    $("#project-text").html(project.description);
    $("#project-image").attr("src",project.imagePath);
    $(".modal-title").text(project.name);
    $("#project-modal").modal()
}