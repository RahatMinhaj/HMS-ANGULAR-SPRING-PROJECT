export interface UserManagementModel{

    userName:string;
   email:string;
   userFirstName:string;
   userLastName:string;
   password:string;
   userDOB:Date;
   userLoc:string;
   userRegistrationDate:string;
   registrationIP:string;
   role:Role;
}

export interface Role{
   roleName:string;
   roleDescription:string;
}