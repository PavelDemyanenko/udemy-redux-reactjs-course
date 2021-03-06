import React from 'react'

import burgerLogo from '../../Assets/images/logo.png'
import classes from './Logo.css'

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
)

export default logo
