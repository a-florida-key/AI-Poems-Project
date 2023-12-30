function Poem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function getPoem(event) {
  event.preventDefault();
  let prompt = ``;
  let context = `You are a poem AI assistant. Please provide answers that ryhme.`;
  let apiKey = `ceao63d7e80ab9169tc53ef7497c0dda`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(Poem);
}

letpoemFormElement = document.querySelector("poem-generator");
poemFormElement.addEventListener("submit", getPoem);
