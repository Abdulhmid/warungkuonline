<?php
include "../config/koneksi.php";
include"../config/authentication_users.php";

if ($_SESSION['leveluser']=='admin'){
  $sql=mysql_query("select * from modul where status <> 'kustomer' and aktif='Y' order by urutan");
}
elseif ($_SESSION['leveluser']=='karyawan'){
  $sql=mysql_query("select * from modul where status='karyawan' and aktif='Y' order by urutan"); 
} 


echo"<table class=tablestyle><tr class=noborder>";
$i=0;
$kolom=3;
while($m=mysql_fetch_array($sql)){
if($i >= $kolom){
echo"</tr><tr>";
$i=0;
}
$i++;
echo"<td align=center width='70' class=noborder><a href='$m[link]'><img src='foto_banner/$m[gambar]' border='0'></a><br>$m[nama_modul]</td>";
}
echo"</tr></table><br/>
<button onclick=myFunction()>Refresh Halaman</button>";

?>
