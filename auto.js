let AnyProxy = require("anyproxy");

var options = {
        type : "http",
        port : 7777,
        hostname: "hg.sunyue.org",
        rule : require('./autorule.js'),
        disableWebInterface: true,
        setAsGlobalProxy: false,
        silent: false,
	forceProxyHttps: true
}
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

