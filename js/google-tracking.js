// Google Ads Conversion Tracking

document.addEventListener("DOMContentLoaded", function () {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')

  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      gtag("event", "conversion", {
        send_to: "AW-16978478241/UnebCK7v4LUaEKGJ_J8_",
      })
    })
  })

  emailLinks.forEach((link) => {
    link.addEventListener("click", function () {
      gtag("event", "conversion", {
        send_to: "AW-16978478241/UnebCK7v4LUaEKGJ_J8_",
      })
    })
  })

  const contactForm = document.querySelector("[data-contact-form]")
  const contactFormSubmit = document.querySelector("[data-contact-form-submit]")

  if (contactFormSubmit) {
    const originalClickEvent = contactFormSubmit.onclick

    contactFormSubmit.addEventListener("click", function (e) {
      const inputs = document.querySelectorAll("[data-contact-form-input]")
      let isValid = true

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false
        }

        if (input.type === "email" && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(input.value)) {
            isValid = false
          }
        }
      })

      if (isValid) {
        gtag("event", "conversion", {
          send_to: "AW-16978478241/zGv8CPOQ4bUaEKGJ_J8_",
        })
      }
    })
  }

  const interestButtons = document.querySelectorAll(
    'a[href="/contact"], [data-interest-button], .interest-button'
  )

  interestButtons.forEach((button) => {
    button.addEventListener("click", function () {
      gtag("event", "conversion", {
        send_to: "AW-16978478241/QU_LCPqN1bUaEKGJ_J8_",
      })
    })
  })
})
