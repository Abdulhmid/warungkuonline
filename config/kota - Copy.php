<?php
require_once "koneksi.php";
$tampil=mysql_query("SELECT * FROM wilayah WHERE id_kota='$_GET[area]' ORDER BY wilayah");
$jml=mysql_num_rows($tampil);
if($jml > 0){
    echo"<select name='wilayah'>
     <option value='0' selected>- Pilih wilayah-</option>";
     while($r=mysql_fetch_array($tampil)){
         echo "<option value=$r[id_wilayah]>$r[wilayah]</option>";
     }
     echo "</select>";
}else{
    echo "<select name='wilayah'>
     <option value=0 selected>- Data Wilayah Tidak Ada, Pilih Yang Lain -</option>
     </select>";
}

?>