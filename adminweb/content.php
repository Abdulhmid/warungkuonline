<?php
error_reporting(0);
include "../config/koneksi.php";
include "../config/authentication_users.php";
include "../config/library.php";
include "../config/fungsi_indotgl.php";
include "../config/fungsi_combobox.php";
include "../config/class_paging.php";
include "../config/fungsi_rupiah.php";

// Bagian Home
if ($_GET[module]=='home'){
  $tanggal = tgl_indo(date("Y m d"));
  $jam	   = date("H:i:s");
  echo "<div id=greenboxsmall><img src='images/clock.png'><span class=header_home> Login : $hari_ini, $tanggal  </span></div>";
  echo "<hr color=#EBEBEB noshade=noshade />";
  echo "<span class=judul_page>Selamat Datang</span>
        <labeltxt><p>Hai <b>$_SESSION[namalengkap]</b>, selamat datang di halaman Administrator.<br> Silahkan klik menu pilihan untuk mengelola content website. </p></labeltxt>";
}

// Bagian Modul
elseif ($_GET[module]=='modul'){
  include "modul/mod_modul/modul.php";
}

// Bagian Rekap
elseif ($_GET[module]=='rekap'){
  include "modul/mod_rekap/rekap.php";
}

// Bagian Merk
elseif ($_GET[module]=='merk'){
  include "modul/mod_merk/merk.php";
}

// Bagian Merk
elseif ($_GET[module]=='kategori'){
  include "modul/mod_kategori/kategori.php";
}

// Bagian Merk
elseif ($_GET[module]=='iklan'){
  include "modul/mod_iklan/iklan.php";
}

// Bagian Merk
elseif ($_GET[module]=='laporan'){
  include "modul/mod_laporan/laporan.php";
}

// Bagian Sewa
elseif ($_GET[module]=='status'){
  include "modul/mod_status/status.php";
}

// Bagian Kategori
elseif ($_GET[module]=='bank'){
  include "modul/mod_bank/bank.php";
}

// Bagian motor
elseif ($_GET[module]=='feedback'){
  include "modul/mod_feedback/feedback.php";
}

// Bagian Review
elseif ($_GET[module]=='review'){
  include "modul/mod_review/review.php";
}

// Bagian User
elseif ($_GET[module]=='user'){
  include "modul/mod_users/users.php";
}

// Bagian Profil member
elseif ($_GET[module]=='member'){
  include "modul/mod_member/member.php";
}

// Bagian Order
elseif ($_GET[module]=='order'){
  include "modul/mod_order/order.php";
}

// Bagian Page
elseif ($_GET[module]=='page'){
  include "modul/mod_page/page.php";
}

//Bagian pembayaran afiliasi
elseif($_GET[module]=='komisiafiliasi'){
  include "modul/mod_afiliasi/afiliasi.php";
}

//Bagian pembayaran afiliasi
elseif($_GET[module]=='templates'){
  include "modul/mod_templates/templates.php";
}

// Bagian Order
elseif ($_GET[module]=='order'){
  include "modul/mod_order/order.php";
}

// Bagian bukutamu
elseif ($_GET[module]=='konfirmasi'){
  include "modul/mod_konfirmasi/konfirmasi.php";
}

// Bagian jne reg
elseif ($_GET[module]=='reg'){
  include "modul/mod_jne_reg/jnereg.php";
}

// Bagian jne YES
elseif ($_GET[module]=='yes'){
  include "modul/mod_jne_yes/jneyes.php";
}

// Bagian jne YES
elseif ($_GET[module]=='kota'){
  include "modul/mod_kota/kota.php";
}

// Apabila modul tidak ditemukan
else{
  echo "<p><b>MODUL BELUM ADA ATAU BELUM LENGKAP</b></p>";
}


?>
