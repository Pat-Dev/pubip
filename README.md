With this module you can get your current public ip adress.

##### Usage:
```
var publicIp = require("pubip");

publicIp.ip(function(ip){
	if(ip){
		console.log('IP: '+ip);
	}else{
		console.log('IP: Not found!');
	}
});

publicIp.v4(function(ip){
	if(ip){
		console.log('V4: '+ip);
	}else{
		console.log('V4: Not found!');
	}
});

publicIp.v6(function(ip){
	if(ip){
		console.log('V6: '+ip);
	}else{
		console.log('V6: Not found!');
	}
});

publicIp.both(function(v4, v6){
	if(v4) console.log('Both V4: '+v4);
	if(v6) console.log('Both V6: '+v6);
});
```



##### Used services:
- icanhazip.com
- ident.me
- ipify.org