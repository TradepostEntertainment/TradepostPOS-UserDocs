


module.exports = {
    
    lang: 'en-US',
    title: 'TradepostPOS',
    description: 'Documentation for TradepostPOS.',
    base: '/TradepostPOS-UserDocs/',
  
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',

        navbar: [
            {
                text: 'Developer Guide',
                link: '/devguide/'
            },
            {
                text: 'User Guide',
                link: '/userguide/',
            },
        ],


        sidebar: {
            '/devguide/': [
                {
                    text: 'Developer Guide',
                    children: ['/devguide/README.md', '/devguide/getting-started.md']
                }
            ],
            '/userguide': [
                {
                    text: 'User Guide',
                    children: ['/userguide/README.md', '/userguide/getting-started.md']
                }
            ],
        }

     
      
    },
  }