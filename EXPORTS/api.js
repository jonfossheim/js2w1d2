export async function getCharacters(url, container) {
  const response = await fetch(url);
  //console.log(response);

  const characters = await response.json();
  console.log(characters);

  container.innerHTML = '';

  for (let i = 0; i < characters.length; i++) {
    //console.log(characters[i]);

    if (i === 10) {
      break;
    }

    container.innerHTML += `<div class="result">${characters[i].name}</div>`;
  }
}
