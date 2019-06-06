$(function() {

    
    $.getJSON('feedback')
    $('form').submit((e) =>{
        e.preventDefault();

        $.post('api',
        {
            name: $('#name').val(),
            email: $('#email').val(),
            comment: $('#comment').val()
        }, displayData);
    });
});


function displayData(feedbackArray) {
    let html = "";

    $.each(feedbackArray, (key, feedbackObj) => {
        html += `<div class="border border-secondary">`
        html += `<p><b>Name:</b> ${feedbackObj.name}</p>`;
        html += `<p><b>Email:</b> ${feedbackObj.email}</p>`;
        html += `<p><b>Comments:</b> ${feedbackObj.comment}</p>`;
        html += `</div>`
    });

    $('#feedback').html(html);
}