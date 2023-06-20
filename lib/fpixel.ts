export const FB_PIXEL_ID = "700597075202754"

const cWindow: any = window
export const pageview = () => {
  cWindow.fbq("track", "PageView")
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: any, options = {}) => {
  cWindow.fbq("track", name, options)
}
