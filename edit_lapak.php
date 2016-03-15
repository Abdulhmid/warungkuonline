<?php 
include"config/authentication_member.php";
$namafolder="foto_barang/"; //tempat menyimpan file 
include "config/koneksi.php";

$juri=$_POST['juri'];
$kondisi=$_POST['kondisi'];
$judul=$_POST['judul'];
$harga=$_POST['harga'];
$deskripsi=$_POST['deskripsi'];
$kota=$_POST['kota'];
$kategori=$_POST['kategori'];
$sql=mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]'");
$r=mysql_fetch_array($sql);
    
$sql=mysql_query("UPDATE produk SET keterangan ='$juri', nama_produk = '$judul', kondisi = '$kondisi', id_kota ='$kota', id_kategori = '$kategori', harga = '$harga', deskripsi = '$deskripsi'
WHERE id_produk = '$_POST[id]'"); 
        
$refresh=mysql_query("SELECT * FROM produk, member WHERE member.`id_member`=produk.`id_member` AND username='$_SESSION[username]' ORDER BY id_produk DESC");
$bb=mysql_fetch_array($refresh);
	echo"<script>alert('Berhasil')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=produk-$bb[id_produk].html'>";

?>