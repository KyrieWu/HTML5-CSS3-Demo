const links = document.querySelectorAll(".nav li a");

links.forEach((link) => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.dataset.text = letter;
    span.style.transitionDelay = i / 15 + "s";
    link.append(span);
  });
});
