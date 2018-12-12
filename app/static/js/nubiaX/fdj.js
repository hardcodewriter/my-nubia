var glass=(function(){
    return{
        init(x){
           this.Multiple=x||2
           this.$Box=document.querySelector('.Box');
           this.$showImage=this.$Box.querySelector('.show-image');
           this.$showBigImage=this.$Box.querySelector('.show-big-image');
           this.$box=document.querySelector('.box')
           this.$ulbox = this.$box.querySelector('.img-box');
           this.$main=document.querySelector("#main");
           this.$main_left=document.querySelector(".main_left");
           // 获取每一张图片的li集合
           this.$liAll = this.$ulbox.children;
           // 获取移动的小黑块(放大镜)
           this.$filter = this.$showImage.querySelector('.filter');
           
           for (var i = 0; i < this.$liAll.length; i++) {
            this.$liAll[i].index = i;
        }
           this.event();
        },
                event: function () {
                    var _this = this;
                    // 利用事件委托，给每一个li添加点击事件
                    this.$ulbox.onclick = function (ev) {
                        ev = ev || window.event;
                        var target = ev.target || ev.srcElement;
                        console.log(target.nodeName);
                        // 点击时，真正触发的为图片。
                        if (target.nodeName === 'IMG') {
                            // 获取li的索引 =》target.parentNode.index
                            // 点击触发更换图片
                            _this.showImage(target.parentNode.parentNode.index)
                        }
                    }
        
                    // 这里用onmouseenter： 子元素不触发事件
                    this.$showImage.onmouseenter = function () {
                        // 放大镜显示
                        _this.$filter.style.display = 'block';
                        // 展示大图片显示
                        _this.$showBigImage.style.display = 'block';
        
                        // 如果展示盒子的尺寸不变， 需要修改放大镜的尺寸，和图片的尺寸，保持等比关系
                        // 获取展示盒子的宽度高度
                        _this.bigWidth = _this.$showBigImage.clientWidth;
                        _this.bigHeight = _this.$showBigImage.clientHeight;
                        // 设置小盒子宽高
                        _this.$filter.style.width = _this.bigWidth / _this.Multiple + 'px';
                        _this.$filter.style.height = _this.bigHeight / _this.Multiple + 'px';
                        // 设置大图片宽度
                        _this.$showBigImage.querySelector('img').style.width = this.offsetWidth * _this.Multiple + 'px';
                    }
                    this.$showImage.onmouseleave = function () {
                        _this.$filter.style.display = 'none';
                        _this.$showBigImage.style.display = 'none';
                    }
                    this.$showImage.onmousemove = function (ev) {
                        ev = ev || window.event;
                        // 计算小方块定点坐标
                        var x = ev.pageX  - _this.$filter.offsetWidth/2-_this.$main_left.offsetLeft;
                        var y = ev.pageY -_this.$filter.offsetHeight/2-115;
                        // console.log(x);
                        // console.log(y);
                        // 获取小方块移动的最大坐标
                        var maxL = this.clientWidth - _this.$filter.offsetWidth,
                            maxT = this.clientHeight - _this.$filter.offsetHeight;
                        if (x >= maxL) {
                            x = maxL
                        } else if (x <= 0) {
                            x = 0;
                        }
                        if (y >= maxT) {
                            y = maxT;
                        } else if (y <= 0) {
                            y = 0;
                        }
                        _this.$filter.style.left = x + 'px';
                        _this.$filter.style.top = y + 'px';
        
                        var img = _this.$showBigImage.querySelector('img');
                        img.style.left = -_this.Multiple * x + 'px';
                        img.style.top = -_this.Multiple * y + 'px';
                    }
                },
                showImage(index) {
                    console.log(index);
                    for (var i = 0; i < this.$liAll.length; i++) {
                        this.$liAll[i].className = ''
                    }
                    this.$liAll[index].className = 'select';
                    // 修改对应的图片地址
                    var src = this.$liAll[index].querySelector('img').getAttribute('src');
                    this.$showImage.querySelector('img').src = src.replace('small', 'big');
                    this.$showBigImage.querySelector('img').src = src.replace('small', 'largest');
                    console.log(src);
                }
            }
        
        }())