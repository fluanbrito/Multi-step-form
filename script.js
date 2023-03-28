// Seleciona os elementos HTML relevantes
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

// Define a página atual
let current = 1;

// Adiciona um listener para o clique no botão "Next" na primeira página
nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%"; // move o slide para a segunda página
    bullet[current - 1].classList.add("active"); // adiciona a classe "active" ao bullet correspondente
    progressCheck[current - 1].classList.add("active"); // adiciona a classe "active" ao progressCheck correspondente
    progressText[current - 1].classList.add("active"); // adiciona a classe "active" ao progressText correspondente
    current += 1; // incrementa a página atual
});

// Adiciona um listener para o clique no botão "Next" na segunda página
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%"; // move o slide para a terceira página
    bullet[current - 1].classList.add("active"); // adiciona a classe "active" ao bullet correspondente
    progressCheck[current - 1].classList.add("active"); // adiciona a classe "active" ao progressCheck correspondente
    progressText[current - 1].classList.add("active"); // adiciona a classe "active" ao progressText correspondente
    current += 1; // incrementa a página atual
});

// Adiciona um listener para o clique no botão "Next" na terceira página
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%"; // move o slide para a última página
    bullet[current - 1].classList.add("active"); // adiciona a classe "active" ao bullet correspondente
    progressCheck[current - 1].classList.add("active"); // adiciona a classe "active" ao progressCheck correspondente
    progressText[current - 1].classList.add("active"); // adiciona a classe "active" ao progressText correspondente
    current += 1; // incrementa a página atual
});

// Adiciona um listener para o clique no botão "Submit"
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active"); // adiciona a classe "active" ao bullet correspondente
    progressCheck[current - 1].classList.add("active"); // adiciona a classe "active" ao progressCheck correspondente
    progressText[current - 1].classList.add("active"); // adiciona a classe "active" ao progressText correspondente
    current += 1; // incrementa a página atual
    setTimeout(function () { // espera 800ms antes de exibir uma mensagem de sucesso e recarregar a página
        alert("Formulário preenchido com sucesso!");
        location.reload();
    }, 800);
});

// Atualiza as classes e o estado atual do formulário ao voltar para a página anterior
prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
