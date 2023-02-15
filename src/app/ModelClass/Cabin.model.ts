export interface Cabin{
    id:number;
    cabin_no:string;
    cabin_type:string;
    floor:string;
    cabin_fare:number;
    cabin_status:string;
    patient: Patient2;

}
export interface Patient2{
    id:number;
    cabin_no:string;
    cabin_type:string;
    floor:string;
    cabin_fare:number;
    cabin_status:string;
    
}