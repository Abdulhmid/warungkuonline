<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_lapak_keterangan.php" method="post" name="form" onSubmit="return check()">

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
echo "			<input name=id_produk value=$d[id_produk] type=hidden>Laku</label>

	<div class='text-center'><h3 class='mb-0'>$d[nama_produk]</h3>
		<small class='small-gray'>Silakan isi informasi dengan lengkap dan jelas.</small>
	</div>
	<hr>

    <div class='row-fluid control-group mb-20'>
		<label class='control-label'>Jual / Cari</label>
        <div class='controls'>
			<label class='radio inline mr-20'>
				<input name=juri value=jual type=radio>Jual</label>
			<label class='radio inline'>
			<input name=juri value=cari type=radio>Cari</label>
						<label class='radio inline'>
			<input name=juri value=laku type=radio>Laku</label>
		</div>
	</div>";
	}
	}
	?>
	    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="submit" name="submit" class="btn btn-block btn-action">Update</button>
        </div>
	</div>
        <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="reset" name="reset" class="btn btn-block btn-action">Reset</button>
        </div>
	</div>

</form>
