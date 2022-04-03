export function createCharacterDiv(character, onclick) {
  const div = document.createElement("div");
  div.classList.add("character");
  div.onclick = onclick;
  div.innerHTML = `
	  <img height="100" src="${character.image}" alt="${character.name}">
	  <h3>${character.rank}</h3>
	  <h3>${character.name}</h3>
	`;

  return div;
}

export function createCharacterImage(character, onclick) {
  const div = document.createElement("div");
  div.classList.add("character");
  div.onclick = onclick;
  div.innerHTML = `
	  <img height="100" src="${character.image}" alt="${character.name}">
	`;
  return div;
}

export function createBossDiv() {
  const div = document.createElement("div");
  div.classList.add("character");

  const killBtn = document.createElement("button");
  killBtn.innerText = "kill";
  killBtn.onclick = onKillClicked;

  div.innerHTML = `
		<img height="100" src="${character.image}" alt="${character.name}">
		<h3>${character.rank}</h3>
		<h3>${character.name}</h3>
	      `;

  div.appendChild(killBtn);
  div.appendChild(passBtn);

  return div;
}

export function createEnemyDiv(character, onKillClicked, onPassClicked) {
  const div = document.createElement("div");
  div.classList.add("character");

  const killBtn = document.createElement("button");
  killBtn.innerText = "kill";
  killBtn.onclick = onKillClicked;
  const passBtn = document.createElement("button");
  passBtn.innerText = "pass";
  passBtn.onclick = onPassClicked;

  div.innerHTML = `
		<img height="100" src="${character.image}" alt="${character.name}">
		<h3>${character.rank}</h3>
		<h3>${character.name}</h3>
	      `;

  div.appendChild(killBtn);
  div.appendChild(passBtn);

  return div;
}
