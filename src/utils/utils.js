// Funzione per generare un ID casuale compreso tra 10000 e 99999
export const generateRandID = () => {
  return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
}

// Funzione per generare un ID a partire dal nome della classe
export const generateID = (nomeClasse) => {
  if (nomeClasse != undefined) {
    nomeClasse = nomeClasse.trim().toLowerCase();
    var id = "";
    for (let c = 0; c < nomeClasse.length; c++) {
      var charCode = nomeClasse.charCodeAt(c);
      id += charCode;
    }
    return id;
  }
}

  export const capitalizeFirstLetter = (string) =>  {
    if (string != undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}


// Funzione per rimuovere la disambiguazione dai nomi TARGET usata in convertBPMN
export function cleanName(name) {
  return name.replace(/\s*\(.*?\)$/, '').toLowerCase();
}

