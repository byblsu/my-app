import { userInfo } from "os";
import  request  from "../utils/request1"

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

export const getUserList=(page:number= 1) => {
    return request.get<any, ResponseSuccess<{code: string,msg: string,params: number}>>('admin/user/list', {
        params: {page}
    }
    )
}

export const deleteUserList=(userId: number)=> {
    return request.delete<any, ResponseSuccess<{code: string,msg: string}>>(
        '/admin/user/' + userId 
)
}

// export const deleteUserList=(userId: number)=> {
//     return request.delete<any, ResponseSuccess<{token: string,msg: string}>>({
//         '/admin/user/' + userId 
// })
// }


// delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

export const updateUserById=(userId:number,user:any)=>{
    return request.put<any, ResponseSuccess<{code: string,msg: string}>>('/admin/user/'+userId,{
        data:user
    })
}

export const addUser=(user:any)=>{

    return request.post<any, ResponseSuccess<{code: string,msg: string}>>('/admin/user/add',{
            date: user
    })

}
