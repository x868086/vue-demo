
        // tips1:原始代码
        // var $imgWrap=$(".img-wrap"),
        //     imgWidth=$imgWrap.find("li img").eq(0).width(),
        //     $prev=$(".prev"),
        //     $next=$(".next"),
        //     $imgView=$(".img-view"),
        //     $first=$imgWrap.find("li").first().clone(),/*这里必须使用clone方法复制元素，不使用clone就是移动元素了*/
        //     $last=$imgWrap.find("li").last().clone(),/*这里必须使用clone方法复制元素，不使用clone就是移动元素了*/
        //     idx=0,
        //     imgLength=$imgWrap.find("li").length,
        //     lock=false,
        //     timer

        //     function init(){
        //         $imgWrap.append($first).prepend($last);/*克隆元素*/
        //         $imgWrap.css({"left":-imgWidth,"width":(imgLength+2)*imgWidth});/*设置图片条容器的总宽度*/
        //     }

        //     init();

        //     function playNext(){
        //         lock=true;
        //         $imgWrap.animate({"left":`-=${imgWidth}`},function(){/*jquery动画执行完后可接执行函数语句*/
        //             idx++;
        //             if(idx>=imgLength){
        //                 $imgWrap.css({"left":-imgWidth});
        //                 idx=0;/*到边界时idx要同步修改*/
        //             }
        //             setView(idx);
        //             lock=false;
        //         })
        //     }

        //     function playPrev(){
        //         lock=true;
        //         $imgWrap.animate({"left":`+=${imgWidth}`},function(){/*css值可写成-=或者+=*/
        //             idx--;
        //             if(idx<0){
        //                 $imgWrap.css({"left":-imgLength*imgWidth});
        //                 idx=3;/*到边界时idx要同步修改*/
        //             }
        //             setView(idx);
        //             lock=false;
        //         })
        //     }

        //     function setView(idx){
        //         $imgView.find("li").eq(idx).addClass("active")
        //             .siblings().removeClass("active");
        //     }

        //     $prev.on("click",function(event){
        //         event.preventDefault();
        //         clearInterval(timer);
        //         if(lock){
        //             return
        //         }
        //         playPrev();
        //     })

        //     $next.on("click",function(event){
        //         event.preventDefault();
        //         clearInterval(timer);
        //         if(lock){
        //             return
        //         }
        //         playNext();
        //     })

        //     $imgView.on("click","li",function(event){
        //         clearInterval(timer);
        //         var imgIdx=$(event.currentTarget).index();/*使用currentTarget是因为li很小，*/
        //         setView(imgIdx);/*如果用target则event指向触发元素img而没指向li，img在每个li中只有一个,所以idx会始终为0*/
        //         $imgWrap.animate({"left":-(imgIdx+1)*imgWidth});
        //         idx=imgIdx;
        //     })

        //     timer=setInterval(playNext,2000)

        // // tips2:面向对象代码
        // function Carousel($node){
        //     this.$imgWrap=$node.find(".img-wrap"),
        //     this.imgWidth=this.$imgWrap.find("li img").eq(0).width(),
        //     this.$prev=$node.find(".prev"),
        //     this.$next=$node.find(".next"),
        //     this.$imgView=$node.find(".img-view"),
        //     this.$first=this.$imgWrap.find("li").first().clone(),
        //     this.$last=this.$imgWrap.find("li").last().clone(),
        //     this.idx=0,
        //     this.imgLength=this.$imgWrap.find("li").length,
        //     this.lock=false,
        //     this.timer
        //     this.init()/*预先定义的函数执行后，然后绑定为实例对象的属性*/
        //     this.bind()  
        //     this.setTimer()        
        // }

        // Carousel.prototype.init=function(){
        //     this.$imgWrap.append(this.$first).prepend(this.$last);/*克隆元素*/
        //     this.$imgWrap.css({"left":-this.imgWidth,"width":(this.imgLength+2)*this.imgWidth});/*设置图片条容器的总宽度*/
        // }

        // Carousel.prototype.playNext=function(){
        //     var _this=this;
        //     _this.lock=true;
        //     _this.$imgWrap.animate({"left":`-=${_this.imgWidth}`},function(){/*jquery动画执行完后可接执行函数语句*/
        //         _this.idx++;
        //         if(_this.idx>=_this.imgLength){
        //             _this.$imgWrap.css({"left":-_this.imgWidth});
        //             _this.idx=0;/*到边界时idx要同步修改*/
        //         }
        //         _this.setView(_this.idx);
        //         _this.lock=false;
        //     })
        // }

        // Carousel.prototype.playPrev=function(){
        //     var _this=this;
        //     _this.lock=true;
        //     _this.$imgWrap.animate({"left":`+=${_this.imgWidth}`},function(){/*css值可写成-=或者+=*/
        //         _this.idx--;
        //         if(_this.idx<0){
        //             _this.$imgWrap.css({"left":-_this.imgLength*_this.imgWidth});
        //             _this.idx=3;/*到边界时idx要同步修改*/
        //         }
        //         _this.setView(_this.idx);
        //         _this.lock=false;
        //     })
        // }

        // Carousel.prototype.setView=function(idx){
        //     this.$imgView.find("li").eq(idx).addClass("active")
        //     .siblings().removeClass("active");
        // }

        // Carousel.prototype.bind=function(){
        //     var _this=this
        //     _this.$prev.on("click",function(event){
        //         event.preventDefault();
        //         clearInterval(_this.timer);
        //         if(_this.lock){
        //             return
        //         }
        //         _this.playPrev();
        //     })

        //     _this.$next.on("click",function(event){
        //         event.preventDefault();
        //         clearInterval(_this.timer);
        //         if(_this.lock){
        //             return
        //         }
        //         _this.playNext();
        //     })

        //     _this.$imgView.on("click","li",function(event){
        //         clearInterval(_this.timer);
        //         var imgIdx=$(event.currentTarget).index();
        //         _this.setView(imgIdx);
        //         _this.$imgWrap.animate({"left":-(imgIdx+1)*_this.imgWidth});
        //         _this.idx=imgIdx;
        //     })
        // }

        // Carousel.prototype.setTimer=function(){
        //     var _this=this
        //     _this.timer=setInterval(function(){
        //         _this.playNext()
        //     },2000)
        // }

        // $(".carousel").each(function(idx,el){
        //     new Carousel($(el))
        // })

        // tips3:代码封装
        var Carousel=(function(){
            function Carousel($node){
                this.$imgWrap=$node.find(".img-wrap"),
                this.imgWidth=this.$imgWrap.find("li img").eq(0).width(),
                this.$prev=$node.find(".prev"),
                this.$next=$node.find(".next"),
                this.$imgView=$node.find(".img-view"),
                this.$first=this.$imgWrap.find("li").first().clone(),
                this.$last=this.$imgWrap.find("li").last().clone(),
                this.idx=0,
                this.imgLength=this.$imgWrap.find("li").length,
                this.lock=false,
                this.timer
                this.init()
                /*预先定义的函数执行后，然后绑定为实例对象的属性*/
                this.bind()  
                this.setTimer()        
            }

            Carousel.prototype.init=function(){
                this.$imgWrap.append(this.$first).prepend(this.$last);
                /*克隆元素*/
                this.$imgWrap.css({"left":-this.imgWidth,"width":(this.imgLength+2)*this.imgWidth});
                /*设置图片条容器的总宽度*/
            }

            Carousel.prototype.playNext=function(){
                var _this=this;
                _this.lock=true;
                _this.$imgWrap.animate({"left":`-=${_this.imgWidth}`},function(){
                    /*jquery动画执行完后可接执行函数语句*/
                    _this.idx++;
                    if(_this.idx>=_this.imgLength){
                        _this.$imgWrap.css({"left":-_this.imgWidth});
                        _this.idx=0;
                        /*到边界时idx要同步修改*/
                    }
                    _this.setView(_this.idx);
                    _this.lock=false;
                })
            }

            Carousel.prototype.playPrev=function(){
                var _this=this;
                _this.lock=true;
                _this.$imgWrap.animate({"left":`+=${_this.imgWidth}`},function(){
                    /*css值可写成-=或者+=*/
                    _this.idx--;
                    if(_this.idx<0){
                        _this.$imgWrap.css({"left":-_this.imgLength*_this.imgWidth});
                        _this.idx=3;
                        /*到边界时idx要同步修改*/
                    }
                    _this.setView(_this.idx);
                    _this.lock=false;
                })
            }

            Carousel.prototype.setView=function(idx){
                this.$imgView.find("li").eq(idx).addClass("active")
                .siblings().removeClass("active");
            }

            Carousel.prototype.bind=function(){
                var _this=this
                _this.$prev.on("click",function(event){
                    event.preventDefault();
                    clearInterval(_this.timer);
                    if(_this.lock){
                        return
                    }
                    _this.playPrev();
                })

                _this.$next.on("click",function(event){
                    event.preventDefault();
                    clearInterval(_this.timer);
                    if(_this.lock){
                        return
                    }
                    _this.playNext();
                })

                _this.$imgView.on("click","li",function(event){
                    clearInterval(_this.timer);
                    var imgIdx=$(event.currentTarget).index();
                    _this.setView(imgIdx);
                    _this.$imgWrap.animate({"left":-(imgIdx+1)*_this.imgWidth});
                    _this.idx=imgIdx;
                })
            }

            Carousel.prototype.setTimer=function(){
                var _this=this
                _this.timer=setInterval(function(){
                    _this.playNext()
                },2000)
            }

            return{
                carousel:function($nodelist){
                    $nodelist.each(function(idx,el){
                        new Carousel($(el))
                    })
                }
            }
        }())

        Carousel.carousel($(".carousel"))