 <?php
require 'PHPMailer/PHPMailerAutoload.php';
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded
include "../../../config/koneksi.php";
$wer=mysql_query("SELECT * FROM member WHERE id_member='1'");
$x=mysql_fetch_array($wer);

$mail             = new PHPMailer();

//$body             = file_get_contents('contents.html');
//$body             = eregi_replace("[\]",'',$body);

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "mail.google.com"; // SMTP server
                                           // 1 = errors and messages
                                           // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "tls";                 // sets the prefix to the servier
$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
$mail->Port       = 587;                   // set the SMTP port for the GMAIL server
$mail->Username = "ryo.zeroz@gmail.com";
$mail->Password = "segotiwul";

$mail->SetFrom('ryo.zeroz@gmail.com', 'Admin Warung Online');

$mail->Subject    = "FeedBack";

$mail->MsgHTML("Terimakasih, akun premium Anda sudah aktif.");

$address = "$x[email]";
$mail->AddAddress($address, "MYName");
$mail->Send();


if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} 
else {
echo "Message sent!";
}

?>