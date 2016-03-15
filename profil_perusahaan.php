<div id="content-container">
<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
<div class="row-fluid"></div></div><section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_daftar.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center">
	  <h3 class="mb-0">Sejarah Waroeng Online</h3>
	</div>
	<hr>
    <div class="row-fluid control-group">
<h1 class="fs-13 mb-0 lh-20">Nikmati Kemudahan dalam bertransaksi</h1><p>
            <?
			$sql=mysql_query("SELECT * FROM petunjuk");
			$kolom = 2;
			//echo"<img src='images/bar.jpg' width=560 height=200>";
			$i=0;
			while (@$r=mysql_fetch_array($sql)){
			$deskripsi = htmlentities(strip_tags($r["isi_petunjuk"])); // membuat paragraf pada isi deskripsi dan mengabaikan tag html
			$isi       = substr($deskripsi,0,70); // ambil sebanyak 70 karakter
			$isi       = substr($deskripsi,0,strrpos($isi," ")); // potong per spasi kalimat
			if ($i >= $kolom){
      		echo "</tr><tr>";
      		$i=0;
    		}
   			$i++;
    		echo "<td align=center>
			$r[isi_petunjuk]
		  <br /><br /></td>";
  			}
?>					</div>
</p></div>
</div>
</div>
