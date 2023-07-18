export const NavLinks = [
     {
          name: 'Home',
          link: '/'
     },
     {
          name: 'categories',
          link: '/categories'
     },
     {
          name: 'Blog',
          link: '/blogs'
     },
     {
          name: 'About us',
          link: '/about-us'
     },
     {
          name: 'contact us',
          link: '/contact-us'
     },
]

export const navItems = [
     {
       name:'Home',
       link: '#',
       child: [
         {
          name: 'Home Page 1',
          link: '/home/home1',
         },
         {
          name: 'Home Page 2',
          link: '/home/home2',
         }
       ]
     },
     {
      name:'Pages',
      link: '#',
      child: [
        {
         name: 'Blogs Layout',
         link: '#',
          subChild: [
            {
              name: 'Blog Layout 1',
              link: '/blogs',
            },
            {
              name: 'Blog Layout 2',
              link: '/blogs2',
            }
          ]
        },
        {
          name: 'Post Layout',
          link: '#',
           subChild: [
             {
               name: 'Post Layout 1',
               link: '/blogs/single-post',
             },
             {
               name: 'Post Layout 2',
               link: '/blogs2/single-post',
             }
           ]
        },
        {
          name: 'Categories',
          link: '/categories'
        },
        {
          name: 'Category Page',
          link: '/category/Electronics'
        },
        {
          name: 'Author Page',
          link: '/author'
        },
        {
          name: '404 Page',
          link: '/404'
        }
      ]
     },
     {
      name:'About Us',
      link: '#',
     },
     {
      name:'Mega Menu',
      link: '#',
     },
     {
      name:'Contact Us',
      link: '#',
     },
  ]