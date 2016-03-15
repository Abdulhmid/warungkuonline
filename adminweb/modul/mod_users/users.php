<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{

  $aksi="modul/mod_users/aksi_users.php";
switch($_GET[act]){
  // Tampil User
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    if ($_SESSION[leveluser]=='admin'){
      $tampil = mysql_query("SELECT * FROM admin ORDER BY username");
      echo "<div id=greyboxsmall><span class=judul_page>User</span></div>
          <input type=button value='Tambah User' onclick=\"window.location.href='?module=user&act=tambahuser';\" class=btnbluestyle><br/>";
    }
    else{
      $tampil=mysql_query("SELECT * FROM admin 
                           WHERE username='$_SESSION[namauser]'");
      echo "<div id=greyboxsmall><span class=judul_page>User</span></div>";
    }
    
    echo "<div id=bluebox>
		  <table class=tablestyle>
          <tr><th>no</th><th>username</th><th>nama lengkap</th><th>email</th><th>No.Telp/HP</th><th>Status</th><th colspan=2>aksi</th></tr>"; 
    $no=1;
	while ($r=mysql_fetch_array($tampil)){
       $usr=base64_encode($r[username]);
	   if ($no % 2 == 0){
		$warna = $warnaGenap;}
	   else{
		$warna = $warnaGanjil;}
		
	   echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[username]</td>
             <td>$r[nama_lengkap]</td>
		         <td><a href=mailto:$r[email]>$r[email]</a></td>
		         <td>$r[no_telp]</td>
		         <td align=center>$r[level]</td>
             <td><a href=?module=user&act=edituser&usr=$usr&sid=$r[id_session]><img src=images/edit.png border=0></a></td>
			 <td><a href=$aksi?module=user&act=delete&usr=$usr&sid=$r[id_session]><img src=images/delete.png border=0></a></td> </tr>";
	  $no++;
    }
    echo "</table></div>";
    break;
  
  case "tambahuser":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah User</span></div>
          <form method=POST action='$aksi?module=user&act=input'>
          <table class=tableform>
          <tr><td>Username</td>     <td> : <input type=text name='username'></td></tr>
          <tr><td>Password</td>     <td> : <input type=text name='password'></td></tr>
          <tr><td>Nama Lengkap</td> <td> : <input type=text name='nama_lengkap' size=30></td></tr>  
          <tr><td>E-mail</td>       <td> : <input type=text name='email' size=30></td></tr>
          <tr><td>No.Telp/HP/</td>   <td> : <input type=text name='no_telp' size=20></td></tr>";
    
	if ($_SESSION[leveluser]=='admin'){
    echo "<tr><td>Status</td> <td> : <input type=radio name='level' value='admin'> admin
									<input type=radio name='level' value='karyawan' checked>karyawan</td></tr>";
	}
	echo"<tr><td colspan=2><input type=submit value=Simpan class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
    
  case "edituser":
	$usr=base64_decode($_GET[usr]);
	$edit=mysql_query("SELECT * FROM admin WHERE username='$usr' AND id_session='$_GET[sid]'");
    $r=mysql_fetch_array($edit);
	$usre=base64_encode($r[username]);

    echo "<div id=greyboxsmall><span class=judul_page>Edit User</span></div>
          <form method=POST action='$aksi?module=user&act=update&usr=$usre&id=$r[id_session]'>
          <input type=hidden name=id value='$r[username]'>
          <table class=tableform>
          <tr><td>Username</td>     <td> : <input type=text name='username' value='$r[username]' disabled> **)</td></tr>
          <tr><td>Password</td>     <td> : <input type=text name='password'> *) </td></tr>
          <tr><td>Nama Lengkap</td> <td> : <input type=text name='nama_lengkap' size=30  value='$r[nama_lengkap]'></td></tr>
          <tr><td>E-mail</td>       <td> : <input type=text name='email' size=30 value='$r[email]'></td></tr>
          <tr><td>No.Telp/HP</td>   <td> : <input type=text name='no_telp' size=30 value='$r[no_telp]'></td></tr>";
	
	if ($_SESSION[leveluser]=='admin'){
		if ($r[level]=='admin'){
			echo "<tr><td>Status</td> <td> : <input type=radio name='level' value='admin' checked> admin
											<input type=radio name='level' value='karyawan' >karyawan</td></tr>";
		}
		else{
			echo "<tr><td>Status</td> <td> : <input type=radio name='level' value='admin'> admin
											<input type=radio name='level' value='karyawan' checked>karyawan</td></tr>";
		}									
		
	  if ($r[blokir]=='N'){
      echo "<tr><td>Blokir</td>     <td> : <input type=radio name='blokir' value='Y'> Y   
                                           <input type=radio name='blokir' value='N' checked> N </td></tr>";
      }
      else{
      echo "<tr><td>Blokir</td>     <td> : <input type=radio name='blokir' value='Y' checked> Y  
                                           <input type=radio name='blokir' value='N'> N </td></tr>";
      }
    }
	else{
		echo"<input type=hidden name='blokir' value='N'>";
	}
    echo "<tr><td colspan=2>*) Apabila password tidak diubah, dikosongkan saja.<br />
                            **) Username tidak bisa diubah.</td></tr>
          <tr><td colspan=2><input type=submit value=Update class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
    break;  
}
}
?>
