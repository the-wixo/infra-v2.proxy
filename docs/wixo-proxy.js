//* validate the file from https://devakswixodevstg.z23.web.core.windows.net/wixo-proxy.js */ 
function FindProxyForURL(url, host) {
  var DIRECT = 'DIRECT';
  var PROXY = 'PROXY vpn.wixo.dev:9090;DIRECT';

  if (shExpMatch(host, 'singtelguest.singtel.com')) {
      return DIRECT;
  }
  // Define the list of domains to redirect to the proxy
  var domainsToProxy = [
    '*.aws.singtel.com',
    'empowersit.singtel.com',
    'empoweruat.singtel.com',
	  'myempowersit.singtel.com',
	  'myempoweruat.singtel.com'
  ];

  // Use a regular for loop to iterate over the domainsToProxy array
  for (var i = 0; i < domainsToProxy.length; i++) {
    if (shExpMatch(host, domainsToProxy[i])) {
      return PROXY;
    }
  }
  // All other domains should connect directly without using a proxy
  return DIRECT;
}
