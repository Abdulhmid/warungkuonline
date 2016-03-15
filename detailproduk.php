<link href="style.css" rel="stylesheet">
<script src="jquery_003.js"></script>
<script src="jquery.js"></script>
<script src="jquery_002.js"></script>
<script src="scripts.js"></script>
<script src='sliderengine/jquery.js'></script>
    <script src='sliderengine/produkslider.js'></script>
    <link rel='stylesheet' type='text/css' href='sliderengine/produkslider-1.css'>
    <script src='sliderengine/initslider-1.js'></script>
</head>
<body>
<div id="content-container">
	<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
		<div class="row-fluid">
			<div id="breadcrumb-container" class="view-search-bread span12">
				<ul class="search-cat-box breadcrumb sf-menu" itemprop="breadcrumb">
					<li><a href="store">Beranda </a></li>
                    <li><span class="breadcrumb-divider">
                    	<i class="icon-chevron-right-alt muted"></i>
                        </span>
                    </li>
                    
<?
	$detail=mysql_query("SELECT produk.*, member.`email`,member.`premium`,member.`bbm`, member.`jkel`, member.`nama`, member.`telp`, member.`username` FROM produk,kategori, member WHERE kategori.id_kategori=produk.id_kategori 
	AND kategori.`id_kategori`=produk.`id_kategori`
	AND produk.`username`=member.`username` 
	AND produk.id_produk='$_GET[id]'");
	$tgl = tgl_indo($d["tanggal"]);
	$jumlah = mysql_num_rows($detail);
	if ($jumlah > 0){
	while($d   = mysql_fetch_array($detail)){
			$harga = format_rupiah($d['harga']);
			
	echo 
	"
</div><li><h2><a href='kategori-$d[id_kategori]-$d[link].html'>$d[nama_kategori]</a></h2></li>
					<li><span class=breadcrumb-divider><i class=icon-chevron-right-alt muted></i></span></li>
					<li class=active><h2>$d[nama_produk]</h2></li>
				</ul>
			</div>
		</div>
	</div>
	<div id=product-358342 class=container container-product>
		<div itemscope= itemtype=http://schema.org/Product class=row-fluid>
			<div class=span9>
            	
                <div class=product-topinfo>
					<div class=row-fluid>
						<div class=span7>
							<div id=product-socialholder class=pull-left>
								<ul class=inline social-buttons ceef></ul>
							</div>
						</div>
						<div class=span5>
							<div class=pull-right>
								<div class=dropdown-menu dropdown-etalase>
								<hr class=mt-5 mb-5>
                                	<div class=product-etalasedrop-holder></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class=row-fluid>
					<div class=span5 product-image-holder>
						<div class=product-imagebig>	
		<li id=gambar1>
		<!-- Insert to your webpage where you want to display the slider -->
		";
		
		if($d['premium']=='TIDAK'){
			echo"<img src=$d[gambar] alt=$d[gambar]  title='Gambar' />";
		}
		else{
		
    echo"<table>
  <tbody>
    <tr>
      <td> <div id='produkslider-1' style='display:block;position:relative;margin:0 auto;'>
            <ul class='produkslider-slides' style='display:none;'>
                <li><img src=$d[gambar] alt=$d[gambar]  title='Gambar 1' />
                </li>
                <li><img src=$d[gambar2] alt=$d[gambar]  title='Gambar 2' />
                </li>
                <li><img src=$d[gambar3] alt=$d[gambar]  title='Gambar 3' />
                </li>
                <li><img src=$d[gambar4] alt=$d[gambar]  title='Gambar 4' />
                </li>
            </ul>
            <ul class='produkslider-thumbnails' style='display:none;'>
                <li><img src=$d[gambar] alt=$d[gambar] title='Gambar 1' /></li>
                <li><img src=$d[gambar2] alt=$d[gambar2] title='Gambar 2' /></li>
                <li><img src=$d[gambar3] alt=$d[gambar3] title='Gambar 3' /></li>
                <li><img src=$d[gambar4] alt=$d[gambar4] title='Gambar 4' /></li>
            </ul>
        </div></td>      
    </tr>
  </tbody>
</table>
<a href=peta.php?&id=$d[username] target=_blank> <img src=images/icon128-2x.png height=100 alt='peta'/></a>
";
		}

		
		echo"</li>

							<div class=product-navthumb-alt pull-right>
								<a style=display: none; data-jcarouselcontrol=true data-jcarousel-control=true data-target=+=1 href=#>
                           		</a>
							</div>
						</div>
					</div>
					<div class=span7 product-content-holder>
						<ul class=horizontal-tab>
							<li class=active>
								<a rel=nofollow>Informasi Produk</a>
							</li>
						</ul>
						<div class=tab-content product-content-container  id=shop-67537>
                    		<div class='detail-info'>
                        		<div class='row-fluid'>
                        			<div class='span6'>
                                		<ul>
											<li>
                                        	<span class=mr-10>
                                        		<span class='detail-info_label'>
                                        			<i class='icon-tag mr-5'></i>Kondisi $d[kondisi]
                                        		</span>
                                       		</span>
                                        	<link href=http://schema.org/UsedCondition itemprop=itemCondition>
                                        	</li>
																						<li>
												<span class=mr-10>
													<span class='detail-info_label'>
														<i class='icon-shipping mr-5'></i>$d[tanggal]
													</span>
												</span>
											</li>

                                        </ul>
									</div>
									
									<div class=span6>
										<ul>
											<li>
												<span class=mr-10>
                                            		<span class='detail-info_label'>
														<i class='icon-briefcase mr-5'></i>Kota $d[nama_kota]
                                            		</span>
												</span>
											</li>
											<li>
												<span class=mr-10>
													<span class='detail-info_label'>
														<i class='icon-shipping mr-5'></i>Telp $d[telp]
													</span>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<p itemprop=description class=mt-20>$d[deskripsi]</p>
						</div>
					</div>
				</div>
				
				<div id=review-summary class=row-fluid mt-40></div>
					<div id=other-product>
						<hr class=mb-5>
							<h4 class=fs-14 mt-5 mb-5>
								<i class=icon-th></i> 
							<img src=images/hot-deals-on-audio-video-products.png width=95 alt=/>
							Produk Terlaris&nbsp;
							</h4><hr class=mt-5 mb-15>
";
							?>

                            
               			<? 
						
						$cek=mysql_query("
						SELECT * FROM member, produk WHERE produk.`username`=member.`username` 
AND member.`premium`='YA' AND produk.`id_produk`<> '$_GET[id]'
ORDER BY RAND() LIMIT 3"
						
						
						);
						$ada=mysql_fetch_array($cek);
						
						$testi = mysql_fetch_array(mysql_query
						("SELECT COUNT(kualitas)AS a FROM laporan_iklan, produk WHERE kualitas='Puas' AND produk.`id_produk`='$_GET[id]' AND produk.`id_produk`=laporan_iklan.`id_produk`"));

$testijelek = mysql_fetch_array(mysql_query
						("SELECT COUNT(kualitas)AS b FROM laporan_iklan, produk WHERE kualitas='Tidak Puas' AND produk.`id_produk`='$_GET[id]' AND produk.`id_produk`=laporan_iklan.`id_produk`"));


			     		$p      = new Paging3;
  				 		$batas  = 4;
 				 		$posisi = $p->cariPosisi($batas);
						$sql = mysql_query
						("SELECT * FROM member, produk WHERE produk.`username`=member.`username` 
AND member.`premium`='YA' AND produk.`id_produk`<> '$_GET[id]'
ORDER BY RAND() LIMIT 4");				 
						$jumlah = mysql_num_rows($sql);
						if ($jumlah > 0){
						while($c=mysql_fetch_array($sql)){
							
						
			   			echo"
						<div class=grid-shop-product>
							<div class=product>
								<div itemprop=isRelatedTo itemscope= itemtype=http://schema.org/Product class=product-hover relative>		
                                	<a href=produk-$c[id_produk]-$c[produk_seo].html>
										<div class=product-image>
                							<span><img itemprop=image alt=Flexible LED Strip Light SMD3528 IP44 src=$c[gambar] title='$c[nama_produk]'>
                    						</span>
										</div>
										<div class=meta-product>
											<div class=name itemprop=name>$c[nama_produk]</div>
												<div class=row-fluid>
                        							<div itemprop=offers itemscope= itemtype=http://schema.org/Offer class=span12>
														<span itemprop=price class=price>Rp $harga </span>
															<meta itemprop=priceCurrency content=IDR>
															
															";
												
												if($c['premium']=='YA')
												{
													echo"<img src='img/gold_icon.png' width='28' alt=''/>";
												}
												else{
													}
													echo"
															
													</div>
												</div>
											</div>
									</a>
										</div>
									</div>
								</div>
								
							";
						}
						
						
						
						$sql2 = mysql_query
						("SELECT * FROM produk,member WHERE produk.username=member.username AND produk.id_produk='$_GET[id]'");				 
						$v=mysql_fetch_array($sql2);
						
						echo "
						
						</div>
						</div>
						<div class=span3>
							<div class=mt-70 mb-10>
								
							</div>
							
									<div class=note>
							
								<div itemprop=offers itemscope= itemtype=http://schema.org/Offer class=product-pricetag>
									<span class=bold itemprop=price>Rp $harga</span></br>
										<meta itemprop=priceCurrency content=IDR>";
										
										if($d['username']==$_SESSION['username'])
						{
							echo"<a href=editiklan-$v[id_produk].html class=bold fs-12 itemprop=name>Edit</a>";
						}
						else{
							echo"<a href=profilpenjual-$v[username].html class=bold fs-12 itemprop=name>$d[username]</a>";	
							
						}
										
										
										
								
							
						
						echo"					<br/>
										<img src=images/logoBBM.png><b>$v[bbm]</b>
<br/>";

$blokir=mysql_query("SELECT SUM(nilai)AS total, member.`username` FROM member, laporan_iklan, produk 
WHERE member.`username`=laporan_iklan.`username`
AND produk.`username`=member.`username` AND laporan_iklan.`id_produk`=produk.`id_produk` AND produk.id_produk='$_GET[id]'");

	$waw=mysql_fetch_array($blokir);
		if ($waw[total] >0){

echo "
							<div itemscope= itemtype=http://schema.org/Organization class=product-box>
								<div class=product-box-content>
									<div class=span8 mt-10 pull-left><div>
<a href=profilpenjual-$v[username]-$v[username].html class=bold fs-12 itemprop=name>Testimonial sebanyak $waw[total] kali</a>

</div>
<br/>
";
	}
	else{
		echo "<br/>";
		}
		
	if ($ada >0){
	$sql=mysql_query("SELECT * FROM member, produk WHERE member.username=produk.`username` AND username='$_SESSION[username]'
AND produk.id_produk='$_GET[id]'");
	$r=mysql_fetch_array($sql);
	$bb=mysql_fetch_array(mysql_query("SELECT * FROM member WHERE username='$_SESSION[username]'"));
	$count=mysql_num_rows($sql);

		if ($count > 0){
		echo"
		<br>
		<a href=editproduk-$v[id_produk]-$v[username].html class=bold fs-12 itemprop=name><b>edit iklan</b></a>
		<br>
		<a href=gantiketerangan-$v[id_produk]-$v[username].html class=bold fs-12 itemprop=name>

		<a href=petadinamis.php?id=$r[id_produk] class=bold fs-12 itemprop=name><b>lokasi penjual</b></a>
			<br>
		<a href=gantiketerangan-$v[id_produk]-$v[username].html class=bold fs-12 itemprop=name><b>ganti keterangan</b></a>
			<br>"
			
;

}

if ($bb['premium']=='TIDAK'){
		echo"
<a href=premium> <img src=img/Premium-Membership.png height=253 alt='premium'/></a><br/>
";

}
else{
echo 
"

";
	}

echo"
<a href=laporkan-$v[id_produk]-$v[username].html class=bold fs-12 itemprop=name><b>Testimonial</b></a>
		<br>
<table>
  <tbody>
    <tr>
      <td><img src='images/Thumb Up.png' alt='thumbs up'/></td>
      <td>&nbsp $testi[a]</td>
    </tr>
    <tr>
      <td><img src='images/Thumb Down.png' alt='thumbs down'/></td>
      <td>&nbsp $testijelek[b]</td>
    </tr>
  </tbody>
</table>";

}
}

	}
		}
		
		echo"

</div>
</div>
</div>
<div class=note>";

$baner=mysql_fetch_array(mysql_query("SELECT * FROM member, produk WHERE produk.`username`=member.`username` 
AND member.`premium`='YA' AND produk.`id_produk`= '$_GET[id]'
ORDER BY RAND() LIMIT 1"));

$baner2=mysql_query("SELECT * FROM member, produk WHERE produk.`username`=member.`username` 
AND member.`premium`='YA' AND member.`username`='$baner[username]' AND produk.`id_produk`<> '$_GET[id]'
ORDER BY RAND() LIMIT 2");

while($baner3=mysql_fetch_array($baner2)){	
    
echo"
<a href=produk-$baner3[id_produk]-$baner3[produk_seo].html>
$baner3[nama_produk]<br/></a>
    <img src='$baner3[gambar]' width=170px><br/>";
}
echo"
</p>
</div>
</div>
</div>

</div>
</div>
</div>
			</div>	</div></div>	";

?>
               		