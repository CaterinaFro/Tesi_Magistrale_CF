import * as Blockly from 'blockly/core';
import { SCHEMA_BLOCK } from './schema/schemaBlock.js';
import { ACTOR_BLOCKS } from './actor/actorBlocks.js';
import { ATTRIBUTE_BLOCKS } from './attribute/attributeBlock.js';
import { OPERATION_BLOCKS } from './operation/operationBlocks.js';
import { NATURAL_RESOURCES_BLOCKS } from './resource/naturalResourses/naturalResourceBlocks.js';
import { TOOLS_BLOCKS } from './resource/toolsResources/toolBlocks.js';
import { DIGITAL_TOOLS_BLOCKS } from './resource/digitalResources/digitalBlocks.js';
import { SPECIALISATIONS_BLOCKS } from './specialisation/specialisationBlocks.js';
import { registerExtensions } from './extension.js';
import { setupBlocklyWorkspace } from './workspace.js';

const allBlocks = [
  ...SCHEMA_BLOCK,
  ...ACTOR_BLOCKS,
  ...ATTRIBUTE_BLOCKS,
  ...OPERATION_BLOCKS,
  ...NATURAL_RESOURCES_BLOCKS,
  ...TOOLS_BLOCKS,
  ...DIGITAL_TOOLS_BLOCKS,
  ...SPECIALISATIONS_BLOCKS,
];

registerExtensions(Blockly);

// Definizione dei blocchi (blocks) per il JSON-only
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(allBlocks);

// Funzione che inizializza Blockly
const blocklyInit = () => {
  Blockly.common.defineBlocks(blocks);
  Blockly.ContextMenuRegistry.registry.unregister('blockComment');
  Blockly.ContextMenuRegistry.registry.unregister('blockDisable');
};

export { allBlocks, blocks, blocklyInit, setupBlocklyWorkspace };

