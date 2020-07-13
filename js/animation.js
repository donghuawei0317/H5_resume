// 第一页
var geren = document.getElementsByClassName('geren')[0];
var jianli = document.getElementsByClassName('jianli')[0];
var _name = document.getElementsByClassName('name')[0];
var job = document.getElementsByClassName('job')[0];
var et = document.getElementsByClassName('english-title')[0];

var p1add = function() {
    geren.classList.add('fromTop01-5');
    jianli.classList.add('fromBottom01-5');
    _name.classList.add('fromRight05-5');
    job.classList.add('fromRight10-5');
    et.classList.add('fromBottom15-5');
}
var p1rem = function() {
        geren.classList.remove('fromTop01-5');
        jianli.classList.remove('fromBottom01-5');
        _name.classList.remove('fromRight05-5');
        job.classList.remove('fromRight10-5');
        et.classList.remove('fromBottom15-5');
    }
    // 第二页
var p2t = document.getElementsByClassName('page_2-title')[0];
var pc = document.getElementsByClassName('photo-can')[0];
var bl = document.getElementsByClassName('baseInfo-li');
var pt = document.getElementsByClassName('pingjia-title')[0];
var pi = document.getElementsByClassName('pingjia-content')[0];

var p2add = function() {
    p2t.classList.add('fromTop01-5');
    pc.classList.add('fromLeft01-5');
    bl[0].classList.add('fromRight05-5');
    bl[1].classList.add('fromRight10-5');
    bl[2].classList.add('fromRight15-5');
    bl[3].classList.add('fromRight20-5');
    bl[4].classList.add('fromRight25-5');
    pt.classList.add('fromLeft25-5');
    pi.classList.add('bottomScale30-5');
}
var p2rem = function() {
    p2t.classList.remove('fromTop01-5');
    pc.classList.remove('fromLeft01-5');
    bl[0].classList.remove('fromRight05-5');
    bl[1].classList.remove('fromRight10-5');
    bl[2].classList.remove('fromRight15-5');
    bl[3].classList.remove('fromRight20-5');
    bl[4].classList.remove('fromRight25-5');
    pt.classList.remove('fromLeft25-5');
    pi.classList.remove('bottomScale30-5');
}
p2rem();
// 第三页
var p3t = document.getElementsByClassName('page_3-title')[0];
var jt = document.getElementsByClassName('jingli-time');
var jc = document.getElementsByClassName('jc');

var p3add = function() {
    p3t.classList.add('fromTop01-5');
    jt[0].classList.add('fromRight05-5');
    jt[1].classList.add('fromRight10-5');
    jt[2].classList.add('fromRight15-5');
    // jt[3].classList.add('fromRight20-5');
    jc[0].classList.add('_scale05');
    jc[1].classList.add('_scale10');
    jc[2].classList.add('_scale15');
    // jc[3].classList.add('_scale20');
}
var p3rem = function() {
    p3t.classList.remove('fromTop01-5');
    jt[0].classList.remove('fromRight05-5');
    jt[1].classList.remove('fromRight10-5');
    jt[2].classList.remove('fromRight15-5');
    // jt[3].classList.remove('fromRight20-5');
    jc[0].classList.remove('_scale05');
    jc[1].classList.remove('_scale10');
    jc[2].classList.remove('_scale15');
    // jc[3].classList.remove('_scale20');
}
p3rem();
// 第四页
var p4t = document.getElementsByClassName('page_4-title')[0];
var yx = document.getElementsByClassName('yixiang');

var p4add = function() {
    p4t.classList.add('fromTop01-5');
    yx[0].classList.add('rotateScale05');
    yx[1].classList.add('rotateScale10');
    yx[2].classList.add('rotateScale15');
    yx[3].classList.add('rotateScale20');
    yx[4].classList.add('rotateScale25');
}
var p4rem = function() {
    p4t.classList.remove('fromTop01-5');
    yx[0].classList.remove('rotateScale05');
    yx[1].classList.remove('rotateScale10');
    yx[2].classList.remove('rotateScale15');
    yx[3].classList.remove('rotateScale20');
    yx[4].classList.remove('rotateScale25');
}
p4rem();
//第五页
var p5t = document.getElementsByClassName('page_5-title')[0];
var nt = document.getElementsByClassName('nengli-text');

var p5add = function() {
    p5t.classList.add('fromTop01-5');
    nt[0].classList.add('fromRightSpring05-35');
    nt[1].classList.add('fromRightSpring10-35');
    nt[2].classList.add('fromRightSpring15-35');
    nt[3].classList.add('fromRightSpring20-35');
    nt[4].classList.add('fromRightSpring25-35');
}
var p5rem = function() {
    p5t.classList.remove('fromTop01-5');
    nt[0].classList.remove('fromRightSpring05-35');
    nt[1].classList.remove('fromRightSpring10-35');
    nt[2].classList.remove('fromRightSpring15-35');
    nt[3].classList.remove('fromRightSpring20-35');
    nt[4].classList.remove('fromRightSpring25-35');
}
p5rem();