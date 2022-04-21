import React, { memo } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './index.css';
import { routes } from '../../router'
import { useSelector,shallowEqual,useDispatch } from 'react-redux';
import {RootState} from '../../store';
import {keyPathType} from '../../store/common/actions'
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;


const Index = memo((props) => {
  const dispatch = useDispatch();
  const [common,test,keyPath] = useSelector((state: RootState) =>[ state.common.common,state.test.test,state.common.keyPath], shallowEqual)

  const handleSelectedKeys=({keyPath}:any)=>{
    dispatch(keyPathType({keyPath}))

  }
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={keyPath} onClick={handleSelectedKeys}>
          {
            routes.map(item => (
              <Item key={item.id} >
                <Link to={item.path}>{item.title}</Link>
              </Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content >
          <div className="site-layout-background" style={{ padding: 24,margin:12, height:'100%' }}>
            {/* 嵌套路由用Outlet 展示嵌套部分内容 */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>abcdefg</Footer>
      </Layout>
    </Layout>
  )
})


export default Index

