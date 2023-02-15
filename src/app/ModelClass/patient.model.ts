


export interface Patient {
    id:number;
    p_first_name: string;
    p_last_name: string;
    p_age: number;
    p_weight: number;
    p_gender: string;
    p_address: string;
    p_mobile: string;
    p_imageurl:string;
  
    p_platform: string;
  
    username: string;
    p_email: string;
    p_password: string;
    p_pass_confirm: string;
    cabin_id:number;
    cabin:cabin;

  
  }

  export interface cabin{
    id:number;
    cabin_no:string;
    cabin_type:string;
    floor:string;
    cabin_fare:number;
    cabin_status:string;
  }
