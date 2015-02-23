// Script here is used for toggling the arrows.
// Created: Feb 29th, 2008
		   		
function toggle(which,pic)
{
	var e = dojo.byId(which);
	var f = dojo.byId(pic);	
	if (e.style.visibility=="visible")
		{
		e.style.visibility="hidden";
		if(dojo.isIE!=0){
			e.style.display="none";
		}else{
			e.style.height=0;
		}
		f.src = "/ifx/images/common/arrow_gray.gif";
		}
	else if(e.style.visibility=="hidden"){
		e.style.visibility="visible";
		if(dojo.isIE!=0 || e.style.display=="none"){
			e.style.display="block";
		}else{
			e.style.height="auto";
		}
	f.src = "/ifx/images/common/arrow_graydown.gif";
	}
} 

function toggletab(which)
{
   	var e = dojo.byId(which);
	if (e.style.visibility=="visible")
		{
		e.style.visibility="hidden";
		if(dojo.isIE!=0){
			e.style.display="none";
		}else{
			//e.style.height=0;
			e.style.display="none";
			
		}
	}else if(e.style.visibility=="hidden"){
		e.style.visibility="visible";
		if(dojo.isIE!=0 || e.style.display=="none"){
			e.style.display="block";
		}else{
			e.style.height="auto";
		}
	}
}

function toggleBox(which,pic) {
	var e = dojo.byId(which);
	var f = dojo.byId(pic);	
	
	
		if (e.style.visibility=="visible" && e.style.display=="block"){
			if(dojo.isIE!=0){
				e.style.display="none";
			}else{
				if(e.innerHTML.toLowerCase().indexOf("object")!=-1){
					e.style.height=0;
				}else{
					e.style.display="none";
				}
			}
			e.style.visibility="hidden";
			f.src = "/ifx/images/common/arrow_white.gif";
		} else{
			e.style.visibility="visible";
			if(dojo.isIE!=0){
				e.style.display="block";
			}else{
				if(e.innerHTML.toLowerCase().indexOf("object")!=-1){
					e.style.height="auto";
					e.style.display="block";
				}else{
					e.style.display="block";
				}
			}
			f.src = "/ifx/images/common/arrow_Whitedown.gif";
		}
	
}

/*function expandCollapseAll(which,pic,colorArrow,status){
 	var e = dojo.byId(which);
	var f = dojo.byId(pic);	
	if (status==false)
	{
		e.style.visibility="hidden";
		if(dojo.isIE!=0){
			e.style.display="none";
		}else{
			e.style.height=0;
		}
	} else {
		e.style.visibility="visible";
		if(dojo.isIE!=0 || e.style.display=="none"){
			e.style.display="block";
		}else{
			e.style.height="auto";
		}

	}
	if(colorArrow=="white")
		f.src = "../images/global/arrow_whitedown.gif";
	else
		f.src = "../images/global/arrow_graydown.gif";

}*/

function expandCollapseAll(which,pic,colorArrow){
 	var e = dojo.byId(which);
	var f = dojo.byId(pic);	
	var expanded = false;
	if(dojo.isIE!=0){//ie
		if (e.style.visibility == "hidden"){
			expanded = false;
		}
		else{
			expanded = true;
		}
	}
	else{//not ie
		if (e.style.visibility == "visible"){
			expanded = true;
		}
		else{
			expanded = false;
		}
		
	}
	if (expanded==true)
	{
		e.style.visibility="hidden";
		if(dojo.isIE!=0){
			e.style.display="none";
		}else{
			e.style.height=0;
		}
		if(colorArrow=="white")
			f.src = "/ifx/images/common/arrow_white.gif";
		else
			f.src = "/ifx/images/common/arrow_gray.gif";
	} else {
		e.style.visibility="visible";
		if(dojo.isIE!=0 || e.style.display=="none"){
			e.style.display="block";
		}else{
			e.style.height="auto";
		}
		if(colorArrow=="white")
				f.src = "/ifx/images/common/arrow_Whitedown.gif";
			else
				f.src = "/ifx/images/common/arrow_graydown.gif";
	}
	

}