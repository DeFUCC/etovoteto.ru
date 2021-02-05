import ColorHash from 'color-hash'

const isDark = false
const colors = {
  light: new ColorHash({
    saturation: [0.05, 0.08, 0.12],
    lightness: [0.85, 0.87, 0.9],
  }),
  dark: new ColorHash({
    saturation: [0.02, 0.05, 0.08],
    lightness: [0.18, 0.2, 0.3],
  }),
}

const deepColors = {
  light: new ColorHash({
    saturation: [0.3, 0.4, 0.5],
    lightness: [0.7, 0.8, 0.9],
  }),
  dark: new ColorHash({
    saturation: [0.3, 0.4, 0.5],
    lightness: [0.2, 0.3, 0.4],
  }),
}

export function itemColor(item) {
  let color = colors[isDark.value ? 'dark' : 'light']
  return color.hex(item)
}

export function pubGradient(pub, angle = 0) {
  if (!pub)
    return `linear-gradient(${angle}deg, var(--top-bar) 0%, var(--bar-color) 100%)`
  let deepColor = deepColors[isDark.value ? 'dark' : 'light']
  let split = pub.split('.')
  let duo = split.map((s) => deepColor.hex(s))
  return `linear-gradient(${angle}deg, ${duo[0]} 0%, ${duo[1]} 100%)`
}
