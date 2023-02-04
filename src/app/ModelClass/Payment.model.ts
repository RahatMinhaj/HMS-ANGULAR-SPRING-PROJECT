export interface Payment{
    id:number;
    p_id:number;
    p_name:string;
    dept_id:number;
    doc_id:number;
    admission_date:Date;
    release_date:Date;


    doc_charge:number;
    ambulance_charge:number;
    cabin_charge:number;
    med_charge:number;
    test_charge:number;
    ot_charge:number;
    discount:number;

    total_bill:number;


    // SPring Data field
    active:boolean;
    createdAt:Date;
    createdBy:number;
    updatedAt:Date;
    updatedBy:number;

}