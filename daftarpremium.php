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
	$edit=mysql_query("SELECT * FROM member,kota WHERE username='$_SESSION[username]'");
    $r=mysql_fetch_array($edit);

echo "<form class=form-horizontal form-register box box-white box-shadow mb-30 action=proses_daftarpremium.php method=post name=form onSubmit=return check()>
	<div class=text-center><h3 class=mb-0>Detail Akun</h3>
		<small class=small-gray>Silakan pilih periodenya.</small>
	</div>
	<input type=hidden name=id value=$r[id_member]>

	<hr>
    <div class=row-fluid control-group>
		<label class=control-label>Username</label>
    		<div class=controls>
		$r[username]
			</div>
    </div>

	<hr>
    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Pilih Paket</label>
        <div class=controls>
<select name=periode id=periode>
  <option value=30>1 Bulan</option>
  <option value=180>6 Bulan</option>
  <option value=365>1 Tahun</option>
</select>		</div>
	</div>
	<table>
  <tr>
    <td>1 Bulan </td>
    <td>&nbsp;</td>
    <td>25 Ribu</td>
  </tr>
  <tr>
    <td>6 Bulan </td>
    <td>&nbsp;</td>
    <td>150 Ribu</td>
  <tr>
    <td>1 Tahun </td>
    <td>&nbsp;</td>
    <td>300 Ribu</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>

    <hr>
    <div class=row-fluid mb-20>
    	<div class=span6 offset3>
		<button type=submit name=submit class=btn btn-block btn-action>Daftar</button>
        </div>
	</div>
        <hr>
    <div class=row-fluid mb-20>
    	<div class=span6 offset3>
		<button type=reset name=reset class=btn btn-block btn-action>Reset</button>
        </div>
	</div>

</form>";
?>


<div class="small-gray"><small><em>Dengan menekan tombol “<strong>Daftar</strong>”, Anda memahami dan bersedia mengikuti peraturan yang tertulis di <a href="syarat">Syarat &amp; Ketentuan</a>.</em></small></div></div></section></div>