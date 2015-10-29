chrome.browserAction.setIcon({path:"logo.gif"});

function updateIcon(tab) {
	if(tab){
		chrome.tabs.executeScript(tab.id, {
			file: 'script.js'
		});	
	}
}

chrome.browserAction.onClicked.addListener(updateIcon);