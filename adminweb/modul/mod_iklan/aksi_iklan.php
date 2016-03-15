<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus Kategori
if ($module=='member' AND $act=='hapus'){
  mysql_query("DELETE FROM member WHERE id_member='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='member' AND $act=='update'){
  mysql_query("UPDATE member SET blokir = '$_POST[blokir]' WHERE id_member = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
