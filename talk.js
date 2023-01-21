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
        modal('憨憨，即便是茫茫人海，千里之外', A);
    });
});

function A() {
    modal('但我们依旧超越了时空和人海而相识相知！', B);
}

function B() {
    modal('从开始的兄弟相称，到后来的憨憨！', C);
}

function C() {
    modal('每一字，每一个表情，每一声都在波动着我的心弦！', D);
}

function D() {
    modal('佛说：要与一个人相遇，前世至少回眸五百', E);
}

function E() {
    modal('而与你相遇，我已用尽了前生的运气！', F);
}

function F() {
    modal('过去的一年，跟你待的每一分每一秒每一刻，我都很开心！', G);
}

function G() {
    modal('新年已至，在此祝福我们彼此珍惜、真诚相待、携手共进！', H);
}

function H() {
    modal('金虎辞旧，玉兔迎新，在平安喜乐的日子里，祝你我诸事皆顺，开心快乐！', I);
}

function I() {
    modal('关关雎鸠，在河之洲；窈窕淑女，君子好逑；辗转反侧，寤寐求之！', J)
}

function J() {
    modal('漫漫人生路，趁此佳节，送你一片烟花，希望不要嫌弃！', function() {
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
