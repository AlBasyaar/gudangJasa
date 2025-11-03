import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const initGSAP = () => {
  // Global GSAP configuration
  gsap.config({
    autoSleep: 60,
    force3D: false,
  })

  // Refresh ScrollTrigger on load
  ScrollTrigger.refresh()
}
