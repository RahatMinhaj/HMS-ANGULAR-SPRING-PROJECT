export interface ICommonComp<T> {

    getAll(): any;

    create(): void;

    edit(model: T, modal?: any): void;

    updateData(): any;

    deleteByID(id:number):void;


}