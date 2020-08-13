const pics = ["https://www.natureimagesawards.com/wp-content/uploads/2019/05/archway-in-a-pod.jpg","https://londynek.net/image/jdnews-agency/2191248/202869-202007231058-lg2.jpg.webp?t=1595498388","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR3B-GaTByLHd9a7MLCgQNSdsoH5ssHRbfBw&usqp=CAU"
]
let btn1 = document.querySelector("#next");
let btn2 = document.querySelector("#prev");
let img = document.querySelector("img")
let counter = 1;
btn1.addEventListener("click",function(){
    counter++;
    if (counter===pics.length ){
        counter = 0;
    }
    img.src=pics[counter];
    

});
btn2.addEventListener("click",function(){
    counter--
    if (counter<0 ){
        counter = pics.length-1;
    }
    img.src=pics[counter];
    

});
