<?
require_once "PHPMailer/class.phpmailer.php";
$to = "shinobi780@gmail.com";
$host = "ssl://smtp.gmail.com";
$port = "465";
$username = "ryo.zeroz@gmail.com";
$password = "segotiwul";

//Sesuaikan parameter diatas dengan akun anda, bisa juga menggunakan Google Apps for Domain, selanjutnya kita akan coba mengambil data dari inputan form HTML sebelumnya:

$nama = $_POST['nama']; // required
		$pengirim = $_POST['email']; // required
		$subjek = $_POST['subjek']; // required
		$pesan = $_POST['pesan']; // required

$email_message .= "Name: ".$nama."\n";
		$email_message .= "Email: ".$pengirim."\n";
		$email_message .= "Telephone: ".clean_string($telpon)."\n";
		$email_message .= "Subject: ".clean_string($subjek)."\n";
		$email_message .= "Comments: ".clean_string($pesan)."\n";

//anda sesuaikan saja dengan kebutuhan di form yang anda miliki.

$headers = array ('From' => $pengirim,
'To' => $to,
'Subject' => $subjek);        

$smtp = Mail::factory('smtp',
array ('host' => $host,
'port' => $port,
'auth' => true,
'username' => $username,
'password' => $password));        

$mail = $smtp->send($to, $headers, $email_message);
if (PEAR::isError($mail))
{
echo("<p>" . $mail->getMessage() . "</p>");}
else {
header('Location: store');
}
?>

