<?php

$aksi="modul/mod_page/aksi_page.php";
switch($_GET[act]){
  // Tampil Page
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall><span class=judul_page>Page Link</span></div>
          <input type=button value='Tambah Page' 
          onclick=\"window.location.href='?module=page&act=tambahpage';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>urutan</th><th>Nama Page</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM page_link ORDER BY urutan");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	   if ($no % 2 == 0){
		$warna = $warnaGenap;}
	   else{
		$warna = $warnaGanjil;}
		
       echo "<tr bgcolor='$warna'><td align=center>$r[urutan]</td>
             <td>$r[caption_link]</td>
             <td><a href=?module=page&act=editpage&id=$r[id_page_link]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=page&act=hapus&id=$r[id_page_link]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah page
  case "tambahpage":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah Page</span></div>
          <form method=POST action='$aksi?module=page&act=input'>
          <table class=tableform>
          <tr><td>Nama Page</td><td> : <input type=text name='nama'></td></tr>
		  <tr><td>Link</td><td> : <input type=text name='link'></td></tr>
		  <tr><td>Urutan Page</td><td> : <input type=text name='urutan'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value=Simpan class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit Kategori  
  case "editpage":
	$edit=mysql_query("SELECT * FROM page_link WHERE id_page_link = '$_GET[id]'");
    $r=mysql_fetch_array($edit);
	echo "<div id=greyboxsmall><span class=judul_page>Edit Page</span></div>
          <form method=POST action=$aksi?module=page&act=update>
          <input type=hidden name=id value='$r[id_page_link]'>
          <table class=tableform>
          <tr><td>Nama Page</td><td> : <input type=text name='nama' value='$r[caption_link]'></td></tr>
		  <tr><td>Link</td><td> : <input type=text name='link' value='$r[link]'></td></tr>
		  <tr><td>Urutan Page</td><td> : <input type=text name='urutan' value='$r[urutan]'></td></tr>
          <tr><td colspan=2><input type=submit value=Update class=btnbluestyle>
                            <input type=button value=Batal onclick='self.history.back()' class=btnbluestyle></td></tr>
          </table></form>";
    break;  
}
?>
