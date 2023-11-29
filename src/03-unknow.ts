// ANY

let anyVar: any; // Con any desactivamos inferencia
anyVar=true
anyVar=undefined
anyVar=null
anyVar=1
anyVar=[]
anyVar={}

let isNew: boolean=anyVar;  // Bota error al ser boolean
anyVar.toUpperCase();

// anyVar.doSomething(); ME deja ejecutarlo aunque no sepa si ese metodo es valido
// Practicamente volvemos a JS por que no tiene el analisis de codigo estatico


let unknowVar: unknown; // Me deja asignarle a una misma variable diferentes tipos
unknowVar=true
unknowVar=undefined
unknowVar=null
unknowVar=1
unknowVar=[]
unknowVar={}

// unknowVar.doSomething();
if (typeof unknowVar==='string'){
  unknowVar.toUpperCase();
}

if (typeof unknowVar==='boolean'){
  let isNewV2: boolean=unknowVar;
}
 // Bota error al ser boolean


// Con unknow me fuerza a hacer una verificacion de tipo con un if y typeof

const parse=(str:string): unknown=>{
  return JSON.parse(str);
}



