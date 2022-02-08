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
        timer = null;
    });

    show.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
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
        arrow_r.click();
    }, 2500);

    // 回頂部
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
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';

        }, 15);
    }

    function animate1(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
});