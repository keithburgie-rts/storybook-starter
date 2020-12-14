/* Theme-aware properties that utilize space:
  - margin (m),
  - marginTop (mt),
  - marginRight (mr),
  - marginBottom (mb),
  - marginLeft (ml),
  - marginX (mx),
  - marginY (my),
  - padding (p),
  - paddingTop (pt),
  - paddingRight (pr),
  - paddingBottom (pb),
  - paddingLeft (pl),
  - paddingX (px),
  - paddingY (py),
  - top,
  - bottom,
  - left,
  - right,
*/

// import { remCalc } from '../utils/active_support'

export default {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  32: 128,
  formInputHeight: 60,
  formTextareaHeight: 254,

  // get formLabelHeight() {
  //   return thisformInputHeight, 0.5)
  // },
  get formPaddingX() {
    return this[5]
  },
}
