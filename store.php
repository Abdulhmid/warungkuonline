    <meta charset="utf-8">      
    <!-- bjqs.css contains the *essential* css needed for the slider to work -->
    <link rel="stylesheet" href="bjqs.css">

    <!-- some pretty fonts for this demo page - not required for the slider -->
    <link href='font.css' rel='stylesheet' type='text/css'> 

    <!-- demo.css contains additional styles used to set up this demo page - not required for the slider --> 
    <link rel="stylesheet" href="demo.css">

    <!-- load jQuery and the plugin -->
    <script src="js/bjqs-1.3.min.js"></script>
      
    
    <div id="container">
      <!--  Outer wrapper for presentation only, this can be anything you like -->
      <div id="banner-fade">

        <!-- start Basic Jquery Slider -->
        <ul class="bjqs">
          <li><img src="header/7.jpg"></li>
          <li><img src="header/Starbucks-Banner-2.jpg"></li>
          <li><img src="header/cropped-banner1.png"></li>
          <li><img src="header/banner_4.jpg"></li>
          <li><img src="header/banner-01092015.jpg"></li>
          <li><img src="header/apple-iphone-6-banner.jpg"></li>
        </ul>
        <!-- end Basic jQuery Slider -->

      </div>
      <!-- End outer wrapper -->

      <script class="secret-source">
        jQuery(document).ready(function($) {

          $('#banner-fade').bjqs({
            height      : 300,
            width       : 940,
            responsive  : true
          });

        });
      </script>
    </div>

<div id="content-container" >
	<div class="container" itemscope itemtype="http://schema.org/WebPage">
		<div class="row-fluid"></div>
	</div>
	<section class="container">
		<div class="row-fluid">
        	<div class="span12 mb-10">
            	<div class="row-fluid"></div>
			</div>
		</div>
	</section>
    <section class="all_cat_container">
    	<div class="container">
        	<div class="row-fluid">
            	<div class="span12">
					<p class="pull-left font-bold fs-13 mb-0">Pilih Kategori</p>
						<a class="pull-right fs-11" href="semua">Lihat semua produk &raquo;</a>
                </div>
            </div>
			<div class="row-fluid">
            	<div class="span12">
                	<ul class="allcat">

<? 
$tampil=mysql_query("SELECT * FROM kategori WHERE id_kategori<9 ORDER BY nama_kategori");
while($x=mysql_fetch_array($tampil)){
echo "
<li><a href='kategori-$x[id_kategori]-$x[link].html'><i class=$x[icon]></i><span class=title>$x[nama_kategori]</span></a>";
}
echo "</li>";
?>

</ul><ul class="allcat">

<? 
$tampil=mysql_query("SELECT * FROM kategori WHERE id_kategori BETWEEN 9 AND 16 ORDER BY nama_kategori");
while($x=mysql_fetch_array($tampil)){
echo "
<li><a href='kategori-$x[id_kategori]-$x[link].html'><i class=$x[icon]></i><span class=title>$x[nama_kategori]</span></a>";
}
echo "</li>";
?>

</ul><ul class="allcat">

<? 
$tampil=mysql_query("SELECT * FROM kategori WHERE id_kategori BETWEEN 17 AND 27 ORDER BY nama_kategori");
while($x=mysql_fetch_array($tampil)){
echo "
<li><a href='kategori-$x[id_kategori]-$x[link].html'><i class=$x[icon]></i><span class=title>$x[nama_kategori]</span></a>";
}
echo "</li>";
?>
</ul>
</div>
</div>
</div>
</section>

<section class="container"><div class="row-fluid mb-5"><div class="span12"><div class="line-through"><p><span class="font-bold fs-16">Hot List</span></p></div></div></div>

    		<div class="row-fluid">
			<div class="span12 main-content">
				<div id="content-directory">
					<div class="grid-shop-product" itemscope itemtype="http://schema.org/ItemList">

<?  
$sql="select * FROM produk, member WHERE member.username=produk.username AND member.premium='YA' ORDER BY RAND() LIMIT 5";
$query=mysql_query($sql) or die(mysql_error());
while($c=mysql_fetch_array($query)){
	$harga = format_rupiah($c[harga]);
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
                            					<span itemprop=price class=price>Rp. $harga</span>
                            						<meta itemprop=priceCurrency content=IDR />
													<img itemprop=image src=img/gold_icon.png width='24'>
                            				</div>
                           					<div>
                            					<small class=muted info-tooltip data-hover=tooltip data-original-title=$c[nama_kota]>
                            					<i class=icon-pin-alt></i>$c[nama_kota] - $c[wilayah]
                            					</small>
                            				</div>
										</div>
									</div>
								</div>
							</a>
						</div>";
			}
			
?>


<a href="semua-hot" class="fs-13 all-hotlist">Lihat Semua Hot List &raquo;</a></section><div class="container"><div class="desc-home-wrapper">

</div></div>