export const createProduct=(
  id: string|number,

  // Los valores opcionales serian:

  isNew:boolean=true,
  stock: number=10,
)=>{
  return{
    id,
    stock,
    isNew
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

const p4=createProduct(1,true,100); // Si no manda nada en stock queda en undefined
console.log(p4);

const p5=createProduct(5,false); // Si no manda nada en stock queda en undefined
console.log(p5);



