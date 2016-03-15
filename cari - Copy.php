<div id="content-container" >
	<div class="container" itemscope itemtype="http://schema.org/WebPage">
		<div class="row-fluid">
			<div id="breadcrumb-container" class="view-search-bread span12">
				<ul class="search-cat-box breadcrumb sf-menu"  itemprop="breadcrumb">
<?
  // menghilangkan spasi di kiri dan kanannya
  $kata = trim($_POST['kata']);
  // mencegah XSS
  $kata = htmlentities(htmlspecialchars($kata), ENT_QUOTES);
  // pisahkan kata per kalimat lalu hitung jumlah kata
  $pisah_kata = explode(" ",$kata);
  $jml_katakan = (integer)count($pisah_kata);
  $jml_kata = $jml_katakan-1;

  $cari = "SELECT * FROM produk WHERE " ;
    for ($i=0; $i<=$jml_kata; $i++){
      $cari .= "deskripsi LIKE '%$pisah_kata[$i]%' OR nama_produk LIKE '%$pisah_kata[$i]%'";
      if ($i < $jml_kata ){
        $cari .= " OR ";
      }
    }
  $cari .= " ORDER BY id_produk DESC LIMIT 20";
  $hasil  = mysql_query($cari);
  $ketemu = mysql_num_rows($hasil);

  echo "<h4 class='heading colr'>Hasil Pencarian</h4>";

  if ($ketemu > 0){
  echo "<div class='table3'>Ditemukan <b>$ketemu</b> produk dengan kata <font style='background-color:#D5F1FF'><b>$kata</b></font> <b>:</b> </div>
  
					<li><a href=store>Beranda </a></li>
					<li><span class=breadcrumb-divider><i class=icon-chevron-right-alt muted></i></span></li>
					<li class=active>Ditemukan <b>$ketemu</b> produk dengan kata <font style='background-color:#D5F1FF'><b>$kata</b></font></li>
				</ul>
							</div>
		</div>
	</div>

  ";
    while($t=mysql_fetch_array($hasil)){
      // Tampilkan hanya sebagian isi produk
      $isi_produk = htmlentities(strip_tags($t['deskripsi'])); // mengabaikan tag html
      $isi = substr($isi_produk,0,250); // ambil sebanyak 250 karakter
      $isi = substr($isi_produk,0,strrpos($isi," ")); // potong per spasi kalimat
    	  echo "
		  
    <div class=container>
    	<div class=row-fluid id=filter-sorting-container>
        	<div class=span12 top-filter>
				<form class=form-inline>
                	<div class=row-fluid>
                    	<div class=pull-left>
                        	<div class=pull-left>
															<select name='lokasi' id='lokasi' class='select-styled select-styled_medium select-medium ml-10'>";
								echo "<option value=''>Pilih Kota</option>";
								$tampil=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
            					while($x=mysql_fetch_array($tampil))
								{
              					echo "<option value=$x[id_kota]>$x[nama_kota]</option>";
								}
								echo "</select>";

								echo "<span class=price-range ml-10>
									<label class=muted for=>Rp</label>
                                    <input type=text name=pr_min class=input-small value= id=pr-min title=Harga Terendah>
								</span>
                                <label for= class=connector ml-5 mr-5>ke</label>
                                <span class=price-range>
                                <label class=muted for=>Rp</label>
                                <input type=text name=pr_max class=input-small value= id=pr-max title=Harga Tertinggi>
								</span>
							</div>
						</div>
						<div class=pull-right></div>
					</div>
				</form>
			</div>
		</div>
		<div class=row-fluid>
			<div class=span12 main-content>
				<div id=content-directory>
					<div class=grid-shop-product itemscope itemtype=http://schema.org/ItemList>";

  $kata = trim($_POST['kata']);
  // mencegah XSS
  $kata = htmlentities(htmlspecialchars($kata), ENT_QUOTES);
  // pisahkan kata per kalimat lalu hitung jumlah kata
  $pisah_kata = explode(" ",$kata);
  $jml_katakan = (integer)count($pisah_kata);
  $jml_kata = $jml_katakan-1;

  $cari = "SELECT * FROM produk WHERE " ;
    for ($i=0; $i<=$jml_kata; $i++){
      $cari .= "deskripsi LIKE '%$pisah_kata[$i]%' OR nama_produk LIKE '%$pisah_kata[$i]%'";
      if ($i < $jml_kata ){
        $cari .= " OR ";
      }
    }
  $cari .= " ORDER BY id_produk DESC LIMIT 20";
  $hasil  = mysql_query($cari);
  $ketemu = mysql_num_rows($hasil);

						if ($ketemu > 0){
						while($c=mysql_fetch_array($sql)){
			   			echo"
                		<div class=product itemscope itemtype=http://schema.org/Product itemprop=itemListElement>
							<a href=produk-$c[id_produk]-$c[produk_seo].html>
								<div class=product-hover relative>
                        			<div class=product-image>
										<img itemprop=image src=foto_barang/$c[gambar] alt=Cat Unique Stamp>
                        			</div>
                        			<div class=meta-product>
                        				<div class=name>
                            				<b itemprop=name>$c[nama_produk]</b>
                           	 			</div>
                            			<div class=row-fluid itemprop=offers itemscope itemtype=http://schema.org/Offer>
                            				<div class=span7>
                            					<span itemprop=price class=price>Rp. $c[harga]</span>
                            						<meta itemprop=priceCurrency content=IDR />
                            				</div>
                           					<div class=span5 text-right ellipsis>
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

  $jmldata     = mysql_num_rows(mysql_query("SELECT * FROM produk WHERE id_kategori='$_GET[id]'"));
  $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
  $linkHalaman = $p->navHalaman($_GET["halkategori"], $jmlhalaman);

  echo "
<div class=row-fluid clear-b>
<hr class=mt-0 mb-5 clear-b/><div class=span12 ml-0>
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
	}
  }
                                ?>
