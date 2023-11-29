export const createProduct=(
  id: string|number,
  isNew?:boolean,
  stock?: number,
)=>{
  return{
    id,

    // Parametro opcional se ponia asi || pero es mejor asi ??
    // De esta manera no asume 0 , '' o false como false
    stock: stock ?? 10,  // Aqui se pone el parametro opcional
    isNew: isNew ?? true
  }

}


// en JS
// 0     === false
// ''    === false
// false === false


const p1=createProduct(1,true,12);
console.log(p1);

const p2=createProduct(1); // Si no manda nada en stock queda en undefined
console.log(p2);

const p3=createProduct(1,false,0); // Si no manda nada en stock queda en undefined
console.log(p3);

