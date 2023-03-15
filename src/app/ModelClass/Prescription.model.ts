export interface Prescription{
    prescription_id:number;
    doc_id:number;
    p_id:number;
    med_name:string;
    med_group_name:string;

    morning:boolean;
    noon:boolean;
    night:boolean;

    eatingTime:string;
    duration:string;
    weight:string;
    med_type:string;

    


}