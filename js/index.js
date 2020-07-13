var html = document.getElementsByTagName('html')[0];
var box = document.getElementById('box');
var main = document.getElementsByClassName('main')[0];
var pageUl = document.getElementsByClassName('page-ul')[0];
var rotate = document.getElementById('rotate');
var audio = document.getElementsByTagName('audio')[0];
var titleCan = document.getElementById('title-can');
var titleCan2 = document.getElementById('title-can2');
var titleCan3 = document.getElementById('title-can3');
var titleCan4 = document.getElementById('title-can4');
var titleCan5 = document.getElementById('title-can5');
var mask = document.getElementById('mask');
var vBox = document.getElementsByClassName('vBox')[0];
var canC = document.getElementById('canC');
var end = document.getElementsByClassName('end')[0];
var kaishi = document.getElementsByClassName('kaishi')[0];
var cartoon = document.getElementById('cartoon');
var n = 0;
var iconTimer = null;
var endTimer = null;
var animationT = null;
var Y = 0;
var x = 0;
var xx = true;
var ang;
var startX;
var endX;
var initPlay = true;
var ddc = document.documentElement.clientWidth;
html.style.fontSize = ddc / 10 + 'px';

// 媒体查询屏幕宽度
var baseInfoUl = document.getElementsByClassName('baseInfo-ul')[0];
var pingjiaContent = document.getElementsByClassName('pingjia-content')[0];
var jingliC = document.getElementsByClassName('jingli-container')[0];
var nengliC = document.getElementsByClassName('nengli-container')[0];
var nengliL = document.getElementsByClassName('nengli-line')[0];
const mql = window.matchMedia('(max-width:320px)');

function addClass() {
    var srr = [...arguments];
    for (var i = 0; i < srr.length; i++) {
        srr[i].classList.add('mediaScale');
    }
}
if (mql.matches) {
    addClass(baseInfoUl, pingjiaContent, jingliC, nengliC);
    baseInfoUl.style.position = 'absolute';
    baseInfoUl.style.top = '-13px';
    baseInfoUl.style.left = '60px';
    pingjiaContent.style.position = 'absolute';
    pingjiaContent.style.top = '-5px';
    pingjiaContent.style.left = '-5px';
    nengliL.style.height = '300px';
    nengliC.style.position = 'absolute';
    nengliC.style.top = '60px';

};
window.onload = function() {
        audio.load();
        var can = canC.getContext('2d');
        can.strokeStyle = 'rgb(163, 247, 7)';
        can.lineWidth = 3;
        can.lineCap = 'round';
        can.globalAlpha = .5;
        var t = setInterval(() => {
            x++;
            console.log(x);
            if (xx) {
                ang = Math.PI / 180 * (270 + x);
                if (x == 90) {
                    x = 0;
                    xx = false;
                }
            } else {
                ang = Math.PI / 180 * x;
                if (x == 270) {
                    kaishi.style.opacity = 1;
                    kaishi.addEventListener('click', () => {
                        mask.style.display = 'none';
                        audio.play();
                        p1rem();
                        console.log(123);
                        iconTimer = setInterval(rotateFunc, 100);
                        setTimeout(() => {
                            p1add();
                            cartoon.innerHTML = '<div class="renwu1"></div>';
                        }, 100);
                        // var wx = window.navigator.userAgent.toLowerCase();
                        // console.log(wx, wx.match(/MicroMessenger/i));
                        // if (!(wx.match(/MicroMessenger/i) == 'micromessenger')) {
                        //     setTimeout(() => {
                        //         audio.play();
                        //     }, 500)
                        // }
                    })
                    clearInterval(t);
                }
            };
            can.beginPath();
            can.arc(35, 35, 30, Math.PI / 2 * 3, ang, false);
            can.stroke();
            can.closePath();
            can.clearRect(0, 0, can.width, can.height);
        }, 20);
        // can.arc(35, 35, 30, Math.PI / 2 * 3, Math.PI / 2, false);
        // can.stroke();
    }
    // document.addEventListener('WeixinJSBridgeReady', function() {
    //     audio.play();
    //     initPlay = false;
    //     end.style.color = 'red';
    //     iconTimer = setInterval(rotateFunc, 100);
    // }, false);



box.addEventListener('touchstart', function(e) {
    e.preventDefault();
    startY = e.touches[0].pageY;
    // if (initPlay == true) {
    //     audio.play();
    //     iconTimer = setInterval(rotateFunc, 100);
    //     initPlay = false;
    // }
});

box.addEventListener('touchend', function(e) {
    e.preventDefault();
    endY = e.changedTouches[0].pageY;
    var y = startY - endY;
    if (y > 1) {
        if (Y == 4) {
            end.style.opacity = 1;
            endTimer = setTimeout(endFunc, 1000)
            return;
        };
        Y += 1;
        mainY = -Y * 13.84;
        main.style.top = mainY + 'rem';
    } else if (y <= -1) {
        if (Y <= 0) return;
        if (Y == 4) {
            end.style.opacity = 0;
        }
        Y -= 1;
        mainY = -Y * 13.84;
        main.style.top = mainY + 'rem';
    }
    switch (Y) {
        case 0:
            clearTimeout(animationT);
            animationT = setTimeout(function() {
                p2rem();
                p1add();
                cartoon.innerHTML = '<div class="renwu1"></div>';
            }, 500)
            break;
        case 1:
            clearTimeout(animationT);
            animationT = setTimeout(function() {
                p1rem();
                p3rem();
                p2add();
                cartoon.innerHTML = '<div class="renwu2"></div>';
            }, 500)
            break;
        case 2:
            clearTimeout(animationT);
            animationT = setTimeout(function() {
                p2rem();
                p5rem();
                p3add();
                cartoon.innerHTML = '<div class="renwu3"></div>';
            }, 500);
            break;
        case 3:
            clearTimeout(animationT);
            animationT = setTimeout(function() {
                p3rem();
                p4rem();
                p5add();
                cartoon.innerHTML = '<div class="renwu4"></div>';
            }, 500);
            break;
        case 4:
            clearTimeout(animationT);
            animationT = setTimeout(function() {
                p5rem();
                p4add();
                cartoon.innerHTML = '<div class="renwu1"></div><div class="renwu2"></div><div class="renwu3"></div><div class="renwu4"></div>'
            }, 500);
            break;
    }
})

rotate.addEventListener('click', function() {
    clearInterval(iconTimer);
    if (audio.paused) {
        audio.play();
        iconTimer = setInterval(rotateFunc, 100)
    } else {
        audio.pause();
        initPlay = false;
        clearInterval(iconTimer);
    }
})
var rotateFunc = function() {
    n += 5;
    rotate.style.transform = 'rotate(' + n + 'deg)';
    // if (n >= 360) {
    //     n = -5;
    // }
}

var endFunc = function() {
    end.style.opacity = 0;
}

// setTimeout(function() {
//     audio.play();
//     iconTimer = setInterval(rotateFunc, 100);
// }, 50)

// iconTimer = setInterval(rotateFunc, 100);

const c1 = titleCan.getContext('2d');
c1.fillStyle = 'rgb(255,255,255)';
c1.fillRect(0, 0, 300, 250);

const c2 = titleCan2.getContext('2d');
c2.fillStyle = 'rgb(255,255,255)';
c2.fillRect(0, 0, 115, 29);

const c3 = titleCan3.getContext('2d');
c3.fillStyle = 'rgb(255,255,255)';
c3.fillRect(0, 0, 115, 29);

const c4 = titleCan4.getContext('2d');
c4.fillStyle = 'rgb(255,255,255)';
c4.fillRect(0, 0, 115, 29);

const c5 = titleCan5.getContext('2d');
c5.fillStyle = 'rgb(255,255,255)';
c5.fillRect(0, 0, 115, 29);

console.log('width:', window.outerWidth);
console.log('height:', window.outerHeight);

mask.style.height = window.outerHeight + 'px';
cartoon.ontouchstart = (e) => {
    e.preventDefault()
}
mask.ontouchmove = (e) => {
    e.preventDefault();
};