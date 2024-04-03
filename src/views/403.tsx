import React from "react";
import {Button,Result} from "antd";
import {useNavigate} from "react-router-dom";

function Error403() {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/')
	}
	return <Result
		status='403'
		title='403'
		subTitle='抱歉，您访问的页面不存在。'
		extra={<Button type='primary' onClick={handleClick}>回首页</Button> }
	/>
}
export default Error403
