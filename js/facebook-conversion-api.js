document.addEventListener("DOMContentLoaded", function () {
  const CONVERSION_API_ENDPOINT = "https://conversionapi.bitez.cz/track-event"

  async function sendServerEvent(eventName, userData = {}, customData = {}) {
    try {
      if (typeof fbq === "function") {
        fbq("track", eventName, customData)
      }

      const response = await fetch(CONVERSION_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          userData,
          customData,
          eventTime: Math.floor(Date.now() / 1000),
        }),
      })

      const result = await response.json()
      console.log(`Server-side ${eventName} event sent:`, result)
      return result
    } catch (error) {
      console.error(`Error sending server-side ${eventName} event:`, error)
    }
  }

  const contactForm = document.querySelector("[data-contact-form]")
  const contactFormSubmit = document.querySelector("[data-contact-form-submit]")

  if (contactFormSubmit) {
    contactFormSubmit.addEventListener("click", async function (e) {
      const nameInput = document.querySelector(
        '[data-contact-form-input][name="name"]'
      )
      const emailInput = document.querySelector(
        '[data-contact-form-input][name="email"]'
      )
      const phoneInput = document.querySelector(
        '[data-contact-form-input][name="phone"]'
      )

      if (
        nameInput &&
        emailInput &&
        phoneInput &&
        nameInput.value &&
        emailInput.value &&
        phoneInput.value
      ) {
        const fullName = nameInput.value.trim()
        const nameParts = fullName.split(" ")
        const firstName = nameParts[0]
        const lastName =
          nameParts.length > 1 ? nameParts[nameParts.length - 1] : ""

        sendServerEvent("Lead", {
          firstName: firstName,
          lastName: lastName,
          email: emailInput.value.trim(),
          phone: phoneInput.value.trim(),
        })
      }
    })
  }

  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')

  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const phoneNumber = link.getAttribute("href").replace("tel:", "")
      sendServerEvent("Contact", { phone: phoneNumber })
    })
  })

  emailLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const email = link.getAttribute("href").replace("mailto:", "")
      sendServerEvent("Contact", { email: email })
    })
  })

  const interestButtons = document.querySelectorAll(
    'a[href="/contact"], [data-interest-button], .interest-button'
  )

  interestButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.innerText || "Interest Button"
      sendServerEvent("InitiateCheckout", {}, { button_text: buttonText })
    })
  })
})
