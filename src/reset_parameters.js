// this module is used in many explorables to reset all parameters
// to their default value. 
// Typically the exported function is connected to a button that
// invokes this function
// Sometimes this needs to be adapted to the needs 

import attractors from "./attractors.js"
import * as ct from "./controls.js"
import {each} from "lodash-es"
import {radio} from "./controls.js"

export default (controls) => {
	
		each(attractors[radio.value()].P,p=>{
			p.widget.reset(controls,p.defv)
		})

}


