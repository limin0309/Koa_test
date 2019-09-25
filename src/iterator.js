//1.迭代器
// function makeIterator(arr){
//     let nextIndex=0
//     // 返回一个迭代器对象
//     return {
//         next:()=>{
//             // next() 方法返回的结果对象
//             if(nextIndex<arr.length){
//                 return{
//                     value:arr[nextIndex++],
//                     done:false
//                 }
//             }else{
//                 return {done:true}
//             }
//         }
//     }
// }
// const it=makeIterator(['吃饭','睡觉','打豆豆'])


// console.log('首先',it.next().value);
// console.log('其次',it.next().value);
// console.log('然后',it.next().value);
// console.log('最后',it.next().done); // 每次返回的结果都是上一次迭代的结果 

// 首先 吃饭
// 其次 睡觉
// 然后 打豆豆
// 最后 true

// 2.生成器 生成器的出现是为了简化创建迭代器的过程，同时保证逻辑清晰性  ，多了一个*，多了一个yield
function *makeIterator(arr){
    for(let i=0;i<arr.length;i++){
        yield arr[i]
    }
}
const gen =makeIterator(['吃饭','睡觉','打豆豆'])
console.log('首先',gen.next().value);
console.log('其次',gen.next().value);
console.log('然后',gen.next().value);
console.log('最后',gen.next().done); // 每次返回的结果都是上一次迭代的结果 

// 首先 吃饭
// 其次 睡觉
// 然后 打豆豆
// 最后 true