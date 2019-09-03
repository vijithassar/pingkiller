import { pingkiller } from './pingkiller.js'

const watch = () => {
  const observer = new MutationObserver(pingkiller)
  const options = {
    childList: true,
    attributes: true,
    subtree: true
  }
  observer.observe(window.document.body, options)
}

export { watch }