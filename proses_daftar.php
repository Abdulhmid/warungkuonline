<? 
include "config/koneksi.php";
$username=$_POST['username'];
$password=$_POST['password'];
$password2=$_POST['password2'];
$jkel=$_POST['jkel'];
$nomor_telphone=$_POST['nomor_telphone'];
$nama=$_POST['nama'];
$email=$_POST['email'];
$bbm=$_POST['bbm'];
$perintah = "INSERT INTO member VALUES ('$username','$password','$nama','$jkel','$email','$nomor_telphone','TIDAK','','$bbm','TIDAK','','','','','','')";
$hasil = mysql_query($perintah);


	echo"<script>alert('Terimakasih Sudah Mendaftar')</script>";
	 echo "<meta http-equiv='refresh' content='0;url=store'>";


?>