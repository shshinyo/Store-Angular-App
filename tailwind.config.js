module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat-Arabic", "sans-serif"],
      },
      fontSize: {

        'f1': ['1.5rem', { //24px
          lineHeight: '1.875rem',//29px
          fontWeight: '700',

        }],
        'f2': ['1.25rem', { //20px
          lineHeight: '1.5rem',//24px
          fontWeight: '600',
        }],
        'f3': ['1rem', { //16px
          lineHeight: '1.25rem',//19.5
          fontWeight: '600',
        }],
        'f4': ['0.875rem', { //14px
          lineHeight: '1.125rem',//17.4
          fontWeight: '400',
        }],
        'f5': ['0.75rem', { //12px
          lineHeight: '0.9rem',//14.6
          fontWeight: '400',
        }],
        'f6': ['0.75rem', { //12px
          lineHeight: '0.75rem',//12
          fontWeight: '400',
        }],
      },
      colors: {

        'a-blue':' #0360EA',
        'a-blueSky': '#F8FBFF',
        'a-blue-border': '#D7E9F7',

        'a-gray': '#5C7192',
        'a-black':'#051937',
        'a-green':'#2B9348',
        'a-red' :'#CA3030',


        /////////// old varible
        // 'color1': '#0360EA', //blue
        // 'color2': '#F8FBFF',
        // 'borderBlue': '#D7E9F7',

      },
    },

  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};

