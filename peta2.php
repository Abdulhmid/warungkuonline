<?php 
	include "config/koneksi.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style>
	html{
		height:100%;	
	}
	body{
		height:100%;	
	}
	#canvas{
		height:100%;	
	}
	
</style>
<title>GPS Online</title>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD3agJ0asxwOOayV3dYyn2kkOvikLL2DeA&sensor=false&language=id"></script>
<script type="text/javascript">
	//Mendeklarasikan Array untuk menampung marker dan balloon yang ada sehiingga mempermudah saat memanggilnya kembali
	var markers=new Array();
	var infowindows=new Array();
	
	var refreshId2 = setInterval(function(){navigator.geolocation.getCurrentPosition(foundLocation, noLocation);}, 10000);
	
	function noLocation() {
		alert("Sensor GPS tidak ditemukan");
	}
	
	function foundLocation(position) {
		var lat2 = position.coords.latitude;
		var lon2 = position.coords.longitude;
		
		var uri = "simpandata.php";		
		$.ajax({
			type: 'POST',
			async: false,
			dataType: "html",
			url: uri,
			data: "lat="+lat2+"&lon="+lon2,
			success: function(data) {
					
			}
		});
	}

	
	//Melakukan refresh setiap beberapa detik sekali
	var refreshId = setInterval(function(){updatedata();}, 12000);
	
		function updatedata(){			
			var lat=0;
			var long=0;
						
			for(var i=0;i<markers.length;i++){
								
				var uri = "ambildata.php";		
				$.ajax({
					type: 'POST',
					async: false,
					dataType: "html",
					url: uri,
					data: "id="+i,
					success: function(data) {
						lat=data;
					}
				});
				
				var uri = "ambildata2.php";		
				$.ajax({
					type: 'POST',
					async: false,
					dataType: "html",
					url: uri,
					data: "id="+i,
					success: function(data) {
						long = data;		
					}
				});
				
				var myLatLng = new google.maps.LatLng(lat, long);				
				markers[i].setPosition(myLatLng);	
				infowindows[i].setPosition(myLatLng);	
				
			}
			
		}
	
	function initialize(){
		var myLatLng = new google.maps.LatLng(-7.79759, 110.37071);
		var myOptions = {
			zoom: 12,
			center:myLatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		
		map = new google.maps.Map( document.getElementById('canvas'),myOptions);
		
		<?php
	//Mengambil data dari database dan melakukan looping untuk menampilkan marker sesuai kordinat pada database
			$sql="select * from member order by nama";
			$query=mysql_query($sql) or die(mysql_error());
			while($data=mysql_fetch_array($query)){
		?>
			var marker= new google.maps.Marker({
				position:new google.maps.LatLng(<?php echo $data['lat']; ?>, <?php echo $data['lon']; ?>),
				map:map,
				title:"Saya disini"
			});
			marker.setIcon({ url: "icon_star.png", scaledSize: new google.maps.Size(30, 24) , anchor: new google.maps.Point(15, 12)});
			markers.push(marker);
			
			var infowindow= new google.maps.InfoWindow({
				content:"<?php echo $data['username']; ?> :&nbsp; <?php echo $data['telp']; ?>",
				size: new google.maps.Size(50,50),
				position:new google.maps.LatLng(<?php echo $data['lat']; ?>, <?php echo $data['lon']; ?>)
			});
			infowindow.open(map);
			
			infowindows.push(infowindow);
		<?php
			}
		?>
	
	$('#cari').change(function(){
			var i=$('#cari').val();
			var koodinat=markers[i].getPosition();
			map.panTo(koodinat);
			updatedata();
	});

	}
</script>
</head>
<body onLoad="initialize()">
	<div id="canvas"></div>
    <select id="cari" name="cari">
       <?php
			$sql="select * from member order by nama";
			$query=mysql_query($sql) or die(mysql_error());
			$n=0;
			while($data=mysql_fetch_array($query)){
	  ?>
      		   <option value="<?php echo $n; ?>"><?php echo $data['nama']; ?></option>
       <?php
	   		$n++;
			}
	   ?>
	</select>
</body>
</html>
