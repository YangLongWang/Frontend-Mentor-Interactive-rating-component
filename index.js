const rating = document.getElementById("level");
const submit = document.getElementById("submit");
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const feedback = document.getElementById("feedback");
let score = "";

const highlight = (event) => {
  if (!score) {
    event.target.classList.add("highlight");
  } else {
    const btnHighLight = rating.querySelectorAll("button");

    btnHighLight.forEach((i) => {
      if (i.matches(".highlight")) {
        i.classList.remove("highlight");
      }
      event.target.classList.add("highlight");
    });
  }
  score = event.target.value;
};

function handleSubmit(event) {
  event.preventDefault();

  firstBox.classList.add("hidden");
  secondBox.classList.remove("hidden");

  let p = document.createElement("p");
  p.textContent = "You selected " + score + " out of 5";
  feedback.appendChild(p);
}

rating.addEventListener("click", highlight);
submit.addEventListener("click", handleSubmit);
