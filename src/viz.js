// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import attractors from "./attractors.js"
import param from "./parameters.js"
import {orbits} from "./model.js"
import * as ct from "./controls.js"
import {each,flatten,min,max,minBy,maxBy} from "lodash-es"


const X = d3.scaleLinear();
const Y = d3.scaleLinear();
const colors = d3.scaleOrdinal();

var W,H,ctx;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display,config) => {
	

	const attractor = attractors[ct.radio.value()];
	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([param.margin,W-param.margin]);
	Y.range([param.margin,H-param.margin]);

	let xr=attractor.xrange;
	let yr=attractor.yrange;
	
	if(attractor.scale){
		const all_points = flatten(orbits);
		const minx = minBy(all_points,p=>p[0])[0];
		const maxx = maxBy(all_points,p=>p[0])[0];
		xr = [minx,maxx]
		const miny = minBy(all_points,p=>p[1])[1];
		const maxy = maxBy(all_points,p=>p[1])[1];
		yr = [miny,maxy]

		xr = Math.abs(xr[0]) > Math.abs(xr[1]) ? [xr[0],-xr[0]] :[-xr[1],xr[1]]
		yr = Math.abs(yr[0]) > Math.abs(yr[1]) ? [yr[0],-yr[0]] :[-yr[1],yr[1]]
	}

	X.domain(xr)
	Y.domain(yr)
	
	
	
	colors.domain([0,attractor.M-1]).range([attractor.color1,attractor.color2])
		
	ctx = display.node().getContext('2d');	
	ctx.clearRect(1, 1, W-2, H-2);
	each(orbits,(o,i)=>{
		const c = d3.rgb(colors(i));
		ctx.fillStyle="rgb("+c.r+","+c.g+","+c.b+")";
		each(o,p=>{
			ctx.beginPath();
			ctx.arc(X(p[0]),Y(p[1]),attractor.dotsize,0,2*Math.PI);
			ctx.fill();
		})
		
	})
	
};


const update = (display,config) => {
	
	initialize(display,config)
	
}


export {initialize,update}
