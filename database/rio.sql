-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 28, 2014 at 08:22 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rio`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `password` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `nama_lengkap` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `no_telp` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `level` varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT 'user',
  `blokir` enum('Y','N') COLLATE latin1_general_ci NOT NULL DEFAULT 'N',
  `id_session` varchar(100) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`, `nama_lengkap`, `email`, `no_telp`, `level`, `blokir`, `id_session`) VALUES
('rio', 'd5ed38fdbf28bc4e58be142cf5a17cf5', 'jatriyono', 'jatriyono@gmail.com', '06453224432', 'admin', 'N', '8fqjfot26nnnv6crjml7m3atg0');

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE IF NOT EXISTS `bank` (
  `id_bank` int(11) NOT NULL AUTO_INCREMENT,
  `nama_bank` varchar(50) NOT NULL,
  `rekening` varchar(30) NOT NULL,
  PRIMARY KEY (`id_bank`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id_bank`, `nama_bank`, `rekening`) VALUES
(1, 'BRI', ''),
(2, 'BCA', ''),
(3, 'Mandiri', ''),
(4, 'Danamon', ''),
(5, 'Mega', ''),
(7, 'Bank Jogja', ''),
(8, 'BNI', ''),
(9, 'Bank Kediri', ''),
(10, 'HSBC', ''),
(11, 'Bank Sumut', ''),
(12, 'Bank Aceh', ''),
(13, 'Bank Century', '');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `id_banner` int(5) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `url` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `gambar` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tgl_posting` date NOT NULL,
  PRIMARY KEY (`id_banner`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=18 ;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id_banner`, `judul`, `url`, `gambar`, `tgl_posting`) VALUES
(17, 'Wikipedia', 'http://id.wikipedia.org', '2AMALCOLM__t640.jpg', '2014-02-11');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE IF NOT EXISTS `barang` (
  `id_barang` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori` int(11) NOT NULL,
  `id_kota` int(11) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `harga` int(11) NOT NULL,
  `telphone` varchar(16) NOT NULL,
  `kondisi` varchar(18) NOT NULL,
  `status` char(20) NOT NULL,
  `blokir` enum('Y','N') NOT NULL,
  `deskripsi` text NOT NULL,
  `barang_seo` varchar(80) NOT NULL,
  `gambar` varchar(80) NOT NULL,
  `hot` varchar(80) NOT NULL,
  PRIMARY KEY (`id_barang`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `id_kategori`, `id_kota`, `nama_barang`, `harga`, `telphone`, `kondisi`, `status`, `blokir`, `deskripsi`, `barang_seo`, `gambar`, `hot`) VALUES
(1, 1, 1, 'Tas Kanvas', 75000, '0854252344', 'Baru', 'Y', 'N', 'Masih baru', '', 'boneka-hello-kitty.jpg', 'ya'),
(2, 2, 2, 'Boneka Hello Kitty', 85000, '08993656632', 'Baru', 'Y', 'N', 'Asli Sanrio', 'boneka-hello-kitty', 'boneka-hello-kitty.jpg', 'ya');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `subjek` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `pesan` text COLLATE latin1_general_ci NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=50 ;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `nama`, `email`, `subjek`, `pesan`, `tanggal`) VALUES
(46, 'tono', 'tono@yahoo.com', 'sukses full', 'sukses', '2014-02-24');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `id_kategori` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `link` varchar(50) NOT NULL,
  `kategori_seo` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `icon`, `link`, `kategori_seo`) VALUES
(1, 'Pakaian', 'icon-product-clothing icon-large', 'pakaian', 'pakaian'),
(2, 'Buku', 'icon-product-books icon-large', 'buku', ''),
(3, 'Fashion & Aksesoris', 'icon-product-fashion icon-large', 'fashion', ''),
(4, 'Kecantikan', 'icon-product-beauty icon-large', 'kecantikan', ''),
(5, 'Kesehatan', 'icon-product-health icon-large', 'kesehatan', ''),
(6, 'Rumah Tangga', 'icon-product-home-appliances icon-large', 'rumah_tangga', ''),
(7, 'Dapur', 'icon-product-kitchen-dining icon-large', 'dapur', ''),
(8, 'Perawatan Bayi', 'icon-product-baby icon-large', 'perawatan_bayi', ''),
(9, 'Handphone & Tablet', 'icon-product-phone-tablet icon-large', 'handphone', ''),
(10, 'Laptop & Aksesoris', 'icon-product-notebook icon-large', 'laptop', ''),
(11, 'Komputer & Aksesoris', 'icon-product-pc icon-large', 'komputer', ''),
(12, 'Elektronik', 'icon-product-electronics icon-large', 'elektronik', ''),
(13, 'Kamera, Foto & Video', 'icon-product-photography icon-large', 'kamera', ''),
(14, 'Otomotif', 'icon-product-automotive icon-large', 'otomotif', ''),
(15, 'Olahraga', 'icon-product-sports icon-large', 'olahraga', ''),
(16, 'Office & Stationery', 'icon-product-office-stationery icon-large', 'office', ''),
(17, 'Souvenir, Kado & Hadiah', 'icon-product-gift icon-large', 'souvenir', ''),
(18, 'Mainan & Hobi', 'icon-product-toys-hobbies icon-large', 'mainan', ''),
(19, 'Makanan & Minuman', 'icon-product-food-beverages icon-large', 'makanan', ''),
(20, 'Software', 'icon-product-softwares icon-large', 'software', ''),
(21, 'Film, Musik & Game', 'icon-product-movies-games-music icon-large', 'film', ''),
(22, 'Produk Lainnya', '', 'lainnya', '');

-- --------------------------------------------------------

--
-- Table structure for table `konfirmasi`
--

CREATE TABLE IF NOT EXISTS `konfirmasi` (
  `id_konfirmasi` int(11) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) NOT NULL,
  `pembayaran` text NOT NULL,
  PRIMARY KEY (`id_konfirmasi`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `konfirmasi`
--

INSERT INTO `konfirmasi` (`id_konfirmasi`, `id_member`, `pembayaran`) VALUES
(3, 1, '  Pembayaran Dari 8<br> Pada Tanggal 2014-05-12<br>No Rekening : 2424244<br> Atas Nama INDRA KUSUMA<br> Referal buty<br> Nominal 160000');

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE IF NOT EXISTS `kota` (
  `id_kota` int(3) NOT NULL AUTO_INCREMENT,
  `nama_kota` varchar(100) NOT NULL,
  PRIMARY KEY (`id_kota`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id_kota`, `nama_kota`) VALUES
(1, 'Jakarta'),
(2, 'Bandung'),
(3, 'Semarang'),
(4, 'Batang'),
(5, 'Aceh'),
(6, 'Banjarmasin'),
(7, 'Balikpapan'),
(8, 'Palembang'),
(9, 'Pontianak'),
(10, 'Solo'),
(11, 'Jambi'),
(12, 'Denpasar'),
(13, 'Cilacap'),
(14, 'Medan'),
(15, 'Bengkulu'),
(16, 'Yogyakarta'),
(17, 'Purwokerto'),
(18, 'Purbalingga'),
(19, 'Pagaralam'),
(20, 'Brebes');

-- --------------------------------------------------------

--
-- Table structure for table `laporan_iklan`
--

CREATE TABLE IF NOT EXISTS `laporan_iklan` (
  `id_laporan_iklan` int(5) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `tanggal` date NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id_laporan_iklan`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=55 ;

--
-- Dumping data for table `laporan_iklan`
--

INSERT INTO `laporan_iklan` (`id_laporan_iklan`, `id_member`, `id_produk`, `nama`, `email`, `keterangan`, `tanggal`, `nilai`) VALUES
(1, 1, 1, 'Sari', 'sari@gmail.com', 'Penipuan nih', '2014-06-28', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mainmenu`
--

CREATE TABLE IF NOT EXISTS `mainmenu` (
  `id_main` int(5) NOT NULL AUTO_INCREMENT,
  `nama_menu` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `link` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `aktif` enum('Y','N') NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`id_main`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `mainmenu`
--

INSERT INTO `mainmenu` (`id_main`, `nama_menu`, `link`, `aktif`) VALUES
(1, 'HOME', 'home', 'Y'),
(2, 'PROFIL ', 'profil', 'Y'),
(3, 'REHABILITASI', 'rehabilitasi', 'Y'),
(4, 'PERAWATAN', 'perawatan', 'Y'),
(5, 'PELAYANAN', 'pelayanan', 'Y'),
(6, 'TANYA JAWAB', 'tanya', 'Y'),
(8, 'SITEMAP', 'sitemap', 'Y'),
(7, 'GALLERY', 'gallery', 'Y'),
(9, 'PROMO', 'promo', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id_member` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nama` char(50) NOT NULL,
  `jkel` char(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telp` varchar(14) NOT NULL,
  `blokir` enum('Ya','Tidak') NOT NULL,
  `id_session` varchar(80) NOT NULL,
  `bbm` varchar(9) NOT NULL,
  `premium` varchar(5) NOT NULL DEFAULT 'TIDAK',
  `periode` int(2) NOT NULL,
  `pembayaran` text NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_member`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id_member`, `username`, `password`, `nama`, `jkel`, `email`, `telp`, `blokir`, `id_session`, `bbm`, `premium`, `periode`, `pembayaran`, `tanggal`) VALUES
(1, 'bobi', '12345', 'bobi', 'laki-laki', 'shh@yy.com', '08123908120', 'Tidak', '8fqjfot26nnnv6crjml7m3atg0', '7wert88', 'Ya', 365, '  Pembayaran Dari 7<br> Pada Tanggal 2014-05-12<br>No Rekening : 2424244<br> Atas Nama indra<br> Referal buty<br> Nominal 160000', '2014-06-28'),
(2, 'alex', '12345', 'alex ross', 'laki-laki', 'alex@gmail.com', '08157745666', 'Tidak', '', '2a567nn', 'TIDAK', 30, '', '0000-00-00'),
(3, 'rahmat', '12345', 'rahmat', 'laki-laki', 'rahmat@gmail.com', '08198878868', 'Tidak', '', '', 'TIDAK', 0, '', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `modul`
--

CREATE TABLE IF NOT EXISTS `modul` (
  `id_modul` int(5) NOT NULL AUTO_INCREMENT,
  `nama_modul` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `link` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `static_content` text COLLATE latin1_general_ci NOT NULL,
  `gambar` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `publish` enum('Y','N') COLLATE latin1_general_ci NOT NULL,
  `status` enum('user','admin','kustomer') COLLATE latin1_general_ci NOT NULL,
  `aktif` enum('Y','N') COLLATE latin1_general_ci NOT NULL,
  `urutan` int(5) NOT NULL,
  `link_seo` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id_modul`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=114 ;

--
-- Dumping data for table `modul`
--

INSERT INTO `modul` (`id_modul`, `nama_modul`, `link`, `static_content`, `gambar`, `publish`, `status`, `aktif`, `urutan`, `link_seo`) VALUES
(1, 'Member', '?module=member', '', '98user.png', 'N', 'admin', 'Y', 9, ''),
(2, 'Pengaturan Modul', '?module=modul', '', '89control_panel.png', 'N', 'admin', 'Y', 1, ''),
(3, 'Feedback', '?module=feedback', '', 'RefreshIcon.jpg', 'N', 'admin', 'Y', 10, ''),
(4, 'Manajemen User', '?module=user', '', '1karyawan.png', 'N', 'admin', 'Y', 2, ''),
(5, 'Rekap', '?module=rekap', '', 'book_next.png', 'N', 'admin', 'Y', 11, ''),
(6, 'Home', '?module=home', '', '98navbar.png', 'N', 'admin', 'Y', 0, ''),
(7, 'Logout', 'logout.php', '', '1exit.png', 'N', 'user', 'Y', 13, ''),
(8, 'Bank', '?module=bank', '', 'icon.png', 'N', 'admin', 'Y', 5, ''),
(9, 'Kota', '?module=kota', '', '97index.jpg', 'N', 'admin', 'Y', 6, ''),
(12, 'Laporan', '?module=laporan', '', '732.jpg.gif', 'N', 'user', 'Y', 8, ''),
(15, 'Kategori', '?module=kategori', '', '77categories32.png', 'N', 'admin', 'Y', 14, '');

-- --------------------------------------------------------

--
-- Table structure for table `pesan_email`
--

CREATE TABLE IF NOT EXISTS `pesan_email` (
  `id_pesan_email` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL,
  `subjek` varchar(50) NOT NULL,
  `pesan` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id_pesan_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `petunjuk`
--

CREATE TABLE IF NOT EXISTS `petunjuk` (
  `id_petunjuk` int(11) NOT NULL AUTO_INCREMENT,
  `isi_petunjuk` varchar(80) NOT NULL,
  `tampilkan` enum('Y','N') NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_petunjuk`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `petunjuk`
--

INSERT INTO `petunjuk` (`id_petunjuk`, `isi_petunjuk`, `tampilkan`, `tanggal`) VALUES
(1, 'Profil Perusahaan', 'Y', '2014-04-19');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE IF NOT EXISTS `produk` (
  `id_produk` int(11) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) NOT NULL,
  `keterangan` varchar(8) NOT NULL,
  `nama_produk` varchar(80) NOT NULL,
  `kondisi` varchar(7) NOT NULL,
  `id_kota` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `gambar` varchar(80) NOT NULL,
  `deskripsi` text NOT NULL,
  `tanggal` date NOT NULL,
  `produk_seo` varchar(80) NOT NULL,
  `hot` enum('YA','TIDAK') NOT NULL,
  `gambar2` varchar(80) NOT NULL,
  PRIMARY KEY (`id_produk`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `id_member`, `keterangan`, `nama_produk`, `kondisi`, `id_kota`, `id_kategori`, `harga`, `gambar`, `deskripsi`, `tanggal`, `produk_seo`, `hot`, `gambar2`) VALUES
(1, 1, 'jual', 'HG NU Gundam MAC MODEL', 'baru', 2, 18, 300000, 'MC_HGNuEvo_03.jpg', 'Baru, belum di rakit. \r\nCOD OK, Kirim2 ongkir ditanggung buyer.\r\nThanks.', '2014-05-12', 'HG-NU-Gundam-MAC-MODEL', 'YA', ''),
(2, 2, 'jual', 'CK Pink Filter', 'baru', 5, 1, 75000, '82pink_lifter.jpg', 'Baju bagus, murah.\r\nCOD OK, Ready size X, XL, S, M, XXL', '2014-05-12', 'CK-Pink-Filter', 'TIDAK', ''),
(3, 2, 'jual', 'OST Succker Punch', 'baru', 5, 21, 125000, 'ost_sp.jpg', 'CD Soundtrack Asli Succker Punch, NEW SEGEL\r\nIMPORT COLUMBIA RECORDS.\r\nJUAL MURAH GAN.', '2014-05-02', 'OST-Succker-Punch', 'TIDAK', ''),
(4, 2, 'jual', 'Komik Shin Mazinger Z Import', 'bekas', 5, 2, 95000, '0001.jpg', 'Dijual, komik mazinger z bahasa jepang, dijual karena ga ngerti sama bahasanya hehehehe..\r\nFisik 98% masih mulus.', '2014-05-12', 'Komik-Shin-Mazinger-Z-Import', 'TIDAK', ''),
(5, 2, 'jual', 'Tas Kanvas ', 'baru', 5, 3, 86000, '80view.jpg', 'Tas Kanvas, murah, bagus, nyaman, dan berkualitas', '2014-05-13', 'tas-kanvas', 'TIDAK', ''),
(6, 2, 'jual', 'Ferrari Polo ', 'baru', 5, 1, 367000, '85ferrari_red.jpg', 'Baju ferrari polo set sama topi, minat hubungi \r\n08123345588', '2014-05-01', 'ferrari-polo', 'YA', ''),
(7, 2, 'jual', 'Caviola Grey', 'baru', 5, 6, 50000, '86Caviola-Grey40x40-Tumb.jpg', 'Keramik Caviola Grey cocok untuk kamar mandi maupun indor,\r\nukuran 4x4.\r\nPengambilan quantity tentu harga lebih murah, dijamin.\r\nMinat hubungi 08776345455', '2014-05-13', 'caviola-grey', 'YA', ''),
(8, 2, 'jual', 'Asus Lamborgini P500', 'BARU', 9, 10, 23000000, 'P_500.jpg', 'Dijual laptop asus lamborgini p500 garansi 3 tahun astrindo.', '2014-05-13', 'p500', 'YA', ''),
(9, 1, 'jual', 'Kaos Olahraga Adidas, Reebok All Ori', 'baru', 5, 15, 400000, '16heart.jpg', 'bbbbbbb', '2014-05-21', '', 'TIDAK', '16heart.jpg'),
(10, 1, 'jual', 'Kaos Olahraga Adidas, Reebok All Ori Smua', 'baru', 3, 22, 400000, '6fbkj049.jpg', 'mmmmm', '2014-05-21', '', 'TIDAK', '9cq_brown.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `profil`
--

CREATE TABLE IF NOT EXISTS `profil` (
  `id_profil` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) NOT NULL,
  `profil` text NOT NULL,
  `tanggal` date NOT NULL,
  `publish` enum('Y','N') NOT NULL,
  PRIMARY KEY (`id_profil`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `profil`
--

INSERT INTO `profil` (`id_profil`, `judul`, `profil`, `tanggal`, `publish`) VALUES
(10, 'Pengenalan Website ', 'Website ini menyajikan informasi mengenai keberadaan armada taksi. Terimakasih.\r\n', '2014-03-01', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `slideshow`
--

CREATE TABLE IF NOT EXISTS `slideshow` (
  `id_slideshow` int(5) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `url` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `gambar` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tgl_posting` date NOT NULL,
  PRIMARY KEY (`id_slideshow`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `slideshow`
--

INSERT INTO `slideshow` (`id_slideshow`, `judul`, `url`, `gambar`, `tgl_posting`) VALUES
(21, 'Header1', '', '1.jpg', '2014-01-29'),
(22, 'Header2', '', '2.jpg', '2014-02-01'),
(23, 'Header3', '', '3.jpg', '2014-01-29'),
(24, 'Header4', '', '4.jpg', '2014-01-29');

-- --------------------------------------------------------

--
-- Table structure for table `submenu`
--

CREATE TABLE IF NOT EXISTS `submenu` (
  `id_sub` int(5) NOT NULL AUTO_INCREMENT,
  `nama_sub` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `link_sub` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `id_main` int(5) NOT NULL,
  PRIMARY KEY (`id_sub`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=221 ;

--
-- Dumping data for table `submenu`
--

INSERT INTO `submenu` (`id_sub`, `nama_sub`, `link_sub`, `id_main`) VALUES
(1, 'Rumah Sakit Ibu dan Anak', 'ibu-anak.html', 5),
(2, 'Laboratorium 24 Jam', '', 5),
(3, 'Medical Check Up', '', 3),
(4, 'Premarital Checkup', '', 3),
(5, 'Poliklinik', '', 5),
(6, 'Foto Bayi', 'bayi.html', 7),
(7, 'Farmasi', NULL, 5),
(8, 'Radiologi', NULL, 5),
(9, 'CT Scan', NULL, 5),
(10, 'Densitometri', NULL, 5),
(11, 'Audiometri', NULL, 5),
(12, 'Spirometri', NULL, 5),
(13, 'ECG-EGG', NULL, 5),
(14, 'Akupuntur', NULL, 5),
(15, 'Lingkungan RS', 'lingkungan.html', 7),
(16, 'Staff Kami', NULL, 7),
(17, 'Produk Unggulan', NULL, 7),
(18, 'Konsultasi Psikologi', NULL, 5),
(19, 'Vaksinasi Kangker Leher Rahim', NULL, 5),
(20, 'Pemeriksaan Patologi Anatomi', NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `supir`
--

CREATE TABLE IF NOT EXISTS `supir` (
  `id_supir` int(10) NOT NULL AUTO_INCREMENT,
  `nama_supir` varchar(255) NOT NULL,
  `status` text NOT NULL,
  `foto` varchar(255) NOT NULL,
  `lat` double NOT NULL,
  `lon` double NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `jkel` varchar(13) NOT NULL,
  `telp` varchar(15) NOT NULL,
  `tersedia` varchar(50) NOT NULL,
  PRIMARY KEY (`id_supir`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `supir`
--

INSERT INTO `supir` (`id_supir`, `nama_supir`, `status`, `foto`, `lat`, `lon`, `username`, `password`, `jkel`, `telp`, `tersedia`) VALUES
(1, 'Taxi 1', 'Longgar', 'taxi1.jpg', -7.7454985, 110.3549812, 'indra', 'indra', 'laki-laki', '085273392008', 'taxi1.jpg'),
(2, 'Taxi 2', 'Lagi Antar penumpang', 'taxi2.jpg', -7.7454992, 110.3549813, 'tyas', 'tyas', 'laki-laki', '088854648007', 'taxi1.jpg'),
(12, 'Jacko', 'Kustomer', 'Star_icon_1.png', -7.7454985, 110.3549812, 'Jacko', 'kustomer', 'laki-laki', '08723111132', 'taxi1.jpg'),
(13, 'bayu', '-', '692dyXm4R.jpg', 110.38879, -7.80605, '', '', 'Laki-laki', '081333333', 'taxi1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE IF NOT EXISTS `tracking` (
  `id_track` int(5) NOT NULL,
  `nama` varchar(25) DEFAULT NULL,
  `no_tracking` varchar(25) DEFAULT NULL,
  `id_orders` int(5) DEFAULT NULL,
  `jasa_pengiriman` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_track`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tracking`
--

INSERT INTO `tracking` (`id_track`, `nama`, `no_tracking`, `id_orders`, `jasa_pengiriman`) VALUES
(0, 'indra kusuma', '5678943', 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ym`
--

CREATE TABLE IF NOT EXISTS `ym` (
  `id_ym` int(3) NOT NULL AUTO_INCREMENT,
  `ym` varchar(30) NOT NULL,
  PRIMARY KEY (`id_ym`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
