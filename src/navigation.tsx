import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,    
    boxSizing: 'border-box',    
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Settings',
        url: '/#/settings',
        key:"key1",
        isExpanded: true,
      },
      {
        name: 'Users',
        url: '/#/users',
        key: 'key3',
        isExpanded: true,
      },
      {
        name: 'Logs',
        url: '/#/logdetails',
        key: 'key4',
      }
      
    ],
  },
];

export const LeftNav: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}      
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
