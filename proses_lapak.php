<?php 
session_start();
error_reporting(0);
include"config/authentication_member.php";
$namafolder="foto_barang/"; //tempat menyimpan file 
include "config/koneksi.php";
include "config/fungsi_thumb.php";
     
$juri=$_POST['juri'];
$kondisi=$_POST['kondisi'];
$wilayah=$_POST['wilayah'];
$judul=$_POST['judul_iklan'];
$harga=$_POST['harga'];
$deskripsi=$_POST['deskripsi'];
$tgl=date("Y-m-d");
$kota=$_POST['kota'];
$kategori=$_POST['kategori'];

function acak($panjang)
		{
			$karakter= '1234567890ABCDEFGHIJKLMNOPQRESTUVWXYZ';
	        $string = '';
			for ($i = 0; $i < $panjang; $i++) 
			{
			$pos = rand(0, strlen($karakter)-1);
			$string .= $karakter{$pos};
       		}
			return $string;
		}
		

$kode = acak(8);

$sql=mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]'");
$r=mysql_fetch_array($sql);

	$lokasi_file    = $_FILES['fupload']['tmp_name'];
	$tipe_file      = $_FILES['fupload']['type'];
	$nama_file      = $_FILES['fupload']['name'];
	$acak           = rand(1,99);
	$nama_file_unik = $acak.$nama_file; 
	
	$lokasi_file2    = $_FILES['fupload2']['tmp_name'];
	$tipe_file2      = $_FILES['fupload2']['type'];
	$nama_file2      = $_FILES['fupload2']['name'];
	$acak2           = rand(1,99);
	$nama_file_unik2 = $acak2.$nama_file2; 
	
	$lokasi_file3    = $_FILES['fupload3']['tmp_name'];
	$tipe_file3      = $_FILES['fupload3']['type'];
	$nama_file3      = $_FILES['fupload3']['name'];
	$acak3           = rand(1,99);
	$nama_file_unik3 = $acak3.$nama_file3; 
	
	$lokasi_file4    = $_FILES['fupload4']['tmp_name'];
	$tipe_file4      = $_FILES['fupload4']['type'];
	$nama_file4      = $_FILES['fupload4']['name'];
	$acak4           = rand(1,99);
	$nama_file_unik4 = $acak4.$nama_file4; 
	
  if($r['premium']=='TIDAK')
  { 
  if (empty($lokasi_file)){
            
$query=mysql_query("INSERT INTO produk VALUES 
('','$_SESSION[username]','$juri','$judul','$kondisi','$kota','$kategori','$harga','kosong.jpg','','','','$deskripsi',
NOW(),'TIDAK','$wilayah')");  
  }
  else{
$query=mysql_query("INSERT INTO produk VALUES 
('','$_SESSION[username]','$juri','$judul','$kondisi','$kota','$kategori','$harga','foto_barang/$nama_file_unik','','','','$deskripsi',
NOW(),'TIDAK','$wilayah')");  
	if($query AND $nama_file_unik){
		UploadFoto($nama_file_unik);
	}
  }
  }
    elseif($r['premium']=='YA')
	{
	  $query=mysql_query("INSERT INTO produk VALUES 
('','$_SESSION[username]','$juri','$judul','$kondisi','$kota','$kategori','$harga','foto_barang/$nama_file_unik','foto_barang/$nama_file_unik2','foto_barang/$nama_file_unik3','foto_barang/$nama_file_unik4','$deskripsi',
'$tgl','$r[premium]','$wilayah')"); 
	  if($query AND $nama_file_unik){
		UploadFoto($nama_file_unik);
		UploadFoto2($nama_file_unik2);
		UploadFoto3($nama_file_unik3);
		UploadFoto4($nama_file_unik4);
	  }
  }

	echo"<script>alert('Berhasil')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=store'>";
?>