import React from 'react';

import Aux from '../../hoc/aux';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, sidebar, backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default Layout;