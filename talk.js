$(function() {
    $('#yes').click(function(event) {
        modal('好的呀，余生请多指教呀！这是我以你之名送你的烟花(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('在这茫茫人海，相隔千里', A);
    });
});

function A() {
    modal('我们超越了时空和人海！', B);
}

function B() {
    modal('相隔千里，也不能阻止我们的相遇相知！', C);
}

function C() {
    modal('佛说：前世五百次的回眸才能换来今生的相遇', D);
}

function D() {
    modal('我说：为了今生的相遇，我在佛前求了五百年', E);
}

function E() {
    modal('为了与你相遇相知相爱，我用尽了前世的运气！', F);
}

function F() {
    modal('感谢余生有你相伴，从此心有了安处！', G);
}

function G() {
    modal('我会做饭，会带你去所有你想去的地方，', H);
}

function H() {
    modal('陪你哭陪你笑陪你度过余生！', I);
}

function I() {
    modal('这是我们的第一个520，送你一片烟花吧！', J)
}

function J() {
    modal('以你之名，送你一片星辰大海和烟花！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">收到幸福</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
