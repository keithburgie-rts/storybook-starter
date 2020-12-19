const base = 16
const unit = 'em'

const viewports = {
  base: 0,
  maxMobile: 479,
  maxTablet: 927,
  maxLaptop: 1295,
  maxDesktop: 1532,
}

/**
 * Use max-width sparingly, but, if needed:
 * @media screen and (max-width: maxMobile) { *styles* }
 */

export const maxMobile = viewports.maxMobile / base + unit
export const maxTablet = viewports.maxTablet / base + unit
export const maxLaptop = viewports.maxLaptop / base + unit
export const maxDesktop = viewports.maxDesktop / base + unit

/**
 * Should almost always use Theme UI array syntax for min-width:
 * https://theme-ui.com/getting-started#responsive-styles
 */
export const minTablet = (viewports.maxMobile + 1) / base + unit
export const minLaptop = (viewports.maxTablet + 1) / base + unit
export const minDesktop = (viewports.maxLaptop + 1) / base + unit
export const minWidescreen = (viewports.maxDesktop + 1) / base + unit

export const breakpoints = [minTablet, minLaptop, minDesktop, minWidescreen]
