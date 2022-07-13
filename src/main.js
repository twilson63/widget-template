import Widget from './Widget.svelte'

const el = document.getElementById('widget-name')
const dataset = el.dataset

const widget = new Widget({
  target: el,
  props: dataset
})