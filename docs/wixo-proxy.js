// WX Infra Proxy PAC File
// Returns proxy or direct connection based on domain rules
function FindProxyForURL(url, host) {
  var DIRECT = "DIRECT";
  var PROXY = "PROXY vpn.wixo.dev:9090;DIRECT";

  // Always connect directly for this domain
  if (
    typeof host === "string" &&
    shExpMatch(host, "singtelguest.singtel.com")
  ) {
    return DIRECT;
  }

  // Domains to use proxy for
  var domainsToProxy = [
    "*.aws.singtel.com",
    "empowersit.singtel.com",
    "empoweruat.singtel.com",
    "myempowersit.singtel.com",
    "myempoweruat.singtel.com",
  ];

  // Proxy for listed domains
  for (var i = 0; i < domainsToProxy.length; i++) {
    if (typeof host === "string" && shExpMatch(host, domainsToProxy[i])) {
      return PROXY;
    }
  }

  // Fallback: direct connection
  return DIRECT;
}
