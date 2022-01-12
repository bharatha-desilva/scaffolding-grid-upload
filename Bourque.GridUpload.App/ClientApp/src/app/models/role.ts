import { Privilege } from './privilege';

export enum Role {
    ADMIN = 'shipper-bi-admin',
    USER = 'shipper-bi-user',
    GUEST = 'shipper-bi-guest',
}

export class Roles {
    roles: { [key: string]: Privilege[] } = {};
}
