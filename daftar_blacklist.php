<div id="content-container">
<div class="container" itemscope="" itemtype="http://schema.org/WebPage">
<div class="row-fluid"></div></div><section class="container">
<div class="form-register-wrapper">

<form class="form-horizontal form-register box box-white box-shadow mb-30" action="proses_daftar.php" method="post" name="form" onSubmit="return check()">
	<div class="text-center">
	  <h3 class="mb-0">Daftar Blacklist User</h3>
	</div>
	<hr>
    <div class="row-fluid control-group">
<table width="100%">
  <tbody>
    <tr>
      <td>Username</td>
      <td>Nama </td>
      <td>Telhpone</td>
    </tr>
    <?
	
						$p      = new Paging3;
  				 		$batas  = 20;
 				 		$posisi = $p->cariPosisi($batas);
						$sql = mysql_query("SELECT * FROM member WHERE blokir='YA'");				 
						$jumlah = mysql_num_rows($sql);
						if ($jumlah > 0){
						while($c=mysql_fetch_array($sql)){
			   			echo"
			<tr>
      <td><b>$c[username]</b></td>
      <td><b>$c[nama]</b></td>
      <td>$c[telp]</td>
    </tr>
			
			<br/>";
						}
						}
?>
    
  </tbody>
</table>
    
</div>
</div>
</div>
<p>&nbsp;</p>
