import request from "../utils/request1"

interface ResponseSuccess<T = {}> {
    msg: string;
    code: number;
    data: T;
}

export const login = (admin: any) => {
    return request.post<any, ResponseSuccess<{token: string,msg: string}>>(
        "/admin/login",
         admin
    );
}

