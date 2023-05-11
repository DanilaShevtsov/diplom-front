import { Layout, Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useMetamask } from '../../web3/hooks/useMetamask';
import { useEffect, useState } from 'react';
import { useAccountBalance } from '../../web3/hooks/useAccountBalance';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

function sliceAddress(address: string) {
  return address.slice(0, 15) + '...' + address.slice(-4);
}

const sideBarMenuItems: MenuItem[] = [
    getItem('Top projects', 'top-projects'),
    getItem('All projects', 'all-projects'),
    getItem('Beneficiar cabinet', 'beneficiar-cabinet'),
  ]

export function Sidebar() {

  const { hooks, metamask, connectMetamask } = useMetamask();
  const { useAccount, useIsActive, useIsActivating } = hooks;

  const [isAccountConnected, setIsAccountConnected] = useState(false);
  
  const userAccount: string = useAccount() as string || '0x0000000000000000000000000000000000000000';
  const userBalance: string = useAccountBalance(userAccount) || '0';
  
  const isActive: boolean = useIsActive();
  const isActivating: boolean = useIsActivating();

  function connect() {
    connectMetamask();
    setIsAccountConnected(true);
  }

  useEffect(() => {
    if (!isActive && !isActivating) {
        metamask.connectEagerly();
    }
  })

  return (
      <Sider
        className='sider'
        width='none'  
      >
        {!isAccountConnected &&
          <Button
            type='primary'
            block={true}
            onClick={connect}
          >
            Connect Metamask
          </Button>
        }

        {isAccountConnected && 
          <div>
            <p>{sliceAddress(userAccount)}</p>
            <p>Balance: {userBalance}ETH</p>
          </div>
        }
        <Menu
          theme='dark'
          items={sideBarMenuItems}
          defaultSelectedKeys={['top-projects']}
        />
      </Sider>
  );
}