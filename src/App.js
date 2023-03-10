import { Breadcrumb, Layout, Menu, theme } from "antd";
import Employee from "./page/employee";
import UserManagementPage from "./page/view/UserManagementPage.jsx";
const { Header, Content, Footer } = Layout;
const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
            >
                <div
                    style={{
                        float: "left",
                        width: 120,
                        height: 31,
                        margin: "16px 24px 16px 0",
                        background: "rgba(255, 255, 255, 0.2)",
                    }}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={[{key: 1, label: 'Quan ly don hang'}, {key: 2, label: 'Quan ly nhan su'}]}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: "0 50px",
                }}
            >
				<UserManagementPage/>
            </Content>
        </Layout>
    );
};
export default App;
