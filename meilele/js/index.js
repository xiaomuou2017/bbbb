$(".scroll-items").banner({
    items:$(".scroll-items").find("img"),
    autoPlay:true,
    delayTime:5000,
    moveTime:1000,
    index:0
})
// 轮播图
// let li = document.querySelectorAll(".title .btn");
// // console.log(li)
// let goods = document.querySelectorAll(".goods");
// // console.log(goods)
// for(let i=0;i<li.length;i++){
//     li[i].index = i;
//     li[i].onclick = function(){
//         for(var j=0;j<li.length;j++){
//             // li[j].className = "";
//             goods[j].style.display = "none";
//         }
//         goods[this.index].style.display = "block";
//     }
// }
// console.log(goods[2])