
export type TUser = {
    _id: string;
    name: {
        firstName: string;
        lastName?:string;
    },
    profile?:string;
    email:string;
    status: string;
    __v?: string | number; 
}