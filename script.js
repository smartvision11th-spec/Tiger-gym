// LOADER
window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);

});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// STICKY HEADER
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

},{
  threshold:0.2
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});

// BACK TO TOP
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 500){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// BMI CALCULATOR
const calculateBtn =
document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {

  const height =
  parseFloat(document.getElementById("height").value) / 100;

  const weight =
  parseFloat(document.getElementById("weight").value);

  const bmiResult =
  document.getElementById("bmiResult");

  if(!height || !weight){

    bmiResult.style.display = "block";

    bmiResult.innerHTML =
    "Please enter valid details.";

    return;
  }

  const bmi =
  (weight / (height * height)).toFixed(1);

  let category = "";
  let suggestion = "";

  if(bmi < 18.5){

    category = "Underweight";

    suggestion =
    "Join TIGER GYM muscle gain programs.";

  }else if(bmi < 25){

    category = "Normal";

    suggestion =
    "Maintain your physique at TIGER GYM.";

  }else{

    category = "Overweight";

    suggestion =
    "Join TIGER GYM fat loss programs.";

  }

  bmiResult.style.display = "block";

  bmiResult.innerHTML = `
    <h3>Your BMI: ${bmi}</h3>
    <p>${category}</p>
    <p>${suggestion}</p>
  `;

});

// PRICING AUTO SELECT
const chooseButtons =
document.querySelectorAll(".choose-plan");

const planSelect =
document.getElementById("plan");

chooseButtons.forEach(button => {

  button.addEventListener("click", () => {

    planSelect.value =
    button.dataset.plan;

    document
    .getElementById("booking")
    .scrollIntoView({
      behavior:"smooth"
    });

  });

});

// WHATSAPP FORM
const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener("submit", e => {

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  const mobile =
  document.getElementById("mobile").value;

  const plan =
  document.getElementById("plan").value;

  const joiningDate =
  document.getElementById("joiningDate").value;

  const goal =
  document.getElementById("goal").value;

  const message = `
TIGER GYM BOOKING

Name: ${name}
Mobile: ${mobile}
Plan: ${plan}
Joining Date: ${joiningDate}
Goal: ${goal}
`;

  const whatsappURL =
  `https://wa.me/919648470944?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL,"_blank");

  bookingForm.reset();

});
