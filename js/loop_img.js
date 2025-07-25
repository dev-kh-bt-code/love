let yes_btn4 = document.getElementById("yes");
let src_img = Array.from({length: 64}, (_, i) => i + 1);
let loop3=document.getElementById("loop");
yes_btn4.addEventListener("click",()=>{
  let loop_img= setInterval(() => {
    loop3.insertAdjacentHTML(
        "beforeend",
        '<img  class="loop_img" style="left: ' + 
          (Math.floor(Math.random() * (1500 - 0 + 1)) + 0) + 
          'px;" '+
          'src="img/data3/'+
          src_img[(Math.floor(Math.random()*src_img.length))]
          +'.jpg">'
      );
      document.querySelectorAll(".loop_img").forEach((imgel) => {
        if (window.getComputedStyle(imgel).opacity === "0") {
          imgel.style.display = "none"; 
        }
        
      });

  }, 5000); 
});

  