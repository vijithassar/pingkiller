const pingkiller = () => {
  const pings = Array.from(document.querySelectorAll('[ping]'))
  pings.forEach(node => {
    node.removeAttribute('ping')
  })
}

export { pingkiller }