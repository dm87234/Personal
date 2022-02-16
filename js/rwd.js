window.addEventListener('load', function() {
    //點擊漢堡加上.active
    var ham = document.querySelector('.hamburger');
    //獲取菜單
    var menu = document.querySelector('.menu-wrapper').querySelector('.menu');
    var menuA = menu.querySelectorAll('a');

    ham.addEventListener('click', function() {
        this.classList.toggle('is-active');
        //點擊漢堡出現菜單		
        menu.classList.toggle('open');
    });

    // 設計札記的下拉子選單
    if (document.body.clientWidth <= 1024) {
        var work_all = document.querySelector('.work_all');
        var works = document.querySelector('.works');
        // 判斷開關
        var flag = true;
        //console.log(work_all);
        work_all.addEventListener('click', function(e) {
            if (flag) {
                // 先不要跳轉頁面
                e.preventDefault();

                works.classList.add('works-on');

                flag = false;
            } else {
                works.classList.remove('works-on');
                flag = true;
            }

        });

    }

})