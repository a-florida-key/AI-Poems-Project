function Poem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Generating your poem; please wait...",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", Poem);
