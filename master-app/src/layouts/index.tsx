import { useState, useMemo, useEffect, ReactChildren} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import layoutRouts from '@/routes/layoutRouts'
import { useModel, Link, useLocation, history } from 'umi'

type IProps = {
  children: ReactChildren
}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const findBreadcrumbRoute = (pathname:string) => {
  
}

const MenuRender = (item:any) => {
  if(!item.routes){
    return <Menu.Item key={item.path} >
      <Link to={item.path || '/'}>{item.name}</Link>
    </Menu.Item>
  }
  return <SubMenu key={item.path} title={item.name}>
    {
       item.routes.map((subItem:any) => <Menu.Item key={subItem.path}>
          <Link to={subItem.path || '/'}>{subItem.name}</Link>
       </Menu.Item>)
    }
  </SubMenu>
}

export default (props:IProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const location: any = useLocation()

  useEffect(() => {
    console.log("location=====", location)
  }, [location])

  const BreadcrumbItem = useMemo<string[]>(() => {
    const pathname = location.location.split('/')
    pathname.shift()
    return pathname
  }, [location])


  const onCollapse = (state:boolean) => {
    setCollapsed(state)
  }

  return <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="h-50 w-150 bg-fff mx-auto my-30">LOGO</div>
      <Menu theme="dark" defaultSelectedKeys={[layoutRouts[0].path]} mode="inline">
 {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item> */}
        {layoutRouts.map(item => MenuRender(item))}
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <div className='h-100 bg-fff'></div>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="w-full h-full overflow-auto">
          {props.children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
}