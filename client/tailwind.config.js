/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Zen Antique', serif
        ],
        cursive: [
          'Quintessential', cursive
        ]
      },
      colors: {
        aqua: "#00FFFF",
        teal: "#008080",
        blueGreen: "#088F8F",
        sapphireBlue: "#0F52BA",
        ultramarine: "#0437F2",
        indigo: "#3F00FF",
        cobaltBlue: "#0047AB",
        darkBlue: "#00008B",
        iris: "#5D3FD3",
        violet: "#7F00FF",
        primaryPurple: "#800080",
        darkPurple: "#120043",
        facebook: "#0E8EF1",
        blackOverlay: "rgba(0, 0, 0, 0.7)",
        aquaOverlay: "rgba(0, 255, 255, 0.7)",
        tealOverlay: "rgba(0, 128, 128, 0.8)",
        irisOverlay: "rgba(93, 63, 211, 0.5)",
        ultramarineOverlay: "rgba(4, 55, 242, 0.5)",
        purpleOverlay: "rgba(128, 0, 128, 0.6)",
        violetOverlay: "rgba(127, 0, 255, 0.6)",
        cattOverlay: "rgba(255, 255, 253, 0.5)",
      },
    keyframes: {
      "slide-in": {
        "0%": {
          "-webkit-transform": "translateX(-200px)",
          transform: "translateX(-200px)",
        },
        "100%": {
          "-webkit-transform": "translateX(0px)",
          transform: "translateX(0px)",
        },
      },

      "slide-fwd": {
        "0%": {
          "-webkit-transform": "translateZ(0px)",
          transform: "translateZ(0px)",
        },
        "100%": {
          "-webkit-transform": "translateZ(160px)",
          transform: "translateZ(160px)",
        },
      },
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-out",
      "slide-fwd":
        " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    },
    transitionProperty: {
      height: "height",
    },
  },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  plugins: [],
}
