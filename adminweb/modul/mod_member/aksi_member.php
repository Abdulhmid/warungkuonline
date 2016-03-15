<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

// Hapus Kategori
if ($module=='member' AND $act=='hapus'){
  mysql_query("DELETE FROM member WHERE username='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Hapus Kategori
if ($module=='member' AND $act=='hapusiklan'){
  mysql_query("DELETE FROM produk WHERE id_produk='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='member' AND $act=='update'){
  mysql_query("UPDATE member SET blokir = '$_POST[blokir]' WHERE username = '$_POST[id]'");
  header('location:../../media.php?module='.$module);
}

// Update kategori
elseif ($module=='member' AND $act=='updatepremium'){
$tgl=date("Y-m-d");
  mysql_query("UPDATE member SET premium = '$_POST[premium]', tanggal= '$tgl' WHERE username = '$_POST[id]'");  
  header('location:proses_email.php?id=1');
}
?>
