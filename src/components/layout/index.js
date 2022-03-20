import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <section>
        <header>header</header>
        {children}
      </section>
    </div>
  )
}

export default Layout;