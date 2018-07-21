
        /*
        1.获取数据
        2.数据到来后,数据数组遍历拼装dom并放入到页面底部
        3.dom元素放入到页面底部后适用瀑布流布局重置元素位置，修改父容器高度，让曝光加载标记元素始终位于下方。
        4.窗口滚动且flag曝光后执行获取数据并布局dom的操作
        */
    var init=(function(){
        function render(){
            var perPageCount=10,/*tips1:向后台发起获取数据条数*/
            pageIdx=1,/*tips1:向后台发起获取数据的开始页*/
            $newsCt=$(".news-ct ul"),
            $itemWidth=$(".item.flag").outerWidth(true),
            $ctWidth=$(".news-ct").width(),
            arrLength=parseInt($ctWidth/$itemWidth),/*Math.floor(($ctWidth/$itemWidth)*/
            $showFlag=$(".show-flag"),/*tips1:曝光加载元素*/
            itemArr=[],
            clock/*tips1:优化scroll动作的锁*/
            for(var i=0;i<arrLength;i++){
                itemArr.push(0)
            }
            getData(getDom)/*tips2:向后台获取数据，数据到来后用传入的回调函数getDom执行*/
            $(window).on("scroll",function(){
                if(clock){
                    clearTimeout(clock)
                }
                clock=setTimeout(function(){/*tips1:优化scroll动作*/
                    getData(getDom)
                },500)
            })
            function getData(callback){
                $.ajax({
                    url:'http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4',
                    dataType:'jsonp',
                    jsonp:'jsoncallback',/*tips1:与后端约定好的在查询字符串中请求的回调函数名*/
                    data:{
                        app_key: '1271687855',
                        num: perPageCount,
                        page: pageIdx
                    }
                }).done(function(ret){
                    if(ret && ret.status && ret.status.code==='0'){
                        if(isShow($showFlag)){/*tips2:每次请求数据到来后先判断曝光元素是否可见，
                        如果可见则再执行传入的参数即预先定义的回调函数getDom*/
                            callback(ret.data)/*tips3:这里callback就是getDom函数*/
                        }
                        pageIdx++/*tips2:回调函数执行后页码+1*/
                    }else{
                        console.log("获取数据出错")
                    }
                }).always(function(){
                    console.log("请求已完成")
                })
            }
            function getDom(ret){/*tips3:这里定义的getDom可作为参数传入到上面的getData函数中去执行*/
                $.each(ret,function(i,element){/*tips4:由于后台传入的数据是对象，所以用each方法遍历*/
                    var $newsNode=buildDom(element)/*tips4:每次遍历一个元素，先拼装成Dom节点，然后插入到ul的末尾*/
                    $newsCt.append($newsNode);
                    $newsNode.find("img").on("load",function(){/*tips4:每次遍历到的元素插入到页面后判断img标签是否成功load,
                                                                如果load成功再执行瀑布流布局*/
                        waterFall($newsNode)
                    })
                })
            }
            function buildDom(ret){/*tips4:拼装Dom节点后要将节点元素返回，才能供其他函数调用执行*/
                var newsNode="";
                    newsNode +=`<li calss="item">
                            <img src="${ret.img_url}" alt="">
                            <h4>${ret.short_name}</h4>
                            <p>${ret.short_intro}</p>
                        </li>`
                        return $(newsNode)
                }
            function waterFall(nodes){
                var minValue=Math.min.apply(null,itemArr),
                    minIdx=itemArr.indexOf(minValue)
                    nodes.css({
                        left:minIdx*$itemWidth,
                        top:minValue
                    })
                    itemArr[minIdx] += nodes.outerHeight(true);/*tips4:每次瀑布流布局后更新当前数组中的高度最小值*/
                    $newsCt.css({height:itemArr[minIdx]})/*tips4:因为页面内ul的高度未知，每次瀑布流布局后要将ul的高度指定，
                                                        不然曝光加载标记元素始终可见会无限请求ajax*/
                    console.log(itemArr[minIdx])
            }
            function isShow(node){
                var yScroll=$(window).scrollTop(),
                    windowHeight=$(window).height(),
                    yOffset=node.offset().top
                    if(yOffset < yScroll + windowHeight) {
                        return true;
                    }else{
                        return false;
                    }
            }
                }
        return{
            render:render
        }
    })()
init.render()