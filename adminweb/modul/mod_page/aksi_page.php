<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus Kategori
if ($module=='page' AND $act=='hapus'){
  mysql_query("DELETE FROM page_link WHERE id_page_link='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Input kategori
elseif ($module=='page' AND $act=='input'){
  mysql_query("INSERT INTO page_link(caption_link,link,urutan) VALUES('$_POST[nama]','$_POST[link]','$_POST[urutan]')");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='page' AND $act=='update'){
  mysql_query("UPDATE page_link SET caption_link = '$_POST[nama]', link='$_POST[link]', urutan='$_POST[urutan]' WHERE id_page_link = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
  }

?>
