<div id="content-container">


<form class="form-horizontal form-register box box-white box-shadow mb-30" action="cek_feedback.php" method="post" name="form" onSubmit="return check()">


	<table width="70%" border="1">
	  <tr>
	    <td colspan="2">	<div class="text-center"><h3 class="mb-0">Kritik dan Saran</h3>
		<small class="small-gray">Silakan isi kritik dan saran dengan mengisi form di bawah ini.<</small>
	</div>
</td>
      </tr>
	  <tr>
	    <td>		<label class="control-label">Nama</label>
</td>
	    <td>
        				<input id="nama" name="nama" class="input-login" type="text">
			
</td>
      </tr>
	  <tr>
	    <td><label class="control-label">Email</label></td>
	    <td>			
				<input id="email" name="email" class="input-login" type="text">
</td>
      </tr>
	  <tr>
	    <td><label class="control-label">Subjek</label></td>
	    <td><input id="subjek" name="subjek" class="input-login" type="text">
</td>
      </tr>
	  <tr>
	    <td><label class="control-label">Pesan</label></td>
	    <td><textarea name="pesan" id="pesan"></textarea>
</td>
      </tr>
                          <tr>
    <td>&nbsp;</td>
        <td>&nbsp;   </td>

  </tr>

                    <tr>
    <td>&nbsp;<img src='captcha/captcha.php'/></td>
        <td>&nbsp;<input name="kode" id="kode" maxlength="20" alt="kode" class="inputbox" size="30" onBlur= "if(this.value=='') this.value='Kode';" onFocus="if(this.value=='kode') this.value='';" type="text" class=submitstyle>
        <br/>
        </td>

  </tr>
                            <tr>
    <td>&nbsp;</td>
        <td>&nbsp;   </td>

  </tr>

	  <tr>
	    <td><button type="submit" name="submit" class="btn btn-block btn-action">Kirim</button></td>
      </tr>
                          <tr>
    <td>&nbsp;</td>
        <td>&nbsp;   </td>

  </tr>

	  <tr>
      	    <td><button type="reset" name="reset" class="btn btn-block btn-action">Reset</button></td>
      </tr>
    </table>

</form>

</div>

