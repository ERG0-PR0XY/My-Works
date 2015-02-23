/* This element will be resized to take up the remaining vertical space
and scroll within that space */
var scrollableElement;
var contentAreaHeight='';

function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight)=='number') {
		windowHeight=window.innerHeight;
	} else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		} else {
			if (document.body&&document.body.clientHeight) {
				windowHeight=document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}

function getCurrentFooterPosition() {
	if(dojo.byId('btm'))
		return dojo.byId('btm').offsetTop;
	else
		return 1;
}

function getTargetFooterPosition() {
	if (document.getElementById) {
		var windowHeight=getWindowHeight();
		if (windowHeight > 0) {

			var footerElement = dojo.byId('btm');
			var footerHeight = footerElement.offsetHeight;
			// we have to subtract 1 because actually letting the footer 'touch'
			// the bottom of the window creates a scrollbar
			return (windowHeight - footerHeight - 1);
		}
	}
}

function fillRemaining(element) {
	var currentTop = getCurrentFooterPosition();
	var targetTop = getTargetFooterPosition();
		element.style.height = element.offsetHeight + (targetTop - currentTop);
}

function contentResize() {
	//	alert("called");
	try {
		if (scrollableElement) {
			fillRemaining(scrollableElement);
		} else {
		//	if(dojo.byId('for_scrollableDiv')){
				var bodyElement = dojo.byId('layout_body');
				fillRemaining(bodyElement);
			//}

		}
	} catch (error) {
	// do nothing, IE is trying to do this too early
	}
	if(dojo.byId('for_scrollableDiv')){
		dojo.byId('for_scrollableDiv').style.height=document.getElementById('for_scrollableDiv').style.height;
		contentAreaHeight=dojo.byId('for_scrollableDiv').style.height;
	}

	if(dojo.byId('addReplaceResultDiv')){
		try{
		var gridEL = document.getElementById("addReplaceResultDiv");

		if(gridEL.offsetHeight == 0){return;}

		var bottom_clearance = 24;
		var contentPaneDiv = document.getElementById("contentPaneDiv");
		var newHeight = contentPaneDiv.offsetHeight - gridEL.offsetTop - bottom_clearance;

		dojo.byId('addReplaceResultDiv').style.height = newHeight;

		// while clicks window restore button
		dojo.byId('addReplaceResultDiv').style.height=document.getElementById('addReplaceResultDiv').style.height;

		} catch (error) {
			// do nothing, IE is trying to do this too early
		}
	}

	//pax forecast page grid 100% height implementation code
	if(contentAreaHeight!=''){
		if(dojo.byId("resultPaxForecastDataDiv")){
			// if browser is IE
			if(dojo.isIE>0) {
				dojo.byId("resultPaxForecastDataDiv").style.height=parseInt(contentAreaHeight)-12;
				dojo.byId("contentDataTBody").style.height="auto";
			}else{
				dojo.byId("resultPaxForecastDataDiv").style.height=parseInt(contentAreaHeight);
				dojo.byId("contentDataTBody").style.height=parseInt(contentAreaHeight)-35;
			}
			dojo.byId("contentDataTD").setAttribute("height","20px");
		}
		//for so dashboard html grid
		if(dojo.byId("resultSODashboardDataDiv")){
			// if browser is IE

			if(dojo.isIE>0) {
				dojo.byId("resultSODashboardDataDiv").style.height=parseInt(contentAreaHeight)-11;
				dojo.byId("contentDataTBody").style.height="auto";
			}else{
				dojo.byId("resultSODashboardDataDiv").style.height=parseInt(contentAreaHeight);
				dojo.byId("contentDataTBody").style.height=parseInt(contentAreaHeight)-parseInt(contentAreaHeight)-dojo.byId("dashboardThead").offsetHeight;
			}
			dojo.byId("contentDataTD").setAttribute("height","20px");
		}
		//for Material Forecast html grid
		if(dojo.byId("searchResultMaterialForecastDataDiv")){
			// if browser is IE
			if(dojo.isIE>0) {
				dojo.byId("resultMaterialForecastDataDiv").style.height=parseInt(contentAreaHeight)-19;
				dojo.byId("contentDataTBody").style.height="auto";
				if(dojo.byId("MaterialForecastContentData")){
					dojo.byId("MaterialForecastContentData").style.height=parseInt(contentAreaHeight)-75;
				}

			}else{
				dojo.byId("resultMaterialForecastDataDiv").style.height=parseInt(contentAreaHeight)-26;
				//	dojo.byId("contentDataTBody").style.height="auto";

				dojo.byId("contentDataTBody").setAttribute("height",(parseInt(contentAreaHeight)-dojo.byId("MaterialForecastThead").offsetHeight)-dojo.byId("resultHeaderDiv").offsetHeight);

				/*if(dojo.byId("MaterialForecastContentData")){
					dojo.byId("MaterialForecastContentData").style.height=parseInt(contentAreaHeight)-dojo.byId("MaterialForecastThead").offsetHeight;
				}*/

				var SumOfEachTdHeight=0;
				var contentDataTBodyHeight;

				var heightStr=dojo.byId("contentDataTBody").style.height;

				contentDataTBodyHeight=(heightStr).substring(0,heightStr.length-2);

				var accHeight=0;

				if((dojo.byId("hiddenRecordCount").value)>0){
					for(i=1;i<=eval(dojo.byId("hiddenRecordCount").value);i++){
						var tdID="tdlist_"+i;
						var trID="trlist_"+i;
						if(dojo.byId(tdID)){

							dojo.byId(tdID).setAttribute("height","30");
							accHeight+=30;
						}else{
							break;
						}
						if(accHeight>eval(contentDataTBodyHeight)){
							break;
						}
					}
				}else{
					if(dojo.byId("tdlist_1"))
						dojo.byId("tdlist_1").style.height="20";
				}
				if(accHeight>eval(contentDataTBodyHeight)){
					dojo.byId("contentDataTBody").setAttribute("height",(parseInt(contentAreaHeight)-dojo.byId("MaterialForecastThead").offsetHeight)-dojo.byId("resultHeaderDiv").offsetHeight);
				}else{
					dojo.byId("contentDataTBody").style.height="auto";
				}
			}
		}
		//for Change Item Material in Add Replace Delete Material Page
		if(dojo.byId("ChangeItemMaterialDataDiv")){
			if(dojo.isIE>0) {
				dojo.byId("ChangeItemMaterialDataDiv").style.height="165px";
				dojo.byId("ResultChangeItemContentTBody").style.height="auto";
			}else{
				dojo.byId("ChangeItemMaterialDataDiv").style.height="165px";
				dojo.byId("ResultChangeItemContentTBody").style.height=165-dojo.byId("ChangeItemMaterialHeaderDiv").offsetHeight;
			}
		}

		//for daily despatch report
		if(	dojo.byId("cxpHTMLReportResult")){
				dojo.byId("cxpHTMLReportResult").style.height=dojo.byId("for_scrollableDiv").style.height;
		}
	}

}
/**
* Registers the 'scrollable' element on the page. This element should fill
* the remaining space on the screen if the content is shorter than the height
* of the available screen size, and should scroll if the content is longer, so
* that the entire page does not scroll.
*/
function registerScrollableContentElement(elementId) {
	scrollableElement = document.getElementById(elementId);
}