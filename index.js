var https = require("https");

var ip_services = ['icanhazip.com',      'ident.me',   'api.ipify.org'];
var v4_services = ['ipv4.icanhazip.com', 'v4.ident.me'];
var v6_services = ['ipv6.icanhazip.com', 'v6.ident.me'];

function ip(cb){
	request(ip_services, cb);
}
function v4(cb){
	request(v4_services, cb);
}
function v6(cb){
	request(v6_services, cb);
}
function both(cb){
	v4(function(v4){
		v6(function(v6){
			cb(v4, v6);
		});
	});
}

module.exports.ip = ip;
module.exports.v4 = v4;
module.exports.v6 = v6;
module.exports.both = both;

function request(urls, cb){
	var count = 0;
	function _(){
		if(urls.length == count){
			cb(null);
			return;
		}
		https.get('https://'+urls[count],function(res){
			if(res.statusCode != 200){
				_();
				return;
			}
			res.setEncoding('utf8');
			res.on('data', function(data){
				var ip = data.trim().toLowerCase();
				if(isIp(ip)){
					cb(ip);
				}else{
					_();
				}
			});
		}).on('error', function(e){
			_();
		});
		count++;
	}
	_();
}

function isIp(ip){
	return /^[0-9a-f.\:]+$/.test(ip);
}