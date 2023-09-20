/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "neutral-800": "#a5acba",
        "gray-600": "#2c3444",
        "gray-300": "#2e3545",
        "neutral-200": "#f9f9f9",
        black: "#000",
        blueviolet: "#6743f7",
        whitesmoke: "#ebebeb",
        blue: "rgba(97, 0, 255, 0.72)",
        "gray-50": "#5f6d7e",
      },
      spacing: {},
      fontFamily: {
        "text-l-regular": "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "61xl": "80px",
        "43xl": "62px",
        "86xl": "105px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      mini: "15px",
      "13xl": "32px",
      lg: "18px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
