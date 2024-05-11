import {useLocation, useRouteLoaderData} from "react-router-dom";
import React, {ReactNode, useEffect, useState} from "react";
import {IAuthLoader} from "@/router/AuthLoader";
import {Breadcrumb} from "antd";
import {findTreeNode} from "@/utils";


export default function (){
	const {pathname} = useLocation()
	const [breadList,setBreadList] = useState<(string|ReactNode)[]>()

	const data = useRouteLoaderData('layout') as IAuthLoader
	useEffect(() => {
		const list = findTreeNode(data.menuList,pathname,[])
		setBreadList([<a href='/welcome'>首页</a>,...list])
	}, [pathname]);
	return 	<Breadcrumb items={breadList?.map(item => ({title:item}))}></Breadcrumb>
}
