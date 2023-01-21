$(function() {
    $('#yes').click(function(event) {
        modal('憨憨，这是我们认识到现在过的第一个年，就送你一片烟花吧！(^_^)', function() {
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
    modal('相隔千里，也不能阻止我们相识相知！', C);
}

function C() {
    modal('佛说前世五百次的回眸才能换来今生的相遇', D);
}

function D() {
    modal('而我为了今生的相遇，在佛前求了五百年', E);
}

function E() {
    modal('与你相遇，我用尽了前世的运气！', F);
}

function F() {
    modal('感谢有你相伴，心也有了安处！', G);
}

function G() {
    modal('金虎辞旧，玉兔迎新，在平安的日子里，祝我们诸事皆顺，锦上添花', H);
}

function H() {
    modal('陪你哭陪你笑陪你一起走！', I);
}

function I() {
    modal('这是来自千里之外的彬先生此时此刻想说的话！', J)
}

function J() {
    modal('漫漫人生路，我想和你一起走，送你一片烟花，希望不要嫌弃', function() {
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
