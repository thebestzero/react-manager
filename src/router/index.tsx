import {createBrowserRouter, RouteObject,Navigate} from "react-router-dom";
import Login from "@/views/Login";
import Welcome from "@/views/Welcome";
import Error404 from "@/views/404";
import Error403 from '@/views/403'
import Layout from "@/layout";
const router:RouteObject[] = [
	{
		path:'/',
		element:<Navigate to={'/welcome'}/>
	},
	{
		path:'/login',
		element:<Login/>
	},
	{
		element:<Layout/>,
		children:[
			{
				path:'/welcome',
				element:<Welcome/>
			}
		]
	},
	{
		path:'*',
		element:<Navigate to={'/404'}/>
	},
	{
		path:'/404',
		element:<Error404/>
	},
	{
		path:'403',
		element:<Error403/>
	}
]



export default createBrowserRouter(router)
