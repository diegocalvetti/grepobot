// ==UserScript==
// @name            Grepobot - Bot for Grepolis
// @namespace        Grepobot - Bot for Grepolis
// @description        Grepobot is a automated script that helps you do stuff in Grepolis automaticaly! One of the best Grepolis bots out there.
// @autor            Grepobot
// @verison            3.1
// @include            http://%2A.grepolis.%2A/*
// @include            https://%2A.grepolis.%2A/*
// ==/UserScript==
(function(){
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = location.protocol+'//bot.grepobot.com/Autobot.js?=' + Math.random();
    link.href = location.protocol+'//bot.grepobot.com/Autobot.css?=' + Math.random();
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();