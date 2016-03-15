<? 
include "/config/koneksi.php";
$pesan=$_POST['pesan'];
$nama=$_POST['nama'];
$email=$_POST['email'];
$tgl=date("Y-m-d");
$subjek=$_POST['subjek'];
$psn=htmlspecialchars($pesan);
$perintah = "INSERT INTO feedback VALUES ('','$nama','$email','$subjek','$psn','$tgl')";
$hasil = mysql_query($perintah);
if ($hasil)
{
	echo"<script>alert('pesan anda akan kami respon')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=store'>";
}
else
{ 
	echo "<script>alert('Error')</script>";
		 echo "<meta http-equiv='refresh' content='0;url=store'>";

}			
?>