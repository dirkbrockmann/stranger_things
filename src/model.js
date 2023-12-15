// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js


import * as ct from "./controls.js"
import attractors from "./attractors.js"


var orbits = [];

const compute = (attractor,M,N)=>{
	
	let j = 0;
	while(j < M ) {
		let points = [];
		let i = 0;
		let p = [2*attractor.initial_range_factor*(Math.random()-0.5),2*attractor.initial_range_factor*(Math.random()-0.5)];
		points.push(p);

		while(i<N){
			p=attractor.f(p);
			points.push(p);
			i++;
		}
		orbits.push(points);
		j++;
	}	
}

const initialize = () => {

	orbits = [];
	
	const current = ct.radio.value();
	const attractor = attractors[current];
	
	compute(attractor,attractor.M,attractor.N)
	
};


const update = () => {
	
	orbits = [];
	
	const current = ct.radio.value();
	const attractor = attractors[current];
	
	compute(attractor,attractor.M,attractor.N/10)

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {orbits,initialize,update}
