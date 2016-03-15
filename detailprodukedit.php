<form class="form-horizontal form-register box box-white box-shadow mb-30" action="edit_lapak.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center"><h3 class="mb-0">Iklan Anda</h3>
		<small class="small-gray">Silakan isi informasi dengan lengkap dan jelas.</small>
	</div>
	<hr>

<?php
include"config/authentication_member.php";
?>
<?
	$detail=mysql_query("SELECT * FROM produk,kategori, member, kota WHERE kategori.id_kategori=produk.id_kategori 
	AND produk.id_member=member.id_member AND produk.id_kota=kota.id_kota
	AND produk.id_produk='$_GET[id]'");
	$tgl = tgl_indo($d["tanggal"]);
    $harga     = number_format($d["harga"],0,",",".");
	$jumlah = mysql_num_rows($detail);
	if ($jumlah > 0){
	while($d   = mysql_fetch_array($detail)){
echo "
			<input name=id value=$d[id_produk] type=hidden>

    <div class='row-fluid control-group mb-20'>
		<label class='control-label'>Jual / Cari</label>
        <div class='controls'>
			<label class='radio inline mr-20'>
				<input name=juri value=jual type=radio>Jual</label>
			<label class='radio inline'>
			<input name=juri value=cari type=radio>Cari</label>
		</div>
	</div>
    <div class='row-fluid control-group mb-20'>
		<label class='control-label'>Kondisi</label>
        <div class='controls'>
			<label class='radio inline mr-20'>
				<input name=kondisi id=kondisi value=baru type=radio>Baru</label>
			<label class='radio inline'>
			<input name=kondisi id=kondisi value=bekas type=radio>Bekas</label>
		</div>
	</div>
	<hr>
	<div class='row-fluid control-group'>
    	<label class='control-label'>Lokasi</label>
			<div class='controls'>";
            ?>
            <? echo"
<select name='kota' id='kota' class='kota'>";
echo "<option value=''>Pilih Kota</option>";

            $tampil_kota=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
            while($kota=mysql_fetch_array($tampil_kota)){
              echo "
			  <option class='ml-10' value=$kota[id_kota]>$kota[nama_kota]</option>";
            }
    echo "</select>";
	?>
			</div>
	</div>
    	<div class=row-fluid control-group>
    	<label class=control-label>Kategori</label>
			<div class=controls>
            <? echo"
<select name='kategori' id='kategori' class='kategori'>";
echo "<option value=''>Pilih kategori</option>";

            $tampil_kategori=mysql_query("SELECT * FROM kategori ORDER BY nama_kategori");
            while($kategori=mysql_fetch_array($tampil_kategori)){
              echo "
			  <option class='ml-10' value=$kategori[id_kategori]>$kategori[nama_kategori]</option>";
            }
    echo "</select>";
	?>
    		<?
            echo "</div>
	</div>
    
    	<div class='row-fluid control-group'>
    	<label class='control-label'>Judul</label>
			<div class='controls'>
				<input id=judul name=judul class=input-login span12 type=text value='$d[nama_produk]'>
    		</div>
	</div>


	<div class='row-fluid control-group'>
    	<label class='control-label'>Harga</label>
			<div class='controls'>
				<input id=harga name=harga class=input-login span12 type=text value=$d[harga]>
    		</div>
	</div>
    	    <label class='control-label'>Deskripsi</label>
		    <textarea name=deskripsi id=deskripsi value='$d[deskripsi]' style=width: 100%; height: 50px;></textarea>
    <hr>";
		}
	}
?>

    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="submit" name="submit" class="btn btn-block btn-action">Iklankan</button>
        </div>
	</div>
        <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="reset" name="reset" class="btn btn-block btn-action">Reset</button>
        </div>
	</div>

</form>

