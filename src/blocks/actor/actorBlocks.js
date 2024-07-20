export const ACTOR_BLOCKS = [
    {
      "type": "custom_actor",
      "message0": "Custom ACTOR: %1* %2 What are the activities carried out by the actor? %3 %4 Attributes: %5 %6",
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
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "ATTRIBUTES",
          "check": "attribute",
        }
      ],
      "previousStatement": "actor",
      "nextStatement": "actor",
      "colour": '#D87D2D',
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "default_actor",
      "message0": "%1 %2 What are the activities carried out by the actor? %3 %4 Attributes: %5 %6",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "NAME",
          "text": "User"
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
        },
        {
          "type": "input_statement",
          "name": "ATTRIBUTES",
          "check": "attribute",
        }
      ],
      "previousStatement": "actor",
      "nextStatement": "actor",
      "colour": '#D87D2D',
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  