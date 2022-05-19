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

export const getRoleAll=()=>{

    return request.get<any, ResponseSuccess<{code: string,msg: string}>>('/admin/role/all',{
            // params: {page:page}
    })

}