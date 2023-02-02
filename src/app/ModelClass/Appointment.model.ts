export interface Appointment {
  id: number;
  apSerial: number /* Should be auto increment on daily basis*/;
  apFirstName: string;
  apLastName: string;
  apMobile: string;
  apDate: Date;
  // appointment_type!:string;
  apEntryDate: string;
  apDocDepartments: number;
  apDocName: string;
  apLocation: string;
  apGender: string;
  apAge: number;
  apDeseaseDetails: string;
  emp_id: number;
  apStatus: number;
}
