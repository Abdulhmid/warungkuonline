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

// Input kategori
elseif ($module=='kota' AND $act=='input'){
  $kategori_seo = seo_title($_POST['nama_kategori']);
  mysql_query("INSERT INTO kota(nama_kota) VALUES('$_POST[nama_kota]')");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='kota' AND $act=='update'){
  mysql_query("UPDATE kota SET nama_kota = '$_POST[nama_kota]' WHERE id_kota = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}
?>
