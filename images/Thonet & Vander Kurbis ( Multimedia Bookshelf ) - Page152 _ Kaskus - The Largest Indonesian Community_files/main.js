function getAbjad(a){var b=$(a).find(".head-title");firstLetter=[],b.each(function(){var a=$(this).text().toUpperCase();firstLetter.push(a.charAt(0))}),abjad.children("ul").find("li").each(function(){$(this).children("a").removeClass("active"),text=$(this).children("a").text(),firstLetter.indexOf(text.toUpperCase())>-1?$(this).children("a").addClass("active").css("cursor","pointer"):$(this).children("a").css("cursor","default")})}function get_cat(a){"forum"==a||"fjb"==a?($(".select-category").css("display","table-cell"),$.ajax({url:"/misc/get_categories_search/"+a}).success(function(a){var b=location.href.match(/forumchoice(\[\])*=([^&]+)/),c="";b&&(c=b[2]);var d="";for(var e in a)c==a[e].forum_id?(d="selected",$("#search_category").parent().find(".customSelectInner").text(a[e].name)):d="",$("#search_category").append('<option data-child-list="'+a[e].child_list+'" value="'+a[e].forum_id+'" '+d+">"+a[e].name+"</option>")})):$(".select-category").css("display","none")}function insert_smilikiti(a){emoticon=$(a).attr("alt")+" ",$.markItUp({replaceWith:emoticon})}function spoiler(a){"Show"==a.value?($(".content_"+$(a).attr("class")).slideDown(0),a.innerHTML="",a.value="Hide"):($(".content_"+$(a).attr("class")).slideUp(0),a.innerHTML="",a.value="Show")}function notice(a,b){"undefined"==typeof b&&(b=3e3),document.notice_tid&&clearTimeout(document.notice_tid),$("#notice_span").html(a),$("#floating_notice").show(),document.notice_tid=setTimeout(function(){$("#floating_notice").fadeOut()},b)}function jump_page(a){var b=$("#"+a).val(),c=$(".url_jump").val();window.location.href=c+b}function handleFiles(a,b,c){var d=c.files,e=d[0],f=document.createElement("img"),g=["image/png","image/bmp","image/gif","image/jpeg"],h=(new Array,new FileReader);return-1===g.indexOf(e.type)?void alert("file type is not allowed!!!"):void("image/gif"!==e.type?(h.onload=function(d){f.src=d.target.result;var g=document.createElement("canvas"),h=g.getContext("2d");h.drawImage(f,0,0);var i=f.width,j=f.height;i>j?i>a&&(j*=a/i,i=a):j>b&&(i*=b/j,j=b),g.width=i,g.height=j;var h=g.getContext("2d");h.drawImage(f,0,0,i,j);var k=g.toDataURL(e.type,.8);c.setAttribute("data-img",k),document.getElementById("image").setAttribute("src",k)},h.readAsDataURL(e)):alert("gambar gif tidak di resize"))}function checkArrow(){forumCategories.hasClass("show-all")?fjbCategories.find(".fa").attr("class","fa fa-chevron-circle-up right"):fjbCategories.find(".fa").attr("class","fa fa-chevron-circle-down right")}function homeSlide(a){var b=a.find(".listing-sidebar").height()+1,c=a.find(".listing-sidebar").length+1;a.hasClass("show-five")?(a.removeClass("show-five").addClass("show-all").animate({height:b*c},{queue:!1,duration:300}),a.next().removeClass("show-five").addClass("hide-all").animate({height:32},{queue:!1,duration:300}),a.prev().removeClass("show-five").addClass("hide-all").animate({height:32},{queue:!1,duration:300}),checkArrow()):(a.hasClass("show-all")?$("#home-categories").children("div").attr("class","show-five").animate({height:6*b},{queue:!1,duration:300}):a.hasClass("hide-all")?(a.prev().removeClass("show-all").addClass("hide-all").animate({height:32},{queue:!1,duration:300}),a.next().removeClass("show-all").addClass("hide-all").animate({height:32},{queue:!1,duration:300}),a.removeClass("hide-all").addClass("show-all").animate({height:b*c},{queue:!1,duration:300})):a.addClass("show-five").animate({height:6*b},{queue:!1,duration:300}),checkArrow())}function swapFeatured(){active=$(".hot-featured .tab-nav li.active"),activeDataFjb=$("#fjb-highlight").find(".carousel-indicators").children(".active"),_gaq.push([activeDataFjb.attr("data-event"),activeDataFjb.attr("data-event-category"),activeDataFjb.attr("data-event-action"),activeDataFjb.attr("data-event-label")]),activeContent=$(".hot-featured .tab-panel .tab-pane.active"),next=active.next().length>0?active.next().addClass("active"):$(".hot-featured .tab-nav li:first").addClass("active"),activeNext=activeContent.next().length>0?activeContent.next().addClass("active"):$(".hot-featured .tab-panel .tab-pane:first").addClass("active"),active.removeClass("active"),activeContent.removeClass("active")}function reputationTrigger(){$(".reputation-icon").hover(function(){$(this).hasClass("cendol-big")?$(this).addClass("shake"):$(this).addClass("tada")},function(){$(this).hasClass("cendol-big")?$(this).removeClass("shake"):$(this).removeClass("tada")}),$(".reputation-icon").on("click",function(a){a.preventDefault(),$(this).closest(".radio").prev().removeClass("selected"),$(this).closest(".radio").next().removeClass("selected"),$(this).closest(".radio").addClass("selected")})}function checkObject(a){return existing=a.length?!0:!1,existing}function stickSidebar(){if(leaderboardHeight=$("#bottom-leaderboard").length&&690==$(".main-content").width()?100:0,sidebar.height()<$(".main-content").height())if(windowPanel.scrollTop()>heightright-windowPanel.height()+momod.height()+15)if(windowPanel.scrollTop()>footer.offset().top-windowPanel.height()+5-leaderboardHeight){var a=windowPanel.scrollTop()-(footer.offset().top-windowPanel.height()-leaderboardHeight);sidebar.css({position:"fixed",bottom:a-5})}else sidebar.css({position:"fixed",bottom:0});else sidebar.css("position","static")}function stickSidebarHot(){if(sidebar.height()<$(".hot-thread-wrap").height())if(windowPanel.scrollTop()>heightright-windowPanel.height()+kaskusStore.height()+15)if(windowPanel.scrollTop()>footer.offset().top-windowPanel.height()+5){var a=windowPanel.scrollTop()-(footer.offset().top-windowPanel.height());sidebar.css({position:"fixed",bottom:a})}else sidebar.css({position:"fixed",bottom:0});else sidebar.css("position","static")}function stickLeftnav(){if(windowPanel.scrollTop()>leftnavTop){var a=footer.offset().top-windowPanel.height()+(windowPanel.height()-leftnav.height()-$(".site-header").height());if(windowPanel.scrollTop()>a-25){var b=windowPanel.scrollTop()-(footer.offset().top-windowPanel.height());leftnav.attr("style","position:fixed !important;bottom:"+(b+15)+"px;")}else leftnav.attr("style","position:fixed !important;top:60px;")}else leftnav.attr("style","")}function ControlStick(){var a=windowPanel.scrollTop()+50;$("body").hasClass("fjb")?(userContorlVal=50,kasAdsOffet=1e6):(userContorlVal=0,kasAdsOffet=kasAds.offset().top),a>forumControl.offset().top&&!StatusControlStick&&a<kasAdsOffet&&(userControlStick.css({top:userContorlVal}),$(".global-search").css("opacity","0"),StatusControlStick=!0),(a<forumControl.offset().top||a>kasAdsOffet)&&(StatusControlStick===!0&&(userControlStick.css({top:-51}),$(".global-search").css("opacity","1"),StatusControlStick=!1),$(".short-url").hasClass("open")&&$(".short-url").removeClass("open"))}function borderHeader(){var a=windowPanel.scrollTop();a>=160?$(".site-header").addClass("scrolled"):$(".site-header").removeClass("scrolled")}function stickyInvoiceSidebar(){var a=$(".main-content")[0].scrollHeight-$(".invoice-sidebar")[0].scrollHeight,b=windowPanel.scrollTop();b>=a?($(".invoice-sidebar").css("position","absolute"),$(".invoice-sidebar").css("bottom","0")):($(".invoice-sidebar").css("position","fixed"),$(".invoice-sidebar").css("bottom","inherit"))}function stickyOrderInfoSidebar(){var a=windowPanel.scrollTop();a>=30?($(".order-sidebar").css("position","fixed"),$(".order-sidebar").css("margin-top","-30px")):($(".order-sidebar").css("position","relative"),$(".order-sidebar").css("margin-top","0"))}function relatedContent(){$(this).scrollTop()>$(".kaskus-ads .kasad-h").offset().top-$(window).height()&&!relatedThread.hasClass("disable")&&!relatedThread.hasClass("fjb")?relatedThread.addClass("nongol"):relatedThread.removeClass("nongol")}function validateEmail(a){var b=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;return b.test(a)?!0:!1}function multiEmail(a){for(var b=$("#share-from"),c=a.split(","),d=0;d<c.length;d++){var e=c[d].trim();if(!validateEmail(e,1,0))return b.next().remove(),b.css("border-color","red"),b.after('<span style="margin: 5px 0;float: left;color: #f00;">One or more email address is invalid!</span>'),!1}return $("#form-email-thread").submit(),!0}if($("#all-category").length){var iterations=1,abjad=$(".abjad"),search_category=$(".search-category"),closestSelector=$('li[id^="anc-"]');String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},jQuery.expr[":"].Contains=function(a,b,c){return jQuery(a).text().toUpperCase().indexOf(c[3].toUpperCase())>=0},jQuery.expr[":"].contains=function(a,b,c){return jQuery(a).text().toUpperCase().indexOf(c[3].toUpperCase())>=0},unactiveTitle=$(".sub-category, .headache-title").find("a"),$("ul.nav-tabs").find("a").on("click",function(){search_category.val(""),closestSelector.show(),unactiveTitle.css("color","#555555"),getAbjad($(this).attr("href"))}),abjad.children("ul").find("a").on("click",function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-60},500),!1}),search_category.keyup(function(a){return phrase=$(this).val(),closestSelector.show(),""===phrase||void 0===phrase||phrase.length<3?(unactiveTitle.css("color","#555555"),!1):(phrase=phrase.capitalize(),SelectorContainer=$("#all-category a:contains("+phrase+")"),search_category.find("a").css({"text-decoration":"none",color:"#ccc"}),closestSelector.hide(),$(".headache-title").find("a").css("color","#ccc"),void SelectorContainer.css("color","#1497ec").closest('li[id^="anc-"]').css("display","block"))}),$(window).load(function(){$("ul.nav-tabs").find("li.active").children("a").click()})}$("#carousel-fjb").find(".thumbnail").on("click",function(){largeTarge=$("#carousel-largeimage"),$$=$(this),$(".thumbnail").removeClass("active"),$$.addClass("active"),largeTarge.find("img").attr("src",$$.find("img").attr("data-large"))}),$(".watchlist").on("click",function(){$$=$(this),$$.hasClass("watched")?$$.removeClass("watched").html('<i class="fa fa-eye"></i> Watch List'):$$.addClass("watched").html('<i class="fa fa-eye-slash"></i> Remove Watch List')}),$(".header-trigger").on("click",function(){$("#left-nav").hasClass("full-show")||$("#bgover").length?$("#bgover").remove():$("body").prepend('<div id="bgover" onclick="$(\'.header-trigger\').click()"></div>')});var khplist=$("#k-hp-list");khplist.find("label").click(function(){var a=$(this).find("i").attr("class");khplist.find("li").removeClass("selected"),$(this).closest("li").addClass("selected"),$("#header-search-trigger").attr("class",a)});var menuAccordion=$("#menu-accordion");menuAccordion.children("ul").find("a").click(function(){var a=$(this).next();return a.is("ul")&&a.is(":visible")&&($(this).closest("li").removeClass("open"),a.slideUp()),a.is("ul")&&!a.is(":visible")&&(menuAccordion.children("ul").find("ul:visible").slideUp(),menuAccordion.find("li").removeClass("open"),$(this).closest("li").addClass("open"),a.slideDown()),0===$(this).closest("li").find("ul").children().length?!0:!1}),$(".poll-swap-result").click(function(){$("#polling-form").addClass("hide"),$("#polling-result").removeClass("hide")}),$(".poll-swap-back").click(function(){$("#polling-form").removeClass("hide"),$("#polling-result").addClass("hide")}),$(".text-size-increase").click(function(){currentSize=parseInt($(".entry").css("font-size"))+1,currentSize<=32&&($(".entry").css("font-size",currentSize),$(".post-quote").children("span").css("font-size",currentSize))}),$(".text-size-decrease").click(function(){currentSize=parseInt($(".entry").css("font-size"))-1,currentSize>=10&&($(".entry").css("font-size",currentSize),$(".post-quote").children("span").css("font-size",currentSize))}),$(".multi-quote").click(function(){$(this).toggleClass("active")}),$(".quick-reply").click(function(){$(this).parent().find(".hfeed").addClass("bagus")}),$(".btn-close").click(function(){$(this).parent().hide()});var titleMessage=$("#title-message");if(titleMessage.find("label").click(function(){$$=$(this),$$.find("input").prop("checked",!0),titleMessage.find("label").removeClass("selected"),$$.addClass("selected"),$$.find("img").length<1?titleMessage.find(".btn").html("No icon"):(img=$$.find("img").attr("src"),titleMessage.find(".btn").html('<img src="'+img+'" width="15" />'))}),$(".dropdown-menu input, .dropdown-menu label").click(function(a){a.stopPropagation()}),$(".sidebar-trigger-small-screen").on("click",function(){setTimeout(function(){$("#filter-cat").focus()},10)}),$(".short-url").children("a").on("click",function(){setTimeout(function(){$(".short-url").find("input").focus().select()},50)}),$(".fjb-refine-search-form .location, .fjb-refine-search-form .close").on("click",function(a){a.preventDefault(),$(".location-list-con").toggle()}),$("#loginform").find(".dropdown-toggle").on("click",function(a){a.preventDefault(),setTimeout(function(){$("#username").focus()},20)}),$(".related-thread, .bengkel-content").length){var widthList=$(".related-thread, .wrap-bengkel").find("li").outerWidth(),lengthList=$(".related-thread, .wrap-bengkel").find("li").length,state=0,leftPos=0,lengthData=1;$(".bengkel-content").length&&(widthList+=110,lengthData=3),$(".related-thread").find(".close").bind("click",function(){$(".related-thread").removeClass("nongol").addClass("disable")}),$(".related, .arrow-bengkel").bind("click",function(a){if(a.preventDefault(),$(this).hasClass("prev")){if(0===state)return;state-=1,leftPos=widthList*state,$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft:leftPos},600)}else{if(state===lengthList-lengthData)return;state+=1,leftPos=widthList*state,$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft:leftPos},600)}}),$("#show-related").on("click",function(a){a.preventDefault(),$(".related-thread").toggleClass("nongol")})}$(".switch-view").on("click",function(){$(".switch-view").toggleClass("on"),$("body").toggleClass("response")}),$(function(){var a,b;$("#filter-cat").bind("keydown keyup",function(c){var d=$("#update-tag ul.sidebar-category").find("li");if(40===c.which)"keydown"===c.type&&(a?(a.removeClass("selected"),next=a.next(),next.length>0?a=next.addClass("selected"):a.addClass("selected")):a=d.eq(0).addClass("selected")),b=$(".scrolling-con-update ul li.selected").position().top-140,$(".mCSB_container").attr("style","position:relative;top:-"+b+"px;");else if(38===c.which)"keydown"===c.type&&(a?(a.removeClass("selected"),next=a.prev(),next.length>0?a=next.addClass("selected"):a.addClass("selected")):a=d.last().addClass("selected")),b=$(".scrolling-con-update ul li.selected").position().top-140,$(".mCSB_container").attr("style","position:relative;top:-"+b+"px;");else if(13===c.which)$(".scrolling-con-update").find("li.selected").length>0&&(window.location=$(".scrolling-con-update li.selected .categories-title").children("a").attr("href"));else if("keyup"===c.type){$("#update-tag ul.sidebar-category").find("li").removeClass("selected"),searchField=$("#filter-cat").val();try{if(myExp=new RegExp(searchField,"i"),""===searchField)return $("#update-tag").addClass("hide"),!1;$.retrieveJSON(urlCatJSON,{usergroupid:userGroupIdJSON},function(a){$("#update-tag").removeClass("hide"),heightUpdateContent=$(".tag-wrap").height()-28,$("#update-tag").children(".scrolling-con-update").height(heightUpdateContent),output='<div class="scrolling-con-update"><ul class="sidebar-category list-unstyled">',$.each(a,function(a,b){-1!=b.forum_name.search(myExp)&&(output+='<li class="listing-sidebar">',output+='<div class="categories-title"><a href="'+decodeURIComponent(b.forum_url)+'">',output+='<img src="'+decodeURIComponent(b.forum_icon)+'" alt="" width="20" height="20" ><span>'+decodeURIComponent(b.forum_name),output+="</span></a></div><hr />",output+="</li>")}),output+="</ul></div>",output+='<div class="close-filter"><a id="close"><i class="fa fa-power-off"></i> close filter</a></div>',$("#update-tag").html(output),$(".scrolling-con-update").mCustomScrollbar({advanced:{updateOnContentResize:!0,autoScrollOnFocus:!1}}),$("a#close").click(function(){$("#update-tag").html(""),$("#update-tag").addClass("hide")})},864e5),a=""}catch(e){}}}),$(".filter-category").submit(function(a){a.preventDefault()})});var heightContentHover=$(".hover-sidebar-content").height(),forumCategories=$("#forum-home-categories"),fjbCategories=$("#fjb-home-categories");$("#home-categories").length&&fjbCategories.find(".head-categories-title").hover(function(){fjbCategories.hasClass("show-five")&&$(this).find(".fa").attr("class","fa fa-chevron-circle-up right")},function(){fjbCategories.hasClass("show-five")&&$(this).find(".fa").attr("class","fa fa-chevron-circle-down right")}),$(".head-categories-title").bind("click",function(a){a.preventDefault();var b=$(this).parent("div");homeSlide(b)});var refreshInterval=null;$("#fjb-highlight").on("slid.bs.carousel",function(){activeDataFjb=$("#fjb-highlight").find(".carousel-indicators").children(".active"),_gaq.push([activeDataFjb.attr("data-event"),activeDataFjb.attr("data-event-category"),activeDataFjb.attr("data-event-action"),activeDataFjb.attr("data-event-label")])}),$(".hot-featured").on("mouseleave",function(){refreshInterval=setInterval(swapFeatured,2e3)}),$(".hot-featured").on("mouseover",function(){clearInterval(refreshInterval)}),function(a){a.fn.cycle=function(b,c){function d(){h.eq(g).removeClass(c),h.eq(f).addClass(c),g=f,f=(f+1)%e,setTimeout(d,b)}var e=a(this).length,f=0,g=0,h=a(this);return h.eq(0).addClass(c),setTimeout(d,b),a(this)}}(jQuery),document.onkeydown=function(a){if(a=a||window.event,key=a.which||a.charCode||a.keyCode,27==key&&$("#bgover").click(),!$('input[type="text"], textarea, input[type="radio"], input[type="checkbox"], input[type="password"] , input[type="search"], input[type="email"]').is(":focus")){if(state=0,a.altKey||a.ctrlKey||!a.shiftKey)if(a.ctrlKey&&a.shiftKey&&!a.altKey)switch(key){case 37:link=$(".prev-thread").attr("href"),link&&(window.location=link);break;case 39:link=$(".next-thread").attr("href"),link&&(window.location=link);break;default:key=""}else{if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return!0;switch(key){case 74:state<$(".permalink").length-1&&(state++,scrollval=$(".permalink").eq(state).offset().top,$("body").animate({scrollTop:scrollval-100},500));break;case 75:state>0&&(state--,scrollval=$(".permalink").eq(state).offset().top,$("body").animate({scrollTop:scrollval-100},500));break;case 49:$(".navbar-brand").focus();break;case 50:$("#kk-forum a").focus();break;case 51:$("#kk-fjb a").focus();break;case 52:$("#kk-groupee a").focus();break;case 53:$("#kk-radio a").focus();break;default:key=""}}else switch(key){case 88:$(".spoiler input[type=button]").click();break;case 65:$("body").hasClass("landing")?($(".sidebar-trigger-small-screen").is(":visible")&&$(".sidebar-trigger-small-screen").click(),setTimeout(function(){$("#filter-cat").focus()},10)):$(".sidebar-trigger-small-screen").click();break;case 83:setTimeout(function(){$("#search").focus()},10);break;case 49:link=$(".navbar-brand").attr("href"),link&&(window.location=link);break;case 50:link=$("#kk-forum a").attr("href"),link&&(window.location=link);break;case 51:link=$("#kk-fjb a").attr("href"),link&&(window.location=link);break;case 52:link=$("#kk-groupee a").attr("href"),link&&(window.location=link);break;case 53:link=$("#kk-radio a").attr("href"),link&&(window.location=link);break;case 82:link=$("#act-post").attr("href"),link&&(window.location=link);break;case 37:link=$(".pagination .previous-page").attr("href"),link&&(window.location=link);break;case 39:link=$(".pagination .next-page").attr("href"),link&&(window.location=link);break;default:key=""}return!0}},$("#search-header-button , #k-hp-list").hover(function(){$("#search-header-button").addClass("hover")},function(){$("#search-header-button").removeClass("hover")}),$(".ani-swing").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend",function(){$(this).removeClass("swing")}),$(".ani-swing").hover(function(){$(this).addClass("swing")}),$(".vote-up-off").hover(function(){$(this).parent().toggleClass("vote-cendol")}),$(".vote-down-off").hover(function(){$(this).parent().toggleClass("vote-bata")}),function(a){a.fn.kslzy=function(b,c){function d(c,d){d=d||"visible";var e=a(c).closest(".spoiler");1==e.length&&(c=e);var g=f.height(),h=f.scrollTop(),i=a(c).offset().top,j=a(c).height();return"visible"==d?g+h+b>i&&i>h-j-b:"above"==d?g+h>i:void 0}function e(){var b=g.filter(function(){return d(a(this))});loaded=b.trigger("display"),g=g.not(loaded)}var f=a(window),g=this,b=b||0;return this.one("display",function(){if(a(this).removeClass("mls-img").addClass("rjn-img"),"DIV"==a(this).context.tagName){a(this).hide(),a(this).fadeIn();var b=a('<img class="lte-img">');b.attr("src",a(this).attr("data-src")),b.appendTo(a(this))}else a(this).attr("src",a(this).attr("data-src")),a(this).removeAttr("data-src")}),f.on("scroll.kslzy resize.kslzy lookup.kslzy",e),e(),this}}(window.jQuery||window.Zepto),$(function(){function a(a){var b=$(a),d=b.data("submenuId"),e=$("#"+d);c.outerHeight(),c.outerWidth();e.css({display:"block"}),$(".listing-sidebar").hover(function(){$(this).addClass("hover").addClass("maintainHover")},function(){$(this).removeClass("hover").removeClass("maintainHover")}),$(".hover-sidebar-content").height($(".tag-wrap").height()-1),b.addClass("maintainHover hover"),b.mousedown(function(){b.on("mouseup mousemove",function a(c){"mouseup"===c.type?$(e).css("display","block"):$(e).css("display","none"),b.off("mouseup mousemove",a)})}),startHover=$.now(),img=$(a).find(".b_sdbr"),preload=img.attr("data-src")||null,preload&&(rsrc=img.attr("data-src"),img.attr("data-src",null),img.attr("src",rsrc))}function b(a){var b=$(a),c=b.data("submenuId"),d=$("#"+c);d.css("display","none"),b.removeClass("maintainHover");var e=$.now(),f=e-startHover,g=f/1e3;g>=1&&(cat_tag_name=$(a).find(".b_sdbr").attr("cat-tag-name"))}var c=$("#categories > ul , #forum-home-categories > ul , #fjb-home-categories > ul");c.menuAim({activate:a,deactivate:b,exitOnMouseOut:!0,submenuWrap:".hover-sidebar-content"}),$(".listing-sidebar").click(function(a){a.stopPropagation()}),$(".hover-sidebar-content").on("mouseup mousemove",function(a){a.stopPropagation()})}),$(document).ready(function(){function a(a){var b=2,c=",",d=".";a=parseFloat(a);var e=0>a?"-":"",f=new String(a.toFixed(b));c.length&&"."!=c&&(f=f.replace(/\./,c));var g="",h="",i=new String(f),j=c.length?i.indexOf(c):-1;for(j>-1?(j&&(g=i.substr(0,j)),h=i.substr(j+1)):g=i,g&&(g=String(Math.abs(g)));h.length<b;)h+="0";for(temparray=new Array;g.length>3;)temparray.unshift(g.substr(-3)),g=g.substr(0,g.length-3);return temparray.unshift(g),g=temparray.join(d),e+g}function b(){0!==location.hash.length&&window.scrollTo(window.scrollX,window.scrollY-200)}$(".feed-score").parents("body").addClass("user-forum-profile"),$("#toggle-subforum").on("click",function(a){a.preventDefault(),$$=$(".header-list-sub"),$$.hasClass("hide-sub")?($$.removeClass("hide-sub"),$(this).find(".fa").attr("class","fa fa-chevron-up")):($$.addClass("hide-sub"),$(this).find(".fa").attr("class","fa fa-chevron-down"))}),$(window).scrollTop()>0&&$(".site-header").addClass("scrolled");var c=$("#offer-price").text();c=c.replace(".",""),c=parseInt(c),$('input[type="range"]').rangeslider({polyfill:!1,rangeClass:"rangeslider",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",onInit:function(){},onSlide:function(b,c){5e3>=c?($("#id-range").attr("step",1e3),$("#id-range2").attr("step",1e3)):c>5e3&&3e4>c?($("#id-range").attr("step",5e3),$("#id-range2").attr("step",5e3)):c>=3e4&&2e5>c&&($("#id-range").attr("step",1e4),$("#id-range2").attr("step",1e4)),$("#js-output").css("left",b).text(a(c)),$("#price-control").val(c),$("#js-output2").css("left",b).text(a(c)),$("#price-control2").val(c)},onSlideEnd:function(b,d){celengan=d,$("#the-price").text(a(c+celengan)),$("#celengan-range").attr("value",celengan),$("#the-price2").text(a(c+celengan)),$("#celengan-range").attr("value",celengan)}}),$("#price-control").change(function(a){$('input[type="range"]').val($(this).val()).change()}),$("#price-control2").change(function(a){$('input[type="range"]').val($(this).val()).change()}),$(".mls-img").kslzy(300),$("#datepicker-calendar").DatePicker({inline:!0,calendars:2,mode:"range",onChange:function(a,b){$("#date-range-field span").html(a[0].getDate()+"/"+(a[0].getMonth(!0)+1)+"/"+a[0].getFullYear()+" - "+a[1].getDate()+"/"+(a[1].getMonth(!0)+1)+"/"+a[1].getFullYear())}}),$("#dp2").datepicker().on("changeDate",function(a){$("#dp2").datepicker("hide")}),$("#date-range-field").bind("click",function(){return $("#datepicker-calendar").toggle(),$(this).toggleClass("open"),$("#search-keyword").removeClass("open"),!1}),$("html").click(function(){$("#datepicker-calendar").is(":visible")&&($("#datepicker-calendar").hide(),$("#date-range-field").removeClass("open"))}),$("#datepicker-calendar").click(function(a){a.stopPropagation()}),$(".check-select").change(function(){$(this).prop("checked")?$(this).closest(".thumbnail").addClass("selected"):$(this).closest(".thumbnail").removeClass("selected")}),$(".thumbnail").hover(function(){img=$(this).find(".img-hover"),"#"===img.attr("src")&&img.attr("src",img.attr("data-large"))}),$("#carousel-largeimage").zoom({callback:function(){$(".zoomImg").width()<=400?$(".zoomImg").css({visibility:"hidden",cursor:"default"}):$(".zoomImg").css({visibility:"visible",cursor:"all-scroll"})}}),$("#shipping-img").zoom();var d=$("#carousel-thumb").lightSlider({item:5,vertical:!0,pager:!1,controls:!1,verticalHeight:350,slideMargin:5});$(".prev-thumb").click(function(){d.goToPrevSlide()}),$(".next-thumb").click(function(){d.goToNextSlide()});$(".accordion > dd").hide();if($(".accordion > dd").first().show(),$(".accordion > dt").first().addClass("active"),$(".escrow .accordion > dd").first().hide(),$(".escrow .accordion > dt").first().removeClass("active"),$(".accordion > dt").click(function(){var a=$(this),b=a.next();return $(".accordion > dt.active").not(a.toggleClass("active")).removeClass("active"),a.siblings("dd").not(b.addClass("active").slideToggle()).slideUp(),!1}),$("#tab-info-lapak li a").click(function(){$("#tab2 .accordion > dd").first().show(),$("#tab2 .accordion > dt").first().addClass("active"),$("#tab4 .accordion > dd").first().show(),$("#tab4 .accordion > dt").first().addClass("active")}),$(".head-categories-title").click(function(){checkArrow()}),$(window).on("resize",function(){$(window).width()>1024&&($("#left-nav").removeClass("full-show"),$("#bgover").remove())}),$("#home-categories").children("div").addClass("show-five"),$(".sidebar-trigger").on("click",function(){$("#left-nav").toggleClass("full-show"),$(".hover-sidebar-content").height($(".tag-wrap").height())}),$(".sortable").sortable({items:":not(.disabled)"}),$("#sidebar-category").sortable().bind("sortupdate",function(){var a=$("#sidebar-category > li").map(function(){if($(this).attr("data-submenu-id")){var a=$(this).attr("data-submenu-id").split("-");return"tag_id[]="+a[2]}return null}).get();$.ajax({url:urlSaveTagOrder,type:"post",data:a.join("&"),success:function(){},error:function(){alert("Please try again")}})}),$("#home-categories").length<1&&$(".hover-sidebar-content").height($(".tag-wrap").height()),$(".event-calendar, .scrolling-con-update").mCustomScrollbar({advanced:{updateOnContentResize:!0,autoScrollOnFocus:!1}}),$("#wts-tab .step li").cycle(2500,"active"),$("#be-buyer-tab .step li").cycle(2500,"active"),$("select.select").customSelect(),$(".modal").on("shown.bs.modal",function(a){$(".select").trigger("render")}),$(".tooltips").tooltip(),$(".popovers").popover({trigger:"hover"}),$("#reply-messsage").markItUp(kaskusBbcodeSettings).focus(),$(".brand-con .brand").each(function(a,b){$(this).width(Math.floor($(".brand-con").width()/$(".brand-con .brand").length)-1)}),$("#search").focus(function(a){$(".global-search").addClass("large")}),$("#search").blur(function(a){$(".global-search").removeClass("large")}),$(".badges .user-badge>div .badge").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend",function(){$(this).removeClass("swing")}),$(".badges .user-badge>div .badge").hover(function(){$(this).addClass("swing")}),$(".must-number").keydown(function(a){-1!==$.inArray(a.keyCode,[46,8,9,27,13,110,190])||65==a.keyCode&&a.ctrlKey===!0||a.keyCode>=35&&a.keyCode<=39||(a.shiftKey||a.keyCode<48||a.keyCode>57)&&(a.keyCode<96||a.keyCode>105)&&a.preventDefault()}),$("ul#filter_list").has("li").length>0&&($("#div_filter").css("display","block"),$("#clear_filter").css("display","inline-block")),$(".back-to-top, .back-top").bind("click",function(a){$(window).scrollTop()<40||$("html, body").animate({scrollTop:0},500)}),$(".main-content-full").length&&$("#bottom-leaderboard").children().attr("style",""),$("#search-result").length&&$("#search-result").height()<$("#refine-search").height()&&$("#search-result").find("tbody").height($("#refine-search").height()-98),$('<div id="floating_notice" class="header-notification-wrap visible"><div class="header-notification"><span id="notice_span"></span></div></div>').appendTo("body").hide(),$("input, textarea").placeholder(),$(".verified-seller-form").hide(),$("#button-form-verified-seller").click(function(){$(".verified-seller-trigger").hide(),$(".verified-seller-form").show()}),$(".verified-seller-form input[type='text']").focusin(function(){$(".input-helper").show()}),$(".verified-seller-form input[type='text']").focusout(function(){$(".input-helper").hide()}),$("#landing-hot-review").find(".item").each(function(){var a=$(this).next();a.length||(a=$(this).siblings(":first")),a.children(":first-child").clone().appendTo($(this));for(var b=0;1>b;b++)a=a.next(),a.length||(a=$(this).siblings(":first")),a.children(":first-child").clone().appendTo($(this))}),$(".career-page").length){var e=document.location.toString();e.match("#")&&$(".career-page .nav-tabs a[href=#"+e.split("#")[1]+"]").tab("show"),$(".career-page .nav-tabs a").on("shown",function(a){window.location.hash=a.target.hash}),$(".career-page .nav-tabs a").click(function(a){window.location.hash=a.target.hash}),$(".career-page").length&&$(window).on("hashchange",function(){b()})}$(".cat-selection").chosen({search_contains:!0,no_results_text:"Salah kali, gan!"}),$(".no-search").chosen({disable_search_threshold:10}),$(".related-thread").find("a").click(function(){_gaq.push(["_trackEvent","more like this","click",this.href])});var f=$.now();$(".trfc").hover(function(){f=$.now()},function(){var a=$.now(),b=a-f,c=b/1e3;if(c>=1){var d=$(this).attr("cat-tag-name");_gaq.push(["_trackPageview","/bannercategories/"+d])}}),$(".nav-promo").find("img").addClass("trfc"),$(".hover-sidebar-content").on("mouseup mousemove",function(a){a.stopPropagation()}),$(function(){$(document).on("mousemove","textarea",function(a){var b=$(this).offset().top+$(this).outerHeight()-16,c=$(this).offset().left+$(this).outerWidth()-16;$(this).css({cursor:a.pageY>b&&a.pageX>c?"nwse-resize":""})}).on("keyup","textarea",function(a){$(this).height($(this).height()+this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"))-$(this).outerHeight())})})}),$(".textarea-block").on("focus",function(){$(".control-hidden").show()});var StatusControlStick=!1,forumControl=$(".postlist").eq(0),userControlStick=$(".user-control-stick"),header=$(".site-header"),windowPanel=$(window),sidebar=$(".sidebar-wrap"),footer=$(".site-footer"),leftnav=$("#left-nav"),relatedThread=$(".related-thread"),momod=$(".momod-frame");kaskusStore=$(".kaskus-store"),kasAds=$(".kaskus-ads"),checkObject(leftnav)&&(leftnavTop=leftnav.position().top),checkObject(momod)&&(heightright=momod.offset().top),checkObject(kaskusStore)&&(heightright=kaskusStore.offset().top),$(window).bind("scroll",function(){borderHeader(),checkObject($(".invoice-sidebar"))&&stickyInvoiceSidebar(),checkObject($(".order-sidebar"))&&stickyOrderInfoSidebar(),checkObject(momod)&&stickSidebar(),checkObject($(".user-control-stick"))&&ControlStick(),checkObject($(".kaskus-ads .kasad-h"))&&relatedContent(),
checkObject($(".landing"))&&($("#left-nav").hasClass("full-show")||stickLeftnav()),checkObject($(".hot-thread-wrap"))&&stickSidebarHot(),$(".navbar").css("left",-$(this).scrollLeft()+"px")}),checkObject($(".hot-thread-wrap"))&&stickSidebarHot(),checkObject(momod)&&stickSidebar(),checkObject($(".user-control-stick"))&&ControlStick(),checkObject($(".kaskus-ads .kasad-h"))&&relatedContent(),checkObject($(".landing"))&&setTimeout(function(){stickLeftnav()},130),$("#send-share-mail").on("click",function(a){emailtext=$("#share-from").val(),multiEmail(emailtext)});