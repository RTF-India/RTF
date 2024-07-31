
        function search_animal() {
        let input = document.getElementById('searchbar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('animals');
        
        for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
        }
        else {
        x[i].style.display="list-item";                 
        }
        }
        }
        if ('webkitSpeechRecognition' in window) {
        // Web Speech API is supported
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false; // Set to true for continuous recognition
        recognition.interimResults = true; // Get interim results as the user speaks
        
        recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchbar').value = transcript;
        };
        
        recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        };
        
        // Start recognition when the user clicks the button
        function startRecognition() {
        recognition.start();
        }
        } else {
        console.error('Web Speech API is not supported in this browser.');
        }
        function create(){
        document.write("<center><h2><p style='color:red'>click the upload button and mail the img/video link</p></h2><a href='mailto:rtf522279@gmail.com'><button> UPLOAD </button></a> <style> button{ text-decoration:none; width:80%; height:50px; text-align: center; background-color:rgba(46,251,252,0.2);}</style>");
        }
        function feedback(){
        document.write("<center> <form action='https://api.web3forms.com/submit' method='POST'><input type='hidden' name='access_key' value='dbae3c07-828e-4139-b139-36503d392225'><label for='email' style='color:white;'>Email </label><input type='text' name='email' placeholder='enter email...' required> </input> <label for='message' style='color:white;'> message </label><textarea name='massage' required> </textarea> <button>SEND</button></form><style> button{width:100%; height:45px; background: linear-gradient(90deg,red,blue); font-size:30px; color:white;}input{width:100%; height:45px; font-size:35px; color:white; } textarea{width:100%; color:white; font-size:35px; height:400px;} body{background-color:black;} </style>");
        }
        // Check if the browser supports the Web Speech API
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
        // Create a new instance of SpeechRecognition
        const recognition = new SpeechRecognition();
        recognition.continuous = false; // Set to false for single commands
        recognition.lang = 'en-US'; // Set the language of the recognition
        
        // Handle the start of speech recognition
        recognition.onstart = function() {
        console.log('Speech recognition started. Speak now!');
        };
        
        // Handle the results of speech recognition
        recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.trim().toLowerCase();
        console.log('Recognized command:', command);
        
        // Perform action based on the recognized command
        if (command === 'open google') {
        window.open('https://www.google.com', '_blank');
        }
        // Add more commands here
        if (command ==='open minecraft'){
        window.open('minecraft://','_blank'); }
        if (command ==='open free fire'){
        window.open('freefire://','_blank');}
        if (command ==='open youtube'){
        window.open('https://www.youtube.com');}
        if (command ==='open Instagram'){
        window.open('https://www.instagram.com');}
        if (command ==='open facebook'){
        window.open('https://www.facebook.com');}
        };
        
        // Handle any errors
        recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        alert('Error occurred in recognition: ' + event.error);
        };
        
        // Get the speak button and add an event listener
        const ai = document.getElementById('ai');
        ai.addEventListener('click', function() {
        recognition.start(); // Start speech recognition
        });
        } else {
        console.error('Your browser does not support the Web Speech API');
        alert('Your browser does not support the Web Speech API');
        }
        function VIP(){ document.write("<center> <p style='color:green'>WELCOME </p<");
        }
        function server(){
        document.write("<center><h1> <p style='color:red'>Servers</p></h1><h2><p style='color:skyblue'> Aternos</p></h2><a href='www.aternos.com'>GO</a> ");
        }
        
        
        