var webSocket = require("websocket").server;
var http = require("http");
var url = require("url");
var redundancy1 = 0;
var redundancy2 = 0;
var level = 0;
var motor1 = false;
var motor2 = false;
var flag = 0;
var motorCounter1 =0;
var motorCounter2 = 0;
var pH=0;
var count = 0;
static var startPumping;     //set by browser, global start/stop

var httpServer = http.createServer();
var webServer = http.createServer();

httpServer.listen(80);
webServer.listen(81);
httpServer.on(function(request,response){
var urlParsePath = url.parse(request.url).pathname;
if(urlParsePath==="echo"){

var value = queryString.parse["value"]
switch(count){
case 1: 
level = value;
break;
case 2:
motor1 = value;
break;
case 3:
motor2 = value;
break;
case 4:
pH = value;
break;
}
}

if(startPumping == true&&redundancy1<2){
response.write("s");
redundancy1++;}
else if(startPumping==false&&redundancy2<2){
response.write("p");
redundancy2++;}

balance(pH);
if(change == 1){
motorCounter2 =0;}
else if(change ==2){
motorCounter1 = 0;}
if(change==1&&motorCounter1<2){
response.write("1"); }  //case 1
else if(change==2&&motorCounter2<2){
response.write("2")}  //case 2
if(count>3){
count = 0;}
else{
count++;}
response.end();
});




webSocket = new webSocket(
{ webServer:webSocket
autoAcceptConnections = false;

});
webSocket.on('msg', function(msg) {
if(msg=== "s"){
startPumping = true;
else if(msg === "p"){
startPumping = false;}

});


function balance(pH){

if(pH<7&&motor1==false&&motor2==true){
change=1;
motor1 = true;
motor2 = false;
motorCounter1++;
}
else if(pH>7&&motor1==true&&motor2==false){
change = 2;
motor2 = true;
motor1 = false;
motorCounter2++;

} 

function notAllowed(url){
if(origin==="/sandbox/hackathon/rx024d/in/flow/hack/"){
return true;
}
return false;
}










