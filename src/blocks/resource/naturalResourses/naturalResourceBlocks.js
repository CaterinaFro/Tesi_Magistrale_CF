export const NATURAL_RESOURCES_BLOCKS = [
    {
      "type": "field_resource",
      "lastDummyAlign0": "CENTRE",
      "message0": "%1 %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "NAME",
          "text": "Field"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "OPERATIONS",
          "check": "operation",
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "ATTRIBUTES",
          "check": "attribute",
        }
      ],
      "previousStatement": "resource",
      "nextStatement": "resource",
      "colour": '#7C61AC',
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "water_resource",
      "message0": "%1 %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8 Specialisation: %9 %10",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "NAME",
          "text": "Water"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "OPERATIONS",
          "check": "operation",
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "ATTRIBUTES",
          "check": "attribute",
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "GENERALIZATIONS",
          "check": "generalization",
        }
      ],
      "previousStatement": "resource",
      "nextStatement": "resource",
      "colour": '#7C61AC',
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "custom_resource",
      "message0": "Custom RESOURCE: %1* %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8 Specialisation: %9 %10",
      "args0": [
        {
          "type": "field_input",
          "name": "NAME",
          "text": "..............."
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "OPERATIONS",
          "check": "operation",
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "ATTRIBUTES",
          "check": "attribute",
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "GENERALIZATIONS",
          "check": "generalization",
        }
      ],
      "previousStatement": "resource",
      "nextStatement": "resource",
      "colour": '#7C61AC',
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  