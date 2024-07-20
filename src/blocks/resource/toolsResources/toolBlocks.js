export const TOOLS_BLOCKS = [
    {
      "type": "irrigation_tool",
      "message0": "%1 %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8 Specialisation: %9 %10",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "NAME",
          "text": "Irrigation tool"
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
      "colour": '#dbab27',
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "custom_tool",
      "message0": "Custom TOOL: %1* %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8 Specialisation: %9 %10",
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
      "colour": '#dbab27',
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  