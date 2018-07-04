let host="http://rap2api.taobao.org/app/mock/18520/";

let url={
    cartList:"cartList"
}

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host + url[key]
    }
}

export default url