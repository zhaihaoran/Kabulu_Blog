import React from 'react'
// antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
// components
// import SideBar from "@/components/views/SideBar"
const { Header, Footer, Sider, Content } = Layout

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed:false
        }
    }
    
	toggle() {
		this.setState({
			collapsed:!this.state.collapsed
		})
    }
    
    render () {
        return (
            <Layout className='app'>
                <Sider collapsible collapsed={this.state.collapsed}>	
                    {/* <SideBar /> */}
                </Sider>
                <Layout>
                    <Header className='app-header' theme="dark">
                        <div className="sidebar-trigger">
                            <Icon className="trigger" type={this.state.collapsed?'menu-unfold':'menu-fold'} onClick={this.toggle}/>
                        </div>
                        <Menu
                            className='header-menu'
                            mode='horizontal'
                            defaultSelectedKeys={['2']}
                        >
                            <Menu.Item key='1'>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key='2'>
                                nav 2
                            </Menu.Item>
                            <Menu.Item key='3'>
                                nav 3
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content className='app-content'>
                        <Breadcrumb className="app-breadcrumb">
                            <Breadcrumb.Item>
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                List
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                App
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="wrapper">Content</div>
                    </Content>
                    <Footer className='app-footer' style={{textAlign:'center'}}>
                        爱棋道管理后台@demo author:zhaihaoran
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App