import * as Blockly from "blockly";
import { toolbox } from "./toolbox/toolbox.js";

export const xmlText =
  '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"><block type="info" id="TBgAn^~ir@P9*e=ib?;@" x="350" y="50"></block></xml>';

export const setupBlocklyWorkspace = (blocklyDiv) => {
  return Blockly.inject(blocklyDiv, {
    toolbox,
    grid: {
      spacing: 20,
      length: 3,
      colour: "rgb(219, 212, 201)",
      snap: true,
    },
    move: {
      scrollbars: {
        horizontal: true,
        vertical: true,
      },
      drag: true,
      wheel: true,
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      pinch: true,
    },
  });
};
