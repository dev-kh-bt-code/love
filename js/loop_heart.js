let yes_btn3 = document.getElementById("yes");
let loop2=document.getElementById("loop");
yes_btn3.addEventListener("click", ()=>{
  let loop_heart= setInterval(() => {
   

    loop2.insertAdjacentHTML(
        "beforeend",
        '<div class="heart" style="left: ' + 
          (Math.floor(Math.random() * (1500 - 0 + 1)) + 0) + 
          'px;"></div>'
      );
      document.querySelectorAll(".heart").forEach((el) => {
        if (window.getComputedStyle(el).opacity === "0") {
          el.style.display = "none"; // hoặc el.remove()
        }       
      });

  }, 1000); 
});
