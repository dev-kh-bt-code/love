let yes_btn4 = document.getElementById("yes");
let src_img=[
    "img/data1/love1.jpg",
    "img/data1/love2.jpg",
];
let loop3=document.getElementById("loop");
yes_btn4.addEventListener("click",()=>{
  let loop_img= setInterval(() => {
    loop3.insertAdjacentHTML(
        "beforeend",
        '<img  class="loop_img" style="left: ' + 
          (Math.floor(Math.random() * (1500 - 0 + 1)) + 0) + 
          'px;" '+
          'src="'+
          src_img[(Math.floor(Math.random()*src_img.length))]
          +'">'
      );
      document.querySelectorAll(".loop_img").forEach((imgel) => {
        if (window.getComputedStyle(imgel).opacity === "0") {
          imgel.style.display = "none"; 
        }
        
      });

  }, 5000); // 2000ms = 2 giây
});

  