import { DEFAULT_PINGS, PINGS } from "../const.js";
export function openPingMenu(pings = DEFAULT_PINGS) {
  const size = 300;
  const center = size / 2;
  const radius = (size * 0.8) / 2;
  const centerRadius = radius / 8;
  const imgSize = radius * 0.5;
  const imgOffset = radius * 0.8; // distance from center to image center

  const borderColor = "#333";
  document.getElementById("radial-ping-menu")?.remove();

  const mousePos = canvas.mousePosition;
  const screenPos = canvas.stage.worldTransform.apply(mousePos);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <g transform="translate(${center},${center}) rotate(45) translate(-${center},-${center})">

    <!-- Up -->
    <g class="segment" data-pos="${pings[0].id}"
        data-tooltip="${pings[0].id}" data-tooltip-direction="UP" transform="translate(${center},${center})">
      <path d="M0,0 L-${radius},0 A${radius},${radius} 0 0,1 0,-${radius} Z" 
            fill="#302831" stroke="${borderColor}" stroke-width="2"/>
      <image href="${pings[0].icon}"
             x="${-imgOffset * 0.5 - imgSize / 2}" y="${-imgOffset * 0.5 - imgSize / 2}"
             width="${imgSize}" height="${imgSize}"
             transform="rotate(-45, ${-imgOffset * 0.5}, ${-imgOffset * 0.5})"/>
    </g>

        <!-- Left -->
    <g class="segment" data-pos="${pings[1].id}" transform="translate(${center},${center})">
      <path d="M0,0 L0,${radius} A${radius},${radius} 0 0,1 -${radius},0 Z" 
            fill="#302831" stroke="${borderColor}" stroke-width="2"/>
      <image href="${pings[1].icon}"
             x="${-imgOffset * 0.5 - imgSize / 2}" y="${imgOffset * 0.5 - imgSize / 2}"
             width="${imgSize}" height="${imgSize}"
             transform="rotate(-45, ${-imgOffset * 0.5}, ${imgOffset * 0.5})"/>
    </g>

    <!-- Right -->
    <g class="segment" data-pos="${pings[2].id}" transform="translate(${center},${center})">
      <path d="M0,0 L0,-${radius} A${radius},${radius} 0 0,1 ${radius},0 Z" 
            fill="#302831" stroke="${borderColor}" stroke-width="2"/>
      <image href="${pings[2].icon}"
             x="${imgOffset * 0.5 - imgSize / 2}" y="${-imgOffset * 0.5 - imgSize / 2}"
             width="${imgSize}" height="${imgSize}"
             transform="rotate(-45, ${imgOffset * 0.5}, ${-imgOffset * 0.5})"/>
    </g>
    
    <!-- Down -->
    <g class="segment" data-pos="${pings[3].id}" transform="translate(${center},${center})">
      <path d="M${radius},0 A${radius},${radius} 0 0,1 0,${radius} L0,0 Z" 
            fill="#302831" stroke="${borderColor}" stroke-width="2"/>
      <image href="${pings[3].icon}"
             x="${imgOffset * 0.5 - imgSize / 2}" y="${imgOffset * 0.5 - imgSize / 2}"
             width="${imgSize}" height="${imgSize}"
             transform="rotate(-45, ${imgOffset * 0.5}, ${imgOffset * 0.5})"/>
    </g>
    
    <!-- Center circle -->
    <circle cx="${center}" cy="${center}" r="${centerRadius}" fill="${borderColor}"/>
  </g>
</svg>`;

  const div = document.createElement("div");
  div.id = "radial-ping-menu";
  div.style.position = "fixed";
  div.style.left = `${screenPos.x - center}px`;
  div.style.top = `${screenPos.y - center}px`;
  div.style.zIndex = 100;
  div.style.pointerEvents = "auto";
  div.innerHTML = svg;

  document.body.appendChild(div);

  //   // Optional: click outside to close
  //   const closeHandler = (event) => {
  //     if (!div.contains(event.target)) {
  //       div.remove();
  //       document.removeEventListener("click", closeHandler);
  //     }
  //   };
  //   setTimeout(() => document.addEventListener("click", closeHandler), 0);
}

export function handlePingSelection() {
  const hoveredItem = document.querySelector(
    "#radial-ping-menu g.segment:hover",
  );
  const type = hoveredItem?.dataset.pos || "default";

  pingAnimation(type);
  document.getElementById("radial-ping-menu")?.remove();
}

function pingAnimation(type) {
  const mousePos = canvas.mousePosition;
  const name = `ping-${game.user.id}`;

  const pingInfo = PINGS[type];

  Sequencer.EffectManager.endEffects({ name: name });
  const volume = game.settings.get("core", "globalSoundEffectVolume");
  const audioDistance =
    ((canvas.scene.width + canvas.scene.height) / 2 / canvas.grid.size) *
    canvas.grid.distance;

  new Sequence()
    .effect()
    .zIndex(2)
    .file(pingInfo.icon)
    .anchor(pingInfo.anchor)
    .name(name)
    .atLocation(mousePos)
    .tint(pingInfo.color)
    .duration(3000)
    .fadeIn(500, { ease: "easeOutQuart" })
    .scaleIn(0.5, 500, { ease: "easeOutQuad" })
    .fadeOut(250)
    .scaleOut(0.5, 250, { ease: "easeOutQuad" })
    .xray()
    .aboveInterface()
    .size(1, { gridUnits: true })
    .filter("Glow", { distance: 5, color: 0x000, quality: 0.1 })
    .sound()
    .file(pingInfo.sfx)
    .volume(volume)
    .alwaysForGMs()
    .radius(audioDistance)
    .atLocation(mousePos)
    .distanceEasing()
    .play();
}
