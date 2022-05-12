/// <reference types="react-scripts" />

import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

declare global {
    interface ResponseSuccess<T = {}> {
        msg: string;
        code: number;
        data: T;
    }

    interface IRouter extends RouteObject {
        key: string;
        label?: string;
        children?: IRouter[];
        icon?: ReactNode;
    }


}


