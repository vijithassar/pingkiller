import test from 'tape'
import { JSDOM } from 'jsdom'
import { readFileSync as read } from 'fs'

const extension = read('pingkiller.build.js')

const options = { runScripts: 'dangerously' }

const create_window = (markup, safe) => {
  const jsdom = safe ? new JSDOM(markup) : new JSDOM(markup, options)
  return jsdom.window
}

const add_script = (window, code) => {
  let script = window.document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.textContent = code
  window.document.body.appendChild(script)
}

const pings = window => {
  const nodes = window.document.querySelectorAll('[ping]')
  return Array.from(nodes)
}

const has_pings = window => pings(window).length > 0

test('removes a single ping attribute', t => {
  const single = `
  <!DOCTYPE html>
    <a ping="#">a</a>`
  const window = create_window(single)
  add_script(window, extension)
  t.false(has_pings(window))
  t.end()
})

test('removes multiple ping attributes', t => {
  const multiple = `
  <!DOCTYPE html>
    <a ping="#">a</a>
    <a ping="#">b</a>`
  const window = create_window(multiple)
  add_script(window, extension)
  t.false(has_pings(window))
  t.end()
})

test('removes dynamic ping attributes', t => {
  const none = '<!DOCTYPE html>'
  const window = create_window(none)
  const code = `
    let link = document.createElement('a')
    link.setAttribute('ping', '#')
    window.document.body.appendChild(link)
  `
  add_script(window, code)
  add_script(window, extension)
  t.false(has_pings(window))
  t.end()
})

test('removes delayed ping attributes', t => {
  const none = '<!DOCTYPE html>'
  const window = create_window(none, true)
  const code = `
    let link = document.createElement('a')
    link.setAttribute('ping', '#')
    window.document.body.appendChild(link)
  `
  add_script(window, extension)
  add_script(window, code)
  t.false(has_pings(window))
  t.end()
})