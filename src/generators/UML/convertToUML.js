import reader from '../../libs/xmi21-reader.js';
import plantumlEncoder from 'plantuml-encoder';
import { createUMLClass, createGeneralizations, createAssociations, createAggregations } from './umlElements.js';
import { DOM_NODES } from '../../utils/domElements.js';
import { remove_empty } from '../../utils/blockUtils.js';
import { cleanXmi } from '../../runner/views/umlView.js';

export function convertToUML(xmiString) {
  const data = reader.formatXMItoObjectJS(xmiString);

  // const elements = cleanXmi(remove_empty(data.ownedElements[0].ownedElements));
  // if (elements.length === 0) {
  //   return ''; // Restituisci stringa vuota se non ci sono elementi validi
  // }
  
  let elements = data.ownedElements[0].ownedElements;

  // Pulisci gli elementi rimuovendo quelli senza nome
  elements = cleanXmi(elements);
  if (elements.length === 0) {
    return ""; // Ritorna stringa vuota se non ci sono elementi validi
  }
  
  let umlString = "@startuml\n";
  elements.forEach(element => {
    if (element.ownedElements != null) {
      element.ownedElements.forEach(e => {
        if (e.ownedElements != null && e.name != "" && e.name != '') {
          let generalizations = [];
          let associations = [];

          e.ownedElements.forEach(generalization => {
            if (generalization.type != null && generalization.type.$ref === "generalization") {
              generalizations.push(generalization);
            } else {
              associations.push(generalization);
            }
          });

          if (generalizations.length > 0) {
            umlString += createGeneralizations(e, generalizations);
          }
         
          if (e.operations != null) {
            umlString += createUMLClass(e);
            umlString += createAssociations(e, associations);
            umlString += createAggregations(e, associations.filter(assoc => assoc.name.startsWith('aggregation_')));
          } else {
            umlString += createUMLClass(e);
            umlString += createAggregations(e, associations.filter(assoc => assoc.name.startsWith('aggregation_')));
          }
        } else {
          umlString += createUMLClass(e);
        }
      });
    } else {
      umlString += `${element.name.replace(" ", '_')}\n`;
    }
  });

  umlString += "@enduml";
  return umlString;
}

// export function displayUMLDiagram(umlString) {
//   const encoded = plantumlEncoder.encode(umlString);
//   const umlUrl = `http://www.plantuml.com/plantuml/img/${encoded}`;
//   DOM_NODES.umlDiagramDiv.innerHTML = `<img src="${umlUrl}" alt="UML Diagram">`;  
// }


