
$('.dropdownsearch').on('keyup', function () {
    var value = $(this).val();
    var $parent = $(this).closest('.custom-dropdown-select');
    var results = 0;
    $('ul li:not(.searchInput):not(.noresults)', $parent).each(function (index) {
        $(this).hide();
        if ($(this).is(':contains("' + value + '")')) {
            $(this).show();
            results = 1;
        }
    });
    if (results == 0) {
        if (!$('.noresults', $parent).length) {
            $('ul', $parent).append('<li class="noresults">No results found</li>');
        }
    } else {
        $('.noresults', $parent).remove();
    }
});

$('.custom-dropdown-select .custom-select-btn').on('click', function () {
    $('.custom-dropdown-select ul').hide();
    $(this).siblings('ul').show();
    $(this).siblings('ul').children('.searchInput').children('input').focus();
})

$('.custom-dropdown-select ul li:not(.searchInput)').on('click', function () {
    var line_text = $(this).text();
    $(this).parent('ul').siblings('.custom-select-btn').text(line_text);
    $(this).parent('ul').hide();
    $(this).sibling('.searchInput').child('.dropdownsearch').val('');
});

$('.custom-select-btn, body').on('click', function (e) {
    e.preventDefault();
    if ($(e.target).parents('.custom-dropdown-select').length == 0 && $(e.target).siblings('.custom-dropdown-select').length == 0 && $(e.target).children('.dropdown').length == 0) {
        $('.custom-dropdown-select ul').hide();
        $('.dropdownsearch').val('').keyup();
    }
});

