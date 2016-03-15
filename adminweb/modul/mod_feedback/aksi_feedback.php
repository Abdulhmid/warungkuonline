<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus 
if ($module=='feedback' AND $act=='hapus'){
  mysql_query("DELETE FROM feedback WHERE id_feedback='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}


// Update 
elseif ($module=='feedback' AND $act=='update'){
  mysql_query("UPDATE feedback SET nama_bank = '$_POST[nama_bank]' WHERE id_bank = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
