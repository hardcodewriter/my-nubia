var loginCheck = (function() {
	var $form = document.querySelector('.registerForm');
	var $inps = $form.querySelectorAll('input');
	//获取用户名旁的span标签
	var $span= $inps[0].parentNode.querySelector("span");
	//获取到提交按钮
	var $sub = document.querySelector('.sub input');
	return {
		init() {
			this.event();
		},
		event() {
			let self = this;
			for(let i=1;i<2;i++) {
				$inps[i].onblur = function(e) {
					// console.log($inps[0].value,$inps[1].value)
					loginAjax("http://localhost:1234/php/my-nubia/server/php/login.php", {
						data: {
							"telphone": $inps[0].value,
							"password": $inps[1].value
						}
					})
						.then(res => {	
							$span.innerHTML = "";
							
							self.success($inps[0]);
						})
						.catch(res => {
							console.log(res)
							// $span.innerHTML = "手机号或密码错误,请重新输入";
						})
				}
			}	
			$sub.onclick=function(){
				if($inps[0].className.indexOf("has-success")===-1){
					$span.innerHTML = "手机号或密码错误,请重新输入";
					$inps[0].focus();		
					return false;
				}
				
			}
		},
		success($div) {
			$div.className=$div.className.replace(/(\s?has-success)/g, '');
			$div.className += 'has-success';
		}
    }
}());