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
            html += `<div class="border border-secondary p-2 mb-2">`
            html += `<p><b>Name<br></b> ${feedbackObj.name}</p>`;
            html += `<p><b>Email<br></b> ${feedbackObj.email}</p>`;
            html += `<p><b>Comments<br></b> ${feedbackObj.comment}</p>`;
            html += `</div>`
        });
    
        $('#feedback').html(html);
    }
});


