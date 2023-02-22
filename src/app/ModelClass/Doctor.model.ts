export interface Doctor{
    id:number;
    first_name:string;
    last_name:string;
    mobile:string;
    dept_id:number;
    degree:string;
    specialization:string;
    details:string;
    visit_charge:number;
    doc_join_date:number;
    department: Department2;

}
export interface Department2{
    id: number;
  }