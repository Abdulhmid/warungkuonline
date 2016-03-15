$(document).ready(function()
{
	$('ul.share li.facebook a').click(function(){
		var url = $(this).attr('data-url');

		FB.ui({
			method: 'share',
			href: url,
		}, function(response){
			if(response && !response.error_code)
			{
				increment_share_count();
				_gaq.push(['_trackSocial', 'facebook', 'send', url]);
				customGtm.clickEventToAnalytics('facebook', 'send', url);
			}
		});
		return false;
	});
	$('ul.share li.twitter a, ul.share li.google a').click(function(){
		window.open($(this).attr('href'),'sharer','toolbar=0,status=0,width=626,height=436');
		if($(this).parent().attr('class') == 'google')
			increment_share_count();
		return false;
	});

	var callback = function(e){
		if(e && e.data){
			var data;
			try{
				data = JSON.parse(e.data);
			}catch(e){
			}
			if(data && data.params && data.params.indexOf('tweet') > -1){
				increment_share_count();
				_gaq.push(['_trackSocial', 'twitter', 'tweet', url]);
				customGtm.clickEventToAnalytics('twitter', 'tweet', url);
			}
		}
	};
	window.addEventListener ? window.addEventListener("message", callback, !1) : window.attachEvent("onmessage", callback);


	$(".reputation_button").click(function()
	{
		$('#reputation_form').submit();
	});

	$('.reputation-con div.radio').click(function(){
		$('#modal-rep-radio-' + $(this).attr('data-value')).prop('checked', true);
	});

	$(document).on('click','.external-link', function(e) {
		e.preventDefault();
		var urlAjax = $(this).attr('href');

		$.ajax({
			url:urlAjax,
			xhrFields: {
				withCredentials: true
			}
		}).success(function(result) {
			$('#modal-container .modal-content').html(result);
			$('#modal-container').modal('show');

			$('#modal-container .modal-content a').attr('target', '_blank').click(function(e){
				if($(this).is('.btn'))
					e.preventDefault();

				$('#modal-container').modal('hide');
			});
		});
	});

	$(document).on('click','.send-cendol', function(e) {
		e.preventDefault();
		notice('Please wait...');
		var urlAjax = $(this).attr('href');
		var postId = $(this).attr('data-postid');
		$.ajax({
			url:urlAjax,
			xhrFields: {
				withCredentials: true
			}
		}).success(function(result) {
			var json = $.parseJSON(result);
			if(json.flag == 'TRUE')
			{
				if(json.message_return)
				{
					$('#modal-container').modal('hide');
					notice(json.message_return);
					if(json.sc)
						$('.sctoken').val(json.sc);
				}
				else
				{
					$('#modal-container').modal('show');
					$('#modal-container .modal-content').html(json.table);
				}
			}
			else
			{
				$('#floating_notice').hide();
				$('#modal-container').modal('show');
				$('#modal-container .modal-content').html(json.html);
				$('#modal-rep-form').attr('action', KASKUS_URL + '/give_reputation/' + postId);

				reputationTrigger();

				$('.reputation-con div.radio').click(function(){
					$('#modal-rep-radio-' + $(this).attr('data-value')).prop('checked', true);
				});

				$('#modal-rep-send').click(function(){
					var data = $('form#modal-rep-form').serializeArray();
					data.push({'name':'securitytoken','value':$('#securitytoken').val()});

					var ok = false;

					for(i in data)
						if(data[i].name == 'reputation' && (data[i].value == 'pos' || data[i].value == 'neg'))
							ok = true;

					if(!ok)
					{
						alert('Please select the type of reputation you want to give');
						return false;
					}

					$.ajax({
							url: $('#modal-rep-form').attr('action'),
							type: 'post',
							data: data,
							xhrFields: {
								withCredentials: true
							}
						}).success(function(response){
							var json = $.parseJSON(response);
							$('#modal-container').modal('hide');
							notice(json.message_return.replace('.', '.<br />'));
							if(json.sc)
								$('.sctoken').val(json.sc);
						});
				});
				$('#modal-container').modal('show');
			}
		});
	});

	$(document).on('click','.ipstat', function(e) {
		e.preventDefault();
		notice('Please wait...');
		var urlAjax = $(this).attr('href');
		$.ajax({
			url:urlAjax,
			xhrFields: {
				withCredentials: true
			}
		}).success(function(result) {
			$('#floating_notice').hide();
			$('#modal-container').modal('show');
			$('#modal-container .modal-content').html(result);
		});
	});

	$(".ocr_btn").click(function()
	{
		val = $(this).attr("rating-value");
		if (val == null)
		{
			return false;
		}
		if (val < 0 || val > 5)
		{
			notice("You submitted an invalid vote.");
			return false;
		}

		var delay = (document.vote_submitted) ? 0 : 2000;

		document.vote_tid = setTimeout(function(){
				$.ajax({
						url:KASKUS_URL + "/threadrate",
						type:'post',
						data:{
								thread_id: $("#thread_id").val(),
								vote: val,
								securitytoken: $("#securitytoken").val()
							},
						xhrFields: {
							withCredentials: true
						},
						dataType:'json'
					}).success(function(c)
					{
						document.vote_submitted = true;
						if (typeof(c.rate_error) !== "undefined")
						{
							notice(c.rate_error, 1500);
						}
						else
						{
							$('.tool_panel_rating').attr('class', 'tool_panel_rating tools-panel rating star' + Math.round(c.rate).toString()).attr('data-original-title', c.rate_title).attr('title', c.rate_title);
							$('.link_rating').html('');
							for (var i = 1; i <= 5; i++)
							{
								if (Math.round(c.rate) >= i)
								{
									$('.link_rating').append('<i class="fa fa-star"></i>&nbsp;');
								}
								else
								{
									$('.link_rating').append('<i class="fa fa-star un"></i>&nbsp;');
								}
							};
							notice(c.message, 1500);
						}
				});
			}, delay);

		if(!document.vote_submitted)
		{
			$('#notice_span').html('Submitting thread rating... (<a href="#" id="cancel_btn">cancel</a>)');
			$('#floating_notice').show();

			$('#cancel_btn').click(function(e){
				e.preventDefault();
				if(document.vote_tid)
					clearTimeout(document.vote_tid);
				notice('Submission cancelled', 500);
			});
		}
	});

	var b = $("#first_newpost").val();
	if (b == 1)
	{
		var a = $("#unread_post").attr("href");
		if (a != undefined)
		{
			location.href = $("#unread_post").attr("href")
		}
	}

	$('div.user-name, div.user-avatar').on('mouseover', function(){
		var userid = $(this).attr('data-userid');

		if($('.uqv_' + userid + ':first').html() != 'Loading...' || $('.uqv_' + userid + ':first').hasClass('is-loading'))
			return;

		$('.uqv_' + userid + ':first').addClass('is-loading');

		$.ajax({
			url : KASKUS_URL + '/misc/user_quickview/' + userid,
			success: function(response){
				$('.uqv_' + userid).html(response);
				$('.uqv_' + userid + ':first').removeClass('is-loading');
			}
		});
	});
});

function quote(c, b, a)
{
	if (!a)
	{
		a = "yes"
	}
	var d = "";
	if ($.cookie("kaskus_multiquote") != null)
	{
		d = $.cookie("kaskus_multiquote").split(",");
		store_post_id = $.cookie("kaskus_multiquote");
		count = false;
		for (i = 0; i < d.length; i++)
		{
			if (d[i] == b)
			{
				count = true;
				if (a == "yes")
				{
					store_post_id = store_post_id.split("," + b).join("");
					store_post_id = store_post_id.split(b + ",").join("");
					store_post_id = store_post_id.split(b).join("")
				}
			}
		}
		if (count == false)
		{
			store_post_id += "," + b
		}
	}
	else
	{
		store_post_id = b
	} 

	if (store_post_id == "")
	{
		$.cookie("kaskus_multiquote", null,
		{
			expires: null,
			path: "/",
			secure: false
		});
		$("#mq_" + b).toggleClass('btn-orange');
		return true
	}
	$("#mq_" + b).toggleClass('btn-orange');
	$.cookie("kaskus_multiquote", store_post_id,
	{
		expires: null,
		path: "/",
		secure: false
	})
}

function a_reason(a)
{
	$("#reason").val(a)
}

function b_reason()
{
	var a = $(".reputation_button").attr("id").split("_");
	var b = $("#reason").val();
	if (typeof($("input:radio[name=reputation]:checked").val()) == "undefined")
	{
		alert("Please select the type of reputation you want to give");
		return false
	}
	jQuery.fn.modalBox("close");
	$.ajax({
		url:KASKUS_URL + "/give_reputation/" + a[1],
		type:'post',
		data:{
				reputation: $("input:radio[name=reputation]:checked").val(),
				reason: b,
				ajax: true
			},
		xhrFields: {
			withCredentials: true
		},
		dataType:'json'
	}).success(function(c)
	{
		alert(c.message_return);
		return false
	});
}

function increment_share_count()
{
	$('li.total-share span').fadeOut(300, function(){
		var current = $(this).html();
		if(current.indexOf('+') < 0)
			$(this).html(parseInt(current) + 1);
		$(this).fadeIn(300);
	});
}

function spoiler(b)
{
	if (b.value == "Show")
	{
		$(".content_" + $(b).attr("class")).slideDown(0);
		b.innerHTML = "";
		b.value = "Hide"
	}
	else
	{
		$(".content_" + $(b).attr("class")).slideUp(0);
		b.innerHTML = "";
		b.value = "Show"
	}
}
