<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus merk
if ($module=='merk' AND $act=='hapus'){
  mysql_query("DELETE FROM merk WHERE id_merk='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Input merk
elseif ($module=='merk' AND $act=='input'){
  $merk_seo = seo_title($_POST['merk']);
  mysql_query("INSERT INTO merk(merk,merk_seo) VALUES('$_POST[merk]','$merk_seo')");
  header('location:../../media.php?module='.$module);
}

// Update merk
elseif ($module=='merk' AND $act=='update'){
  $merk_seo = seo_title($_POST['nama_merk']);
  mysql_query("UPDATE merk SET nama_merk = '$_POST[nama_merk]', merk_seo='$merk_seo' WHERE id_merk = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
