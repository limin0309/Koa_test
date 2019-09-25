const co=require('co');
const fetch=require('node-fetch');
// 1.   co让generator函数自动执行
// co(function *(){  
//     const res=yield fetch('https://api.douban.com/v2/movie/1291843')
//     const movie=yield res.json()
//     // const summary =movie.summary
//     const summary =movie.request
//     console.log('summary',summary)
// })


// 2. 用迭代器解释co库自动执行，执行结果是一样的，执行过程是类似的。
// 下面只有两个promise 手写还好，但是如果过多promise就会繁琐，用co就不一样了。但是co yield只能是对象/数组/promise/generator 
// 不能是字符串/布尔值
function run(gengertor){
    const iterator=gengertor()
    const it=iterator.next()
    const promise=it.value
    promise.then(data=>{
        const it2=iterator.next(data);
        const promise2=it2.value
        promise2.then(data2=>{
            iterator.next(data2)
        })
    })
}
run(function *(){  
    const res=yield fetch('https://api.douban.com/v2/movie/1291843')
    const movie=yield res.json()
    // const summary =movie.summary
    const summary =movie.request
    console.log('summary',summary)// summary GET /v2/movie/1291843
})