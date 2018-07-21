$(document).ready(function(){
                
    /*1.给元素 $node 添加 class active，给元素 $noed 删除 class active*/
    $(".method.mth1 .btn1").on("click",function(){
        $(".method.mth1 div").addClass("active")
    })

    $(".method.mth1 .btn2").on("click",function(){
        $(".method.mth1 div").removeClass("active")
    })

    /*2.展示元素$node, 隐藏元素$node*/
    $(".method.mth2 .btn1").on("click",function(){
        $(".method.mth2 div").hide("slow")
    })

    $(".method.mth2 .btn2").on("click",function(){
        $(".method.mth2 div").show(1000)
    })

    /*3.获取元素$node 的 属性: id、src、title， 修改以上属性*/
    $(".method.mth3 .btn1").on("click",function(){
        var idstr=$(".method.mth3 img").attr("id"),
            srcstr=$(".method.mth3 img").attr("src"),
            titlestr=$(".method.mth3 img").attr("title")
        $(".method.mth3 div").text(`id:${idstr} ,src:${srcstr} ,title:${titlestr}`)
    })

    $(".method.mth3 .btn2").on("click",function(){
        $(".method.mth3 img").attr("id","changed")
        $(".method.mth3 img").attr("src","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=682277747,4022276910&fm=27&gp=0.jpg")
        $(".method.mth3 img").attr("title","node")
        var idstr=$(".method.mth3 img").attr("id"),
            srcstr=$(".method.mth3 img").attr("src"),
            titlestr=$(".method.mth3 img").attr("title")
        $(".method.mth3 div").text(`id:${idstr} ,src:${srcstr} ,title:${titlestr}`)
    })

    /*4.给元素添加自定义的data-src属性*/
    $(".method.mth4 .btn1").on("click",function(){
        $(".method.mth4 div").attr("data-src","add-type")
        var addstr=$(".method.mth4 div").attr("data-src")
        $(".method.mth4 div").text(addstr)
    })

    /*5.开头添加元素,末尾添加元素，删除元素，清空元素，设置html内容*/
    $(".method.mth5 .btn1").on("click",function(){
        $(".method.mth5 div").prepend($('<img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" title="百度">'))
    })

    $(".method.mth5 .btn2").on("click",function(){
        $(".method.mth5 div").append($('<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=682277747,4022276910&fm=27&gp=0.jpg" title="百度">'))
    })

    $(".method.mth5 .btn3").on("click",function(){
        $(".method.mth5 div>img:nth-child(1)").remove()
    })

    $(".method.mth5 .btn4").on("click",function(){
        $(".method.mth5 div").empty()
    })

    $(".method.mth5 .btn5").on("click",function(){
        $(".method.mth5 div").html($('<p style="height:100px;width:100px;background-color:yellow;">添加的html内容</p>'))
    })

    /*6.获取宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)*/
    $(".method.mth6 .btn1").on("click",function(){
        var nodeHeight=$(".method.mth6 .mth6-container div").height(),
            nodeWidth=$(".method.mth6 .mth6-container div").width()
            $(".mth6-container span").text(`不包含内边距宽高--width:${nodeWidth},height:${nodeHeight}`)
    })

    $(".method.mth6 .btn3").on("click",function(){
        var nodeHeight=$(".method.mth6 .mth6-container div").innerHeight(),
            nodeWidth=$(".method.mth6 .mth6-container div").innerWidth()
            $(".mth6-container span").text(`包含内边距--innerwidth:${nodeWidth},innerheight:${nodeHeight}`)
    })

    $(".method.mth6 .btn5").on("click",function(){
        var nodeHeight=$(".method.mth6 .mth6-container div").outerHeight(),
            nodeWidth=$(".method.mth6 .mth6-container div").outerWidth()
            $(".mth6-container span").text(`包含内边框--outerwidth:${nodeWidth},outerheight:${nodeHeight}`)
    })

    $(".method.mth6 .btn7").on("click",function(){
        var nodeHeight=$(".method.mth6 .mth6-container div").outerHeight(true),
            nodeWidth=$(".method.mth6 .mth6-container div").outerWidth(true)
            $(".mth6-container span").text(`包含内边框+外边距--outerwidth(true):${nodeWidth},outerheight(true):${nodeHeight}`)
    })

    $(".method.mth6 .btn9").on("click",function(){
        $(".method.mth6 .mth6-container div").outerHeight(160);
        $(".method.mth6 .mth6-container div").outerWidth(160) 
    })


    /*7.修改$node 的样式，字体颜色设置红色，字体大小设置14px*/
    $(".method.mth7 .btn1").on("click",function(){
        $(".mth7 p").css({"color":"red","font-size":"14px"});
        var fontColor=$(".mth7 p").css("color"),
            fontSize=$(".mth7 p").css("font-size")
        $(".method.mth7 span").text(`fontcolor:${fontColor},fontsize:${fontSize}`)

    })

    /*8.获取窗口滚动条垂直滚动距离,获取$node 到根节点水平、垂直偏移距离*/
    $(".method.mth8 .btn1").on("click",function(){
        var Top=$(window).scrollTop()
        $(".method.mth8 span").text(`scrollTop:${Top}`)
    })

    $(".method.mth8 .btn2").on("click",function(){
        $(window).scrollTop(1200)
        var Top=$(window).scrollTop()
        $(".method.mth8 span").text(`scrollTop:${Top}`)
    })

    $(".method.mth8 .btn3").on("click",function(){
        var Top=$(".method.mth8").offset().top,
            left=$(".method.mth8").offset().left
            $(".method.mth8 span").text(`到docoment根节点的水平垂直距离--offsetY:${Top},offsetX:${left}`)
    })

    $(".method.mth8 .btn4").on("click",function(){
        $(".method.mth8").offset({top:100,left:100})
    })

    /*9.遍历节点，把每个节点里面的文本内容重复一遍*/
    $(".method.mth9 .btn1").on("click",function(){
        var meth9String="",
        $mth9Nodes=$(".method.mth9 button")
        $mth9Nodes.map(function(idx,element){
        console.log(arguments)
        meth9String += `按钮${idx}的值:${$(this).text()}\n`
    })
        $(".method.mth9 span").text(meth9String)

    })

    /*10.DOM选择*/
    $(".method.mth10 .btn1").on("click",function(){
        var meth10String=$(".method.mth10 .ct9").length
        console.log(meth10String)
        $(".mth10 .mth10panel").text(`class为.ct9的$对象的length:${meth10String}`)
    })

    $(".method.mth10 .btn2").on("click",function(){
        var meth10String=$(".method.mth10 .ct9").children()
        console.log(meth10String)
        $(".mth10 .mth10panel").text(`class为.ct9的$对象的子元素length:${meth10String.length}`)
    })

    $(".method.mth10 .btn3").on("click",function(){
        var meth10Node=$(".ct9").parent(".mth10").children(".mth10panel")
        console.log(meth10Node)
        $(".mth10 .mth10panel").text(`class为.ct9的$对象的父元素中找class为.mth10pannel的子元素:${meth10Node.length}`)
    })

    $(".method.mth10 .btn4").on("click",function(){
        var meth10Node=$(".method.mth10").children()
        console.log(meth10Node)
        $(".mth10 .mth10panel").text(`mth10中子元素数量:${meth10Node.length}`)
    })

    $(".method.mth10 .btn5").on("click",function(){
        var meth10Node=$(".method.mth10 .mth10panel").index()
        console.log(meth10Node)
        $(".mth10 .mth10panel").text(`class为mth10pannel在兄弟元素中的索引:${meth10Node}`)
    })

    /*11.点击按钮改变背景色*/
    $(".method.mth11 .btn1").on("click",function(event){
        $(event.currentTarget).css({"background":"red"})
        setTimeout(function(){
            $(event.currentTarget).css({"background":"blue"})
        },1000)
    })

    /*12.当窗口滚动时，获取垂直滚动距离*/
    $(".method.mth12 .btn1").on("click",function(){
        $(".mth12div").show();
        $(window).on("scroll",function(event){
            var scrollY=$(window).scrollTop()
            $(".mth12div").text(`scrollTop:${scrollY}px`)
        })
    })

    /*13.当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色*/
    $(".method.mth13").on("mouseenter",function(event){
        $(event.currentTarget).css({"background":"red"}).text("mouseenter")
    })

    $(".method.mth13").on("mouseleave",function(event){
        $(event.currentTarget).css({"background":"white"}).text("mouseleave")
    })

    /*14.当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入
    框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字*/
    $(".method.mth14").on("focusin",function(event){
        $(event.target).css({"outline":"blue solid 2px"})
        $(event.target).on("keyup",function(event){
            var inputValue=$(event.target).val()
            console.log(inputValue)
            $(event.target).val(inputValue.toUpperCase())
        })

        $(event.target).on("focusout",function(event){
            $(event.target).css({"outline":"none"})
            console.log($(event.target).val())
        })
    })

    /*15.当选择 select 后，获取用户选择的内容*/
    $(".method.mth15 select").on("change",function(event){
        var mth15String=$(event.target).val()
        console.log(mth15String)
        $(".method.mth15 p").text(`选中的内容是:${mth15String}`)
        })   
})