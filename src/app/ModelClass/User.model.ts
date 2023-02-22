export interface User{
    userName:string;
    userFirstName:string;
    userLastName:string;
    email:string;
    password:string;
    userMobile:string;
    userGender:string;



    userDOB:Date;
    userLoc:string;
    userRegistrationDate:Date;
    registrationIP:string;





    // credentialsNonExpired:boolean;
    userRoleModel:string[];
    enabled:boolean;
    accountNonLocked:boolean;
}