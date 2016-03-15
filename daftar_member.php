<div id="content-container">
<section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_daftar.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center"><h3 class="mb-0">Daftar</h3>
		<small class="small-gray">Silakan isi informasi mengenai diri Anda di bawah ini.</small>
	</div>
	<hr>
    <div class="row-fluid control-group">
		<label class="control-label">Nama Lengkap</label>
    		<div class="controls">
		<input autofocus id="nama" name="nama" class="input-login span12" maxlength="35" type="text">
			</div>
    </div>
    <div class="row-fluid control-group">
		<label class="control-label">Nomor HP</label>
        <div class="controls">
        <input id="nomor_telphone" name="nomor_telphone" class="input-login span12" maxlength="20" type="text">
        </div>
	</div>
    	<div class="row-fluid control-group">
		<label class="control-label">PIN BBM</label>
        	<div class="controls">
				<input id="bbm" name="bbm" class="input-login span12" type="text">
        	</div>
	</div>

	<hr>
    <div class="row-fluid control-group mb-20 ">
		<label class="control-label">Jenis Kelamin</label>
        <div class="controls">
			<label class="radio inline mr-20">
				<input name="jkel" id="laki-laki" value="laki-laki" type="radio">Pria</label>
			<label class="radio inline">
			<input name="jkel" id="perempuan" value="perempuan" type="radio">Wanita</label>
		</div>
	</div>
	<div class="row-fluid control-group">
		<label class="control-label">Alamat Email</label>
		<div class="controls">
				<input id="email" name="email" class="input-login span12" type="email">
		</div>
	</div>
	<div class="row-fluid control-group">
    	<label class="control-label">Username</label>
			<div class="controls">
				<input id="username" name="username" class="input-login span12" type="text">
    		</div>
	</div>
    	<div class="row-fluid control-group">
    	<label class="control-label">Kata Sandi</label>
			<div class="controls">
				<input id="password" name="password" class="input-login span12" type="password">
    		</div>
	</div>
	<div class="row-fluid control-group">
		<label class="control-label">Ulangi Kata Sandi</label>
        	<div class="controls">
				<input id="password2" name="password2" class="input-login span12" type="password">
        	</div>
	</div>
	<div class="row-fluid control-group">                    		<label class="control-label">Masukan Kode</label>

                	<div class="controls">

                    <img src='captcha/captcha.php'/>        

<input name="kode" id="kode" maxlength="20" alt="kode" class="inputbox" size="30" onBlur= "if(this.value=='') this.value='Kode';" onFocus="if(this.value=='kode') this.value='';" type="text" class=submitstyle></td>
        	</div>

    
    
    <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="submit" name="submit">Daftar</button>
        <a class="button" href="#" style="top: 226px; left: 173px;">View the CSS</a>
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