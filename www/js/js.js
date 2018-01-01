$(function()
		{

	$(window).resize(function() {
		$('#shOutput').css('height', $(window).height() - $('#content').height() - 60 + 'px');
	});


	lastCmd = '';

	$('#cmd').keyup(function(event) {
		console.log(event.keyCode);
		if (event.keyCode == 13)
		{
			lastCmd = $('#cmd').val();
			$('#run').click();
			$('#cmd').val('');
		}
		if (event.keyCode == 38) {
			$('#cmd').val(lastCmd);
		}
		if (event.keyCode == 40) {
			$('#cmd').val('');
		}
	});

	$("#log").click(function () {
		//$(this).height(30)
		//$(this).css({cursor:"auto", backgroundColor:"green"});
		alert($(this).value());
	});

	$("#log").one('click', function () {
		$(this).height(30)
		.css({cursor:"auto", backgroundColor:"green"});
	});
	/*	
	$('#content form').live('submit',function()
			{
				ajax(

						this.action,
						this.name,
						$(this).serialize(),
						this.method
						//this.id,
						//this.name
						);
				//_gaq.push(['_trackPageview', this.href]);
				return false;
			});
	 */
	$('form').submit(function() {
		//alert('Handler for .submit() called.');
		ajax(

				this.action,
				this.name,
				$(this).serialize(),
				this.method
				//this.id,
				//this.name
		);
		//console.log('form name: '+this.name)
		return false;
	});

	//	----	dirs
	// hide all the sub-menus
	$("span.toggle").next().hide();

	// set the cursor of the toggling span elements
	$("span.toggle").css("cursor", "pointer");

	// prepend a plus sign to signify that the sub-menus aren't expanded
	$("span.toggle").prepend("+ ");

	// add a click function that toggles the sub-menu when the corresponding
	// span element is clicked
	$("span.toggle").click(function() {
		$(this).next().toggle(60);

		// switch the plus to a minus sign or vice-versa
		var v = $(this).html().substring( 0, 1 );
		if ( v == "+" )
			$(this).html( "-" + $(this).html().substring( 1 ) );
		else if ( v == "-" )
			$(this).html( "+" + $(this).html().substring( 1 ) );
	});


	//	jquery ui -------------------------------------------

	// Accordion
	$("#accordion").accordion({ header: "h3" });

	// Tabs
	$('#tabs').tabs();


	// Dialog
	$('#dialog').dialog({
		autoOpen: false,
		width: 600,
		height: 400,
		modal: true,
		buttons: {
			"Ok": function() {
				$(this).dialog("close");
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});



	// Dialog Link
	$('#dialog_link').click(function(){
		$('#dialog').dialog('open');
		return false;
	});

	// Datepicker
	$('#datepicker').datepicker({
		inline: true
	});

	// Slider
	$('#slider').slider({
		range: true,
		values: [17, 67]
	});

	// Progressbar
	//$("#progressBar").progressBar({
	//	value: 20
	//});

	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
			function() { $(this).addClass('ui-state-hover'); },
			function() { $(this).removeClass('ui-state-hover'); }
	);



	$('#console_button').click(function()
			{
		if ($('#console').css('visibility')=='hidden'){
			$('#console').css('visibility', 'visible');
		} else {
			$('#console').css('visibility', 'hidden');
		}
		$( "#consolea" ).dialog();
			}); 

	console.log('loaded');
		});

function ax(url,target)
{

	height = $(window).height() - $('#content').height() - 60;

	if(height > 50)
	{
		$('#shOutput').css('height', height+'px');
	}

//	console.log(height);

	if(target==''){target = 'content';}
	$.ajax({
		url:url,
		beforeSend:function(){$('#'+target).html('<img src="/wait.gif" />');},
		success:function(data){$('#'+target).html(data);}
	});
}

function axAppend(url,target)
{
	if(target==''){target = 'content';}
	$.ajax({
		url:url,
		//beforeSend:function(){$('#'+target).append('<div id="wait"><img src="/wait.gif" /></div>');},
		success:function(data){$('#'+target).append(data); $('#wait').html(''); }
	});
}

function formax(data,url,method,target)
{
	if(target==''){target = 'content';}
	$.ajax({
		type:method,
		url:url,
		data:data,
		beforeSend:function(){$('#'+target).html('<img src="/wait.gif" />');},
		success:function(data){$('#'+target).html(data);}
	});
}

function sh(cmd,params)
{

	//console.log(params);
	//if(params=='undefined'){params='';}
	/*
	//if(target==''){target = 'content';}
	var xhr = $.ajax({
        url:'/sh/run.php?cmd='+cmd,
        //async:false,
        //cache: false,
        beforeSend:function(){$('#sh').html('<img src="/wait.gif" />');},
        onreadystatechange:function (changed){console.log(changed + ' state change');},
        ///success:function(){console.log('success');},
        success:function(data){$('#sh').html(data);console.log('success');},
        error: function (){console.log('error');},
        complete: function (){console.log('complete');},
	};
		     ///.append
	 */

	$('#shStatus').html('<img src="/wait.gif" />');

	var x = new XMLHttpRequest();

	//x.open("GET", "/sh/run.php?cmd="+cmd+"&params="+params);
	x.open("GET", "/sh?cmd="+cmd+"&params="+params);

	x.onreadystatechange = function()
	{

		//console.log(x.readyState);

		$('#shOutput').html(x.responseText);

		if (x.readyState == 4) { $('#shStatus').html('ajax done'); }

	};

	x.send(null);

}



function shhh(to)
{

	//$('body').css("cursor", "progress");
	$('body').css("cursor", "wait");

	//	shOutput div size - auto depending ow window size

	height = $(window).height() - $('#content').height() - 60;

	if(height > 50)
	{
		$('#shOutput').css('height', height+'px');
	}

	$("#progressBar").progressBar({ value:0 });




	//	ajax status

	$('#shStatus').html('<img src="/wait.gif" />');

	var x = new XMLHttpRequest();

	//x.open("GET", "/sh/run.php?cmd="+cmd+"&params="+params);
	x.open("POST", to);
	//x.setRequestHeader("HTTP_X_REQUESTED_WITH","xmlhttprequest");
	x.setRequestHeader("X_SH","1");

	x.onreadystatechange = function()
	{

		//console.log(x.readyState);

		$('#shOutput').html(x.responseText);	//	add text

		$('#shOutput').scrollTop(2000000000000000);	//	scroll

		if (x.readyState == 4)
		{
			$('#shStatus').html('');
			$("#progressBar").progressBar({ value:0 });
			$('body').css("cursor", "auto");
		}	//	remove 'wait.gif'

	};

	x.send(null);

	//$("#progressBar").progressBar({ disabled: true });
}

function shh(cmd,params)
{

	//console.log(params);
	//if(params=='undefined'){params='';}
	/*
	//if(target==''){target = 'content';}
	var xhr = $.ajax({
        url:'/sh/run.php?cmd='+cmd,
        //async:false,
        //cache: false,
        beforeSend:function(){$('#sh').html('<img src="/wait.gif" />');},
        onreadystatechange:function (changed){console.log(changed + ' state change');},
        ///success:function(){console.log('success');},
        success:function(data){$('#sh').html(data);console.log('success');},
        error: function (){console.log('error');},
        complete: function (){console.log('complete');},
	};
		     ///.append
	 */

	$('#status').html('<img src="/wait.gif" />');

	var x = new XMLHttpRequest();

	x.open("GET", "/sh?cmd="+cmd+"&params="+params);

	x.onreadystatechange = function()
	{

		//console.log(x.readyState);

		$('#dialog').html(x.responseText);

		if (x.readyState == 4) { $('#status').html('ajax done'); }

	};

	x.send(null);

}

function ajax(url,target,data,method)
{

	height = $(window).height() - $('#content').height() - 60;

	if(height > 50){$('#shOutput').css('height', height+'px');}

	if(target==''){target = 'shOutput';}
	$.ajax({
		type:method,
		url:url,
		data:data,
		beforeSend:function(){$('#'+target).html('<img src="/wait.gif" />');},
		success:function(data){$('#'+target).html(data);}
	});

}