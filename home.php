<? include "slideshow.php" ?>
<div class="content">
	<div class="home-intro">
        <div class="onethree columns padright20">
        	<h1 class="signikasemibold">PERCETAKAN SELARAS</h1>
            <h2 class="signikasemibold borderbottom">PRINTS EVERY DETAIL</h2>
        </div>
        <div class="twothree columns">
        	<h3 class="signika"><span>WELCOME</span></h3>
            <?
			$sql=mysql_query("SELECT * FROM profil WHERE publish='Y' ORDER BY tanggal DESC LIMIT 1");
			$kolom = 2;
			//echo"<img src='images/bar.jpg' width=560 height=200>";
			$i=0;
			while (@$r=mysql_fetch_array($sql)){
			$deskripsi = htmlentities(strip_tags($r["profil"])); // membuat paragraf pada isi deskripsi dan mengabaikan tag html
			$isi       = substr($deskripsi,0,70); // ambil sebanyak 70 karakter
			$isi       = substr($deskripsi,0,strrpos($isi," ")); // potong per spasi kalimat
			if ($i >= $kolom){
      		echo "</tr><tr>";
      		$i=0;
    		}
   			$i++;
    		echo "<td align=center>
			$r[profil]
		  <br /><br /></td>";
  			}
?>					</div>

            </div>
        <div class="clear"></div>
    </div>
        <div class="latest-gallery">
    	<h3 class="signika"><span>LATEST GALLERY</span></h3>
		
        <div class="onethree columns marright20 borderbottom">
        	<p class="padbottom8"><a class="galthumb" href="portfolio/toekang-migas/index.html" title="Toekang Migas"><img src="images/uploads/portfolio/BOOK%2004.jpg" width="300" style="max-height:200px;" border="0" alt="Toekang Migas" /></a></p>
            <p><a href="portfolio/toekang-migas/index.html" title="Toekang Migas">Toekang Migas</a><br />
			</p>
        </div>
		<div class="onethree columns marright20 borderbottom">
        	<p class="padbottom8"><a class="galthumb" href="portfolio/kue-kue-jakarta-catalog/index.html" title="Kue Kue Jakarta Catalog"><img src="images/uploads/portfolio/CATALOG%2005.jpg" width="300" style="max-height:200px;" border="0" alt="Kue Kue Jakarta Catalog" /></a></p>
            <p><a href="portfolio/kue-kue-jakarta-catalog/index.html" title="Kue Kue Jakarta Catalog">Kue Kue Jakarta Catalog</a><br /></p>
        </div>

		<div class="onethree columns borderbottom">
        	<p class="padbottom8"><a class="galthumb" href="portfolio/anya-sani-invitation/index.html" title="Anya &amp; Sani Invitation"><img src="images/uploads/portfolio/INVITATION%2006.jpg" width="300" style="max-height:200px;" border="0" alt="Anya &amp; Sani Invitation" /></a></p>
            <p><a href="portfolio/anya-sani-invitation/index.html" title="Anya &amp; Sani Invitation">Anya & Sani Invitation</a><br />
				            </p>
        </div>
                <div class="clear"></div>
    </div>
    </div>
</div>
