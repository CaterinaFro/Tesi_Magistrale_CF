import "../index.css";
import { setupBlocklyWorkspace } from "../blocks/workspace.js";
import { DOM_NODES } from "../utils/domElements.js";
import { VIEWS } from "./views";

require("../libs/uml2-import");
require("../libs/uml2-export");

export const ws = setupBlocklyWorkspace(DOM_NODES.blocklyDiv);

export const runCode = () => {
  const objectWS = VIEWS.displayJSON(ws);
  const { sanitizedXMI, xmiWS } = VIEWS.displayXMI(objectWS);
  VIEWS.displayReport(objectWS);
  VIEWS.displayUML(xmiWS);
  
  console.log("BPMN");
  console.log(VIEWS.displayBPMN(objectWS));
  console.log("IstarStatement");
  console.log(VIEWS.displayISTAR(objectWS));
  console.log(JSON.stringify(VIEWS.displayISTAR(objectWS)));
};
