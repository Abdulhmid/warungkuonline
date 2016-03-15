<div id="content-container">
<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
<div class="row-fluid"></div></div><section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="cek_sold.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center">
		<h3 class="mb-0">
		<? 
		$sql=mysql_query("SELECT * FROM produk WHERE id_produk='$_GET[id]'");
$r=mysql_fetch_array($sql);

echo"$r[nama_produk]
<input type='hidden' value='$r[id_produk]' name='produk'>";

		
		?>
        </h3>
		<small class="small-gray">Isilah keterangan.</small>
	</div>
	<hr>
	<div class="row-fluid control-group">
    	<label class="control-label">Status</label>
			<div class="controls">
                <select name="keterangan" class="input-login span12">
                  <option value="SOLD">SOLD</option>
                  <option value="jual">JUAL</option>
                </select>
    		</div>
            
	</div>
    	
    <hr>
    <div class="row-fluid mb-20">
    	<div class="span6 offset3">
		<button type="submit" name="submit" class="btn btn-block btn-action">Ganti</button>
        </div>
	</div>
        <hr>
   
</form>
</div></section></div>