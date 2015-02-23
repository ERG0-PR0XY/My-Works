/** 	This java script functions are used across all the modules

*/
	//to enable other disabled textboxes onchange by the calling tag
	function textboxEnable(obj,textboxEnableId) {
		var txt= obj.value;
		if(txt.length>0){
		dojo.byId(textboxEnableId).disabled = false;
		dojo.byId(textboxEnableId).style.backgroundColor="#ffffff";
		}
		else if(txt.length<=0){
		dojo.byId(textboxEnableId).disabled=true;
		dojo.byId(textboxEnableId).style.backgroundColor="#E1E1E1";
		}
	}

	// Function for showing the div element reference by id
	function showDiv(DivId){
		document.getElementById(DivId).style.display = 'block'
	}

	// Function for hidding the div element reference by id
	function hideDiv(DivId){
		document.getElementById(DivId).style.display = 'none'
	}

	// Generic Function for showing the popup dialog with reference to div id//Generic Function for showing the popup dialog with reference to div id
	function fnShowLookupPopup(popupId,SUrl,width,height,title){
		var sLookup = dijit.byId(popupId);
 		var sLookupRef = dojo.byId(popupId);
 		sLookupRef.style.height = height;
 		sLookupRef.style.width = width;
 		sLookup.titleNode.innerHTML = title;
 		sLookup.setHref(SUrl);
 		sLookup.show();
	}

	//define the flag for popup height management
 	var addflag=false;
 	var editflag=false;
 	var delflag;
 	var popupheight;
 	var delpopupid;
 	var popupresizedflag =false;
 	var popuprelationheight;
 	var popuprelationresizedflag =false;
 	var o=new Array();
 	var left=new Array();

	/** Function to validate the Add popup forms
		this function gets popupdiv id, form name, error message display div and error msg
	*/
	function fnValidate(PopupDiv,FormName,ErrorDiv,InErroMsg,ErrorMsg){
		var thisForm = dijit.byId(FormName);
 	 	if(!thisForm.isValid()){
			thisForm.validate();
        	//dijit.byId(FormName).reset();
			if(dojo.byId(ErrorDiv).style.display != 'block'){
				dojo.byId(ErrorDiv).style.display = 'block';
				dojo.byId(PopupDiv).style.height  = parseInt(dojo.byId(PopupDiv).style.height)+ 50;
			}
			dojo.byId(InErroMsg).innerHTML='';
			var newdiv = document.createElement("div");
			newdiv.innerHTML = ErrorMsg;
	    	var container = dojo.byId(InErroMsg);
        	container.appendChild(newdiv);
			return false;
	 	}else {
	 		if(dojo.byId(ErrorDiv).style.display == 'block'){
	 			dojo.byId(ErrorDiv).style.display = 'none';
	 			dojo.byId(PopupDiv).style.height  = parseInt(dojo.byId(PopupDiv).style.height)- 50;
	 		}
	 	return true;
		}
	}
	
	/** Function to validate the Add popup forms for Dynamic Dialog box
		this function gets popupdiv id, form name, error message display div and error msg
	*/
	function fnValidateDJDialog(PopupDiv,FormName,ErrorDiv,InErroMsg,ErrorMsg){
		var thisForm = dijit.byId(FormName);
 	 	if(!thisForm.isValid()){
			thisForm.validate();
        	if(dojo.byId(ErrorDiv).style.display != 'block'){
				dojo.byId(ErrorDiv).style.display = 'block';
			}
			dojo.byId(InErroMsg).innerHTML='';
			var newdiv = document.createElement("div");
			newdiv.innerHTML = ErrorMsg;
	    	var container = dojo.byId(InErroMsg);
        	container.appendChild(newdiv);
			return false;
	 	}else {
	 		if(dojo.byId(ErrorDiv).style.display == 'block'){
	 			dojo.byId(ErrorDiv).style.display = 'none';
	 		}
	 	return true;
		}
	}

	function popUpConfirmation(PopupDiv,FormName,ErrorDiv,InErroMsg,ErrorMsg){
		if(dojo.byId(ErrorDiv).style.display != 'block'){
			dojo.byId(ErrorDiv).style.display = 'block';
			dojo.byId(PopupDiv).style.height  = parseInt(dojo.byId(PopupDiv).style.height)+ 50;
		}
		dojo.byId(InErroMsg).innerHTML='';
		var newdiv = document.createElement("div");
		newdiv.innerHTML = ErrorMsg;
	    var container = dojo.byId(InErroMsg);
        container.appendChild(newdiv);
	}
	
	//popup confirmation code for JDialog implemented boxes (Adjustment height not required)
	function popUpConfirmationDJDialog(PopupDiv,FormName,ErrorDiv,InErroMsg,ErrorMsg){
		if(dojo.byId(ErrorDiv).style.display != 'block'){
			dojo.byId(ErrorDiv).style.display = 'block';
		}
		dojo.byId(InErroMsg).innerHTML='';
		var newdiv = document.createElement("div");
		newdiv.innerHTML = ErrorMsg;
	    	var container = dojo.byId(InErroMsg);
       	container.appendChild(newdiv);
	}
	
	// Function to resize the panel
	function resizePanel(PopupDiv,ErrorDiv,width,height){
		if(dojo.byId(ErrorDiv).style.display == 'block'){
			dojo.byId(PopupDiv).style.height = parseInt(dojo.byId(PopupDiv).style.height)+ 50;
		}
	}


	// Station Lookup

	function saveStationLookup(){
		var destinationStationTxt = dojo.byId("stationLookupRightlist");
		var len = dojo.byId("stationLookupRightlist").length;
		var ar=new Array(len);
		for(var i = 0; i<len; i++){
			ar[i] = destinationStationTxt.options[i].value;
		}
		var str = "";

		for(var i = 0; i<len; i++){
			str += ar[i];
			if(i != len-1)
			str = str +",";
		}

		var stationTxt = dojo.byId("priceGroupstation");
		stationTxt.value = str;
		dijit.byId('stationLookupDialog').hide();
	}

	// Prg Station Lookup (added by saurabh)
	function savePrgStationLookup(){
		var destinationStationTxt = dojo.byId("stationLookupRightlist");
		var len = dojo.byId("stationLookupRightlist").length;
		var ar=new Array(len);
		for(var i = 0; i<len; i++){
			ar[i] = destinationStationTxt.options[i].value;
		}
		var str = "";

		for(var i = 0; i<len; i++){
			str += ar[i];
			if(i != len-1)
			str = str +",";
		}

		var stationTxt = dojo.byId("prgStations");
		stationTxt.value = str;
		dijit.byId('stationLookupDialog').hide();
	}

	//function to show more or less
	function fnShowSelector(){
		var flag;
		var text = document.getElementById('showText').innerHTML;
		if(text == "Show More &gt;&gt;"){
			flag = true;
			document.getElementById('showText').innerHTML = "Show Less &lt;&lt;";
		}else if(text == "Show Less &lt;&lt;"){
			flag = false;
			document.getElementById('showText').innerHTML = "Show More &gt;&gt;";
		}
		var flexApp = FABridge.itemOverviewGrid.root();
		flexApp.hideDGColumn(flag);
	}

	//function to open the delete confirmation popup
	function openDeleteConfirmPopup(delpopupid){
		var popupUrl = "/ifx/jsp/mm/deleteConfirmationPopup.jsp?popupid="+delpopupid;
		fnShowLookupPopup(delpopupid,popupUrl,'395px','150px','Information');
	}


	//function for get the confirmation for delete
	function fnDeleteConfirm(confirmation,popupid){
		var delLookup = dijit.byId(popupid);
		if(confirmation){
			if(popupid=="deleteconfirmstation")
				fnDoStationDelete();
			else
				fnDoDelete();
			return true;
		}else {
			delid = "";
			delLookup.hide();
			return false;
		}
	}

	// Code for setting focus on first element on page load.
 	function setFocusOnFirstElement(element) {
   		dojo.byId(element).focus();
		return false;
 	}

	//function for confirmation
	/*************************************************************************************************
	This function requires 5 parameters
	1 - which div place we needs to put this content
	2 - what is the title of the popup
	3 - what is the type of the popup for ex success, error, warning, information....
	4 - what message we need display in popup
	5 - what is the name of the function we need to call on click that button in that popup

	**************************************************************************************************/
	function fnShowConfirmation(dialogid,title,type,msg,hideDialog){
		var str = "";
		var img;
		str +="<table border='0' width='95%' align='center' cellpadding='0' cellspacing='0'>";
        str +="<tr>";
        str +="<td height='10' colspan='4'> </td>";
        str +="</tr>";
        str +="<tr>";
		if(type=='error'){
			img = 'delete_icon.png';
		}else if(type=='errormessage'){
			img = 'delete_icon.png';
		}else if(type=='warning') {
			img = "warning_icon.jpg";
		}else if(type=='info') {
			img = "info_icon.jpg";
		}else {
			img = 'ok_icon.jpg';
		}
        str +="<td align='right' width='20%'><img src='../js/common/dojoroot/dijit/themes/tundra/images/global/"+img+"' border='0'/></td><td align='left' colspan='3' style='padding-left:10px;' width='80%'><strong>"+msg+"</strong></td>";
        str +="</tr>";
        str +="<tr>";
        str +="<td height='10' colspan='4'> </td>";
        str +="</tr>";
        str +="<tr>";
		str +="<td align='right' colspan='4'><div>";
		str +="<a class='buttonTemplate' onClick=\""+hideDialog+"('"+dialogid+"');\"><span>Ok</span></a>";
		str +="</div>";
		str +="</td>";
        str +="</tr>";
		str +="</table>";

 		dojo.byId(dialogid).style.height="140px";
		dojo.byId(dialogid).style.width="400px";
		dijit.byId(dialogid).titleNode.innerHTML=title;
		dijit.byId(dialogid).setContent(str);

		var popupTimer=new dojox.timing.Timer(3000);
		popupTimer.tcount = 0;
		popupTimer.onTick = function () {
			if(this.tcount !=0){
				popupTimer.stop();
				var popup = dijit.byId(dialogid);
				if(popup){popup.hide();}
			}
			if(this.tcount ==0) this.tcount++
			};
		popupTimer.start();
		}


  function isNumberKey(evt)
  {
	 var charCode = (evt.which) ? evt.which : evt.keyCode
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	 return true;
  }

	//function to reset the form
	function resetForm(formName){
		dijit.byId(formName).reset();
	}


	function focusFirstInput(what){
   	 //what = 'addSDRGroupForm';
		setTimeout(dojo.hitch(what, function(){
                dijit.focus(dojo.query('input', what.domNode)[0]);
        }), 75);
	}

	function f_setfocus(aForm){

		if( aForm.elements[0]!=null) {
			var i;
			var max = aForm.length;
			//alert(max);
			for( i = 0; i < max; i++ ) {
				if( aForm.elements[ i ].type != "hidden" &&
					!aForm.elements[ i ].disabled &&
					!aForm.elements[ i ].readOnly ) {
					aForm.elements[ i ].focus();
					break;
				}
			}
		}
	}


	//Function to get the all values from multiselectbox
  	function setAllElemntsAsSelected(listname) {
        var allSelected =   document.getElementById(listname);
	    for (var i=0; i<allSelected.options.length; i++){
			var o = allSelected.options[i];
          	o.selected = true;
	    }
	}

	//Function to clear list boxes
	function MoveRight(rightName){
			//This code is used for the Rigth hadn side List Box
		if(left.length==0)
		if(o.length==0) {
			var s=document.getElementById(rightName).options;
			for(var i=0;i<s.length;i++) {
				o.push(s[i]);
			}
		 }
	 }

	//This code is used for Left Comob box
	function MoveLeft(leftName){
		if(left.length==0){
			var s=document.getElementById(leftName).options;
			for(var i=0;i<s.length;i++){
				left.push(s[i]);
			 }
		 }
	 }


  	function comboRight(comboRight){

		var flag=0
	    if(o.length!=0) {
			flag=1;
			var s=document.getElementById(comboRight).options;
			for(var i=s.length-1;i>=0;i--){
				s[i]=null;
			}
			for(var i=0;i<o.length;i++){
				s[i] = new Option( o[i].text, o[i].value) ;
			}
		 }

		if(flag==0){
			if(left.length!=0){
				var s=document.getElementById(comboRight).options;
				for(var i=s.length-1;i>=0;i--){
					s[i]=null;
				}
			}

		}
	 }

	// This Code is for Left  Combbox
	function comboLeft(comboLeft){

		if(left.length!=0){
			var s=document.getElementById(comboLeft).options;
			for(var i=s.length-1;i>=0;i--){
				s[i]=null;
			}
			for(var i=0;i<left.length;i++){
				s[i] = new Option( left[i].text, left[i].value) ;
			}
		}
	}


	/****
	Function For Disableing Calender Of dojo DateTextbox Base on Condtion

	of Strat Effective Date and End Effective Date


***/
function calenderDisableingBaseonTextBox(addPriceGroupStartDateTxt,addPriceGroupEndDateTxt,txtFrom,txtTo)
	{

		var todaydate=new Date();
		var date_st=(todaydate.getDate()-1)+"/"+(todaydate.getMonth()+1)+"/"+todaydate.getFullYear();
		//alert(date_st)
		var priceStartDate =dijit.byId(addPriceGroupStartDateTxt);
		var priceEndDate=dijit.byId(addPriceGroupEndDateTxt);
		var stationstartdate=dijit.byId(txtFrom);
		//86400000
			var newDate=new Date();
	newDate.setDate(newDate.getDate()-1)

		if(priceStartDate.getValue()==null)
		{

			priceStartDate.constraints.min=newDate;
			dijit.byId(txtFrom).constraints.min=newDate;

			/*
				if Start Effective Date is nothing at that time End Effective Date(addPriceGroupEndDateTxt) will Start with Currect //Date
			*/
			dijit.byId(txtTo).constraints.min=newDate;

				/*
					if user Has not given "addPriceGroupStartDateTxt" then
					addPriceGroupEndDateTxt will start from Today Date
				*/

				priceEndDate.constraints.min=newDate;

		}else
		{
			priceEndDate.constraints.min=Date.parse(priceStartDate.getValue());

			dijit.byId(txtFrom).constraints.min=Date.parse(priceStartDate.getValue())-86400000;

			/// if Star Effective Date Have some Date at that time End Effective Date
					// start date will start from StartEffective Date
			dijit.byId(txtTo).constraints.min=Date.parse(stationstartdate.getValue())-86400000;

			/* if user has fill the "addPriceGroupStartDateTxt"
				At that time "addPriceGroupEndDateTxt" will start from "addPriceGroupStartDateTxt"

			*/


		}

		/// this is for End Date
		if(priceEndDate.getValue()==null)
		{
			dijit.byId(txtTo).constraints.max='string';
			dijit.byId(txtFrom).constraints.max='string';


		}else
		{
			// this is for secondEffective Start Date
			dijit.byId(txtFrom).constraints.max=Date.parse(priceEndDate.getValue());

			dijit.byId(txtTo).constraints.max=Date.parse(priceEndDate.getValue());
		}

		//alert(priceStartDate.constraints.min)
	}






function editCalenderDisableingBaseonTextBox(editPriceGroupStartDateTxt, editPriceGroupEndDateTxt, editTxtFrom, editTxtTo)
	{

		var todaydate=new Date();
		var date_st=(todaydate.getDate()-1)+"/"+(todaydate.getMonth()+1)+"/"+todaydate.getFullYear();
		//alert(date_st)
		var priceStartDate =dijit.byId(editPriceGroupStartDateTxt);
		var priceEndDate=dijit.byId(editPriceGroupEndDateTxt);
		var stationstartdate=dijit.byId(editTxtFrom);
		//86400000
			var newDate=new Date();
	newDate.setDate(newDate.getDate()-1)

		if(priceStartDate.getValue()==null)
		{

			priceStartDate.constraints.min=newDate;
			dijit.byId(editTxtFrom).constraints.min=newDate;

			/*
				if Start Effective Date is nothing at that time End Effective Date(addPriceGroupEndDateTxt) will Start with Currect //Date
			*/
			dijit.byId(editTxtTo).constraints.min=newDate;

				/*
					if user Has not given "addPriceGroupStartDateTxt" then
					addPriceGroupEndDateTxt will start from Today Date
				*/

				priceEndDate.constraints.min=newDate;

		}else
		{
			priceEndDate.constraints.min=Date.parse(priceStartDate.getValue())-86400000;

			dijit.byId(editTxtFrom).constraints.min=Date.parse(priceStartDate.getValue())-86400000;

			/// if Star Effective Date Have some Date at that time End Effective Date
					// start date will start from StartEffective Date
			dijit.byId(editTxtTo).constraints.min=Date.parse(stationstartdate.getValue())-86400000;

			/* if user has fill the "addPriceGroupStartDateTxt"
				At that time "addPriceGroupEndDateTxt" will start from "addPriceGroupStartDateTxt"

			*/


		}

		/// this is for End Date
		if(priceEndDate.getValue()==null)
		{
			dijit.byId(editTxtTo).constraints.max='string';
			dijit.byId(editTxtFrom).constraints.max='string';


		}else
		{
			// this is for secondEffective Start Date
			dijit.byId(editTxtFrom).constraints.max=Date.parse(priceEndDate.getValue());

			dijit.byId(editTxtTo).constraints.max=Date.parse(priceEndDate.getValue());
		}

		//alert(priceStartDate.constraints.min)
	}

 //Function for showing menu in header.jsp file.
function menu_over(item) {
	item.className += ' over';
	if (navigator.appName.indexOf ("Microsoft") !=-1) {
		document.getElementById('layout_menubar').focus();
	} else{
		//		 document.getElementById('hideme').focus();
	}
}

//Function to call when moved out of Menu.
function menu_out(item) {
		item.className = item.className.replace(' over', '');
		item.className = item.className.replace('over', '');
}

//Function to call common service - customer search popup
function createCustomerSearchPopup(target_id,target_display){
	if(!dijit.byId(target_display).readOnly){
		var param = {
			dialogId:'customerSearchPopup',
			url:'/ifx/jsp/ifx/contents/customerSearch_popup.jsp',
			title:'Customer Search',
			style:'width:720px',
			targetId: dojo.byId(target_id),
			targetDisplay: dojo.byId(target_display)
		};
		new com.egatesolutions.LookupDialogBox(param).show();
	}
}

//Function to call common service - Flight Tag lookup Popup
var global_AddPolling_FlightTag=false;

function flightTagLookupPopup(autoSuggestId,hiddenId,popupTitle){
	if(!dijit.byId(autoSuggestId).readOnly){
		var param = {
				dialogId : 'Lookupflighttagcategory',
				url : '/ifx/ess/common/popup/flightTagCommonServicePopup.do?autoSuggestId='+autoSuggestId+'&hiddenId='+hiddenId,
				title : popupTitle,
				style : 'width:700px;',
				preventCache : true	
		}
		var dialog = new com.egatesolutions.DialogBox(param);
		dialog.show();
		if(global_AddPolling_FlightTag==true){
			zIndexFlightTag();
		}
	}
}

//Function to call common service - UnitMaster Based on Station
function getUnitMasterByStation(stationHiddenId,unitDropDownId,taskName){
	dojo.xhrPost( { 
		
		url: '/ifx/commonService/getUnitMasterByStation.do',
		
		content:{"stationId":dojo.byId(stationHiddenId).value,"taskName":taskName},
	
		handleAs: 'json',

		timeout: 5000, // Time in milliseconds
	
		// The load function will be called on a successful response.
		load: function(data){
			var datastore = { identifier: 'id', label: 'display', items:[]};
			filteringSelectObject = dijit.byId(unitDropDownId);
			filteringSelectObject.store = new dojo.data.ItemFileWriteStore({data: datastore} );
			for (var i = 0; i < data.length; i++){
					filteringSelectObject.store.newItem(data[i]);		
			}
			filteringSelectObject.store.save({onComplete: filteringSelectObject.saveDone, onError: filteringSelectObject.saveFailed	});
			filteringSelectObject.searchAttr="display";
			filteringSelectObject.setDisplayedValue(data[0].display);
			filteringSelectObject.setValue(data[0].id);
			filteringSelectObject.focus();
		}
	
	});
}

//clears autosuggest
function resetAutosuggest(id){
	dijit.byId(id).clear();
}

//clears Filtering select
function clearFilteringSelect(id){
	var datastore = { identifier: 'id', label: 'display', items:[]};
	filteringSelectObject = dijit.byId(id);
	filteringSelectObject.store = new dojo.data.ItemFileWriteStore({data: datastore} );
	filteringSelectObject.store.newItem({'id':'0','display':''});		
	filteringSelectObject.store.save({onComplete: filteringSelectObject.saveDone, onError: filteringSelectObject.saveFailed	});
	filteringSelectObject.setValue('0');
	filteringSelectObject.setDisplayedValue('');
}

//Validate FilteringSelect for 0 or ''
function isFilteringSelectValid(id){
	var filteringSelect=dijit.byId(id);
	filteringSelect.validate();
	console.debug("isFilteringSelectValid::Value::"+filteringSelect.getValue());
	if(filteringSelect.getValue()==0 || filteringSelect.getValue()==''){
		filteringSelect.state = "Error";
		filteringSelect._setStateClass();
		var message = filteringSelect.getErrorMessage(true);
		filteringSelect.displayMessage(message);
		return false;
	}else{
		return true;
	}
}

//Function to call common service - Service Code Tag lookup Popup
function serviceCodeLookupPopup(textfield){
var success=1;

if(page==1) { 
var serviceType=dijit.byId('serviceType'); 
if(serviceType.getDisplayedValue().length==0) {

success=0; 

createPopup('selectServiceType');
			var deleteBoxOptions = {
				dialogId:'selectServiceType',
				title:'Information',
				msg:'Please Select atleast one Service'
			};
			warningMessageBox(deleteBoxOptions);

} 
}


if(success==1) {
	var popupUrl = "/ifx/jsp/ess/ruleset/content/searchPartLookup_popup.jsp?textfield="+textfield;
	var param = {
			dialogId : 'PartLookup',
			url : popupUrl,
			title : 'Search Part',
			style : 'width:815px;',
			preventCache : true	
	}
	var dialog = new com.egatesolutions.DialogBox(param);
	dialog.show();
	
}
}
//Function to call common service - Service Category Tag lookup Popup
function serviceCategoryLookupPopup(methodIdentifier,comboId,textField){
 
  

var success=1;

if(page==1) { 
var serviceType=dijit.byId('serviceType'); 
if(serviceType.getDisplayedValue().length==0) {

success=0; 

createPopup('selectServiceType');
			var deleteBoxOptions = {
				dialogId:'selectServiceType',
				title:'Information',
				msg:'Please Select atleast one Service'
			};
			warningMessageBox(deleteBoxOptions);

} 
}


if(success==1) {

	 
	document.frmMain.hidSaveTxtBox.value = textField;
	var extraField="~1~";
	var popupUrl = "/ifx/ess/index.html?from_outcome=conditionPopUp&from_view_id=ruleset/editRule.jsp&methodIdentifier="+methodIdentifier+"&textFieldName="+comboId+"&extraField="+extraField+"&request_type=FSS&current_page=ruleset/editRule.jsp&essLocaleId=3&comboId="+comboId;
	
	var param = {
			dialogId : 'servicecategoryLookup',
		    url : popupUrl,
		    title : 'Select Service Category',
			style : 'width:500px;',
			preventCache : true	
	}
	var dialog = new com.egatesolutions.DialogBox(param);
	dialog.show();
	
}
}
//Function to call common service - Service Type Tag lookup Popup
function serviceTypeLookupPopup(methodIdentifier,comboId,textField){
var success=1;

if(page==1) { 
var serviceType=dijit.byId('serviceType'); 
if(serviceType.getDisplayedValue().length==0) {

success=0; 

createPopup('selectServiceType');
			var deleteBoxOptions = {
				dialogId:'selectServiceType',
				title:'Information',
				msg:'Please Select atleast one Service'
			};
			warningMessageBox(deleteBoxOptions);

} 
}


if(success==1) {
	
	document.frmMain.hidSaveTxtBox.value = textField;
	var extraField="~1~";
	var popupUrl = "/ifx/ess/index.html?from_outcome=conditionPopUp&from_view_id=ruleset/editRule.jsp&methodIdentifier="+methodIdentifier+"&textFieldName="+comboId+"&extraField="+extraField+"&request_type=FSS&current_page=ruleset/editRule.jsp&essLocaleId=3&comboId="+comboId;
	var param = {
			dialogId : 'servicetypeLookup',
		    url : popupUrl,
			title : 'Select Services Type',
			style : 'width:500px;',
			preventCache : true	
	}
	var dialog = new com.egatesolutions.DialogBox(param);
	dialog.show();
}
}


