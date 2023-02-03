import { User, ROLES } from './enum';

const currentUser: User = {
  name: 'she-yeye',
  rol: ROLES.CUSTOMER,
};

export const checkAdminRol = (): boolean => {
  if (currentUser.rol === ROLES.ADMIN) {
    return true;
  }
  return false;
};

export const checkRol = (...roles: string[]) => {
  if (roles.includes(currentUser.rol)) {
    return true;
  }
  return false;
};

const resp = checkAdminRol();
const resp2 = checkRol(ROLES.ADMIN, ROLES.CUSTOMER);

console.log('esto vale resp ', resp);
console.log('esto vale resp2 ', resp2);
