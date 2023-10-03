/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document
    .getElementById("confirmClickActionElementId")
    .addEventListener("click", function( e ){ //e => event
        if( ! confirm("Do you really want to do this?") ){
            
            e.preventDefault(); // ! => don't want to do this
            window.location.href='/contact'; 
        } else {
            window.location.href='/';
            //want to do this! => maybe do something about it?
            //want to do this! => maybe do something about it?
           
            
        }
    });

   
