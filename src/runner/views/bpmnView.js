import { GENERATORS } from "../../generators";

export const displayBPMN = (objectWS) => {
    let bpmnstring = GENERATORS.BPMN.convertToBPMN(objectWS);
    return bpmnstring;
  };
  