import { registerControls } from "./controls.js";
import { registerSettings } from "./setting.js";

Hooks.once("init", async function () {
  registerSettings();
  registerControls();
});

Hooks.once("ready", async function () {});
