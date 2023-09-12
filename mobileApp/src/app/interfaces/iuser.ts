export interface Iuser {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    userRole: string;
    cart: any[];
    purchaseHistory: any[];
}
