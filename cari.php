<div id="content-container" >
	<div class="container" itemscope itemtype="http://schema.org/WebPage">
		<div class="row-fluid">
			<div id="breadcrumb-container" class="view-search-bread span12">
				<ul class="search-cat-box breadcrumb sf-menu"  itemprop="breadcrumb">
					<li><a href="store">Beranda </a></li>
					<li><span class="breadcrumb-divider"><i class="icon-chevron-right-alt muted"></i></span></li>
					<li class="active"><h2>Semua Kategori</h2></li>
				</ul>
			</div>
		</div>
	</div>
    <div class="container">
		<div class="row-fluid">
			<div class="span12 main-content">
				<div id="content-directory">
					<div class="grid-shop-product" itemscope itemtype="http://schema.org/ItemList">
               			<? 
							$kata = trim($_POST['kata']);
							$kota = trim($_POST['kota']);
							// mencegah XSS
							$kata = htmlentities(htmlspecialchars($kata), ENT_QUOTES);
							// pisahkan kata per kalimat lalu hitung jumlah kata
							$pisah_kata = explode(" ",$kata);
							$jml_katakan = (integer)count($pisah_kata);
							$jml_kata = $jml_katakan-1;
							if ($_POST['kota']==''){
							$cari = "SELECT * FROM produk, member WHERE nama_produk LIKE '%$kata%' AND member.username=produk.username GROUP BY produk.`nama_produk` DESC LIMIT 20";	
  							$hasil  = mysql_query($cari);
  							$ketemu = mysql_num_rows($hasil);
							}
							else 
							{ 
							$kata = trim($_POST['kata']);
							$kota = trim($_POST['kota']);
							// mencegah XSS
							$kata = htmlentities(htmlspecialchars($kata), ENT_QUOTES);
							// pisahkan kata per kalimat lalu hitung jumlah kata
							$pisah_kata = explode(" ",$kata);
							$jml_katakan = (integer)count($pisah_kata);
							$jml_kata = $jml_katakan-1;
							
							$cari = "SELECT * FROM produk, member WHERE produk.nama_kota='$kota' AND nama_produk LIKE '%$kata%' AND member.username=produk.username GROUP BY produk.`nama_produk` DESC LIMIT 20";	
  							$hasil  = mysql_query($cari);
  							$ketemu = mysql_num_rows($hasil);
							}

						if ($ketemu > 0){
						while($c=mysql_fetch_array($hasil)){
										$harga = format_rupiah($c['harga']);

			   			echo"
                		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$c[id_produk]-$c[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src='$c[gambar]' Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$c[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div>
                            					<span itemprop=price class=price>Rp. $harga</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$c[nama_kota]>
                            					<i class=icon-pin-alt></i>$c[nama_kota]";
												
												if($c['premium']=='YA')
												{
													echo"<img src='img/gold_icon.png' width='28' alt=''/>";
												}
												else{
													}
													echo"
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>
						</div>";
						}

  echo "
<div class=row-fluid clear-b>
<div class=span7>
</div>
</div><hr class=mt-0 mb-5 clear-b/></div></div></div></div></div><div class=container>
</div></div>";
  }
  else{
	echo"<script>alert('Belum ada produk dalam kategori ini')</script>";
	echo"<script>document.location.href='store';</script>";
  }
                                ?>
                                
                                

