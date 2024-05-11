import {useRouteLoaderData} from "react-router-dom";
import {IAuthLoader} from "@/router/AuthLoader";
import {useStore} from "@/store";
import {Button} from "antd";

export default function (props:any) {
	const data = useRouteLoaderData('layout') as IAuthLoader
	const role = useStore(state => state.userInfo.role)
	const AButton = <Button {...props}>{props.children}</Button>
	if (!props.auth) return AButton
	if (data.buttonList.includes(props.auth) || role === 1) return  AButton
	return <></>
}
