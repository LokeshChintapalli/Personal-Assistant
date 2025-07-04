let btn=document.getElementById("btn");
let content=document.getElementById("content");
let load = document.getElementById("load")
function speak(text)
{
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=0.7;
    text_speak.pitch=2;
    text_speak.volume=1;
    
    window.speechSynthesis.speak(text_speak);
}
function wishMe()
{
    let day=new Date();
    let hour=day.getHours();
    if(hour>=0 && hour<12)
    {
        speak("Good Morning Lokesh , what's app");
    }else if( hour>=12 && hour<16)
    {
        speak("Good Afternoon Lokesh , what's app");
    }
    else{
        speak("Good Evening Lokesh , what's app");
    }
}


window.addEventListener("load",()=>{
    wishMe();
});

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.textContent=transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.classList.add("d-none");
    load.classList.remove("d-none");
})
function takeCommand(message){
    btn.classList.remove("d-none");
    load.classList.add("d-none");
    if(message.includes("hello")|| message.includes("hi") || message.includes("hey")){
        speak("Hello Lokesh , How can I assist you today");
    }
    else if(message.includes("who are you") || message.includes("created"))
    {
        speak("I am your presonal assistant, created by lokesh chintapalli");
    }
    else if(message.includes("open youtube"))
    {
        speak("opening youtube...");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("open google"))
    {
        speak("opening google...");
        window.open("https://www.google.com/","_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");
    }
    
    else if(message.includes("date"))
    {
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date);
    }
    else if(message.includes("time"))
    {
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    }
    else{
        speak(`these is i have found on internet about ${message} `);
        window.open(`https://www.google.com/search?q=${message}`,"_blank");
    }
}