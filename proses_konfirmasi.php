<? 
include "config/koneksi.php";

$pembayaran='  Pembayaran Dari '.$_POST['bank'].'<br> Pada Tanggal '.$_POST['tanggal'].'<br>No Rekening : '.$_POST['norekening'].'<br> Atas Nama '.$_POST['nama'].'<br> Referal '.$_POST['referal'].'<br> Nominal '.$_POST['nominal'];

mysql_query("UPDATE member SET pembayaran='$pembayaran' WHERE id_member= '$_POST[id]'");

echo"<script>alert('Konfirmasi Anda akan kami respon')</script>";
echo "<meta http-equiv='refresh' content='0;url=store'>";

?>