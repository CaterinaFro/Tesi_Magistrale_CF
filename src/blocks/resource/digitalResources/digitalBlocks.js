export const DIGITAL_TOOLS_BLOCKS = [
    {
      "type": "custom_digital",
      "message0": "Custom DIGITAL TOOL: %1* %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8",
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
      ],
      "previousStatement": "resource",
      "nextStatement": "resource",
      "colour": '#64b0a9',
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "custom_digital_component",
      "message0": "Custom DIGITAL COMPONENT: %1* %2 Activities: %3 %4 %5 Advanced settings: %6 Attributes: %7 %8 Aggregation: %9",
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
          "type": "input_dummy",
          "name": "AGGREGATION",
        }
      ],
      "extensions": ["dynamic_aggregation_menu_extension"],
      "previousStatement": "resource",
      "nextStatement": "resource",
      "colour": '#64b0a9',
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  