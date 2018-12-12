var data=(function(){
    var $selector=document.querySelector('#selector');
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
            $selector.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
            }
        },
        getData(){
           sendAjax('server/json/nubiaX.json')
        }
    }
}())