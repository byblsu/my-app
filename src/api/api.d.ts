declare namespace API {
    interface Response<T = any> {
        data: T;
    }
    interface User {
        name: string
    }
}