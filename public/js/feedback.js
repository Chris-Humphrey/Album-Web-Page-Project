$(function() {

    $.getJSON('api', displayData)

    $('form').submit((e) =>{
        e.preventDefault();

        $.post('api',
        {
            name: $('#name').val(),
            email: $('#email').val(),
            comment: $('#comment').val()
        }, displayData);
        $('#name').val('');
        $('#email').val('');
        $('#comment').val('');
    });

    function displayData(feedbackArray) {
        let html = "";
    
        $.each(feedbackArray, (key, feedbackObj) => {
            html += `<div class="border border-secondary p-2 mb-2">`;
            html += `<div class="d-flex d-inline-flex">`;
            html += `<p class="mr-4"><b>Name: </b>${feedbackObj.name}</p>`;
            html += `<p><b>Email: </b> ${feedbackObj.email}</p>`;
            html += `</div>`;
            html += `<div class="d-flex flex-column">`;
            html += `<div class="flex-column"><b>Comments<br></b><p class="border border-secondary"> ${feedbackObj.comment}</p></div>`;
            html += `</div>`;
            // html += `<div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>`;
            html += `<div><button class="btn btn-xs btn-danger"><i class="far fa-trash-alt"></i><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>`;
            html += `</div>`;
        });
    
        $('#feedback').html(html);
    }
});


