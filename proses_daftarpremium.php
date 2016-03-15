<? 
include "config/koneksi.php";
$periode=$_POST['periode'];
$tgl=date("Y-m-d");
$perintah = "UPDATE member SET periode = '$_POST[periode]' WHERE username = '$_POST[id]'";
$hasil = mysql_query($perintah);
if ($hasil)
{
	echo"<script>alert('Terimakasih')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=konfirmasi'>";
}
else
{ 
	echo"<script>alert('Gagal')</script>";
		 echo "<meta http-equiv='refresh' content='0;url=daftarpremium'>";

}			
?>