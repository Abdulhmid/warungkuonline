<html>
<head>
<title></title>
<script language="javascript">
function validasi(form){
  if (form.username.value == ""){
    alert("Anda belum mengisikan Username.");
    form.username.focus();
    return (false);
  }
     
  if (form.password.value == ""){
    alert("Anda belum mengisikan Password.");
    form.password.focus();
    return (false);
  }
  return (true);
}
</script>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body OnLoad="document.login.username.focus();">

<div id="header">
</div>
  <div id="content">
  	<div id=greyboxlogin><div id=isiheaderformlogin><img src="images/welcome-login.png" hspace="10"></div></div><br/>
	<div id=blueboxlogin><div id=formlogin>  
    <form name="login" action="cek_login.php" method="POST" onSubmit="return validasi(this)">
	Username <br/><input type="text" name="username" class="inputstyle" size=20><br/>
	Password <br/><input type="password" name="password" class="inputstyle" size=20><br/>
 			  <input type="submit" value="Login" class="submitstyle"><br/>
	</form>
	</div></div>
<p>&nbsp;</p>
  </div>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	
</div>
</body>
</html>
