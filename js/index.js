window.addEventListener('load', function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        speed: 1500,
        centeredSlides: true,
        effect: 'fade',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 作品展示輪播
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var show = document.querySelector('.show');
    var showImgWidth = 400;
    // console.log(showImgWidth);

    var showImgWrapper = document.querySelector('.show-img-wrapper');
    var first = showImgWrapper.children[0].cloneNode(true);
    var second = showImgWrapper.children[1].cloneNode(true);
    var third = showImgWrapper.children[2].cloneNode(true);
    showImgWrapper.appendChild(first);
    showImgWrapper.appendChild(second);
    showImgWrapper.appendChild(third);

    show.addEventListener('mouseenter', function() {
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });

    show.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2500);
    });

    var num = 0;
    arrow_r.addEventListener('click', function() {
        // console.log(showImgWrapper.children.length);
        if (num == showImgWrapper.children.length - 3) {
            showImgWrapper.style.left = 0;
            num = 0;
        }
        num++;
        animate(showImgWrapper, -num * showImgWidth);
    });

    arrow_l.addEventListener('click', function() {
        console.log(showImgWrapper.children.length);
        if (num == 0) {
            num = showImgWrapper.children.length - 3;
            showImgWrapper.style.left = -num * showImgWidth + 'px';

        }
        num--;
        animate(showImgWrapper, -num * showImgWidth);
    });

    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2500);

    // 回頂部
    //  var flag = true;
    var toTop = document.querySelector('.to-top');
    document.addEventListener('scroll', function() {

        if (window.pageYOffset >= 600) {
            toTop.classList.add('fade_in');
        } else {
            toTop.classList.remove('fade_in');
        }

    });

    toTop.addEventListener('click', function() {
        animate1(window, 0);
    });

    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + 'px';

        }, 15);
    }

    function animate1(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }

});