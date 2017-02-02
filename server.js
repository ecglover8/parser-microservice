var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.get("/whodis", function (req, res) {
  var response = {};
  //get client's IP address from HTTP header or remote address
  var ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  //get client's language preference two-digit code from request header and return full name of language
  var lang = (req.header("accept-language")).slice(0,2);
  var language;
  switch (lang) {
    case "ar" :
      language = "Arabic";
      break;
    case "de" :
      language = "German";
      break;
    case "en" :
      language = "English";
      break;
    case "fr" :
      language = "French";
      break;
    case "hi" :
      language = "Hindi";
      break;
    case "it" :
      language = "Italian";
      break;
    case "ja" :
      language = "Japanese";
      break;
    case "ko" :
      language = "Korean";
      break;
    case "ru" :
      language = "Russian";
      break;
    case "zh" :
      language = "Chinese";
      break;
    case "zu" :
      language = "Zulu";
      break;
    default :
      language = lang;
      break;
  };
  //get client's OS and browser from user agent header
  var useragent = req.header("user-agent").toLowerCase();
  var os = " ";
  if (useragent.indexOf("windows") != -1) {
    os = "Micrososft Windows";
  }
  if (useragent.indexOf("macin") != -1) {
    os = "Mac OS";
  }
  if (useragent.indexOf("x11") != -1 || useragent.indexOf("linux") != -1) {
    os = "Linux";
  }
  if (useragent.indexOf("bot") != -1) {
    os = "Are you a bot?";
  }
  if (useragent.indexOf("android") != -1) {
    os = "Android";
  }
  if (useragent.indexOf("iphone") != -1) {
    os = "iPhone";
  }
  var browser = " ";
  if (useragent.indexOf("firefox") != -1 && useragent.indexOf("seamonkey") == -1) {
    browser = "Firefox";
  }
  if (useragent.indexOf("chrome") != -1 && useragent.indexOf("chromium") == -1) {
    browser = "Chrome";
  }
  if (useragent.indexOf("safari") != -1 && useragent.indexOf("chrome") == -1 && useragent.indexOf("chromium") == -1) {
    browser = "Safari";
  }
  if (useragent.indexOf("opera") != -1) {
    browser = "Opera";
  }
  if (useragent.indexOf("msie") != -1) {
    browser = "Internet Explorer";
  }
  if (useragent.indexOf("mobi") != -1) {
    browser += " Mobile";
  }
  response.IP = ip;
  response.Language = language;
  if (os == " ") {
    os = "Cannot identify your operating system"
  }
  response.Operating_System = os;
  if (browser == " ") {
    browser = "Cannot identify your browser"
  }
  response.Browser = browser;
  console.log(response);
  res.setHeader("content-type", "application/json");
  res.json(response);
});
//always use port 8080 on c9.io
app.listen(port, function () {
  console.log("The request header parser app is ready to go on port " + port + "!");
});