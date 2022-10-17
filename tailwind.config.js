/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '0': '0%',
      '100': '100%',
      '0.11': '0.11rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1258px',
      xl: '1304',
      '2xl': '1536px',
    },
    fontSize: {
      '12': '12px',
      '16': '16px',
      '18': '18px',
      '19': '19px',
      '22': '22px',
      '25': '25px',
      '28': '28px',
      '30': '30px',
      '31': '31px',
      '42': '42.88px',
      '60': '60px',
      '160': '160px'  
    },
    extend: {
      transitionProperty: {
        'under': 'background-size .4s, #ff0000 .01s,transform .01s'
      },
      animation: {
        'ping-custom': 'ping .95s cubic-bezier(0, 0, 0.2, 1) infinite'
        
      },
      dropShadow: {
        'shadow-title': ['2px 0 2px #fff', '0 2px 2px #fff', '-2px 0 2px #fff', '0 -2px 2px #fff']
      },
      textUnderlineOffset: {
        'n': 'none',
        '1': '1px'
      },
      spacing: {
        '1': '1px',
        '6': '6px',
        '10': '10px',
        '13': '13px',
        '15': '15px',
        '16': '16px',
        '17r': '17px',
        '17': '68px',
        '18': '18px',
        '21': '21px',
        '24': '24px',
        '25': '25px',
        '26': '26px',
        '27': '27px', 
        '28': '28px',
        '30': '30px',
        '31': '31px',
        '42': '42.88px',
        '44': '44px',
        '45': '45px',
        '46': '46px',
        '48p': '48px',
        '55': '55px',
        '75': '75px',
        '90': '90px',
        '93': '93px',
        '100': '100px',
        '106': '106px',
        '232': '232px'
         
      }
    },
    colors: {
      'balck': '#000',
      'red': '#ff0000',
      'gray': {
        'lite': '#F7F7F7',
        'deep': '#E9DEFF',
      },
      'white': '#fff',
      'black': '#000',
      'col': '#2A292A',
      'purple': '#9072F4',
      'amount': '#2A292A',
      'colorBorder': '#7A7A7A',
      'purpleT': '#9072F4',
      'purpleB': '#AE90FE',
      'tg': '#AE90FE',
      'footer': '#2A292A'
    }  
  },
  plugins: [],
}
