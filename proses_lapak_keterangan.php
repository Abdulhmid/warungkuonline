<? 
include "config/koneksi.php";
include "config/authentication_member.php";
$juri=$_POST['juri'];
$perintah = "UPDATE produk SET keterangan ='$juri', gambar='sold.png' WHERE id_produk='$_POST[id_produk]'";
$hasil = mysql_query($perintah);

if ($hasil)
{
	echo"<script>alert('Sukses')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=store'>";
}
else
{ 
	echo"<script>alert('Error')</script>";
	echo "<meta http-equiv='refresh' content='0;url=store'>";

}			
?>