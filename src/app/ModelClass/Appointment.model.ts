export interface Appointment {
  id: number;
  // p_type:string;
  p_id:number;
  p_type:string;
  apSerial: number /* Should be auto increment on daily basis*/;
  apFirstName: string;
  apLastName: string;
  apMobile: string;
  apDate: Date;
  // appointment_type!:string;
  apEntryDate: string;
  dept_id: number;
  doc_id: string;
  apLocation: string;
  apGender: string;
  apAge: number;
  apDeseaseDetails: string;
  emp_id: number;
  apStatus: string;


  
  appointmentuserName:string;
}
