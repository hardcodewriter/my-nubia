'use strict'
class CheckForm {
	constructor() {
	}
	username(name) {
		if(/\w{6,10}/.test(name)) {
			return true;
		}
		return false;
	}
	password(ps) {
		if(/^.{6,16}$/.test(ps)) {
			if(/[A-z][0-9]|[0-9][A-z]/.test(ps)){
				return true;
			}
		}
		return false;
	}
	telphone(tel) {
		if(/^1[35789]\d{9}$/.test(tel)) {
			return true;
		}
		return false;
	}
	repassword(ps) {
		if(ps === '') {
			return false;
		}
		var ps = document.getElementById('password').value;
		var rps = document.getElementById('password').value;
		if(ps === rps) {
			return true;
		}
		return false;
	}
}
var checkInfor = (function() {
	var $form = document.querySelector('.registerForm');
	var $inps = $form.querySelectorAll('input');
	//获取到“获取验证码”按钮
	var $get_yanzhengma = document.querySelector('.phone_yanzhengma_button');
	var yzm=null;
	var resetTime=60;
	//获取到“同意阅读协议”按钮
	var $agree = document.querySelector('.agreement input');
	//获取到提交按钮
	var $sub = document.querySelector('.sub input');
	return {
		init() {
			this.event();
		},
		event() {
			let self = this;
			for(let i=0;i<3;i++) {
				$inps[i].onblur = e => {
					e = e || window.event;	
					var checkForm = new CheckForm();
					if($inps[i].name==="telphone"){
						let $div = $inps[i].parentNode.querySelector("span");
						if(checkForm[$inps[i].name]($inps[i].value)) {
							if($inps[i].name === 'telphone') {
								sendAjax("http://localhost:1234/php/my-nubia/server/php/login.php", {
									data: {
										"telphone": $inps[i].value
									}	
								})
								.then(res=>{
									$div.innerHTML="";
									self.success($inps[i]);
								})
								.catch(res=>{
									$div.innerHTML="手机号已被注册";
								})
							}
						}else if($inps[i].value==""){
							$div.innerHTML="请输入手机号";
						}else{
							$div.innerHTML="手机号格式输入错误";
						}
					}else if($inps[i].name==="password"){
						let $div1 = $inps[i].parentNode.querySelector("span");
						if(checkForm[$inps[i].name]($inps[i].value)) {
							$div1.innerHTML="";
							self.success($inps[i]);
						}else if($inps[i].value==""){
							$div1.innerHTML="请输入密码";
						}else{
							$div1.innerHTML="密码格式输入错误";
						}
					}else if($inps[i].name==="yanzhengma"){
						let $div2 = $inps[i].parentNode.querySelector("span");
						if($inps[i].value==""){
							$div2.innerHTML="请输入验证码";
						}else{
							$div2.innerHTML="";
							self.success($inps[i]);
						}
					}
				}
			};
			$get_yanzhengma.onclick=function(e){
				e=e||window.event;
				$get_yanzhengma.disabled="disabled";
				clearInterval(yzm);
				$get_yanzhengma.value=`重新发送(${resetTime})`
				yzm=setInterval(function(){
					resetTime--;
					$get_yanzhengma.value=`重新发送(${resetTime})`;
					if(resetTime==0){
						clearInterval(yzm);
						$get_yanzhengma.value=`获取验证码`;
						resetTime=60;
						$get_yanzhengma.disabled="";
					}

				},1000)	
			};
			$sub.onclick = function(e) {
				e=e||window.event;
			 	for(let j=0;j<3;j++) {
			 		if($inps[j].className.indexOf("has-success") === -1) {
						$inps[j].focus();
			 			return false;
			 		}
			 	}
			}
		},
		success($div) {
			$div.className=$div.className.replace(/(\s?has-error|\s?has-success)/g, '');
			$div.className += 'has-success';
		}
		
	}
}());