import {User,ROLES} from './01-enum'

const currentUser: User={
  username:'nicobytes',
  role:ROLES.CUSTOMER
}

export const checkAdminRole=()=>{
  if (currentUser.role ==='admin'){ // o tambien le puedo poder  if (currentUser.role ===ROLES.ADMIN){
    return true
  }
  return false
}

const rta=checkAdminRole();
console.log('checkAdminRole',rta);

export const checkRole=(role1: string, role2:string)=>{
  if (currentUser.role ===role1){ // o tambien le puedo poder  if (currentUser.role ===ROLES.ADMIN){
    return true
  }
  if (currentUser.role ===role2){ // o tambien le puedo poder  if (currentUser.role ===ROLES.ADMIN){
    return true
  }
  return false
}

const rta2=checkRole(ROLES.ADMIN,ROLES.SELLER);
console.log('checkRole',rta2);

export const checkRoleV2=(roles: string[])=>{
  if (roles.includes(currentUser.role)){ // o tambien le puedo poder  if (currentUser.role ===ROLES.ADMIN){
    return true
  }
  return false
}

const rta3=checkRoleV2([ROLES.ADMIN,ROLES.SELLER]);
console.log('checkRoleV2',rta3);


// Esto es parametro rest
// Los parámetros rest nos permiten enviar la cantidad que
// queramos de parámetros a una función, casi sin limite.
export const checkRoleV3=(...roles: string[])=>{
  if (roles.includes(currentUser.role)){ // o tambien le puedo poder  if (currentUser.role ===ROLES.ADMIN){
    return true
  }
  return false
}

const rta4=checkRoleV3(ROLES.ADMIN,ROLES.SELLER,ROLES.CUSTOMER);
console.log('checkRoleV2',rta4);
