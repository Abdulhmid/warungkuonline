<div id="content-container" >
	<div class="container" itemscope itemtype="http://schema.org/WebPage">
		<div class="row-fluid">
			<div id="breadcrumb-container" class="view-search-bread span12">
				<ul class="search-cat-box breadcrumb sf-menu"  itemprop="breadcrumb">
					<li><a href="store">Beranda </a></li>
					<li><span class="breadcrumb-divider"><i class="icon-chevron-right-alt muted"></i></span></li>
					<li class="active"><h2>Semua Hot List</h2></li>
				</ul>
			</div>
		</div>
	</div>
    <div class="container">
    	<div class="row-fluid" id="filter-sorting-container">
		</div>
		<div class="row-fluid">
			<div class="span12 main-content">
				<div id="content-directory">
					<div class="grid-shop-product" itemscope itemtype="http://schema.org/ItemList">
               			<? 
			     		$p      = new Paging3;
  				 		$batas  = 20;
 				 		$posisi = $p->cariPosisi($batas);
						$sql = mysql_query("SELECT * FROM produk, kategori, member WHERE produk.`id_kategori`=kategori.`id_kategori` 
AND produk.`username`=member.`username` AND produk.hot='YA' ORDER BY id_produk DESC LIMIT $posisi,$batas");				 
						$jumlah = mysql_num_rows($sql);
						if ($jumlah > 0){
						while($c=mysql_fetch_array($sql)){
			   			echo"
                		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$c[id_produk]-$c[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src='$c[gambar]' alt=Cat Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$c[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div>
                            					<span itemprop=price class=price>Rp. $c[harga]</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$c[nama_kota]>
                            					<i class=icon-pin-alt></i>$c[nama_kota]
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>
						</div>";
						}

  $jmldata     = mysql_num_rows(mysql_query("SELECT * FROM produk"));
  $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
  $linkHalaman = $p->navHalaman($_GET["halkategori"], $jmlhalaman);

  echo "
<div class=row-fluid clear-b>
<div class=span7>
<div class=pagination pull-right>
<ul>
<li class=active>Halaman : $linkHalaman </li>
</ul>
</div>
</div>
</div><hr class=mt-0 mb-5 clear-b/></div></div></div></div></div><div class=container>
</div></div>";
  }
  else{
	echo"<script>alert('Belum ada produk dalam kategori ini')</script>";
	echo"<script>document.location.href='store';</script>";
  }
                                ?>
					</div>				 
					<div class=hovered-template-hidden hide></div>
				</div>
			</div>
		</div>
	</div>
                                
