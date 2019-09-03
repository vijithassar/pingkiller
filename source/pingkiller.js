const kill = node => {
  node.removeAttribute('ping')
}

const pingkiller = () => {
  const pings = Array.from(document.querySelectorAll('[ping]'))
  pings.forEach(kill)
}

export { pingkiller }