export const SCHEMA_BLOCK = [
    {
      "type": "info",
      "message0": "• Who are the actors involved? %1 Insert actors: %2 %3 • Which are the resources? %4 Insert resources: %5 %6",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_statement",
          "name": "ACTORS",
          "check": "actor",
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_statement",
          "name": "RESOURCES_UNIT",
          "check": "resource",
        },
      ],
      "colour": '#a68c83',
      "tooltip": "",
      "helpUrl": ""
    },
  ];
  