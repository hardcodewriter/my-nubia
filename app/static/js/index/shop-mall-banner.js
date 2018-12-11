var swipper=(function(){
    var currentIndex=0;
    var timer=null;
    console.log(1111);
    return {
        init(){ 
            this.event(); 
            this.autoPlay()
            this.showImage(currentIndex);
        },
        event(){
            var self=this;
            $(".banner-pre").click(function(){
                currentIndex--;
                self.showImage(currentIndex);
            })
            $(".banner-next").click(function(){
                currentIndex++;
                self.showImage(currentIndex);
            })
            $(".banner ol li").on("click",function(){
                //on函数里面的this直接指向触发事件的dom元素
                currentIndex = $(this).index()
                self.showImage(currentIndex);
            })
            // console.log(index);
           
            
        },
        showImage(index){    
            if(index<0){
                currentIndex=2;   
            } 
            if(index>2){
                currentIndex=0;  
            }  
            $(".banner ol li").eq(currentIndex).removeClass("banner-list-round banner-list-circle").addClass("banner-list-circle");
            $(".banner ol li").eq(currentIndex).siblings().removeClass("banner-list-round banner-list-circle").addClass("banner-list-round");     
            $(".banner ul li").eq(currentIndex).css("z-index","50");
            $(".banner ul li").eq(currentIndex).siblings().css("z-index","0");
            $(".banner ul li").eq(currentIndex).fadeIn(800);
            $(".banner ul li").eq(currentIndex).siblings().fadeOut(500);
            this.autoPlay();
        },
        autoPlay(){
            var self =this;
            clearInterval(timer);
            timer=setInterval(_=>{
                currentIndex++; 
                self.showImage(currentIndex);
            },5000)
        }
    }
}());

swipper.init();
// 关于banner图下六个图标的动画
$(".banner2-left").on("mouseenter","i",function(){
    $(this).css("color","#fff").siblings().css("color","#c0c0bd");
    $(this).css("background-color","#f35c49").siblings().css("background-color","#f4f3ef");;
})

