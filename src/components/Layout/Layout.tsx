import React from 'react'

function Layout({children}:any) {
  return (
    <section className='container mx-auto'>
     {children}
    </section>
  )
}

export default Layout