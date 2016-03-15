<?php
//authentication user
include "../../../config/authentication_users.php";

session_start();
include "../../../config/koneksi.php";
include "../../../config/library.php";
include "../../../config/fungsi_thumb.php";
include "../../../config/fungsi_seo.php";

$module=$_GET[module];
$act=$_GET[act];

//Membaca file
$sql=mysql_query("SELECT * FROM motor WHERE id_motor='$_POST[id]'");
$r=mysql_fetch_array($sql);
$data=$r[gambar];
$pathfile='../../../foto_motor/'.$data;
$pathfile2='../../../foto_motor/small_'.$data;

// Hapus motor
if ($module=='motor' AND $act=='hapus'){
  //menghapus file gambar
  //Cek apakah ada data gambar didatabase
  //dan bila terdapat data gambar difile maka hapus file gambar
	if (file_exists($pathfile) AND isset($data)) {
		unlink("$pathfile");
	}
	if (file_exists($pathfile2) AND isset($data)) {
		unlink("$pathfile2");
	}
  mysql_query("DELETE FROM motor WHERE id_motor='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}

// Input motor ---- tambah motor
elseif ($module=='motor' AND $act=='input'){
  $lokasi_file    = $_FILES['fupload']['tmp_name'];
  $tipe_file      = $_FILES['fupload']['type'];
  $nama_file      = $_FILES['fupload']['name'];
  $acak           = rand(1,99);
  $nama_file_unik = $acak.$nama_file; 

  $motor_seo      = seo_title($_POST[nama_motor]);

  // Apabila ada gambar yang diupload
  if (!empty($lokasi_file)){
    $query=mysql_query("INSERT INTO motor(id_merk,
									nama_motor,
                                    motor_seo,
									deskripsi,
                                    harga,
                                    tgl_masuk,
                                    gambar,
									no_plat) 
                            VALUES('$_POST[merk]',
								   '$_POST[nama_motor]',
                                   '$motor_seo',
								   '$_POST[deskripsi]',
                                   '$_POST[harga]',
                                   '$tgl_sekarang',
                                   '$nama_file_unik',
								   '$_POST[no_plat]')");
	//Bila penyimpanan database berhasil dan terdapat data gambar, upload gambar
	if($query AND $nama_file_unik){
		UploadImage($nama_file_unik);
	}
  }
  else{
	  
	  mysql_query("INSERT INTO motor(id_merk,
									nama_motor,
                                    motor_seo,
									deskripsi,
                                    harga,
                                    tgl_masuk,
									no_plat) 
                            VALUES('$_POST[merk]',
								   '$_POST[nama_motor]',
                                   '$motor_seo',
								   '$_POST[deskripsi]',
                                   '$_POST[harga]',
                                   '$tgl_sekarang',
								   '$_POST[no_plat]')");
								   
  }
  header('location:../../media.php?module='.$module);
}

// Update motor
elseif ($module=='motor' AND $act=='update'){
  $lokasi_file    = $_FILES['fupload']['tmp_name'];
  $tipe_file      = $_FILES['fupload']['type'];
  $nama_file      = $_FILES['fupload']['name'];
  $acak           = rand(1,99);
  $nama_file_unik = $acak.$nama_file; 

  $motor_seo      = seo_title($_POST[nama_motor]);

  // Apabila gambar tidak diganti
  if (empty($lokasi_file)){
    mysql_query("UPDATE motor SET nama_motor   = '$_POST[nama_motor]',
                                   motor_seo   = '$motor_seo', 
                                   id_merk	   = '$_POST[merk]',
                                   harga       = '$_POST[harga]',
                                   deskripsi   = '$_POST[deskripsi]',
								   status		= '$_POST[status]',
								   no_plat	   = '$_POST[deskripsi]'
                              WHERE id_motor   = '$_POST[id]'");
  }
  else{
	//menghapus file gambar
	//Cek apakah ada data gambar didatabase
	//dan bila terdapat data gambar difile maka hapus file gambar
	
    $query=mysql_query("UPDATE motor SET nama_motor = '$_POST[nama_motor]',
                                   motor_seo  = '$motor_seo', 
                                   id_merk     = '$_POST[merk]',
                                   harga       = '$_POST[harga]',
                                   deskripsi   = '$_POST[deskripsi]',
								   no_plat   = '$_POST[no_plat]', 
								   status		= '$_POST[status]',
                                   gambar      = '$nama_file_unik'   
                             WHERE id_motor   = '$_POST[id]'");
	//Bila penyimpanan database berhasil dan terdapat data gambar, upload gambar
	if($query AND $nama_file_unik){
		UploadImage($nama_file_unik);
	}
  }
  header('location:../../media.php?module='.$module);
}
?>
