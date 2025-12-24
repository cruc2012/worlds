const computers = [
    {
    name: "4 bit calculator built in Minecraft Java",
    description: "A simple 4 bit calculator using only redstone",
    world: "Java Edition",
    image: "https://cruc2012.github.io/worlds/images/3.png",
    download: "https://cruc2012.github.io/worlds/worlds/3.zip"
  },
{
    name: "Music Machine using just redstone in Minecraft java",
    description: "Redstone music machine that plays songs",
    world: "Java Edition",
    image: "https://cruc2012.github.io/worlds/images/2.png",
    download: "https://cruc2012.github.io/worlds/worlds/2.zip"
  },
  {
    name: "Working piano in Minecraft Java",
    description: "Playable piano made in Minecraft Java",
    world: "Java Edition",
    image: "https://cruc2012.github.io/worlds/images/1.png",
    download: "https://cruc2012.github.io/worlds/worlds/1.zip"
  }
];

const list = document.getElementById("computerList");

computers.forEach(pc => {
  const card = document.createElement("a");
  card.className = "computer";
  card.href = pc.download;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("download", "file");

  card.innerHTML = `
    <img src="${pc.image}" alt="${pc.name}">
    <div class="computer-content">
      <h2>${pc.name}</h2>
      <p>${pc.description}</p>
      <small>${pc.world}</small>
    </div>
  `;

  list.appendChild(card);
});
