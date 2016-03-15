<?php

  $aksi="modul/mod_member/aksi_member.php";
switch($_GET[act]){
  // Tampil User
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    if ($_SESSION[leveluser]=='admin'){
      $tampil = mysql_query("SELECT * FROM member ORDER BY username");
      echo "<div id=greyboxsmall><span class=judul_page>Daftar member</span></div>
          <input type=button value='Tambah member' onclick=\"window.location.href='?module=member&act=tambahuser';\" class=btnbluestyle><br><br>";
    }
    else{
      $tampil=mysql_query("SELECT * FROM member 
                           WHERE id_member='$_SESSION[namauser]'");
      echo "<div id=greyboxsmall><span class=judul_page>List member</span></div>";
    }
    
    echo "<table class=tablestyle>
           <tr><th>no</th><th>username</th><th>nama lengkap</th><th>email</th><th>No.Telp/HP</th><th>Blokir</th><th colspan=2>aksi</th></tr>"; 
    $no=1;
	while ($r=mysql_fetch_array($tampil)){
       $usr=base64_encode($r[id_member]);
	   if ($no % 2 == 0){
		$warna = $warnaGenap;}
	   else{
		$warna = $warnaGanjil;}
		
	   echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[username]</td>
             <td>$r[nama]</td>
		         <td><a href=mailto:$r[email]>$r[email]</a></td>
		         <td>$r[telp]</td>
		         <td align=center>$r[blokir]</td>
             <td><a href=?module=member&act=edituser&usr=$usr&sid=$r[id_session]><img src=images/edit.png border=0></a></td>
			 <td><a href=$aksi?module=member&act=delete&usr=$usr&sid=$r[id_session]><img src=images/delete.png border=0></a></td> </tr>";
	  $no++;
    }
    echo "</table>";
    break;
  
  case "tambahuser":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah member</span></div>
          <form method=POST action='$aksi?module=member&act=input'>
          <table class=tableform>
          <tr><td>Username</td>     <td> : <input type=text name='username'></td></tr>
          <tr><td>Password</td>     <td> : <input type=text name='password'></td></tr>
          <tr><td>Nama Lengkap</td> <td> : <input type=text name='nama_lengkap' size=30></td></tr> 
		  <tr><td>Alamat Lengkap</td> <td> : <input type=text name='alamat'></td></tr>  
		  <tr><td>Kecamatan</td> <td> : <input type=text name='kecamatan'></td></tr> 
          <tr><td>E-mail</td>       <td> : <input type=text name='email' size=30></td></tr>
          <tr><td>No.Telp/HP</td>   <td> : <input type=text name='no_telp' size=20></td></tr>";
    echo"<tr><td colspan=2><input type=submit value=Simpan class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
    
  case "edituser":
	$usr=base64_decode($_GET[usr]);
	$edit=mysql_query("SELECT * FROM member WHERE id_member='$usr' AND id_session='$_GET[sid]'");
    $r=mysql_fetch_array($edit);
	$usre=base64_encode($r[id_member]);
	
    echo "<div id=greyboxsmall><span class=judul_page>Edit User</span></div>
          <form method=POST action='$aksi?module=member&act=update&usr=$usre&id=$r[id_session]'>
          <input type=hidden name=id value='$r[id_member]'>
          <table class=tableform>
          <tr><td>Username</td>     <td> : <input type=text name='username' value='$r[id_member]' disabled> **)</td></tr>
          <tr><td>Password</td>     <td> : <input type=text name='password'> *) </td></tr>
          <tr><td>Nama Lengkap</td> <td> : <input type=text name='nama_lengkap' size=30  value='$r[nama_lengkap]'></td></tr>
		  <tr><td>Alamat Lengkap</td> <td> : <input type=text name='alamat' value='$r[alamat]'></td></tr>  
		  <tr><td>kota</font></td><td> :  
				  <select name='id_kota'>
				  <option value='' selected>- Pilih Kota Tujuan -</option>";
				  $tampil=mysql_query("SELECT * FROM kota ORDER BY id_kota");
				  while($r=mysql_fetch_array($tampil)){
					 echo "<option value=$r[id_kota]>$r[nama_kota]</option>";
				  }
	echo"	       </select>
	      <tr><td>Kode POS</td>     <td>: <input type=text name=kode_pos size=40%></td></tr>
          <tr><td>E-mail</td>       <td> : <input type=text name='email' size=30 value='$r[email]'></td></tr>
          <tr><td>No.Telp/HP</td>   <td> : <input type=text name='no_telp' size=30 value='$r[no_telp]'></td></tr>";
	
	if ($_SESSION[leveluser]=='admin'){
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

?>



