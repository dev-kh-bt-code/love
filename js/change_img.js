let yes_btn2 = document.getElementById("yes");
yes_btn2.addEventListener("click", () => {
    document.getElementById("nhacnen").play();
    let change_img= setInterval(() => {
    img.src="img/data1/love"+ img_src[Math.floor(Math.random() * img_src.length)] +".jpg";
    img.style.animation="none";
    img.offsetHeight;
    img.style.animation= "rotate-change 0.5s ease-in";

   

  }, 4000); // 2000ms = 2 giây
  
}, { once: true });
let img_src=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]
let loop=document.getElementById("loop");
let img=document.getElementById("deco-img");
