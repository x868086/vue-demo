
function Barrels(container,nums){
    this.container=container;
    this.nums=nums
    this.baseHeight=100;
    this.imgList=[];
    this.render(this.nums);
}

Barrels.prototype={
    render:function(nums){
        var getImgs=this.loadImg(nums)
        this.setImg(getImgs)
    },

    loadImg:function(nums){
        var randomImgs=[];
        // var height=0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        // var width=0
        var height                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        var width
        for(var i=0;i<nums;i++){
            width=Math.floor(Math.random()*100+90);
            height=Math.floor(Math.random()*60+60);
            randomImgs.push(`https://picsum.photos/${width}/${height}/?random`);
            // randomImgs.push('https://picsum.photos/' + width + '/' + height +'/?random');
        }
        return randomImgs
    },

    setImg:function(getImgs){
        var _this=this
        $.each(getImgs,function(idx,url){
            var imgItem=new Image()
                imgItem.src=url
                $(imgItem).on("load",function(){
                    var imgWidth=imgItem.width,
                        imgHeight=imgItem.height,
                        ratio=imgWidth/imgHeight,
                        imgsSetSize={
                            width:ratio*_this.baseHeight,
                            height:_this.baseHeight,
                            imgs:$(this)
                        }
                        _this.setArrImg(imgsSetSize)
                })
                
        })
    },

    setArrImg:function(imgsSetSize){
        var _this=this,
            rowWidth=0,
            rowHeight=0
        var lastOne=imgsSetSize;/*最后一个放入数组的成员*/
        var ctWidth=this.container.width()
        var counts /*记录当前数组中个元素个数*/
            _this.imgList.push(imgsSetSize)
        $.each(_this.imgList,function(idx,imgs){
            rowWidth += imgs.width
            if(rowWidth>ctWidth){
                _this.imgList.pop()
                counts=_this.imgList.length
                rowWidth=rowWidth-imgsSetSize.width + (counts * 6)/*这里是减去最后放入数组的成员的宽度,还要加上css预留的margin-left*/
                rowHeight= ctWidth * _this.baseHeight / rowWidth
                _this.layoutImg(rowHeight)
                _this.imgList=[]
                _this.imgList.push(lastOne)
            }
            
        })
    },

    layoutImg:function(rowHeight){
        var _this=this
        var $imgCt=$('<div class="img-ct"></div>')
            $imgBox=$('<div class="img-item"></div>')
         $.each(_this.imgList,function(idx,items){
            items.imgs.height(rowHeight)
            $imgBox.append(items.imgs)
        })
        $imgCt.append($imgBox);
        _this.container.append($imgCt)
    }


}

var node=new Barrels($("#container"),90)
