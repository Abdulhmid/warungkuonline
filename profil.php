<div id="content-container">
<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
<div class="row-fluid"></div></div><section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_daftar.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center"><h3 class="mb-0">Profil User</h3>
	</div>
	<hr>
    
    <?
    $edit=mysql_query("SELECT member.*, ADDDATE(tanggal, periode) AS lama FROM member WHERE username='$_SESSION[username]'");
    $r=mysql_fetch_array($edit);
	if ($r[periode] == '' AND $r[premium] == 'TIDAK'){
					$harga = format_rupiah($d['harga']);

	echo "<div class=row-fluid control-group>
		<label class=control-label>Nama Lengkap</label>
    		<div class=controls>
			$r[nama]
			</div>
    </div>
    <div class=row-fluid control-group>
		<label class=control-label>Nomor HP</label>
        <div class=controls>
        $r[telp]
        </div>
	</div>
	    <div class=row-fluid control-group>
		<label class=control-label>PIN BBM</label>
        <div class=controls>
        $r[bbm]
        </div>
	</div>
	<hr>
    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Jenis Kelamin</label>
        <div class=controls>$r[jkel]</div>
	</div>
	<div class=row-fluid control-group>
		<label class=control-label>Alamat Email</label>
		<div class=controls>
		$r[email]
		</div>
	</div>
	<div class=row-fluid control-group>
    	<label class=control-label>Username</label>
			<div class=controls>
				$r[username]
    		</div>
			<div class=text-center><a href=premium_member>&nbsp;<b>Minat menjadi premium member? </b>&nbsp;</a></div>
	</div>
    <hr>
    <div class=row-fluid control-group>
    	<div class=span6 offset3>";
          
		 
		  	$detail=mysql_query("SELECT * FROM produk,kategori, member WHERE kategori.id_kategori=produk.id_kategori 
	AND produk.username=member.username 
	AND member.username='$_SESSION[username]'");
	$tgl = tgl_indo($d["tanggal"]);
	$jumlah = mysql_num_rows($detail);
	if ($jumlah > 0){
	while($d   = mysql_fetch_array($detail)){
					$harga = format_rupiah($d['harga']);
	echo "			    		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$d[id_produk]-$d[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src='$d[gambar]' Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$d[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div class=span7>
                            					<span itemprop=price class=price>Rp. $d[harga]</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div class=span5 text-right ellipsis>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$d[nama_kota]>
                            					<i class=icon-pin-alt></i>$d[nama_kota]
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>

							</form>
";
	}

			
	}
			}



	  elseif($r[periode] != '' AND $r[premium] == 'TIDAK'){
	echo "<div class=row-fluid control-group>
		<label class=control-label>Nama Lengkap</label>
    		<div class=controls>
			$r[nama]
			</div>
    </div>
    <div class=row-fluid control-group>
		<label class=control-label>Nomor HP</label>
        <div class=controls>
        $r[telp]
        </div>
	</div>
	    <div class=row-fluid control-group>
		<label class=control-label>PIN BBM</label>
        <div class=controls>
        $r[bbm]
        </div>
	</div>
	<hr>
    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Jenis Kelamin</label>
        <div class=controls>$r[jkel]</div>
	</div>
	<div class=row-fluid control-group>
		<label class=control-label>Alamat Email</label>
		<div class=controls>
		$r[email]
		</div>
	</div>
	<div class=row-fluid control-group>
    	<label class=control-label>Username</label>
			<div class=controls>
				$r[username]
    		</div>
						<div class=text-center><a href=konfirmasi>&nbsp;<b>Konfirmasi Pembayaran </b>&nbsp;</a></div>

	</div>
    <hr>
    <div class=row-fluid control-group>
    	<div class=span6 offset3>";
          
		  	$detail=mysql_query("SELECT * FROM produk,kategori, member WHERE kategori.id_kategori=produk.id_kategori 
	AND produk.username=member.username 
	AND member.username='$_SESSION[username]'");
	$tgl = tgl_indo($d["tanggal"]);
	$jumlah = mysql_num_rows($detail);
	if ($jumlah > 0){
	while($d   = mysql_fetch_array($detail)){
					$harga = format_rupiah($d['harga']);
	echo "

		                 		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$d[id_produk]-$d[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src='$d[gambar]' alt=Cat Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$d[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div class=span7>
                            					<span itemprop=price class=price>Rp. $harga</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div class=span5 text-right ellipsis>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$d[nama_kota]>
                            					<i class=icon-pin-alt></i>$d[nama_kota]
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>
																</div>

</form>

";
	}

	}
	  }


	
	  else{
	echo "<div class=row-fluid control-group>
		<label class=control-label>Nama Lengkap</label>
    		<div class=controls>
			$r[nama]
			</div>
    </div>
    <div class=row-fluid control-group>
		<label class=control-label>Nomor HP</label>
        <div class=controls>
        $r[telp]
        </div>
	</div>
	    <div class=row-fluid control-group>
		<label class=control-label>PIN BBM</label>
        <div class=controls>
        $r[bbm]
        </div>
	</div>
	<hr>
    <div class=row-fluid control-group mb-20 >
		<label class=control-label>Jenis Kelamin</label>
        <div class=controls>$r[jkel]</div>
	</div>
	<div class=row-fluid control-group>
		<label class=control-label>Alamat Email</label>
		<div class=controls>
		$r[email]
		</div>
	</div>
	<div class=row-fluid control-group>
    	<label class=control-label>Username</label>
			<div class=controls>
				$r[username]
    		</div>
	</div>
		<div class=row-fluid control-group>
    	<label class=control-label>Aktif Hingga</label>
			<div class=controls>
				$r[lama]
    		</div>
	</div>

    <hr>
    <div class=row-fluid control-group>
    	<div class=span6 offset3>";
          
		  	$detail=mysql_query("SELECT * FROM produk,kategori, member WHERE kategori.id_kategori=produk.id_kategori 
	AND produk.username=member.username AND member.username='$_SESSION[username]'");
	$tgl = tgl_indo($d["tanggal"]);
    $harga     = number_format($d["harga"],0,",",".");
	$jumlah = mysql_num_rows($detail);
	if ($jumlah > 0){
	while($d   = mysql_fetch_array($detail)){
							$harga = format_rupiah($d['harga']);

	echo "

		                 		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$d[id_produk]-$d[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src='$d[gambar]' alt=Cat Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$d[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div class=span7>
                            					<span itemprop=price class=price>Rp. $harga</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div class=span5 text-right ellipsis>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$d[nama_kota]>
                            					<i class=icon-pin-alt></i>$d[nama_kota]
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>
</form>

";
	}
	}
	  }
	  ?>
									</div>
						</div>						</div>
						</div>
									</div>
						</div>						</div>
						</div>
