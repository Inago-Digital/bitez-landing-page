const getIcon = (name) => {
  const path = `assets/icons/${name}.svg`
  const request = new XMLHttpRequest()

  request.open("GET", path, false)
  request.send()

  if (request.status === 200) {
    return request.responseText
  }

  return null
}

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll("i[data-lucide]")

  icons.forEach((icon) => {
    const name = icon.getAttribute("data-lucide")
    const isFaq = icon.getAttribute("data-faq-icon")
    const svg = getIcon(name)

    if (svg) {
      const classes = icon.getAttribute("class")
      icon.outerHTML = svg.replace(
        "<svg",
        `<svg class="${classes}" ${
          typeof isFaq === "string" ? "data-faq-icon" : ""
        }`
      )
    }
  })
})
