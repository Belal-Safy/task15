let productQuantity = 0;
$(document).ready(function() {
    $('.cart-btn').click(function() {
        $('.cart-card').slideToggle();
    });

    $('.small-img-container').click(function() {
        setTimeout(() => {
            $('.small-img-container').removeClass('small-img-active');
            let url = $(":first-child", this).attr('src');
            $(`.small-img[src="${url}"]`).parent().addClass('small-img-active');
            $('.big-img1').attr('src', url);
        }, 50);

    });

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').animate({
            left: "0px"
        }, 100);
    });

    $('.close-btn').click(function() {
        $('.navbar-collapse').animate({
            left: "-315px"
        }, 100);
    });

    $('.nxt').click(function() {
        fun();
    });

    $('#carouselExampleControls').on('slide.bs.carousel', function() {
        fun();
    });

    $('.prev').click(function() {
        setTimeout(() => {
            let url = $(":first-child", $('.carousel-item-prev')).attr('src');
            $('.small-img-container').removeClass('small-img-active');
            $(`.small-img[src="${url}"]`).parent().addClass('small-img-active');
            $('.big-img1').attr('src', url);
        }, 50);
    });

    $('.close-btn2').click(function() {
        $('.modal').modal('hide')
    });

    $('.add-btn').click(function() {
        updateCart();
    });

    $('.delete-btn').click(function() {
        productQuantity = 0;
        isEmpty();
    });
});

function fun() {
    setTimeout(() => {
        let url = $(":first-child", $('.carousel-item-next')).attr('src');
        $('.small-img-container').removeClass('small-img-active');
        $(`.small-img[src="${url}"]`).parent().addClass('small-img-active');
        $('.big-img1').attr('src', url);
    }, 50);
}

function updateCart() {
    const quantity = $('input').val();
    $('.cart-badge').text(quantity);
    productQuantity = quantity;
    $('.quantity').text(quantity);
    const total = 125 * quantity;
    $('.total').text(total);
    isEmpty();
}

function isEmpty() {
    if (productQuantity <= 0) {
        $('.cart-badge').text(0);
        $('.good-cart').addClass('d-none2');
        $('.empty-cart').removeClass('d-none2');
    } else {
        $('.good-cart').removeClass('d-none2');
        $('.empty-cart').addClass('d-none2');
    }
}
