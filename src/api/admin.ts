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


