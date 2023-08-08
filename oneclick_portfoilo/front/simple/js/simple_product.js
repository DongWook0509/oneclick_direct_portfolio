const swiper = new Swiper('.swiper', {
    // Optional parameters
   direction: 'horizontal',
   slidesPerView: 3,
   slidesPerGroup :3,
   spaceBetween: 20,
   // If we need pagination
 
   // Navigation arrows
   navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
   },
   
   breakpoints: {
    // when window width is >= 320px
    320: {
   slidesPerView: 1,
   spaceBetween: 20
   },
   // when window width is >= 480px
   650: {
   slidesPerView: 2,
   spaceBetween: 30
   },
   // when window width is >= 640px
   1120: {
   slidesPerView: 3,
   spaceBetween: 40
   }
}
});


const selectBoxElements = document.querySelectorAll(".select");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".selected-value");
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll(".select");

  allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
  });
});