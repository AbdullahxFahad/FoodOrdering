//variables
const hamburger = document.querySelector(".hamburger");
const closeEl = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");
const product = document.querySelector(".productHolder");
const add = document.querySelector(".plus");
const slide = document.querySelector("#slide");
const cartbtn = document.getElementById("cartbtn");
const popup = document.querySelector(".popup-cart");
const Rqstpopup = document.querySelector("#popup-request");
const cancleBtn = document.querySelector(".canclebtn");
const registerBtn = document.querySelector(".registerbtn");
const closebtn = document.getElementById("close-button");
const body = document.querySelector("body");
const popularItem = document.querySelector(".card-wrapper");
const requestBtn = document.querySelector("#request-dish-btn");
const video = document.querySelector('.video');
const bar = document.querySelector('.green-bar');
const btn = document.getElementById('play-pause');


//event listner
hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});
//to close drawer (mobile-view)
closeEl.addEventListener("click", () => {
  menu.classList.remove("show");
});

//cart
cartbtn.addEventListener("click", () => {
  popup.style.display = "flex";
  body.style.overflow = "hidden";
});

closebtn.addEventListener("click", () => {
  popup.style.display = "none";
  body.style.overflow = "auto";
});

//request-dish-button
requestBtn.addEventListener("click", () => {
  Rqstpopup.style.display = "flex";
  window.scrollTo(top);
  body.style.overflow = "hidden";
});

cancleBtn.addEventListener("click", () => {
  Rqstpopup.style.display = "none";
  body.style.overflow = "auto";
});

registerBtn.addEventListener("click", () => {
  Rqstpopup.style.display = "none";
  body.style.overflow = "auto";
});

// play/pause video
btn.addEventListener("click", togglePlayPause);
video.addEventListener('timeupdate',()=> {
  var barPos = video.currentTime / video.duration;
  bar.style.width = barPos*100 + "%";
})

video.addEventListener('click',togglePlayPause);
//play video by clicking spacebar or K
document.addEventListener('keydown', e => {
  switch(e.key.toLowerCase()) {
    case " ":
    case "k":
      togglePlayPause()
      break;
  }
})

video.onended = function(){
  btn.className = "play";
};



//function for Home-kitchen card 
let createCard = () => {
  return (product.innerHTML = pizzaVariety
    .map((x) => {
      return `
      <div class="card cursor-p r-position">
      <img src="${x.img}" alt="pizza">
      <div class="discount-container" style=display:${ x.discount ? "block" : "none" }>
          <div class="discount-tag">${x.discount}</div>
      </div>
      <div class="item-1">
          <div class="d-flex space">
              <h4>Home made pizza</h4>
              <span>${x.price}<span>
          </div>
          <div class="d-flex row m-b">
              <div class="d-flex gap">
                  <div class="d-flex rating">
                      <img src="./icons/star.svg" alt="">
                      <span>4.7</span>
                  </div>
                  <div class="rating time">50-79 min</div>
              </div>
              <div class="row d-flex" style="margin-right:6px;">
                  <img class="plus" src="./icons/plus.svg" alt="">
              </div>
          </div>
      </div>
  </div>
                `;
    })
    .join(""));
};

//popular Items card
let popularItemCard = () => {
  return (popularItem.innerHTML = popularItems
    .map((x) => {
      return `
            <div class="card r-position cursor-p swiper-slide">
            <img src="${x.img}" alt="pizza">
            <div class="discount-container" style=display:${
              x.discount ? "block" : "none"
            }> <div class="discount-tag" >${x.discount}</div></div>
             <div class="item-1">
                     <div class="d-flex space">
                     <h4>${x.item}</h4>
                     <span>${x.price}<span>
                 </div>
                 <div class="d-flex row m-b">
                     <div class="d-flex gap">
                         <div class="d-flex rating">
                             <img  src="./icons/star.svg" alt="">
                             <span>${x.rating}</span>
                         </div>
                         <div class="rating time">${x.time} min</div>
                     </div>
                     <div class="d-flex row quantity r-position" style=display:${x.quantity ? "flex" : "none"}>
                         <img  class="minus" src="./icons/minus.svg" alt="">
                         <span class="d-flex ">${x.quantity}</span>       
                         <img src="./icons/plus.svg" alt="">
                     </div>
                     <div class="row d-flex" style="margin-right:6px;display:${x.quantity ? "none" : "block"} ">
                       <img class="plus" src="./icons/plus.svg" alt="">
                  </div>
                 </div>
             </div>
         </div> 
            `;
    })
    .join(""));
};

//play/pause Toggle
function togglePlayPause() {
  if(video.paused){
    btn.className = 'pause';
    video.play();
  }
  else{
    btn.className = 'play';
    video.pause();
  }
}


// home-kitchen component data

let pizzaVariety = [
  {
    img: "./images/unsplash_MqT0asuoIcU.png",
    price: "₹190",
    discount: "50%",
  },
  {
    img: "./images/unsplash_UxRhrU8fPHQ.png",
    price: "₹123",
  },
  {
    img: "./images/unsplash_CbNAuxSZTFo.png",
    price: "₹190",
    discount: "20%",
  },
  {
    img: "./images/unsplash_Y6OgisiGBjM.png",
    price: "$19",
  },
  {
    img: "./images/unsplash_nP11TkjxJ7s.png",
    price: "₹190",
    discount: "50%"
  },
  {
    img: "./images/unsplash_60nzTP7_hMQ.png",
    price: "₹190",
  },
  {
    img: "./images/unsplash_sejqj6Eaqe8.png",
    price: "₹190",
    discount: "20%",
  },
  {
    img: "./images/unsplash_33GPuoFI7v8.png",
    price: "$19",
    discount: "50%",
  },
  {
    img: "./images/unsplash_MqT0asuoIcU.png",
    price: "₹123",
  },
  {
    img: "./images/unsplash_UxRhrU8fPHQ.png",
    price: "₹190",
  },
  {
    img: "./images/unsplash_CbNAuxSZTFo.png",
    price: "₹190",
    discount: "20%",
  },
  {
    img: "./images/unsplash_Y6OgisiGBjM.png",
    price: "₹190",
  },
];

//popular items data
let popularItems = [
  {
    img: "./images/unsplash_MqT0asuoIcU.png",
    item: "Home made pizza",
    price: "₹190",
    quantity: "1",
    rating: "4.7",
    time: "50-79",
  },
  {
    img: "./images/pexels-omar-mahmood-106343 1.png",
    item: "Tandoori Chicken",
    discount: "20%",
    price: "₹123",
    rating: "4.3",
    time: "15-29",
  },
  {
    img: "./images/pexels-mumma-oyens-8799602 1.png",
    item: "Chilli Chicken",
    discount: "50%",
    price: "₹290",
    rating: "4.1",
    time: "30-40",
  },
  {
    img: "./images/unsplash_MqT0asuoIcU.png",
    item: "Home made pizza",
    price: "₹190",
    quantity: "1",
    rating: "4.7",
    time: "50-79",
  },
];

//calling function
createCard();
popularItemCard();
