var shopCar=(function(){
    var user=document.cookie.split("=")[1];
    var $tbody=document.querySelector("tbody");
    var $tbody_tr=document.querySelectorAll("tbody tr");
    let shoplist=JSON.parse(localStorage[user]);
    return{
        init(){
            this.event();     
        },
        event(){
            var self=this;
            var frag=document.createDocumentFragment();
            for(let i=0;i<shoplist.length;i++){
                var $tr=document.createElement("tr");
                $tr.innerHTML=`<td><input type="checkbox"/></td>
                            <td><img src="${shoplist[i]["src"]}" class="phoneImg"/></td>
                            <td>${shoplist[i]["name"]}</td>
                            <td>${shoplist[i]["price"]}</td>
                            <td>
                                <div class="shopcar-count">
                                    <span class="reduceCount">-</span>
                                    <input type="text" class="listCount" value="1"/>
                                    <span class="addCount">+</span>
                                </div>
                            </td>
                            <td class="summoney">${shoplist[i]["price"].split("").slice(1).join("")}</td>
                            <td><div class="delImg"></div></td>`
                frag.appendChild($tr);
            }
            $tbody.appendChild(frag);
            //各个按钮的功能键
            $("tr td .shopcar-count").children(".reduceCount").click(function(){
                var sum=0;
                var acount=0;
                if($(this).siblings(".listCount").val()>1){
                    $(this).siblings(".listCount").val(Number($(this).siblings(".listCount").val())-1);
                } 
                // console.log($(this).parent().parent().siblings(".summoney"));
                for(let j=0;j<shoplist.length;j++){
                    let priceStr=$("tbody tr").eq(j).children($("td")).eq(3).html();
                    let price=Number(priceStr.slice(1));
                    let all_count=Number($(this).siblings(".listCount").val());
                    console.log(price*all_count);
                    $(this).parent().parent().next().html(price*all_count);
                    acount+=all_count;
                    sum+= price*all_count;
                }
                $(".type-count span").html(acount);
                $(".shop-sum").html(sum); 
            })
            $("tr td .shopcar-count").children(".addCount").click(function(){
                var sum=0;
                var acount=0;
                $(this).siblings(".listCount").val(Number($(this).siblings(".listCount").val())+1);
                for(let j=0;j<shoplist.length;j++){
                    let priceStr=$("tbody tr").eq(j).children($("td")).eq(3).html();
                    let price=Number(priceStr.slice(1));
                    let all_count=Number($("tbody tr").eq(j).children($("td")).eq(4).children($(".shop-count")).children().eq(1).val());
                    $("tbody tr").eq(j).children($("td")).eq(5).val(2222);
                    console.log(price*all_count);
                    $(this).parent().parent().next().html(price*all_count);
                    acount+=all_count;
                    sum+= price*all_count;
                }
                $(".type-count span").html(acount);
                $(".shop-sum").html(sum); 
            })
            $("tr td .delImg").click(function(){
                let delindex=$(".delImg").index($(this))
                $(this).parent().parent().remove();
                shoplist.splice(delindex,1);
                localStorage[user]=JSON.stringify(shoplist);
            })
        }
    }
}())
shopCar.init();
