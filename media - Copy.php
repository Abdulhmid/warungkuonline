<?php 
  session_start();
  include "config/koneksi.php";
  include "config/fungsi_indotgl.php";
  include "config/class_paging.php";
  include "config/fungsi_combobox.php";
  include "config/library.php";
  include "config/fungsi_autolink.php";
  include "config/fungsi_rupiah.php";
?>

<!DOCTYPE html>
<html dir="ltr" lang="id" class="no-js"><!--<![endif]-->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<title>Jual Beli Online Di Warung-Online</title>
<link rel="stylesheet" href="css/style.css" type="text/css"/>
<link rel="stylesheet" href="css/font_style.css?v=1390289843" type="text/css"/>
	<link rel="stylesheet" href="Simple%20jQuery%20Slideshow_files/style.css">
	
	<style>
		#slideshow { 
		    margin: 80px auto; 
		    position: relative; 
		    width: 240px; 
		    height: 240px; 
		    padding: 10px; 
		    box-shadow: 0 0 20px rgba(0,0,0,0.4); 
		}
		
		#slideshow > div { 
		    position: absolute; 
		    top: 10px; 
		    left: 10px; 
		    right: 10px; 
		    bottom: 10px; 
		}
	</style>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="tinymce/tinymce.min.js"></script>
<script type="text/javascript">
tinymce.init({
    selector: "textarea",
    plugins: [
"advlist autolink lists link image charmap print preview anchor",
	"searchreplace visualblocks code fullscreen",
	"insertdatetime media table contextmenu paste"
]
});
</script>

<script type="text/javascript" src="jscripts/jquery.cycle.all.min.js"></script>
<script type="text/javascript" src="jscripts/cufon.js"></script>
<script type="text/javascript" src="jscripts/Signika_400.font.js"></script>
<script type="text/javascript" src="jscripts/SignikaLight_300.font.js"></script>
<script type="text/javascript" src="jscripts/SignikaSemiBold_600.font.js"></script>
<script type="text/javascript" src="jscripts/jquery-validation-1.9.0/jquery.validate.min.js"></script>
<script type="text/javascript">
<!--
function isEmpty(inString) {
  var Empty = true;
  for (var i=0;i<inString.length;i++) {
    if ((inString.charAt(i) != ' ') &&
        (inString.charAt(i) != '\t') &&
        (inString.charAt(i) != '\r') &&
        (inString.charAt(i) != '\n')) {
      Empty = false;
    }
  }
  return Empty;
}

function check() {
  if(isEmpty(document.form.nama.value))  {
    alert('Nama belum diisi !');
    document.form.nama.focus();
    return false;
  }
if(isEmpty(document.form.email.value)) {
    alert('Email belum diisi !');
    document.form.email.focus();
    return false;
  }
    if(isEmpty(document.form.username.value))  {
    alert('Username belum diisi !');
    document.form.username.focus();
    return false;
  }

    if (form.password.value != form.password2.value){
    alert("Pengulangan Password Tidak Sama");
    form.password.focus();
    return false;
  }    


if(isEmpty(document.form.password.value)) {
    alert('Password Belum Diisi!');
    document.form.password.focus();
    return false;
  }

if(isEmpty(document.form.password2.value)) {
    alert('Silahkan Ulangi Password Anda!');
    document.form.password2.focus();
    return false;
  }

if(isEmpty(document.form.jkel.value)) {
    alert('Pilih Jenis Kelamin Anda');
    document.form.jkel.focus();
    return false;
  }

if(isEmpty(document.form.nomor_telphone.value)) {
    alert('Nomor telephone belum diisi !');
    document.form.nomor_telphone.focus();
    return false;
  }

if(isEmpty(document.form.saran.value)) {
    alert('Saran Belum di Isi !');
    document.form.saran.focus();
    return false;
  }

if(isEmpty(document.form.captcha.value)) {
    alert('Captcha belum di isi!');
    document.form.captcha.focus();
    return false;
  }

if(isEmpty(document.form.subjek.value)) {
    alert('Subjek belum di isi!');
    document.form.subjek.focus();
    return false;
  }
  
if(isEmpty(document.form.kota.value)) {
    alert('Kota belum di isi!');
    document.form.kota.focus();
    return false;
  }
  
if(isEmpty(document.form.kondisi.value)) {
    alert('Kondisi belum di isi!');
    document.form.kondisi.focus();
    return false;
  }
  
if(isEmpty(document.form.juri.value)) {
    alert('Pilih Status Iklan Anda');
    document.form.juri.focus();
    return false;
  }
  
if(isEmpty(document.form.harga.value)) {
    alert('Harga belum di isi!');
    document.form.harga.focus();
    return false;
  }
  
if(isEmpty(document.form.deskripsi.value)) {
    alert('Deskripsi belum di isi!');
    document.form.deskripsi.focus();
    return false;
  }
  
if(isEmpty(document.form.gambar.value)) {
    alert('Gambar belum di isi!');
    document.form.gambar.focus();
    return false;
  }
    if(isEmpty(document.form.kode.value)) {
    alert('kode belu diisi !');
    document.form.kode.focus();
    return false;
  }

	return true;
}
//-->
</script>

	<link href="css/styles.css" type="text/css" media="all" rel="stylesheet" />
	<link href="css/skitter.styles.css" type="text/css" media="all" rel="stylesheet" />
	
	<!-- Skitter JS -->
    <!-- add styles -->
<link href="css/ui-lightness/jquery-ui-1.9.2.custom.min.css" rel="stylesheet" type="text/css" />

<!-- add scripts -->
<script src="css/jquery-ui-1.css"></script>

	<script type="text/javascript" language="javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" language="javascript" src="js/jquery.animate-colors-min.js"></script>
	<script type="text/javascript" language="javascript" src="js/jquery.skitter.min.js"></script>
	<!-- Init Skitter -->
	<script type="text/javascript" language="javascript">
		$(document).ready(function() {
			$('.box_skitter_large').skitter({
				theme: 'clean',
				numbers_align: 'center',
				progressbar: true, 
				dots: true, 
				preview: true
			});
		});
	</script>
</head>
<body class="home-only"><header class="navbar navbar-fixed-top"><div class="navbar-inner"><div class="container clearfix"><div class="topbar-logo-wrapper"><a href="store"></a></div>

<div class="pull-right"><ul class="topbar-nav">
<li class="dropdown-single border-left"><a href="store">Home</a></li>
<?
//Menu login	  
//form authentication
error_reporting(0);
if ($_SESSION['username'] != ''){
	$sql=mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]'");
	$r=mysql_fetch_array($sql);
	$sql2=mysql_query("SELECT * FROM orders WHERE username='$_SESSION[username]' AND status_order='Baru' ORDER BY id_orders DESC LIMIT 2");
	$count=mysql_num_rows($sql);

		echo"<li class=dropdown-right border-both><a href=profil><font color=blue><b>$r[username]</b></font></a></li>";
		if ($count > 0){
			echo "
								  <li class=dropdown-right border-both><a href=buka_lapak>Buka Lapak</a></li>

			<li class=dropdown-right border-both><a href=logout.php>Logout</a></li>

			";
		}
	}
	else{
          echo"
		  <li class=dropdown-right border-both><a href=login>Masuk</a></li>
<li class=dropdown-single border-left><a href=daftar_member>Daftar</a></li>
		  ";
	}
				?>
                <li class="dropdown border-left">
<a href="feedback">Saran dan Masukan</a></li>

</ul></div>
<form id="navbar-search" action="hasil-pencarian" class="navbar-search" method="post">
<input type="hidden" name="vi" value="">
<input type="hidden" name="st" value=""><input type="hidden" name="c" value="">

<div class="search-parent-older">
<div class="search-parent">
<input id="search-keyword" class="input-wrapper" type="text" value="" placeholder="Cari produk / toko" name="kata" autofocus>
<div class="cat-wrapper">
<div class=" cat-result-wrapper">
<ul class="inline cat-result">
<li class="cat-result-toggle">Semua Kota</li>
<li>
</ul>
</div>
<? echo"
<select id=cat-select class=cat-select absolute name=kota>";
echo "<option value=0>Pilih Kota</option>";

            $tampil=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
            while($x=mysql_fetch_array($tampil)){
              echo "<option class=ml-10 value=value=$x[id_kota]>$x[nama_kota]</option>";
            }
    echo "</select>";
	?>
</div>
<span class="btn-search-wrapper">
<button class="btn btn-search" type="submit">
<i class="icon-search icon-large orange"></i></button></span></div></div></form></div></div></header>
<? include "konten.php" ?>
</div>


<footer class="footer-wrapper">
<div class="footer-main">
<div class="container">
<div class="row-fluid">
<div class="span2">
<h3 class="fs-14">
<i class="icon-about green icon-large"></i>&nbsp;&nbsp;Tentang</h3><ul class="ul-footer">

<li><a href="premium_member">Premium Member</a></li>
<li><a href="syarat">Syarat dan Ketentuan</a></li>
<li><a href="daftar_blacklist">Daftar Blacklist User</a>
<li><a href="adminweb">Pengaturan Admin</a></ul></div>
<li><a href="profil_perusahaan">Profil Perusahaan</a>
<div class="span2 footer-socmed"><hr class="hanger-left">
<hr class="hanger-right"><div class="box box-white box-socmed">


</ul>
</div></div></div></div></div><div class="container footer-additional"><div class="row-fluid">

<div class="span4">
<div class="muted"><small>2016 &copy; Ari</small></div>
</div>
</footer>

<div class="jqmWindow" id="dialog"><div class="jqm-inner">
<div id="dc" class="dialog-content"><div class="container-fluid">
<div id="rf" class="row-fluid"></div></div></div></div>
<div>&nbsp;</div></div><div id="cover" style="display: none; width: 800px; height: 600px;"></div>
<div><iframe name="fra_app" id="fra_app" style="display: none; height: 200px; bottom:55px; left:5px; width:970px; position: fixed; margin: auto; background: #EFEFEF; border: 1px solid #303030; overflow: visible; z-index: 101;"></iframe></div>

</body>
</html>