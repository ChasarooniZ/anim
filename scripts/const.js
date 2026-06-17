export const MODULE_ID = "anim";
const BASE_ASSET_PATH = "modules/anim/assets";
const PING_ART_PATH = `${BASE_ASSET_PATH}/art/pings/`;
const PING_SFX_PATH = `${BASE_ASSET_PATH}/sfx/pings/`;
export const PINGS = {
  "assist-me": {
    icon: `${PING_ART_PATH}assist-me.svg`,
    anchor: { x: 0.5, y: 1 },
    sfx: `${PING_SFX_PATH}steampunk-spring-song-b.ogg`,
  },
  danger: {
    icon: `${PING_ART_PATH}danger.svg`,
    anchor: 0.5,
    sfx: `${PING_SFX_PATH}perc-warning-a.ogg`,
  },
  default: {
    icon: `${PING_ART_PATH}default.svg`,
    anchor: { x: 0.5, y: 1 },
    sfx: `${PING_SFX_PATH}aggressive-twinkle.ogg`,
  },
  investigate: {
    icon: `${PING_ART_PATH}investigate.svg`,
    anchor: { x: 0.95, y: 0.65 },
    sfx: `${PING_SFX_PATH}bells-magic-box-c.ogg`,
  },
  "on-my-way": {
    icon: `${PING_ART_PATH}on-my-way.svg`,
    anchor: { x: 0.5, y: 1 },
    sfx: `${PING_SFX_PATH}unholy-ui-souls-14.ogg`,
  },
  question: {
    icon: `${PING_ART_PATH}question.svg`,
    anchor: { x: 0.5, y: 1 },
    sfx: `${PING_SFX_PATH}question-temp.ogg`,
  },
};

export const DEFAULT_PINGS = [
  "danger",
  "investigate",
  "question",
  "on-my-way",
].map((id) => ({ id, icon: PINGS[id].icon }));
