// ------------------------------------------------------------------меню-----------------------------------------------------------
const header = document.querySelector('.header')
const headerHeight = document.querySelector('.header').clientHeight

console.log(headerHeight)
// меню при скролле
document.onscroll = function() {
    let scrollY = window.scrollY 
       if (scrollY > headerHeight && !header.classList.contains('open')) {
        header.style.backgroundColor = '#151515'
        header.style.transition = '0.3s'
        } else if(header.classList.contains('open')) {
            header.style.backgroundColor = '#F5F5F5'
        }else{
            header.style.backgroundColor = 'transparent'
        }
} 

const sections = document.querySelectorAll('section');
// меню при клике
document.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.matches('.nav-menu a, button a')) {
    const href = target.getAttribute('href');
    
    sections.forEach((section) => {
      if (href === `#${section.id}`) {
        section.style.paddingTop = headerHeight + 30 + 'px';
      } else {
        section.style.paddingTop = '';
      }
    });
  }
});


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  header.classList.toggle('open')
})

document.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('.nav-menu a, .contacts-list a')) {
        setTimeout(() => {
            header.classList.remove('open');
        }, 300)

        // const href = target.getAttribute('href');
        // const section = document.querySelector(href);
    }
})

// ----------------------------------------------------слайдер-----------------------------------------------------------
 
 new Swiper('.gallery_swiper', { //слайдер блока "Галерея" 
    breakpoints: {
        1024: {
          slidesPerView: 4,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          navigation: false,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          spaceBetween: 10,
        },
        310: {
          slidesPerView: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        spaceBetween: 10,
    },
    },    
  });


new Swiper('.rewiews_swiper', {  //слайдер блока "Отзывы"
  breakpoints: {
    1024: {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1,
      navigation: false,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      spaceBetween: 10,
      loop: true,
    },
    310: {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    spaceBetween: 10,
    loop: true,
},
},
})