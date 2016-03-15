<?
include"config/authentication_member.php";
?>

<h2>Iklan Barang</h2> 
<form action="proses_lapak.php" method="post" enctype="multipart/form-data" name="FUpload" id="FUpload">   
<table style="margin-left:20px">
  <tr>
    <td width="96">Judul Iklan</td>
    <td width="10">:</td>
    <td width="60%"><input name="judul_iklan" type="text" id="judul_iklan" size="30" /></td>
  </tr>
  
  <?
    
  $ada=mysql_fetch_array(mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]' and blokir='Tidak'"));

  if($ada['premium']=='TIDAK')
  {
	  echo"<tr>
    <td>File Gambar </td>
    <td>:</td>
    <td><input type=file name=fupload id=fupload></td>
  </tr>";
  }
  else
  {
	  echo"
	<tr>
    <td>File Gambar 1</td>
    <td>:</td>
    <td><input type=file name=fupload id=fupload></td>
    </tr>
	
	<tr>
    <td>File Gambar 2</td>
    <td>:</td>
    <td><input type=file name=fupload2 id=fupload2></td>
    </tr>
	
	<tr>
    <td>File Gambar 3</td>
    <td>:</td>
    <td><input type=file name=fupload3 id=fupload3></td>
    </tr>
	
	<tr>
    <td>File Gambar 4</td>
    <td>:</td>
    <td><input type=file name=fupload4 id=fupload4></td>
    </tr>
	
	";
  }
  ?>
  <tr>
    <td>Kondisi</td>
    <td>:</td>
    <td>
			
			</label>
			<table width="200" border="1">
			  <tbody>
			    <tr>
			      <td><input name="kondisi" id="kondisi" value="baru" type="radio">Baru</label>
			<label class="radio inline"></td>
			      <td><input name="kondisi" id="kondisi" value="bekas" type="radio">Bekas<br>
			<br></td>
		        </tr>
		      </tbody>
	  </table></td>
  </tr>
  <tr>
    <td>Keterangan</td>
    <td>:</td>
    <td>		
			<table width="200" border="1">
			  <tbody>
			    <tr>
			      <td><label class="radio inline mr-20">
				<input name="juri" value="jual" type="radio">Jual</label></td>
			      <td><label class="radio inline">
			<input name="juri" value="cari" type="radio">Cari<br>
			</label></td>
		        </tr>
		      </tbody>
	  </table>
			<label class="radio inline">			  </label></td>
  </tr>
  <tr>
    <td>Harga</td>
    <td>:</td>
    <td><input id="harga" name="harga" type="text"></td>
  </tr>
   <tr>
    <td>Kategori</td>
    <td>:</td>
    <td><? echo"
<select name='kategori' id='kategori' class='kategori'>";
echo "<option value=''>Pilih kategori</option>";

            $tampil_kategori=mysql_query("SELECT * FROM kategori ORDER BY nama_kategori");
            while($kategori=mysql_fetch_array($tampil_kategori)){
              echo "
			  <option class='ml-10' value=$kategori[id_kategori]>$kategori[nama_kategori]</option>";
            }
    echo "</select>";
	?></td>
  </tr>
  
  <tr>
    <td>Lokasi</td>
    <td>:</td>
    <td><select name='kota' id='text-one' class='kota'>	
	<? 
			echo "<option value='base'>Pilih Kota</option>";
            $tampil_kota=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
            while($kota=mysql_fetch_array($tampil_kota)){
              echo "
			  <option value=$kota[nama_kota]>$kota[nama_kota]</option>";
            }
    echo "</select>";
	?></td>
  </tr>
       
      <tr>
      <td>Wilayah</td>
      <td>:</td>
    <td>  
	  <select id='text-two' name="wilayah">
			<option>Please choose from above</option>
		</select>	  
	  </span>
      </td></tr>
  <tr>
    <td>Deskripsi </td>
    <td>:</td>
    <td><textarea name="deskripsi"></textarea></td>
  </tr>
  <tr>
    <td><input type="submit" name="btnSimpan" class="btn btn-block btn-action" value="Submit" style="width:100%"/></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
    <tr>
    <td><button type="reset" name="reset" class="btn btn-block btn-action">Reset</button></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>


