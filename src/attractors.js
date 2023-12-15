export default [
	{
		N:10000,
		M:10,
		scale:false,
		dotsize:0.5,
		opacity:0.25,
		color1:"red",
		color2:"black",
		name:"Bedhead Attractor",
		P: [
			{id:"A", name: "\u03B1", range: [-1,1],defv:0.65343,value:0.65343},
			{id:"B", name: "\u03B2", range: [-1,1],defv:0.7345345,value:0.7345345},
		],
		
				initial_range_factor:2,
		xrange:[-5,5],
		yrange:[-10,10],
		f: function(x) {
			return [ 
				x[1]*Math.sin(x[1]*x[0]/this.P[1].widget.value())+Math.cos(this.P[0].widget.value()*x[0]-x[1]),
				x[0]+Math.sin(x[1])/this.P[1].widget.value()
			]
		} 
	},
	{
		name:"Clifford Attractor",
		scale:false,
		N:10000,
		M:10,
		dotsize:0.5,
		opacity:0.25,
		color1:"red",
		color2:"black",
		P: [
			{id:"A", name: "\u03B1", range: [0,3],defv:1.7,value:1.7},
			{id:"B", name: "\u03B2", range: [0,3],defv:1.8,value:1.8},
			{id:"C", name: "\u03B3", range: [0,1.9],defv:0.9,value:0.9},
			{id:"D", name: "\u03B4", range: [0,1.9],defv:0.4,value:0.4}
		],
		initial_range_factor:3,
		xrange:[-3,3],
		yrange:[-3,3],
		f: function(x) {
			return [ 
				Math.sin(this.P[0].widget.value()*x[1])+this.P[2].widget.value()*Math.cos(this.P[0].widget.value()*x[0]),
				Math.sin(this.P[1].widget.value()*x[0])+this.P[3].widget.value()*Math.cos(this.P[1].widget.value()*x[1])]
		} 
	},
	{
		N:10000,
		M:10,
		dotsize:0.5,
		opacity:0.25,
		scale:false,
		color1:"red",
		color2:"black",
		name:"Fractal Dream Attractor",
		P: [
			{id:"A", name: "\u03B1", range: [-3,3],defv:-0.966918,value:-0.966918},
			{id:"B", name: "\u03B2", range: [-3,3],defv:2.879879,value:2.879879},
			{id:"C", name: "\u03B3", range: [-3,3],defv:0.765145,value:0.765145},
			{id:"D", name: "\u03B4", range: [-3,3],defv:0.744728,value:0.744728}
		],
				initial_range_factor:2,
		
		xrange:[-2.5,2.5],
		yrange:[-2.5,2.5],
		f: function(x) {
			return [ 
				Math.sin(this.P[1].widget.value()*x[1])+this.P[2].widget.value()*Math.sin(this.P[1].widget.value()*x[0]),
				Math.sin(this.P[0].widget.value()*x[0])+this.P[3].widget.value()*Math.sin(this.P[0].widget.value()*x[1])]
		} 
	},
	{
		N:10000,
		M:10,
		dotsize:.5,
		opacity:0.25,
		scale:false,
		initial_range_factor:2,
		color1:"red",
		color2:"black",
		name:"Gumowski-Mira Attractor",
		P: [
			{id:"A", name: "\u03B1", range: [-.3,.3],defv:0.266,value:0.266},
			{id:"B", name: "\u03B2", range: [.8,1],defv:1,value:1}
		],
		xrange:[-3.5,3.5],
		yrange:[-3.5,3.5],
		f: function(x) {
			var w = this.P[0].widget.value()*x[0]+2*(1-this.P[0].widget.value())*x[0]**2/(1+x[0]**2)/(1+x[0]**2)
			var t = this.P[1].widget.value()*x[1]+w;
			var q = this.P[0].widget.value()*t+2*(1-this.P[0].widget.value())*t**2/(1+t**2)/(1+t**2)
			return [ 
				t,
				q-x[0]
			]
		} 
	}
]