let text_src =[
    "Anh yêu em",
    "Em là công chúa nhỏ của anh"

];
document.getElementById("loop").addEventListener("click", (e) => {
    if (e.target.classList.contains("heart")) {
        let random_text = Math.floor(Math.random()*text_src.length);
        let top = window.getComputedStyle(e.target).top;
        e.target.classList.remove("heart");
        e.target.classList.add("heart_clicked");
        e.target.style.top = top;
        e.target.innerText= text_src[random_text];
    }
  });
  