var swiper = (function () {
 /*当前页面展示的宽度*/
    var showWidth = 0;
    /*当前页面的索引*/
    var index = 0;
    return {
        init(ele) {
            this.$ele = $(ele);
            showWidth = this.$ele.width();
            console.log(showWidth);
            this.$ulWidth = $(ele).children('ul').width();
            console.log(this.$ulWidth);
            this.$count = Math.floor(this.$ulWidth / showWidth);
            console.log(this.$count)
            this.$list = $('.list');
            this.$contain = $('.contain');
            this.$prevBtn = $('.arrow-left');
            this.$nextBtn = $('.arrow-right');
            this.event();
            console.log(this.$prevBtn);
        },
        event() {
            var _this = this;
                this.$prevBtn.click(function () {
                    if (index > 0) {
                    index--;
                    $(this).parent().children('.box').children('ul').css('left', -showWidth * index);
                

            }
        })
           
                this.$nextBtn.click(function () {
                     if (index <= _this.$count) {
                    index++;
                    $(this).parent().children('.box').children(".Box").css('left', -showWidth * index);
                    $(this).parent().children('.arrowRight').css('display', 'none');
                    console.log(index);
                    console.log(_this.$count);}
                })
            
        }
    }
}())
swiper.init($('.box'));