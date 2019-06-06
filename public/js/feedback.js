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
    });

    function displayData(feedbackArray) {
        var html = "";
    
        $.each(feedbackArray, (key, feedbackObj) => {
            html += `<div class="border border-secondary p-2 mb-2">`;
            html += `<div class="d-flex d-inline-flex">`;
            html += `<p class="mr-4"><b>Name: </b>${feedbackObj.name}</p>`;
            html += `<p><b>Email: </b> ${feedbackObj.email}</p>`;
            html += `</div>`;
            html += `<div class="d-flex flex-column">`;
            html += `<p class="flex-column"><b>Comments<br></b> ${feedbackObj.comment}</p>`;
            html += `</div>`;
            html += `</div>`;
        });
    
        $('#feedback').html(html);
    }
});


