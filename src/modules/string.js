export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function tierLabel(key, value, i) {
  if (key.indexOf('_t1') > '1' || key.indexOf('_t2') > '1') {
    return `tier ${i + 1}`
  } else if (key.indexOf('_oon') > '1') {
    return 'out-of-network'
  }
}
