document.addEventListener("DOMContentLoaded", function () {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')

  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      fbq("track", "Contact")
    })
  })

  emailLinks.forEach((link) => {
    link.addEventListener("click", function () {
      fbq("track", "Contact")
    })
  })

  const contactForm = document.querySelector("[data-contact-form]")
  const contactFormSubmit = document.querySelector("[data-contact-form-submit]")

  if (contactFormSubmit) {
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
        fbq("track", "Lead")
      }
    })
  }

  const interestButtons = document.querySelectorAll(
    'a[href="/contact"], [data-interest-button], .interest-button'
  )

  interestButtons.forEach((button) => {
    button.addEventListener("click", function () {
      fbq("track", "InitiateCheckout")
    })
  })
})
