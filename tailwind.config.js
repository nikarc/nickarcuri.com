const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            yellow: {
                //dark: 'hsl(34, 94%, 40%)',
                dark: 'hsl(8, 76%, 52%)',
                DEFAULT: 'hsl(41, 100%, 67%)',
                light: 'hsl(34, 94%, 84%)',
            },
            blue: {
                dark: 'hsl(231, 35%, 12%)',
                DEFAULT: 'hsl(240, 100%, 30%)',
            },
            offWhite: {
                DEFAULT: 'hsl(175, 25%, 90%)',
            },
            teal: {
                DEFAULT: 'hsl(200, 45%, 25%)',
                light: 'hsl(175, 85%, 80%)',
            },
            lime: {
                DEFAULT: 'hsl(90, 30%, 35%)',
                light: 'hsl(90, 50%, 75%)',
            },
            ruby: {
                DEFAULT: 'hsl(5, 75%, 45%)',
                light: 'hsl(5, 90%, 85%)'
            },
            pink: {
                DEFAULT: 'hsl(330, 66%, 45%)',
                light: 'hsl(330, 66%, 85%)',
            },
            purple: {
                DEFAULT: 'hsl(240, 100%, 30%)',
                light: 'hsl(240, 50%, 75%)'
            }
        },
        flex: {
            '2': '0 0 0.5rem'
        },
        container: {
            screens: {
                lg: '960px',
                xl: '960px',
            }
        },
        extend: {},
        fontFamily: {
            sans: [
                '-apple-system',
                ' Segoe UI',
                ' Roboto',
                ' Noto Sans',
                ' Ubuntu',
                ' Cantarell',
                ' Helvetica Neue'
            ]

        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const newUtilities = {
                '.p-tag': {
                    padding: '4px 8px',
                    'font-size': '10px'
                }
            }

            addUtilities(newUtilities)
        })
    ],
}
