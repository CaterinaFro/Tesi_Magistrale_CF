export const OPERATION_BLOCKS = [
    {
      "type": "custom_operation",
      "message0": "Custom ACTIVITY: %1* %2 • Motivation %3 %4 • Using resource or interacting %5  with actor %6",
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
          "type": "field_input",
          "name": "MOTIVATION",
          "text": "..............."
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy",
          "name": "ASSOCIATIONS",
        }
      ],
      "extensions": ["dynamic_menu_extension"],
      "previousStatement": "operation",
      "nextStatement": "operation",
      "colour": "#90B763",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "login",
      "message0": "%1",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "NAME",
          "text": "login"
        }
      ],
      "previousStatement": "operation",
      "nextStatement": "operation",
      "colour": "#90B763",
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  