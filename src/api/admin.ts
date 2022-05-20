import request from "../utils/request1"

interface ResponseSuccess<T = {}> {
    msg: string;
    code: number;
    data: {
        dataList: any;
        currentPage: any;
        limit: any;
        totalCount: any;
        msg:any;
    };
    
}

export const getAdminList=(page: number = 1)=>{

    return request.get<any, ResponseSuccess<{code: string,msg: string}>>('/admin/admin/list',{
            params: {page:page}
    })

}

export const deleteAdminById=(adminId: number)=>{

    return request.delete<any, ResponseSuccess<{code: string,msg: string}>>('/admin/admin/' + adminId ,{

    })

}


export const updateAdminById=(adminId: number,admin:any)=>{

    return request.put<any, ResponseSuccess<{code: string,msg: string}>>('/admin/admin/' + adminId ,{
        data:admin,

    })

}

export const adddAdmin1=(admin:any)=>{

    return request.post<any, ResponseSuccess<{code: string,msg: string}>>('/admin/admin',{
        data:admin,

    })

}



