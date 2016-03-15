<!DOCTYPE html>
<head>
	<meta charset='UTF-8'>
	
	<title>Dynamic Dropdown</title>
	
	<link rel='stylesheet' href='css/style.css'>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

	<script>
		$(function() {
		
			$("#text-one").change(function() {
				$("#text-two").load("textdata/" + $(this).val() + ".txt");
			});
			
			$("#json-one").change(function() {
			
				var $dropdown = $(this);
			
				$.getJSON("jsondata/data.json", function(data) {
				
					var key = $dropdown.val();
					var vals = [];
										
					switch(key) {
						case 'beverages':
							vals = data.beverages.split(",");
							break;
						case 'snacks':
							vals = data.snacks.split(",");
							break;
						case 'base':
							vals = ['Please choose from above'];
					}
					
					var $jsontwo = $("#json-two");
					$jsontwo.empty();
					$.each(vals, function(index, value) {
						$jsontwo.append("<option>" + value + "</option>");
					});
			
				});
			});

		});
	</script>
</head>

<body>

	<div id="page-wrap">
	
		<h1>Pulls from text files</h1>

		<select id="text-one">
			<option selected value="base">Please Select</option>
			<option value="beverages">Beverages</option>
			<option value="snacks">Snacks</option>
		</select>
		
		<br />
		
		<select id="text-two">
			<option>Please choose from above</option>
		</select>
		
		<h1>Pulls from JSON</h1>

		<select id="json-one">
			<option selected value="base">Please Select</option>
			<option value="beverages">Beverages</option>
			<option value="snacks">Snacks</option>
		</select>
	
		<br />
	
		<select id="json-two">
			<option>Please choose from above</option>
		</select>
	
	</div>
    
    <tr>
    <td>Lokasi</td>
    <td>:</td>
    <td>
    <select name='kota' id="json-one" class='kota'>
	<? 
	 include "config/koneksi.php";

echo "<option value='20'>Pilih Kota</option>";

            $tampil_kota=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
            while($kota=mysql_fetch_array($tampil_kota)){
              echo "
			  <option value='$kota[id_kota]'>$kota[nama_kota]</option>";
            }
    echo "</select>";
	?>
    </td>
  </tr>
  <tr>
    <td>Wilayah</td>
    <td>:</td>
    <td>
          
          <select id="json-two">
          
			<option>Pilih Wilayah</option>
		</select>
        
	</td>
  </tr>
	
</body>

</html>