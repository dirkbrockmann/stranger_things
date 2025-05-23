// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs,each} from "lodash-es"
import cfg from "./config.js"
import attractors from "./attractors.js"
import {styles} from "d3-widgets"

each(attractors,(a,i)=>{
	
	a.id="system"+i;
	
	each(a.P,p=>{
		p.id=a.id+p.id;
		p.widget = widgets.slider()
			.id(p.id)
			.label(p.name)
			.range(p.range)
			.value(p.defv)
			.size(cfg.widgets.slider_size)
			.girth(cfg.widgets.slider_girth)
			.knob(cfg.widgets.slider_knob)
		
	})
	
	a.sliders = map(a.P,p=>p.widget);
	
})

const systems = {
	choices: map(attractors,a=>a.name),
	default:0,
	id:"attractors",
	label:"Attractors"
}


const radio = widgets.radio()
				.choices(systems.choices)
				.id(systems.id)
				.value(systems.default)
				.orientation(cfg.widgets.radio_orientation)
				.labelposition(cfg.widgets.radio_label_position)
				.buttonsize(cfg.widgets.radio_buttonsize)
		

const reset = widgets.button().actions(["rewind"])
const buttons = [reset]; 

export default (controls,grid)=>{

	const sl_anchor=grid.position(cfg.widgets.slider_anchor.x,cfg.widgets.slider_anchor.y);
	

	const anchor = controls.selectAll(null).data(attractors).enter().append("g")
		.attr("id","attractor")
		.attr("transform","translate("+sl_anchor.x+","+sl_anchor.y+")")
	
	each(attractors,a=>{
		const sl_pos=grid.position(0,range(a.sliders.length).map(x=>(cfg.widgets.slider_gap*x)));
		a.sliders.forEach((sl,i)=>sl.position(sl_pos[i]))
	})
	
	anchor.selectAll("."+styles.slider).data(d=>d.sliders).enter().append(widgets.widget)

 	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);

	radio.position(ra_pos)
 		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)

	reset.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y))
 		.size(cfg.widgets.resetbutton_size);

 	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data([radio]).enter().append(widgets.widget)

	controls.selectAll("#attractor").filter((d,i)=>i==radio.value()).transition(1000)
		.style("opacity",1)
		.selectAll("."+styles.slider).selectAll("*")
		.style("pointer-events",null)

	controls.selectAll("#attractor").filter((d,i)=>i!=radio.value()).transition(1000)
		.style("opacity",0)
		.selectAll("."+styles.slider).selectAll("*")
		.style("pointer-events","none")


}

export{systems,radio,reset, reset as setup}

