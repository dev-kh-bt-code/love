let start_section=document.getElementById("start_section");
let start_img=document.getElementById("start_img");
let no_btn=document.getElementById("no");
let yes_btn = document.getElementById("yes");
let start_text=document.getElementById("start_text");
let i = 0;
setTimeout(() => {
    start_img.src ="img/data2/b5.png";
    start_text.innerText="Hong biet bé có iu anh hong taaa"
}, 5000);
no_btn.addEventListener("mouseenter",()=>{
    let maxX = window.innerWidth - no_btn.offsetWidth;
    let maxY = window.innerHeight - no_btn.offsetHeight;
    let random_x=Math.floor(Math.random()*maxX);
    let random_y=Math.floor(Math.random()*maxY);
    no_btn.style.position = "absolute";
    no_btn.style.left=random_x +"px ";
    no_btn.style.top=random_y +"px ";
});
yes_btn.addEventListener("click", ()=>{
    i = 1;
    start_img.src ="img/data2/b4.png";
    start_text.innerText="Moaaa, có bất ngờ cho bé ne";
    setTimeout(() => {
        start_section.style.visibility="hidden";
    }, 5000);
});
yes_btn.addEventListener("mouseenter",()=>{
    start_img.src ="img/data2/b3.png";
});
yes_btn.addEventListener("mouseleave",()=>{
    if (i==0){
        start_img.src ="img/data2/b2.png";
    }
});