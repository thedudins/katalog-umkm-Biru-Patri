console.log("Website Biru Patri siap.");
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

const swiper = new Swiper(".mySwiper", {

    slidesPerView:1,

    spaceBetween:20,

    loop:true,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints:{

        576:{
            slidesPerView:2,
        },

        992:{
            slidesPerView:3,
        },

        1200:{
            slidesPerView:4,
        }

    }

});