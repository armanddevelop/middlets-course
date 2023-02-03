export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  name: string;
  rol: ROLES;
};

export const cheUser: User = {
  name: 'sheyeye',
  rol: ROLES.SELLER,
};
