const pingkiller = () => {
  const pings = Array.from(document.querySelectorAll('[ping]'))
  pings.forEach(node => {
    node.removeAttribute('ping')
  })
}

const watch = () => {
  const observer = new MutationObserver(pingkiller)
  const options = {
    childList: true,
    attributes: true,
    subtree: true
  }
  observer.observe(window.document.body, options)
}

pingkiller()
watch()