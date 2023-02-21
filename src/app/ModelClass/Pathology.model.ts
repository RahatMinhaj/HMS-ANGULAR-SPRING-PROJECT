import { Patient } from "./Patient.model";

export interface Pathology{
    id:number;
    patient_id:number;
    pathologist_id:number //should be from employee table where pathologist will be there
    doc_id:number //doct reference id
    pathology_type_id:number;
    pathology_price:number;
    pathology_desc:string;
    createdAt:Date;

}
