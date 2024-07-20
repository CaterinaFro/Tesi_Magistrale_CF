import { ws } from "../runner/runner.js";
import { showCustomAlert } from "./alerts.js";

export const removeBlockType = (name) => {
  return name.replace(/\s*\(.*?\)\s*/g, "");
};

// export const remove_empty = (target) => {
//   Object.keys(target).map(function (key) {
//     if (target[key] instanceof Object) {
//       if (
//         !Object.keys(target[key]).length &&
//         typeof target[key].getMonth !== "function"
//       ) {
//         delete target[key];
//       } else {
//         remove_empty(target[key]);
//       }
//     } else if (target[key] === null) {
//       delete target[key];
//     }
//   });
//   return target;
// };

export const blockAlreadyInWs = (new_block_name, blockType) => {
  if (
    ["custom_attribute", "custom_operation", "custom_generalization"].includes(
      blockType
    )
  ) {
    return false;
  }
  let blocks = ws.getAllBlocks(true);
  let counter = -1;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].getFieldValue("NAME") !== null) {
      if (
        new_block_name.localeCompare(
          blocks[i].getFieldValue("NAME").toLowerCase()
        ) == 0 &&
        blocks[i].type == blockType
      ) {
        counter++;
      }
    }
  }

  return counter > 0;
};

export const reset = (blockName, type, isDeleted = false) => {
  let blocks = ws.getAllBlocks(true);
  blocks.forEach((block) => {
    const fields = ["ASSOCIATIONS", "AGGREGATION"];
    fields.forEach((field) => {
      const fieldValue = block.getFieldValue(field)?.toLowerCase();
      if (
        fieldValue &&
        (fieldValue === blockName.toLowerCase() ||
          fieldValue ===
            (blockName.toLowerCase() + " (" + type + ")").toLowerCase())
      ) {
        block.setFieldValue("NONE", field);
        let activityName = block.getFieldValue("NAME");
        let blockType = type
          .replace("_", " ")
          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
        let containerBlockType = block.type
          .replaceAll("_", " ")
          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
        let containerName =
          containerBlockType === "Custom Operation"
            ? "attività"
            : containerBlockType;
        let action = isDeleted ? "eliminato" : "modificato";
        showCustomAlert(
          `ATTENZIONE!\n\nHai ${action} il blocco ${blockType} collegato al blocco ${containerName} "${activityName}".\nIMPORTANTE: Ricorda di riselezionare il collegamento tra il campo aggiornato e ${containerName}.\n`
        );
      }
    });
  });
};



// Funzione per gestire il cambiamento del campo di testo
export function onTextFieldChange(event) {
    const newValue = event.target.value;
    const matches = newValue.match(/(.*?)\s+\((.*?)\)/);
    if (matches) {
      const name = matches[1];
      const type = matches[2];
      reset(name, type);
    }
  }
  
  // Funzione per rimuovere i blocchi mancanti
  export function removeMissingBlocks(nameArray, blockClass) {
    let blocksNow = ws.getAllBlocks(true);
    let nameBlocks = [];
  
    for (let y = 0; y < blocksNow.length; y++) {
      if (blockClass.includes(blocksNow[y].type)) {
        let name = blocksNow[y].getFieldValue("NAME");
        if (blockClass[0] === "custom_digital") {
          nameBlocks.push(name);
        } else {
          nameBlocks.push(`${name} (${blocksNow[y].type})`);
        }
      }
    }
  
    if (Array.isArray(nameArray)) {
      for (let i = nameArray.length - 1; i >= 0; i--) {
        if (!nameBlocks.includes(nameArray[i])) {
          nameArray.splice(i, 1);
        }
      }
    } else {
      for (let key in nameArray) {
        if (!nameBlocks.includes(key)) {
          delete nameArray[key];
        }
      }
    }
  }
