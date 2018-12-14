var pushData=(function(){
    var dataNum=[];
    return{
        init(){
            this.event();  
        },
        event(){
            var _this=this;
            $('.join-shopcar').click(function(){
                _this.getData();
                window.location.assign("shop-car.html")
            })
           
        },
        getData(){
            var _this=this;
           sendAjax('shoplist.json')
           .then(res=>{
                res=JSON.parse(res);
                //获取相对应的json对象数据
                //先获取当前选择的颜色款
                dataNum=[];
                let colorType=$('#selector').children().children(".select").html();
                for(let i=0;i<res.length;i++){
                    if(res[i].phone=="nubiaX"&&res[i].color==colorType){
                        dataNum.push(res[i]);
                    }
                }
                console.log(dataNum)
                // this.data=res;
                this.insertData(dataNum);
           })
        },
        insertData(data){
            //先获取当前登录名
            var user=$(".loginname").html();
            //获取本地存储的key值为user的数据，如果没有就创建空数组字符串
            var shoplist=localStorage.getItem($(".loginname").html())||"[]";
            //将json字符串转化对象
            shoplist=JSON.parse(shoplist);
            console.log(shoplist)
            console.log(data)
            //把新数据添加，同时判断新添加的数据是否已经添加
            
            for(let j=0;j<data.length;j++){	
                let flag=true;
                for(let i=0;i<shoplist.length;i++){
                    if(data[j].id===shoplist[i].id){
                        // shoplist[i].count = +shoplist[i].count  +1;
                        flag=false;
                        break;
                    }else{
                        console.log(shoplist[i])
                        shoplist[i].count=1;
                    }
                }
                if(flag){
				    shoplist.push(data[j]);
                }
            }  
            console.log(localStorage);
            localStorage[user]=JSON.stringify(shoplist);
           console.log(localStorage)
        }
    }
}())
pushData.init();