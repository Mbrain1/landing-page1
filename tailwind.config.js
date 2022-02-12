module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    groupLevel: 10,
    // will result in as many direct child selectors as defined here
    groupScope: "scope",
    // will result in group-scope being available in addition to the base group
    groupVariants: ["hover", "focus"],

    extend: {
      backgroundImage: {
        'testimonial': "linear-gradient( rgba(88, 28, 135, 0.9), rgba(88, 28, 135, 0.8) ),url('/images/parallax.jpg')",
        'contact': "linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8) ),url('/images/contact-bg.jpg')"
      }
    },

  },
  plugins: [],
}  