
export function createUMLClass(element) {
    let umlClass = `class ${element.name.replace(" ", '_')} {\n`;
  
    if (element.attributes != null) {
      element.attributes.forEach(attr => {
        umlClass += `${attr.name.replace(" ", '_')}\n`;
      });
    }
  
    if (element.operations != null) {
      element.operations.forEach(oper => {
        umlClass += `${oper.name.replace(" ", '_')}()\n`;
      });
    }
  
    umlClass += "}\n";
    return umlClass;
  }


  // FRECCE
  
  export function createGeneralizations(e, generalizations) {
    let umlString = "";
    generalizations.forEach(element => {
      umlString += `${e.name.replace(" ", '_')} <|-- ${element.name.replace(" ", '_')}\n`;
    });
    return umlString;
  }
  
  export function createAssociations(e, associations) {
    let umlString = "";
    let nameActor = "";
    let namePadre = "";
    
    associations.forEach(association => {
      nameActor = association.end2.name.replace(" ", '_');
      namePadre = association.end1.name.replace(" ", '_');
      umlString += `${nameActor} <-- ${namePadre} :${association.name.replace(" ", '_')}\n`;
    });
  
    return umlString;
  }
  
  export function createAggregations(e, aggregations) {
    let umlString = "";
    let nameActor = "";
    let namePadre = "";
    
    aggregations.forEach(aggregation => {
      nameActor = aggregation.end2.name.replace(" ", '_');
      namePadre = aggregation.end1.name.replace(" ", '_');
      umlString += `${nameActor} o-- ${namePadre}\n`;
    });
  
    return umlString;
  }
  