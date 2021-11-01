


module.exports = {
    
    lang: 'en-US',
    title: 'TradepostPOS',
    description: 'Documentation for TradepostPOS.',
    base: '/TradepostPOS-UserDocs/',
  
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',

        navbar: [
         
            {
                text: 'User Guide',
                link: '/userguide/',
            },
        ],


        sidebar: {
           
            '/userguide': [
                {
                    text: 'User Guide',
                    children: ['/userguide/README.md', '/userguide/getting-started.md']
                }
            ],
        }

     
      
    },
  }