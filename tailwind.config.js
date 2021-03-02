module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            yellow: {
                DEFAULT: 'hsl(41, 100%, 67%)',
            },
            blue: {
                dark: 'hsl(231, 35%, 12%)',
                DEFAULT: 'hsl(240, 100%, 30%)',
            },
            offWhite: {
                DEFAULT: 'hsl(175, 25%, 90%)',
            },
            teal: {
                DEFAULT: 'hsl(175, 85%, 80%)',
            },
            lime: {
                DEFAULT: 'hsl(90, 30%, 35%)',
                light: 'hsl(90, 50%, 75%)',
            }
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
    plugins: [],
}
