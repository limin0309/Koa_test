// const arrow = function (param){}
// const arrow= (param)=>{}
// const arrow=param=>{}
// const arrow=param=>console.log(param)
// const arrow=param=>({param:param})
// const arrow=(param1,param2)=>{}
// const arrow=({id,movie})=>{
//     console.log(id,movie)
// }


// 箭头函数、this的考查
const luke={
    id:2,
    say:function(){
        setTimeout(function(){
            console.log('id',this.id) // undefined
        }, 50);
    },
    sayWithThis:function(){
        let that = this
        setTimeout(function(){
            console.log('that id',that.id) // 2
        }, 500);
    },
    sayWithArrow:function(){
        setTimeout(() => {
            console.log('this id',this.id) //2
        },1500);
    },
    sayWithGlobalArow:()=>{
        setTimeout(() => {
            console.log('global id',this.id) //undefined
        }, 2000);
    }
}
luke.say()
luke.sayWithThis()
luke.sayWithArrow()
luke.sayWithGlobalArow()

// id undefined
// that id 2
// this id 2 
// global id undefined


