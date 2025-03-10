document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons()

  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#ee2554",
          secondary: "#c6264b",
          tertiary: "#262e49",
          accent: {
            DEFAULT: "#ffd958",
            dark: "#ffd33f",
          },
          dark: "#1c1c1c",
          light: "#e1e9ee",
          gray: "#c7Ceda",
          muted: {
            DEFAULT: "#d6e1e8",
            dark: "#c6d6e1",
          },
          white: "#ffffff",
          black: "#000000",
          "blue-gray": "#8b9ab3",
          "light-green": "#4cc36c",
          "dark-green": "#3aa25f",
          "light-pink": "#f6d3db",
          blue: "#117cf7",
          purple: "#b16bed",
        },
      },
    },
  }
})
