import React from 'react';

import Logo from '../../assets/Logo.svg';
import { Button } from './styles';

function ServerButton({
  selected = null,
  isHome = null,
  hasNotifications = null,
  mentions = null,

}) {
  return (
    <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active': ''}

    >
      {isHome && <img src={Logo} />}
    </Button>
  )
}

export default ServerButton;