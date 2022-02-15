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

    if (document.body.clientWidth <= 414) {
        var work_all = document.querySelector('.work_all');
        var works = document.querySelector('.works');
        var flag = true;
        //console.log(work_all);
        work_all.addEventListener('click', function(e) {
            if (flag) {
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