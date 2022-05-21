import { action, makeAutoObservable, observable, runInAction } from "mobx"
import { adddAdminInfo } from "../api/admin"

interface IAdmin {
    name: string
    id: number
}
export enum AdminStatus{
    UN_AUTH = 0,
    LOADING = 1,
    FINISH = 2
}


class AdminStore {

    @observable
    admin:IAdmin = {id: 0, name: 'bybl23333'}
    @observable
    adminState:AdminStatus= AdminStatus.UN_AUTH

    constructor() {
        makeAutoObservable(this)
    }

    @action
    initAdmin=async ()=>{
        this.adminState = AdminStatus.LOADING
        const admin=await adddAdminInfo().then(response=>{
            return response.data
        })
        
    runInAction(() => {
        // @ts-ignore
        this.admin = admin
        this.adminState = AdminStatus.FINISH
    })
        
    }

}

export default AdminStore