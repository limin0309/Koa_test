const fs=require('fs');
const util=require('util');
const readAsync=util.promisify(fs.readFile)

async function init(){  // async function用同步的方法执行异步的操作
    try{
        let data=await readAsync('./package.json')
        data =JSON.parse(data)
        console.log(data.name) // Koa2
    }catch(err){
        console.log(err)
    }
}
init()