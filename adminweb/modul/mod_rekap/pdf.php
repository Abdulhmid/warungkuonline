<?php
error_reporting(0);

include ('class.ezpdf.php');
include "rupiah.php";
  
$pdf = new Cezpdf();
 
// Set margin dan font
$pdf->ezSetCmMargins(3, 3, 3, 3);
$pdf->selectFont('fonts/Courier.afm');

$all = $pdf->openObject();

// Tampilkan logo
$pdf->setStrokeColor(0, 0, 0, 1);
$pdf->addJpegFromFile('logo.jpg',20,775,273);

// Teks di tengah atas untuk judul header
$pdf->addText(170, 800, 16,'<b>Laporan Penyalahgunaan Iklan</b>');

// Garis atas untuk header
$pdf->line(10, 765, 578, 765);

// Garis bawah untuk footer
$pdf->line(10, 50, 578, 50);
// Teks kiri bawah
$pdf->addText(30,34,8,'Dicetak tgl:' . date( 'd-m-Y, H:i:s'));

$pdf->closeObject();

// Tampilkan object di semua halaman
$pdf->addObject($all, 'all');

// Baca input tanggal yang dikirimkan user
$mulai=$_POST[thn_mulai].'-'.$_POST[bln_mulai].'-'.$_POST[tgl_mulai];
$selesai=$_POST[thn_selesai].'-'.$_POST[bln_selesai].'-'.$_POST[tgl_selesai];

// Koneksi ke database dan tampilkan datanya

include "../../../config/koneksi.php";

// Query untuk merelasikan kedua tabel di filter berdasarkan tanggal
$sql = mysql_query("SELECT laporan_iklan.*, member.`username`, member.`email`, produk.* FROM laporan_iklan, member, produk
WHERE member.`id_member`=laporan_iklan.`id_member`
AND produk.`id_produk`=laporan_iklan.`id_member`
AND laporan_iklan.tanggal BETWEEN '$mulai' AND '$selesai'");
$jml = mysql_num_rows($sql);

$sql2 = mysql_query("SELECT SUM(nilai) AS total FROM laporan_iklan, member, produk
WHERE member.`id_member`=laporan_iklan.`id_member`
AND produk.`id_produk`=laporan_iklan.`id_member`
AND laporan_iklan.tanggal BETWEEN '$mulai' AND '$selesai'");
$jml2 = mysql_num_rows($sql2);
$x = mysql_fetch_array($sql2);

if ($jml > 0){
$i = 1;
while($r = mysql_fetch_array($sql)){
  $data[$i]=array('<b>No</b>'=>$i, 
                  '<b>Nama Pelapor</b>'=>$r[nama], 
                  '<b>Email Pelapor</b>'=>$r[email],
				  '<b>Melaporkan Member</b>'=>$r[username],
				  '<b>Iklan</b>'=>$r[nama_produk]);
					$i++;
}
$pdf->ezTable($data, '', '', '');
$pdf->addText(20, 425, 10,'Jumlah Laporan '.$x[total]);

// Penomoran halaman
$pdf->ezStartPageNumbers(320, 15, 8);
$pdf->ezStream();
}
else{
  $m=$_POST['tgl_mulai'].'-'.$_POST['bln_mulai'].'-'.$_POST['thn_mulai'];
  $s=$_POST['tgl_selesai'].'-'.$_POST['bln_selesai'].'-'.$_POST['thn_selesai'];
	  
	echo"<script>alert('Tidak ada laporan dari Tanggal $m s/d $s')</script>";
	echo "<meta http-equiv='refresh' content='0;url=../../media.php?module=orang'>";

}
?>
