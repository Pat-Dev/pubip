var ownIp = require("./index.js");

ownIp.ip(function(ip){
	if(ip){
		console.log('IP: '+ip);
	}else{
		console.log('IP: Not found!');
	}
});

ownIp.v4(function(ip){
	if(ip){
		console.log('V4: '+ip);
	}else{
		console.log('V4: Not found!');
	}
});

ownIp.v6(function(ip){
	if(ip){
		console.log('V6: '+ip);
	}else{
		console.log('V6: Not found!');
	}
});

ownIp.both(function(v4, v6){
	if(v4) console.log('Both V4: '+v4);
	if(v6) console.log('Both V6: '+v6);
});