 <?php
require 'PHPMailer/PHPMailerAutoload.php';
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

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

$mail->MsgHTML("Masa aktif Anda sebagai premium Member telah habis. Silahkan memilih paket premium Anda jika ingin berlangganan premium Member.");

$address = "shinobi780@gmail.com";
$mail->AddAddress($address, "MYName");
$mail->Send();


if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} 
else {
echo "Message sent!";
}

?>