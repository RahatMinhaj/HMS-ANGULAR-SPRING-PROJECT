export interface ICommonService<T>{

    save(data:T):any;

    getAll():any;

    getuserByID(id:number):any;

    updateData(data : T):any;

    deleteById(id : number):any;
}