import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawToggle/DrawerToggle'

import classes from './Toolbar.css'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationsItems />
    </nav>
  </header>
)

export default toolbar
