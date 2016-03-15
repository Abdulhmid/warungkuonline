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
    if(isEmpty(document.form.username.value)) {
    alert('Harap isi Username');
    document.form.username.focus();
    return false;
  }
  if(isEmpty(document.form.kode.value)) {
    alert('capthca belum diisi !');
    document.form.email.focus();
    return false;
  }
    if (form.password.value != form.password2.value){
    alert("Pengulangan Password Tidak Sama");
    form.password.focus();
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

<?
	include "config/koneksi.php";

echo"
<form class=form-horizontal form-register box box-white box-shadow mb-30 action=proses_konfirmasi.php method=post name=form onSubmit=return check()>
	<input type=hidden name=id value=$r[id_member]>

	<div class=text-center><h3 class=mb-0>Konfirmasi</h3>
		<small class=small-gray>Silakan isi dengan lengkap dan jelas.</small><br/>
		<small class=small-gray>Pembayaran ke norek BCA 17947O9849 a/n CV TOKO ONLINE .</small><br/>
		<small class=small-gray>Pertanyaan hubungi (0711)844441.</small><br/>
	</div>
	<hr>
    <div class=row-fluid control-group>
		<label class=control-label>Atas Nama</label>
    		<div class=controls>
		<input autofocus id=nama name=nama class=input-login span12 maxlength=35 type=text>
			</div>
    </div>
		<hr>

    <div class=row-fluid control-group>
		<label class=control-label>Bank</label>
        <div class=controls>";

			echo "<select name=bank id=bank>
				  <option value='' selected>- Pilih Bank-</option>";
				  $tampil=mysql_query("SELECT * FROM bank ORDER BY nama_bank");
				  while($r=mysql_fetch_array($tampil)){
					 echo "<option value=$r[id_bank]>$r[nama_bank]</option>";
				  }
	echo"</select></td></tr>";

        echo"</div>
	</div>
	    	<div class=row-fluid control-group>
		<label class=control-label>No. Rekening</label>
        	<div class=controls>
				<input id=norekening name=norekening class=input-login span12 type=text>
        	</div>
	</div>

    	<div class=row-fluid control-group>
		<label class=control-label>Nominal</label>
        	<div class=controls>
				<input id=nominal name=nominal class=input-login span12 type=text>
        	</div>
	</div>

	<hr>
    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Tanggal Pembayaran</label>
			<div class=controls>
				<input id=datepicker-example1 name=tanggal class=input-login span12 type=text>				
		</div>
	</div>
	    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Keterangan</label>
		<div class=controls>
				<input id=referal name=referal class=input-login span12 type=text>
		</div>
	</div>
    <hr>
    <div class=row-fluid mb-20>
    	<div class=span6 offset3>
		<button type=submit name=submit class=btn btn-block btn-action>Submit</button>
				<button type=reset name=reset class=btn btn-block btn-action>Reset</button>

        </div>
	</div>

</form>";
?>
<div class="small-gray"><small><em>Dengan menekan tombol “<strong>Daftar</strong>”, Anda memahami dan bersedia mengikuti peraturan yang tertulis di <a href="syarat">Syarat &amp; Ketentuan</a>.</em></small></div></div></section></div>