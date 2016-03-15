<?php 
include"config/authentication_member.php";
$namafolder="foto_barang/"; //tempat menyimpan file 
include "config/koneksi.php";

if (!empty($_FILES["nama_file"]["tmp_name"])) {     
$jenis_gambar=$_FILES['nama_file']['type'];     
$juri=$_POST['juri'];
$kondisi=$_POST['kondisi'];
$wilayah=$_POST['wilayah'];
$judul=$_POST['judul_iklan'];
$harga=$_POST['harga'];
$deskripsi=$_POST['deskripsi'];
$tgl=date("Y-m-d");
$kota=$_POST['kota'];
$kategori=$_POST['kategori'];
$sql=mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]'");
$r=mysql_fetch_array($sql);

    
if($jenis_gambar=="image/jpeg" || $jenis_gambar=="image/jpg" || $jenis_gambar=="image/gif" || $jenis_gambar=="image/x-png")     {                    
$gambar = $namafolder . basename($_FILES['nama_file']['name']);                
if (move_uploaded_file($_FILES['nama_file']['tmp_name'], $gambar)) {             
$sql=mysql_query("INSERT INTO produk VALUES 
('','$r[id_member]','$juri','$judul','$kondisi','$kota','$kategori','$harga','$gambar','$deskripsi',
'$tgl','$r[premium]','$wilayah')");         
$refresh=mysql_query("SELECT * FROM produk, member WHERE member.`id_member`=produk.`id_member` AND username='$_SESSION[username]' ORDER BY id_produk DESC");
$bb=mysql_fetch_array($refresh);
	echo"<script>alert('Berhasil')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=produk-$bb[id_produk].html'>";
}
}
}
?>