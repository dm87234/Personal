window.addEventListener('load', function() {
    // 點擊送出時，顯示彈出框
    //1.為送出按鈕綁定點擊事件
    var sub = document.querySelector('.sub');
    var send = document.querySelector('.send');
    var close = document.querySelector('.close');
    var body = document.body;
    var mask = document.querySelector('.mask');
    sub.addEventListener('click', function(e) {
        //2.讓彈出框顯示
        body.classList.add('-on');
        send.style.display = 'block';
        window.scroll(0, 0);
        e.stopPropagation();
    }, false);

    //3.點x時，彈出框消失
    //	close.addEventListener('click',function(){
    //		send.style.display = 'none';
    //	});

    //	4. 點擊其他地方時也可以消失
    body.addEventListener('click', function() {
        send.style.display = 'none';
        this.classList.remove('-on');
    }, false);
})