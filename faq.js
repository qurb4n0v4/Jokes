$(document).ready(function() {
    $('span').hide();
    $('.fa-regular').hide()
    $('.fa-solid').click(function() {
        $(this).closest('.h5').find('span').show();
        $(this).closest('.h5').find('.fa-solid').hide();
        $(this).closest('.h5').find('.fa-regular').show();
        $(this).closest('.h5').css('background-color', 'white');
        $(this).closest('.h5').css('box-shadow', '0px 2px grey');
    });
    $('.fa-regular').click(function() {
        $(this).closest('.h5').find('span').hide();
        $(this).closest('.h5').find('.fa-regular').hide();
        $(this).closest('.h5').find('.fa-solid').show();
        $(this).closest('.h5').css('background-color', 'transparent');
        $(this).closest('.h5').css('box-shadow', 'none');
    })
});