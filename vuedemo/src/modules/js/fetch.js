import axios from 'axios';

function fetch(url,data){
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
            return resolve(res)
        }).catch(error=>{
            return reject(error)
        })
    })
}

export default fetch