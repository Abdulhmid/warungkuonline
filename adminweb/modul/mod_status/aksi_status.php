<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];
// Hapus Kategori
if ($module=='kota' AND $act=='hapus'){
  mysql_query("DELETE FROM kota WHERE id_kota='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

elseif ($module=='status' AND $act=='update'){
  mysql_query("UPDATE motor SET status = '$_POST[status]' WHERE id_motor = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
