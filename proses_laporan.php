<? 
include "config/koneksi.php";

$username=$_POST['username'];
$id_produk=$_POST['id_produk'];
$keterangan=$_POST['keterangan'];
$nama=$_POST['nama'];
$email=$_POST['email'];
$puas=$_POST['puas'];

$tgl=date("Y-m-d");
$perintah = "INSERT INTO laporan_iklan VALUES ('','$username','$id_produk','$nama','$email','$keterangan','$tgl','1','$puas')";
$hasil = mysql_query($perintah);
if ($hasil)
{
	echo"<script>alert('Terimakasih atas laporan Anda')</script>";
	 echo "<script>document.location.href='javascript:history.go(-2)'</script>";
}
else
{ 
	echo "<script>ERORRRR !!!!!</script>";
	echo "<meta http-equiv='refresh' content='0;url=store'>";

}			
?>