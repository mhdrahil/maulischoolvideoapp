// Node Get ICE STUN and TURN list
let o = {
    format: "urls"
};

let bodyString = JSON.stringify(o);
let https = require("https");
let options = {
    host: "global.xirsys.net",
    path: "/_turn/videochatapp77",
    method: "PUT",
    headers: {
        "Authorization": "Basic " + Buffer.from("mhdrahil:81b2acd8-9a74-11ea-86d8-0242ac150002").toString("base64"),
        "Content-Type": "application/json",
        "Content-Length": bodyString.length
    }
};
let httpreq = https.request(options, function(httpres) {
    let str = "";
    httpres.on("data", function(data){ str += data; });
    httpres.on("error", function(e){ console.log("error: ",e); });
    httpres.on("end", function(){ 
        console.log("ICE List: ", str);
    });
});
httpreq.on("error", function(e){ console.log("request error: ",e); });
httpreq.end();