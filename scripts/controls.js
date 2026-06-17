import { MODULE_ID } from "./const.js";
import { handlePingSelection, openPingMenu } from "./lib/pingMenu.js";

export function registerControls() {
  game.keybindings.register(MODULE_ID, "ping", {
    name: game.i18n.localize(`${MODULE_ID}.controls.ping.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.ping.hint`),
    editable: [
      {
        key: "KeyG",
      },
    ],
    onDown: (context) => {
      openPingMenu();
    },
    onUp: () => {
      handlePingSelection();
    },
    restricted: false, // Restrict this Keybinding to gamemaster only?
    //   reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });
}
