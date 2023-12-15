// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init,update as model_update} from "./model.js"
import {initialize as visual_init,update as visual_update} from "./viz.js"


function initialize (display,config) {
	model_init();
	visual_init(display,config);
};

function update (display,config) {
 	model_update();
 	visual_update(display,config);
}

export {initialize,update}