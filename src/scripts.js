function getPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function Poem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context = `You are a poem AI assistant. Please provide a short poem in basic HTML. Please make sure the poem rhymes. Please sign the poem with '- SheCodes AI' inside a <strong> element.`;
  let apiKey = `ceao63d7e80ab9169tc53ef7497c0dda`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(getPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", Poem);
