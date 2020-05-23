import ReactGA from "react-ga"
 
export const initGA = () => {
  ReactGA.initialize("UA-165036646-2")
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}