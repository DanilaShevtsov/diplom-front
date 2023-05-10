import Sider from "antd/es/layout/Sider";
import {
    UserOutlined,
  } from '@ant-design/icons';

interface SidebarProps {
    userAccount: string;
}

function shortAddress(address: string) {
    return address.substring(0,10) + "..." + address.substring(address.length - 4, address.length);
}

export function Sidebar({ userAccount}: SidebarProps) {
    return (
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          background-color="#ffffff"
        >a</div>
        {/* <UserOutlined 
          twoToneColor="#ffffff"
        />
        <a
          style={{
              color: 'white',
          }}
        >{shortAddress(userAccount)}</a> */}
      </Sider>
    )
}