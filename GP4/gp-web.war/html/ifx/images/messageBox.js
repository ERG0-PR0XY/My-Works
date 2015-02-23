//These functions will display the popup with information

confirmBox = function(args){
	showPopupBox("CONFIRM",args);
}

warningMessageBox=function(args){
   showPopupBox("WARNING",args);
}

errorMessageBox=function(args){
		showPopupBox("ERRORMESSAGE",args);
}

informationBox = function(args){
	showPopupBox("INFORMATION",args);
}

errorBox = function(args){
	showPopupBox("ERROR",args);
}

errorAutoBox=function(args){
	showPopupBox("ERROR_AUTO",args);
}

successBox = function(args){
	showPopupBox("SUCCESS",args);

	/*var popupTimer=new dojox.timing.Timer(700);
	popupTimer.tcount = 0;
	popupTimer.onTick = function () {
		if(this.tcount !=0){
				popupTimer.stop();
				var popup = dijit.byId(args.dialogId);	
				if(popup){popup.hide();}
				try{
					eval(args.success+"()");
				}
				catch(e){
				}

		}
		if(this.tcount ==0) this.tcount++

	};
	popupTimer.start();*/
}

showPopupBox = function(/*type*/type,/*confirmationArgs*/args){

		var str = "";
		var img;
		if(dojo.byId(args.dialogId).style.width!='')
			dojo.byId(args.dialogId).style.width="";
		
		if(dojo.byId(args.dialogId).style.height!="")
			dojo.byId(args.dialogId).style.height="";
		//var overflowHeight="54px";
		str +="<div style='height:99%;min-width:380px !important;min-height:80px;margin:0px;padding:0px;#width:380px;max-width:500px;overflow:inherit;'><table width='100%' border='0' align='left' cellpadding='0' cellspacing='0'>";
		str +="<tr>";
		str +="<td height='10' colspan='4'> </td>";
		str +="</tr>";
		str +="<tr>";
		if(type=="CONFIRM"){
			img = "info_icon.jpg";
		}
		else if(type=="SUCCESS"){
			img = "ok_icon.jpg";        
		}
		else if(type=="WARNING"){
		img = "info_icon.jpg";        
		}
		else if(type=="ERROR" || type=="ERROR_AUTO"){
			img = "delete_icon.png";
		}
		else if(type=="INFORMATION"){
			img = "info_icon.jpg";
		}
		//if(type=="WARNING" || type=="SUCCESS")
		//		overflowHeight="78px";
		//str +="<td align='right' width='10%'><img src='/ifx/images/common/"+img+"' border='0'/></td><td align='left' colspan='3' style='padding-left:10px;height:"+overflowHeight+";vertical-align:middle !important;' width='90%'><div style='max-height:"+overflowHeight+";overflow-y:auto;'><strong>"+args.msg+"</strong></div></td>";
		str +="<td align='right' width='20px'><img src='/ifx/images/common/"+img+"' border='0'/></td><td align='left' colspan='3' style='padding-left:10px;'><strong>"+args.msg+"</strong></td>";
		
		str +="</tr>";
		str +="<tr>";
		str +="<td height='10' colspan='4'> </td>";
		str +="</tr>";
		str +="<tr>";
		str +="<td align='right' colspan='4'><div>";
		if(type=="CONFIRM"){
			str +="<a class='buttonTemplate' href='javascript:void(0)' onClick=\"invokeCallbackAndHide('"+args.dialogId+"','"+args.failure+"','"+args.data+"');return false;\"><span>No</span></a>";
			str +="<a class='buttonTemplate' href='javascript:void(0)' onClick=\"invokeCallbackAndHide('"+args.dialogId+"','"+args.success+"','"+args.data+"');return false;\"><span>Yes</span></a>";
		}
		if(type=="ERROR"){
			str +="<a class='buttonTemplate' href='javascript:void(0)' onClick=\"invokeCallbackAndHide('"+args.dialogId+"');\"><span>Ok</span></a>";		
		}
		if(type=="INFORMATION"){
			str +="<a class='buttonTemplate' href='javascript:void(0)' onClick=\"invokeCallbackAndHide('"+args.dialogId+"','"+args.success+"');\"><span>Ok</span></a>";	
		}
		
		
		str +="</div>";
		str +="</td>";
		str +="</tr>";
		str +="<tr>";
		str +="<td height='10' colspan='4'> </td>";
		str +="</tr>";
		str +="</table></div>";
		
 		//dojo.byId(args.dialogId).style.height="140px";
		//dojo.byId(args.dialogId).style.width="400px";
		var popup = dijit.byId(args.dialogId);

		popup.titleNode.innerHTML=args.title;
		popup.setContent(str);		
		popup.show();
	if(type=="SUCCESS" || type=="WARNING" || type=="ERROR_AUTO"){
		var popupTimer=new dojox.timing.Timer(1200);
		popupTimer.tcount = 0;
		popupTimer.onTick = function () {
		if(this.tcount !=0){
			popupTimer.stop();
			var popup = dijit.byId(args.dialogId);	
			if(popup){popup.hide();}
		}
		if(this.tcount ==0) this.tcount++
		};
		popupTimer.start();
	}
}


function invokeCallbackAndHide(popupId,callback,args){
	var popup = dijit.byId(popupId);
	if(popup){popup.hide();}
	try{
		eval(callback+"('"+args+"')");
	}
	catch(e){

	}
}

//create popup
function createPopup(idPopup){
	if(!dijit.byId(idPopup)){	
		var param = {dialogId : idPopup, url : '',title : '',style : ''};
		var dialog = new  com.egatesolutions.DialogBox(param);
	}
}

//function to close the dialog window
function closeDialog(DialogId){
	if(dijit.byId(DialogId))
		dijit.byId(DialogId).hide();
}

