import { generateBPMN_Actors } from "./BPMNElements.js";

const checkActors = (json) => {
  return json.blocks[0].actors.length <= 0;
}

const isValidActor = (json) => { 
  return getActor(json) ? true : false

};

const getActor = (json) => {
    return json.blocks[0].actors.filter(
        (actor) =>
          actor.name &&
          actor.name.trim() !== "" &&
          actor.name.trim() !== "..............."
      );
}

export function convertToBPMN(jsonData) {
  if(checkActors(jsonData)) return {};
  if(!isValidActor(jsonData)) return {};
  const actors = getActor(jsonData);

  const BPMN_STATEMENT = generateBPMN_Actors(actors, {});
  console.log("BPMN_STATEMENT");
  console.log(BPMN_STATEMENT);
  return BPMN_STATEMENT;
  
}
