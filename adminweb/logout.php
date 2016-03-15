<?php
  session_start();
  session_destroy();
  session_start();
  session_regenerate_id() ;
  
  echo"<script>alert('logout berhasil!')</script>";
  echo "<meta http-equiv='refresh' content='0;url=index.php'>";
  //echo"<script>document.location.href='../index.php';</script>";

// Apabila setelah logout langsung menuju halaman utama website, aktifkan baris di bawah ini:

//  header('location:http://www.alamatwebsite.com');
?>
