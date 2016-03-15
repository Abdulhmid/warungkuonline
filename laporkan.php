<?
include "config/authentication_member.php";
?>

<script type="text/javascript">
<!--
function isEmpty(inString) {
  var Empty = true;
  for (var i=0;i<inString.length;i++) {
    if ((inString.charAt(i) != ' ') &&
        (inString.charAt(i) != '\t') &&
        (inString.charAt(i) != '\r') &&
        (inString.charAt(i) != '\n')) {
      Empty = false;
    }
  }
  return Empty;
}

function check() {
  if(isEmpty(document.form.nama.value))  {
    alert('Nama belum diisi !');
    document.form.nama.focus();
    return false;
  }
if(isEmpty(document.form.email.value)) {
    alert('Email belum diisi !');
    document.form.email.focus();
    return false;
  }
  if(isEmpty(document.form.nomor_telphone.value)) {
    alert('Harap isi Nomor Telphone !');
    document.form.nomor_telphone.focus();
    return false;
  }
    if(isEmpty(document.form.keterangan.value)) {
    alert('Harap isi Keterangan');
    document.form.keterangan.focus();
    return false;
  }
  if(isEmpty(document.form.kode.value)) {
    alert('capthca belum diisi !');
    document.form.email.focus();
    return false;
  }
  return true;
}
//-->
</script>


<div id="content-container">
<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
<div class="row-fluid"></div></div><section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_laporan.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center">
		<h3 class="mb-0">Testimonial Pembeli</h3>
	</div>
	<hr>
<?
						$sql = mysql_query("SELECT * FROM produk, member WHERE produk.`username`=member.`username` AND produk.id_produk='$_GET[id]'");				 
						$c=mysql_fetch_array($sql);
						
echo "	
					<input name=username type=hidden value=$c[username]>
					<input name=id_produk type=hidden value=$c[id_produk]>

		<div class='row-fluid control-group'>
    	<label class='control-label'>Penjual</label>
			<div class=controls>
				$c[username]
    		</div>
	</div>
		        <div class='row-fluid control-group'>
    		<label class='control-label'>Iklan</label>
				<div class=controls>
					$c[nama_produk] Harga $c[harga] Dengan Kondisi $c[kondisi]
    			</div>
		</div>

    	<div class='row-fluid control-group'>
    		<label class='control-label'>Nama Pelapor</label>
				<div class=controls>
					<input id=nama name=nama class=input-login span12 type=text>
    			</div>
		</div>

        <div class='row-fluid control-group'>
    		<label class='control-label'>Email Pelapor</label>
				<div class=controls>
					<input id=email name=email class=input-login span12 type=text>
    			</div>
		</div>

    	<div class='row-fluid control-group'>
    	<label class='control-label'>Keterangan</label>
			<div class=controls>
              <textarea name=keterangan id=keterangan></textarea>
			</div>
	</div>
";
?>
<div class='row-fluid control-group'>
    		<label class='control-label'>Pelayanan</label>
				<div class=controls>
					<input type="radio" name="puas" id="puas" value="Puas">Puas</br></br>
<input type="radio" name="puas" id="puas" value="Tidak Puas">Tidak Puas
    			</div>
		</div>
        

    <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="submit" name="submit" class="btn btn-block btn-action">Kirim</button>
        </div>
	</div>
        <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="reset" name="reset" class="btn btn-block btn-action">Reset</button>
        </div>
	</div>

</form>

<div class="small-gray"><small><em>Dengan menekan tombol “<strong>Daftar</strong>”, Anda memahami dan bersedia mengikuti peraturan yang tertulis di <a href="syarat">Syarat &amp; Ketentuan</a>.</em></small></div></div></section></div>