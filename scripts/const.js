export const MODULE_ID = "anim";
export const PINGS = {
  "assist-me": {
    icon: "modules/anim/assets/art/pings/assist-me.svg",
    anchor: { x: 0.5, y: 1 },
    sfx: "graphics-sfx.crafting.metal.alert.01",
  },
  danger: {
    icon: "modules/anim/assets/art/pings/danger.svg",
    anchor: 0.5,
    sfx: "graphics-sfx.crafting.misc.ui.alert.03",
  },
  default: {
    icon: "modules/anim/assets/art/pings/default.svg",
    anchor: { x: 0.5, y: 1 },
    sfx: "graphics-sfx.crafting.misc.ui.alert.04.01",
  },
  investigate: {
    icon: "modules/anim/assets/art/pings/investigate.svg",
    anchor: { x: 0.95, y: 0.65 },
    sfx: "graphics-sfx.crafting.metal.alert.01",
  },
  "on-my-way": {
    icon: "modules/anim/assets/art/pings/on-my-way.svg",
    anchor: { x: 0.5, y: 1 },
    sfx: "graphics-sfx.crafting.metal.alert.01",
  },
  question: {
    icon: "modules/anim/assets/art/pings/question.svg",
    anchor: { x: 0.5, y: 1 },
    sfx: "graphics-sfx.crafting.metal.alert.01",
  },
};

export const DEFAULT_PINGS = [
  "danger",
  "assist-me",
  "question",
  "on-my-way",
].map((id) => ({ id, icon: PINGS[id].icon }));
