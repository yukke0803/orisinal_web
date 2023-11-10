const pics_src = ["assets/img/日替わりメニュー/butakaramiso.jpg","assets/img/日替わりメニュー/kousouage.jpg","assets/img/日替わりメニュー/lemonsteak.jpg","assets/img/日替わりメニュー/nikusui.jpg","assets/img/日替わりメニュー/yamaimoroll.jpg"];
let num = -1;

function slideshow_timer(){
  if (num === 4){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);

//ハンバーガー
const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');
if(burger) {
    burger.addEventListener('click',() => {
        burger.clossLIst.toggle('is-active');
        menu.closeList.toggle('is-active');
    })
}