// window.addEventListener('DOMContentLoaded', () => { 
//     // click to projects cards
//     document.querySelectorAll('.header__right-block').forEach((item, i) => {
//         item.addEventListener('click', () => {
//             //event.preventDefault();
//             switch(item.id) {
//                 case 'header__right-platform':
//                     document.location.href = '../platform/';
//                 break;              
//                 case 'header__right-center':
//                     document.location.href = '../license/';
//                 break;
//                 case 'header__right-sert':
//                     document.location.href = '../certification/';
//                 break;            
//                 default:
//                     document.location.href = '../';
//                 break;
//               } 
            
//         });
//     });


// // Мигание главных переключателей страницы при наведении

// $('.header__right-block').hover(

//   function(){ $(this).addClass('animated pulse') },

//   function(){ $(this).removeClass('animated pulse') }

// )



// анимация при скролле
const animItems = document.querySelectorAll(".opportunities__right")
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top; // значение сверху
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+ animItemHeight)) {
        animItem.classList.add('animated','fadeInRightBig');
      } else {
        animItem.classList.remove('animated', 'fadeInRightBig');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
} 



// карточки переключатель
let i = 1;
try {
  const cards = document.querySelectorAll('.tariffs-card');
  const right = document.querySelector('.tariffs-arrow-right');
  const left = document.querySelector('.tariffs-arrow-left');
  
  right.addEventListener('click', () => {
    i++
    removeClass()  
    if(i===3) {i = 0}
    cards[i].classList.add('active', 'animated', 'pulse')
  })

  left.addEventListener('click', () => {
    i--
    removeClass()  
    if(i===-1) {i = 2}
    cards[i].classList.add('active', 'animated', 'pulse')
  })

  function removeClass() {
    cards.forEach(card => {
      card.classList.remove('active', 'animated', 'pulse')  
    })
  }
} catch(e) {}

// // карточки при наведении
// try {
//   const cards = document.querySelectorAll('.tariffs-card');
//   cards.forEach((card, id) => {
//     card.addEventListener('mouseover', () => {
//       cards.forEach(item=> {
//         item.classList.remove('active', 'animated', 'pulse')
//       })
//       card.classList.add('active', 'animated', 'pulse')
//       i = id
//     })
//   })
// } catch(e) {}

// // Лицензии, аккредитации, соглашения при наведении
// try {
//   const licenseBtns = document.querySelectorAll('.docs_left-btn');
//   const licenseImages = document.querySelectorAll('.docs_right-img');
//   let numm = 0;
//   licenseImages[numm].classList.add('active', 'animated', 'pulse');

//   licenseBtns.forEach((licenseBtn, num) => {
//     licenseBtn.addEventListener('mouseover', () => {
//       licenseImages.forEach(item=> {
//         item.classList.remove('active', 'animated', 'pulse')
//       })
//       numm = num
//       licenseImages[numm].classList.add('active', 'animated', 'pulse')      
//     })
//   })
// } catch(e) {}


// All Drag-n-Drop SLIDERS 
function dragDropSlider(windowParent, window, slideItemsTrack, slideItem, arrowsParent){
  let slider = document.querySelector(windowParent),
  sliderList = slider.querySelector(window),
  sliderTrack = slider.querySelector(slideItemsTrack),
  slides = slider.querySelectorAll(slideItem),
  arrows = document.querySelector(arrowsParent),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function() {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
      if (transition) {
      sliderTrack.style.transition = 'transform .5s';
      }
      sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

      prev.classList.toggle('disabled', slideIndex === 0);
      next.classList.toggle('disabled', slideIndex === --slides.length);
  },
  swipeStart = function() {
      let evt = getEvent();

      if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
      }
  },
  swipeAction = function() {

      let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;

      posY2 = posY1 - evt.clientY;
      posY1 = evt.clientY;

      // определение действия свайп или скролл
      if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
          isScroll = true;
          allowSwipe = false;
      } else if (posY < 7) {
          isSwipe = true;
      }
      }

      if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
          if (posInit < posX1) {
          setTransform(transform, 0);
          return;
          } else {
          allowSwipe = true;
          }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
          if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
          } else {
          allowSwipe = true;
          }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
          reachEdge();
          return;
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
      }

  },
  swipeEnd = function() {
      posFinal = posInit - posX1;

      isScroll = false;
      isSwipe = false;

      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('mousemove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
      document.removeEventListener('mouseup', swipeEnd);

      sliderList.classList.add('grab');
      sliderList.classList.remove('grabbing');

      if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
          if (posInit < posX1) {
          slideIndex--;
          } else if (posInit > posX1) {
          slideIndex++;
          }
      }

      if (posInit !== posX1) {
          allowSwipe = false;
          slide();
      } else {
          allowSwipe = true;
      }

      } else {
      allowSwipe = true;
      }

  },
  setTransform = function(transform, comapreTransform) {
      if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
          sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
      }
      allowSwipe = false;
  },
  reachEdge = function() {
      transition = false;
      swipeEnd();
      allowSwipe = true;
  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderList.classList.add('grab');

  sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

  arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
      slideIndex++;
  } else if (target.classList.contains('prev')) {
      slideIndex--;
  } else {
      return;
  }

  slide();
  });

}
// try {  
//   dragDropSlider('.slider-one', '.slider-two', '.tariffs-block', '.tariffs-card', '.tariffs-arrows');
// } catch (error) {}
// try {
//   dragDropSlider('.slider', '.slider-list', '.slider-track', '.slide', '.slider-arrows');
// } catch (error) {}
// try {
  
// } catch (error) {  
// }
// dragDropSlider('.header__slider', '.header__list', '.header__right-blocks', '.header__right-block', '.header__arrows');



