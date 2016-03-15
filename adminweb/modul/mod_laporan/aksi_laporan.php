<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus Kategori
if ($module=='laporan' AND $act=='hapus'){
  mysql_query("DELETE FROM laporan_iklan WHERE id_laporan_iklan='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='member' AND $act=='update'){
  mysql_query("UPDATE member SET blokir = '$_POST[blokir]' WHERE username = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
