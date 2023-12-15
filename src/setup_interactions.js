// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


//import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import attractors from "./attractors.js"
import resetparameters from "./reset_parameters.js"
import {initialize,update} from "./simulation.js"
import {each} from "lodash-es"


export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	
	ct.radio.update(()=>{
		controls.selectAll(".slider_anchor").filter((d,i)=>i==ct.radio.value()).transition(1000)
		.style("opacity",1).selectAll(".slider").selectAll("*").style("pointer-events","auto")

		controls.selectAll(".slider_anchor").filter((d,i)=>i==ct.radio.value()).transition(1000)
		.style("opacity",1).selectAll(".slider").select(".track-overlay").style("pointer-events","auto")

		controls.selectAll(".slider_anchor").filter((d,i)=>i!=ct.radio.value()).transition(1000)
		.style("opacity",0).selectAll(".slider").selectAll("*").style("pointer-events","none")
		
		initialize(display,config)
		
	})
	
	each(attractors,a=>{
		each(a.P,p=>{
			p.widget.update(()=>{
				update(display,config)
			})
			p.widget.update_end(()=>{
				initialize(display,config)
			})
		})
	})
}

