const breakpoints = {
  xs: 340,
  sm: 500,
  md: 800,
  lg: 1280,
  xl: 1920
}

const media = {
  up: bp => `@media (min-width: ${breakpoints[bp]}px)`,
  down: bp => `@media (max-width: ${breakpoints[bp]}px)`
}

export default {
  breakpoints: {
    ...breakpoints,
    ...media
  }
}
