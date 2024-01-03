// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		//fontsize:20,
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.5,
		slider_girth: 12,
		slider_knob: 14,
		slider_anchor: {x:1,y:7},
		resetbutton_anchor:{x:2,y:3},
		resetbutton_size:80,
		radio_anchor:{x:5,y:1},
		radio_size:160,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"circ",
		radio_buttonsize:30,
	}
}