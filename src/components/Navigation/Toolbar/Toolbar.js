import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems'

import classes from './Toolbar.css'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <NavigationsItems />
    <Logo />
    <nav />
  </header>
)

export default toolbar
