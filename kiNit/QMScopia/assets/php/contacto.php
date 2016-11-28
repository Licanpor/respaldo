<?php
if($_POST)
{
    $to_Email_test  = 'cesar@kinit.mx';
    $to_Email       = 'contacto@qualityms.com.mx';
    $subject        = '[CONTACTO QMS] '; 
    
    
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    
        //exit script outputting json data
        $output = json_encode(
        array(
            'type'=>'error', 
            'text' => 'Request must come from Ajax'
        ));
        
        echo($output);
    } 
    
    //check $_POST vars are set, exit if any missing
    if(!isset($_POST["userMessage"]) || !isset($_POST["userEmail"]) || !isset($_POST["userName"]))
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Error!'));
        echo($output);
    }

    //Sanitize input data using PHP filter_var().
    $user_Message = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
    $user_Email = filter_var($_POST["userEmail"], FILTER_SANITIZE_STRING);
    $user_Name = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Phone     = filter_var($_POST["userPhone"], FILTER_SANITIZE_STRING);
    
    //additional php validation
    if(strlen($user_Message)<3) //check emtpy message
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Escribe un mensaje por favor.'));
        echo($output);
    }
    
    //proceed with PHP email.
    
    require_once "Mail.php";


	$host = "ssl://smtp.gmail.com:465";
	$username = 'servicio@qualityms.com.mx';
	$password = 'qualityms2015';
	
	$subject = '[CONTACTO] '.$user_Email;
	$body = $user_Message."\n\n".'Enviado por: '.$user_Name."\n".'Correo: '.$user_Email."\n".'Teléfono de contacto: '.$user_Phone;
	
	$headers = array ('From' => $user_Email, 'To' => $to_Email_test,'Subject' => $subject);
	
	$smtp = Mail::factory('smtp',
	  array ('host' => $host,
	    'auth' => true,
	    'username' => $username,
	    'password' => $password));
	
	$mail = $smtp->send($to_Email, $headers, $body);
	
	if(!$mail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Hubo un error con el envío de tu mensaje.<br><br>Por favor, intente de nuevo más tarde.'));
        echo($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => '¡Gracias por su mensaje!<br><br>En breve, un agente de Quality Medical Service se contactará con usted.'));
        echo($output);
	}

    /*
    Incase your host only allows emails from local domain, 
    you should un-comment the first line below, and remove the second header line. 
    Of-course you need to enter your own email address here, which exists in your cp.
    
    //$headers = 'From: info@gmasa.com.mx' . "\r\n" .
    $headers = 'From: '.$user_Name.' ('.$user_Email.')'."\r\n" . //remove this line if line above this is un-commented
    //'Reply-To: '.'info@gmasa.com.mx'.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
        // send mail
    $sentMail = @mail($to_Email_test, $subject, $user_Message, $headers);
    
    if(!$sentMail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        echo($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Tu mensaje ha sido enviado.'));
        echo($output);
    }
	*/
}
?>

