// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

(() => {
  const footer = document.querySelector(".footer-discovery")
  if (!footer) return

  const tabs = Array.from(footer.querySelectorAll("[data-footer-tab]"))
  const panels = Array.from(footer.querySelectorAll("[data-footer-panel]"))

  const activateTab = (selectedTab) => {
    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab
      tab.classList.toggle("is-active", isSelected)
      tab.setAttribute("aria-selected", String(isSelected))
      tab.tabIndex = isSelected ? 0 : -1
    })

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.footerPanel !== selectedTab.dataset.footerTab
    })
  }

  footer.addEventListener("click", (event) => {
    const selectedTab = event.target.closest("[data-footer-tab]")
    if (selectedTab) {
      activateTab(selectedTab)
      return
    }

    const moreButton = event.target.closest("[data-footer-more]")
    if (moreButton) {
      const expanded = moreButton.getAttribute("aria-expanded") === "true"
      const extraDestinations = document.getElementById(moreButton.getAttribute("aria-controls"))
      extraDestinations.hidden = expanded
      moreButton.setAttribute("aria-expanded", String(!expanded))
      moreButton.querySelector("[data-footer-more-label]").textContent = expanded ? "Show more" : "Show less"
      moreButton.querySelector("i").classList.toggle("fa-chevron-down", expanded)
      moreButton.querySelector("i").classList.toggle("fa-chevron-up", !expanded)
    }
  })

  footer.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(event.target)
    if (currentIndex < 0) return

    let nextIndex
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = tabs.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    tabs[nextIndex].focus()
    activateTab(tabs[nextIndex])
  })
})()