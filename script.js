$(function() {

    // event listener for a elements
    $('#links').on('click', 'a', function(e) {
        
        if ($('#image')) {
            $('#image').fadeOut();
            $('#image').remove();
        }
        
        e.preventDefault();
        console.log('Miniature clicked');
        
        $href = $(this).attr('href');


        console.log('href link :' + $href);
        $imgElement = '<img id="image" src="./images/' + $href + '.png"/>';

        $('#photo-container').append($imgElement).hide().fadeIn();
        
    });
});