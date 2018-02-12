module.exports = {
    summary:
	"WarShipGirl: Customed rule for switch from iOS server to Android."
    ,
    *beforeSendRequest (req) {
	let badResponse = {
            response: {
                statusCode: 200,
                header: { 'content-type': 'text/html' },
                body: " WarShipGirl: Customed rule for switch from iOS server to Android. \n Danger! All kind of MITM proxy is **DANGEROURS**! ONLY USE THE ONE YOU TRUST!"
            }
        };
	let cdkResponse = {
            response: {
                statusCode: 200,
                header: { 'content-type': 'text/html' },
                body: "登录成功|5184000|cdktoken"
            }
        };
	let timeResponse = {
            response: {
                statusCode: 200,
                header: { 'content-type': 'text/html' },
                body: "5184000"
            }
        };
    if (req.requestOptions.hostname == "get.baibaoyun.com") {
        if(req.requestOptions.hostname.indexOf("flag=login")!=-1) {
			return cdkResponse;
		}
		if(req.requestOptions.hostname.indexOf("flag=getregcodetime")!=-1) {
			return timeResponse;
		}
			
    }
    return badResponse;
    }
    
};