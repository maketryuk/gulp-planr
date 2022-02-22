// Lock scroll on body
const lockScroll = () => {
  document.body.classList.toggle("js-lock");
  if (!document.body.classList.contains("js-lock")) {
    document.body.toggleAttribute("class");
  } else {
    null
  }
};

// Click on overlay
let overlay = document.querySelector(".overlay");
let form = document.querySelector("#form");

overlay?.addEventListener("click", () => {
  let formFieldInput = document.querySelectorAll(".form__field input");
  let formFieldLabel = document.querySelectorAll(".js-invalid-label");

  for (let i = 0; i < formFieldInput.length; i++){
    formFieldInput[i].classList.remove('js-invalid');
  }
  for (let i = 0; i < formFieldLabel.length; i++){
    formFieldLabel[i].remove();
  }
  modalToggleVisible()
});

// Custom switch button
let switchLabel = document.querySelectorAll(".switch__label")

switchLabel?.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.querySelector("input").checked) {
      e.classList.add("js-toggle");
    } else {
      e.classList.remove("js-toggle");
    }
  })
});

// Custom counter
let counterItem = document.querySelectorAll(".counter__item");

counterItem?.forEach((e) => {
  let counterInput = e.querySelector(".counter__input");
  let counterPlus = e.querySelector(".counter__plus");
  let counterMinus = e.querySelector(".counter__minus");

  let counterMax = parseInt(counterInput.getAttribute("max"));
  let counterMin = parseInt(counterInput.getAttribute("min"));

  counterPlus.addEventListener("click", () => {
    if (counterInput.value >= counterMax ) {
      counterInput.value = counterMax;
    } else {
      counterInput.value++
      counterInput.setAttribute("value", counterInput.value);
    }
  });
  
  counterMinus.addEventListener("click", () => {
    if (counterInput.value <= counterMin ) {
      counterInput.value = counterMin;
    } else {
      counterInput.value--
      counterInput.setAttribute("value", counterInput.value);
    }
  });

  counterInput.addEventListener("keyup", () => {
    if (counterInput.value >= counterMax) {
      counterInput.value = counterMax;
    } else if (counterInput.value <= counterMin) {
      counterInput.value = counterMin;
    } else  {
      null
    }
  });
})

// Open menu on click to Burger
let burger = document.querySelector(".burger");
let header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("js-nav-open");
  lockScroll()
})

// Video
let video = document.querySelector(".video__item");
let videoPlayButton = document.querySelector(".video__play");
let videoPreview = document.querySelector(".video__preview");

videoPlayButton?.addEventListener("click", () => {
  video.style.display = "block";
  videoPlayButton.style.display = "none";
});

// Modal
let modalTrigger = document.querySelectorAll(".modal-trigger");
let modalWindow = document.querySelector(".modal");

modalTrigger?.forEach((e) => {
  e.addEventListener("click", () => {
    modalToggleVisible();
  });
})

const modalToggleVisible = () => {
  modalWindow.classList.toggle("js-show");
  overlay.classList.toggle("js-show");
  lockScroll();
  setTimeout( () => {
    modalWindow.classList.remove("js-submit");
  }, 300)
}

// Validate form
if (document.querySelector("#form")) {
  const validationForm = new JustValidate("#form", {
    errorFieldCssClass: "js-invalid",
    errorLabelCssClass: "js-invalid-label",
    lockForm: true,
    errorLabelStyle: {
      textDecoration: "underlined",
    },
  });

  validationForm
    .addField("#user_name", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Minimum 3 characters required",
      },
      {
        rule: "required",
        errorMessage: "Name is required",
      },
    ])
    .addField("#user_email", [
      {
        rule: "required",
        errorMessage: "Email is required",
      },
      {
        rule: "email",
        errorMessage: "Email is invalid",
      },
    ])
    .onSuccess((e) => {
      e.preventDefault();
      modalWindow.classList.add("js-submit");
    });
  
  if (document.querySelector("#user_company")) {
    validationForm
      .addField("#user_company", [
      {
        rule: "required", 
        errorMessage: "Company is required",
      },
    ])
  }
}

// Dropdown"s
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

function closeOpenNavs() {
  var openDrops = document.querySelectorAll(".dropdown__trigger");
	for (var i = 0; i < openDrops.length; i++) {
		var openDropdown = openDrops[i];
		if (openDropdown.parentElement.classList.contains("js-open")) {
		  openDropdown.parentElement.classList.remove("js-open");
		}
	}  
}

document.addEventListener("click", function (event) {
	if (!event.target.closest(".dropdown__trigger")){
		closeOpenNavs();
	} 
	else if (event.target.closest(".dropdown__trigger") && event.target.parentElement.closest(".js-open")){
		event.target.closest(".dropdown__trigger").parentElement.classList.remove("js-open");
	}
	else if (event.target.closest(".dropdown__trigger")){
		closeOpenNavs();
		event.target.closest(".dropdown__trigger").parentElement.classList.add("js-open");
	}
	
}, false);

// Plan slider
const planSlider = new Swiper(".plan__slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 300,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".plan__pagination",
  },
  navigation: {
    nextEl: ".plan__button-next",
    prevEl: ".plan__button-prev",
  },
});

if (!window.matchMedia("(min-width: 992px)").matches) {
  // Benefits slider
  const benefitsSlider = new Swiper(".benefits__slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 300,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },

    pagination: {
      el: ".benefits__pagination",
    },
    navigation: {
      nextEl: ".benefits__button-next",
      prevEl: ".benefits__button-prev",
    },
  });
} else {
}