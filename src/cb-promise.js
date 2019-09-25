const fs = require("fs");
//1
// fs.readFile('./package.json',(err,data)=>{
//     if(err) return console.log(err)
//     data=JSON.parse(data)
//     console.log(data.name) // Koa2
// })

//2
// function readFileAsync (path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,(err,data)=>{
//             if(err) reject(error)
//             else resolve(data)

//         })
//     })
// }
// readFileAsync('./package.json').then(data=>{   // 在2017年时候大部分都是这样实现
//     data=JSON.parse(data)
//     console.log(data.name) // Koa2
// }).catch(err=>{
//     console.log(err)
// })

//3
// nodejs晋级到8以后就可以直接直接promise

const util = require("util");
//util.promiseify() 传入某一个回调函数
util.promisify(fs.readFile)("./package.json")
  .then(JSON.parse)
  .then(data => console.log(data.name))
  .catch(err => {
    console.log(err);
  });
