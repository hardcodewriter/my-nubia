var swiper = (function () {
    /*当前页面展示的宽度*/
    var showWidth = 0;
    /*当前页面的索引*/
    var index = 0;
    return {
        init(ele) {
            this.$ele = $(ele);
            showWidth = this.$ele.width();

            this.$ulWidth = $(ele).children('ul').width();
        
            this.$count = Math.floor(this.$ulWidth / showWidth);
            this.$list = $('.list');
            this.$contain = $('.contain');
            this.$prevBtn = $('.arrow-left');
            this.$nextBtn = $('.arrow-right');
            this.event();
        },
        event() {
            var _this = this;
            this.$prevBtn.click(function () {
                if (index > 0) {
                    index--;
                    $(this).parent().children('.box').children('ul').css('left', -showWidth * index);


                }
            })
            //用户名显示及退出登录功能
            $(".p .xiaohuangren").click(function(){
                if($(".loginname").html()==""){
                    location.assign("login.html");
                }else{
                    return false;
                    preventDefault();
                }
            })
            $(".header .shop").click(function(){
                if($(".loginname").html()==""){
                    window.location.assign("login.html");
                }else if(localStorage[$(".loginname").html()]==""){
                    window.location.assign("blank_shopcar.html");
                }else{
                    window.location.assign("shop-car.html");
                }
            })
            $(".quit").click(function(){
                $(".loginname").html("");
                document.cookie='tel=$(".loginname").html();max-age=-1';
            })
            $(".loginname").html(document.cookie.split("=")[1]);
            

            $(".slide").on('mouseenter', 'li', function () {
                $(this).children('.list').stop().slideDown(300);
                $(this).children('.list').css("display", "block");
            })
            $('.slide').on('mouseleave', 'li', function () {
                $(this).children('.list').stop().slideUp(300);
            })
            this.$nextBtn.click(function () {
                if (index <= _this.$count) {
                    index++;
                    $(this).parent().children('.box').children(".Box").css('left', -showWidth * index);
                    $(this).parent().children('.arrowRight').css('display', 'none');
                }
            })

        }
    }
}())
swiper.init($('.box'));
//引入header标签
function headerReady() {
    swiper.init();
  }
  $("#header-wrap").load("common.html #wrapper", function () {
    headerReady();
  });
  $("#footer-wrap").load("common.html #footer");

