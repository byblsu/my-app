/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-05-05 10:51:06
 * @LastEditTime: 2022-05-11 11:29:42
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \qiankun\qiankun-user\src\utils\request.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ2: 大前端QQ交流群2: 777642000
 * @公众账号: 乐编码
 * 善始者实繁 , 克终者盖寡
 * 吾尝终日而思矣，不如须臾之所学也
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
import { message } from "antd";
import axios from "axios";
const request = axios.create({
	timeout: 5000,
});
request.interceptors.request.use((c) => {
	const token = sessionStorage.getItem("token");
	if (token) {
		c.headers = {
			...c.headers,
			Authorization: `${token}`,
		};
	}
	return c;
});
request.interceptors.response.use(
	(res) => {
		return res;
	},
	(e) => {
		return Promise.reject(e.response.data.message);
	}
);
export default request;
