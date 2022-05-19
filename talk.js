$(function() {
    $('#yes').click(function(event) {
        modal('好的呀，余生请多指教呀！这是我们的第一个520，就送你一片烟花吧！(^_^)', function() {
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
    modal('相隔千里，也不能阻止我们的相遇相知相爱！', C);
}

function C() {
    modal('佛说前世五百次的回眸才能换来今生的相遇', D);
}

function D() {
    modal('为了今生的相遇，我在佛前求了五百年', E);
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
    modal('这是来自千里之外的彬先生此时此刻想说的话！', J)
}

function J() {
    modal('这也是我们的第一个520，就送你一片烟花吧！', function() {
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
        '<button type="button" id="confirm" class="confirm">我想说</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
