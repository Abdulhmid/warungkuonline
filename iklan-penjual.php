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
		<h3 class="mb-0"><img src="images/User.png" width="48" height="48"  alt=""/>Profil Penjual</h3>
	</div>
	<hr>
<?
						$sql = mysql_query("SELECT * FROM produk, member WHERE produk.`id_member`=member.`id_member` AND member.id_member='$_GET[id]'");				 
						$c=mysql_fetch_array($sql);
						
echo "	
					<input name=id_member type=hidden value=$c[id_member]>
					<input name=id_produk type=hidden value=$c[id_produk]>

		<div class='row-fluid control-group'>
    	<label class='control-label'>Penjual</label>
			<div class=controls>
				$c[id_member]
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
    <hr>

</form>

<div class="small-gray"><small><em>Dengan menekan tombol “<strong>Daftar</strong>”, Anda memahami dan bersedia mengikuti peraturan yang tertulis di <a href="syarat">Syarat &amp; Ketentuan</a>.</em></small></div></div></section></div>