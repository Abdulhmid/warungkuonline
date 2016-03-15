<html>
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />  
<title>Aplikasi Tracking System</title>
<link href='favicon.ico' rel='shortcut icon' type='image/x-icon'/>
<link href="style.css" type="text/css" rel="stylesheet"  style="style="display:none"" />

<script type="text/javascript" src="jquery-1.7.2.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('#login').click(function() {
		$('#login_form').submit();
	});	
});	
</script>

</head>
<body>
<div id="induk">
  <div id="header"><u class="logo" href="/home.php"><img src="Satelit_527.jpg" width="60" height="60" /></u></div>
	
</div>

        <div id="active_tab_page" class="tabbar2" >
        
 			<div class="login_form">
<form id="login_form" action="update.php" method="post">
	<div class="login_form_label">Nama Pengguna:</div>
    <input class="login_form_field" type="text" name="username" value="" />
    <div class="login_form_label">Kata Kunci:</div>
    <input class="login_form_field" type="password" name="password" />
    <a id="login" class="button" >Masuk</a>
    <input id="login" style="display:none" type="submit" />
</form>
</div>
    
        </div>            	                
<div>
	
    <div class="login_center">
    	Desain by Indra Kusuma &copy; <?php echo date('Y'); ?>
		    
    </div>
</div>

</body>
</html>