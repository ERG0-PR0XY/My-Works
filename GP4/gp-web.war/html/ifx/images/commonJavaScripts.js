//Function for showing menu in header
function menu_over(item) {
		item.className += ' over';
		if (navigator.appName.indexOf ("Microsoft") !=-1) {
		document.getElementById('layout_menubar').focus();
	   }
}


function menu_out(item) {
	item.className = item.className.replace(' over', '');
	item.className = item.className.replace('over', '');
}

function showError(error){
			createPopup('errorPopup')
			var ErrorBoxOptions = {
			dialogId:'errorPopup',
			title:'Error',
			msg:error
			};
			errorBox(ErrorBoxOptions);

}


function createPopup(idPopup){
		if(!dijit.byId(idPopup)){
			var param = {dialogId : idPopup, url : '',title : '',style : ''};
			var dialog = new  com.egatesolutions.DialogBox(param);
		}
}

function getCaterersByStation(station,caterer){
	//console.debug('populateCategory');
	//this.sentList = new dojo.data.ItemFileWriteStore({ data: {identifier: 'id', label: 'display', items:[]} });


	stationId = dijit.byId(station).getValue();

	console.debug(stationId);
	dojo.xhrGet( {

		url: '/ifx/commonservice/getCatererByStation.do?stationId='+stationId,

		handleAs: 'json',

		timeout: 50000, // Time in milliseconds

		preventCache: true,
		// The load function will be called on a successful response.
		load: function(data){
		populateSuggestion(data,caterer);
		}
	});

}

/***************  will be called to populate suggestions coming from GetCaterersByStationController ***************/
function populateSuggestion(suggestList,caterer){

	var datastore = { identifier: 'id', label: 'display', items:[]};
	filteringSelectObject = dijit.byId(caterer);
	//filteringSelectObject.setDisplayedValue("");
	filteringSelectObject.reset();
	filteringSelectObject.store = new dojo.data.ItemFileWriteStore({data: datastore} );
	for (var i = 0; i < suggestList.length; i++){
			filteringSelectObject.store.newItem(suggestList[i]);
			//added by balaji for catgy type
			//test[suggestList.id] = suggestList.type;
	}
	filteringSelectObject.store.save({onComplete: filteringSelectObject.saveDone, onError: filteringSelectObject.saveFailed	});
	filteringSelectObject.disabled=false;
	filteringSelectObject.searchAttr="display"

	filteringSelectObject.setValue(suggestList[0].id);
	filteringSelectObject.setDisplayedValue(suggestList[0].display);
	//filteringSelectObject.reset();
	filteringSelectObject.focus();
}

function removeLeadingChar(str,ch){
	var finished = false;
	while(!finished){

		if(str.indexOf(ch) == 0){
			str = str.substring(1);
		}else{
			finished = true;
		}
	}
	return str;
}

