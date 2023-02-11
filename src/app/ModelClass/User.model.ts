export interface User{
    userName:string;
    userFirstName:string;
    userLastName:string;
    email:string;
    userPassword:string;
    // credentialsNonExpired:boolean;
    userRoleModel:string[];
    enabled:boolean;
    accountNonLocked:boolean;
}