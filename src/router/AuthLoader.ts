import serverApi from '@/api'
import { Menu } from '@/types/api'
import { getMenuPath } from '@/utils'
export interface IAuthLoader {
  buttonList: string[]
  menuList: Menu.MenuItem[]
  menuPathList: string[]
}

export default async function (): Promise<IAuthLoader> {
  const data = await serverApi.getPermissionList()
  const menuPathList = getMenuPath(data.menuList)
  return {
    buttonList: data.buttonList,
    menuList: data.menuList,
    menuPathList
  }
}
