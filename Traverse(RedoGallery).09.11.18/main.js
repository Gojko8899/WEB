(function () {

    $('.selected')
        .removeClass('selected')
        .parent()
        .next()
        .children()
        .eq(1)
        .addClass('selected')

})();
