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

  const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]")
  const mobileMenu = document.querySelector("[data-mobile-menu]")
  const navigation = document.querySelector("[data-navigation]")

  const classes = ["bg-white", "shadow-xl"]

  if (mobileMenuToggle && mobileMenu) {
    let isMenuOpen = false

    mobileMenuToggle.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen

      if (isMenuOpen) {
        mobileMenu.style.display = "flex"
        navigation.classList.remove(...classes)
        document.body.style.overflow = "hidden"

        const bars = mobileMenuToggle.querySelectorAll("div")
        bars[0].style.transform = "rotate(45deg) translate(7px, 7px)"
        bars[1].style.opacity = "0"
        bars[2].style.transform = "rotate(-45deg) translate(7px, -7px)"
      } else {
        mobileMenu.style.display = "none"
        navigation.classList.add(...classes)
        document.body.style.overflow = ""

        const bars = mobileMenuToggle.querySelectorAll("div")
        bars[0].style.transform = ""
        bars[1].style.opacity = "1"
        bars[2].style.transform = ""
      }
    })

    const mobileMenuLinks = mobileMenu.querySelectorAll("a")
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.display = "none"
        document.body.style.overflow = ""
        isMenuOpen = false

        const bars = mobileMenuToggle.querySelectorAll("div")
        bars[0].style.transform = ""
        bars[1].style.opacity = "1"
        bars[2].style.transform = ""
      })
    })
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

  const contactForm = document.querySelector("[data-contact-form]")
  const contactFormSubmit = document.querySelector("[data-contact-form-submit]")
  const contactFormInputs = document.querySelectorAll(
    "[data-contact-form-input]"
  )

  if (contactForm && contactFormSubmit) {
    contactFormSubmit.addEventListener("click", async (e) => {
      e.preventDefault()

      const data = {}

      contactFormInputs.forEach((input) => {
        data[input.name] = input.value
      })

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(data.email)) {
        return alert("Please enter a valid email address.")
      }

      if (!data.name || !data.email || !data.phone || !data.company) {
        return alert("Please fill out all fields.")
      }

      contactFormSubmit.disabled = true
      contactFormSubmit.textContent = "Sending..."

      const message = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.company}
      `

      try {
        const response = await fetch("https://email.hangerthem.com/send", {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message,
            subject: "Nová zpráva z Bitez",
          }),
        })

        if (response.ok) {
          alert("Message sent successfully.")
          contactForm.reset()
        } else {
          alert("An error occurred. Please try again.")
        }
      } catch (error) {
        alert("An error occurred. Please try again.")
      }

      contactFormSubmit.textContent = "Kontaktujte mě"
      contactFormSubmit.disabled = false
    })
  }
})
