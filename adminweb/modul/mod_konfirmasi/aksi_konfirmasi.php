<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus 
if ($module=='bank' AND $act=='hapus'){
  mysql_query("DELETE FROM bank WHERE id_bank='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Input 
elseif ($module=='bank' AND $act=='input'){
  $kategori_seo = seo_title($_POST['nama_kategori']);
  mysql_query("INSERT INTO bank(nama_bank) VALUES('$_POST[nama_bank]')");
  header('location:../../media.php?module='.$module);
}

// Update 
elseif ($module=='bank' AND $act=='update'){
  mysql_query("UPDATE bank SET nama_bank = '$_POST[nama_bank]' WHERE id_bank = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
