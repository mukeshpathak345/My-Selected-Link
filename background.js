function getDomain(name){
switch (name) {
    case "Reps Mozilla":
      return "https://reps.mozilla.org/";
  case "Facebook":
	return "https://www.facebook.com/";
  case "Bugzilla":
	return "https://bugzilla.mozilla.org/";
    case "Support Mozilla":
      return "https://support.mozilla.org/";
  case "Telegram":
	return "https://web.telegram.org";
  case "Slides":
	return "https://slides.com/";
	case "Github":
      return "https://github.com/";
  case "Aframe":
	return "https://aframe.io/";
  case "Gmail":
	return "https://mail.google.com/";
	}

}

function clickMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}


chrome.runtime.onMessage.addListener(clickMyPage);

