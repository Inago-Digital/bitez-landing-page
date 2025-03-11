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
          "light-gray": "#D0D7EF",
          muted: "#ebF0f4",
          white: "#ffffff",
          black: "#000000",
          "blue-gray": "#8b9ab3",
          "light-green": "#4cc36c",
          "dark-green": "#3aa25f",
          "light-pink": "#f6d3db",
          blue: "#117cf7",
          purple: "#b16bed",
        },
        fontFamily: {
          champ: ["Champ", "sans-serif"],
        },
      },
    },
  }

  const faqQuestions = document.querySelectorAll("[data-faq-question]")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      const answer = question.nextElementSibling
      const icon = question.querySelector("[data-faq-icon]")

      const isOpen = faqItem.classList.contains("active")

      if (!isOpen) {
        document.querySelectorAll("[data-faq-item]").forEach((item) => {
          item.classList.remove("active")
          const itemAnswer = item.querySelector("[data-faq-answer]")
          const itemIcon = item.querySelector("[data-faq-icon]")

          if (itemAnswer && itemIcon) {
            itemAnswer.style.maxHeight = "0"
            itemIcon.style.transform = "rotate(0deg)"
          }
        })
      }

      faqItem.classList.toggle("active")

      if (faqItem.classList.contains("active")) {
        answer.style.maxHeight = `${answer.scrollHeight}px`
        icon.style.transform = "rotate(180deg)"
      } else {
        answer.style.maxHeight = "0"
        icon.style.transform = "rotate(0deg)"
      }
    })
  })
})
