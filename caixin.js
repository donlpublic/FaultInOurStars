var header=$request['headers'];
var url=$request.url.replace(/uid=(\d+|)/g,"uid=12622061")
            .replace(/code=(\w+|)/g,"code=7258E07D155FE91FB868E545947DDCAB")
            .replace(/device=(\w+|)/g,"device=af491839f424cf75f07d7f4d6b7a30bde3296ea2")
            .replace(/deviceType=(\d+|)/g,"deviceType=1");
$done({'url':url,'headers':header});
