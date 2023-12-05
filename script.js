const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const NoBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yeyy asikkk";
    img.src =
        "https://i.pinimg.com/564x/98/0d/42/980d4267e6ef39d72baff9984c0eafde.jpg";
});

NoBtn.addEventListener("click", () => {
    question.innerHTML = "Yaahhh kenapaa :(";
    img.src =
        "https://i.pinimg.com/564x/43/b5/73/43b573f37af779b43c4d493c7483cad6.jpg";
});
