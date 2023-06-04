//======= toggle icon navbar ======== <i class='bx bx-x' ></i>
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// =======  scroll avtive link  =============
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("links");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //===============  sticky navbar  ==========
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //======= remove icon icon navbar when click navbar link scroll =======
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
  //===============  sticky navbar  ==========
};
//end  menu scropll
// menu progress-bar scropll=====
const progressBar = document.getElementById("progress-bar");
const totalValue = document.body.clientHeight - window.innerHeight;

document.body.onscroll = () => {
  let currentValue = document.scrollingElement.scrollTop;
  let offset = (currentValue / totalValue) * 100 - 100 + "%";
  progressBar.style.left = offset;
  console.log("2222", offset);
};
//end  progress-bar scropll
// modal popup
let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("activePopup"); // Добавляем класс 'active' для фона
    popup.classList.add("activePopup"); // И для самого окна
  });
});
closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("activePopup"); // Убираем активный класс с фона
  popup.classList.remove("activePopup"); // И с окна
});
document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("activePopup"); // Убираем активный класс с фона
    popup.classList.remove("activePopup"); // И с окна
  }
});
// end modal popup

// light_dark
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const header1 = document.querySelector(".header");
const ul = document.querySelector("ul");
// const linksMenu = document.querySelector(".links");
const sec = document.querySelector(".sec");
// const line = document.querySelector(".line");
const bgtxtdark = document.querySelector(".txt .dynamic-txts .dark span:after");

const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  wrapper.classList.toggle("dark");
  header1.classList.toggle("dark");
  ul.classList.toggle("dark");
  // linksMenu.classList.toggle("dark");
  sec.classList.toggle("dark");
  bgtxtdark.classList.toggle("dark");
});

// end  light_dark
