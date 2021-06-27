export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export function BlackAndWhite(color) {
  return hexToRgb(color).r * 0.299 + hexToRgb(color).g * 0.587 + hexToRgb(color).b * 0.144 > 186 ? '#000000' : '#ffffff'
}

export function RGBA(color, opacity) {
  return `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, ${opacity})`
}
