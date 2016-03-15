<html>
   <head>
 
       <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
       <script type="text/javascript" src="js/jquery-ui-1.8.17.custom.min.js"></script>
       <link rel="stylesheet" type="text/css"
        href="css/jquery-ui.css" />
       <script type="text/javascript">
               $(document).ready(function(){
                     $("#date").datepicker();
               });
       </script>
   </head>
 
   <body>
        <form method="post" action="">
               Date of Birth : <input type="text" name="date" id="date"/>
        </form>
   </body>
</html>