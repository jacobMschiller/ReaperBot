(function() {
    function getTime(){ //Get timer from jQuery selector
        const count = $("#last-reap")[0].textContent.split(' '); //get time and set into text array
        if(count.length === 4){ // count = [num_min: str]['minutes, '][num_sec: str]['seconds, ']
            return parseInt(count[0], 10) * 60 + parseInt(count[2], 10); //minutes val to base10, multiply by 60 and add to seconds val for seconds
        } else if(count.length === 2 && ((count[1] == "minute") || (count[1] == "minutes"))){
            return parseInt(count[0], 10) * 60;
        } else if(count.length === 6){
            return parseInt(count[0], 10) * 3600 + parseInt(count[2], 10) * 60 + parseInt(count[4], 10);
        } else if(count.length === 2 && ((count[1] == "hour") || (count[1] == "hours"))){
            return parseInt(count[0], 10) * 3600;
        }
        return parseInt(count[0], 10); //else return just pure seconds
    }
    (function awaitTimeAndReap(n, f){ //params: n is time for reap (s), f is time for free reap (s)
        setInterval(() => {
            try{
                const TIMER = getTime();
                console.log("Current time: " + TIMER);
                if($("#reap-button-container").is(':visible') && TIMER >= n){
                    $("#reap-button").click();
                    console.log("Reaped!");
                } else if($("#free-reap-container").is(':visible') && TIMER >= f){
                    $("#free-reap-container").click();
                    console.log("Free Reaped!");
                }
            } catch(e) {
                console.err(e);
            } finally {
                (OBS=>new MutationObserver(_=>document.title=OBS.html()).observe(OBS[0],{childList:1}))($('#last-reap')) //Display curr time as tab title
            }
        }, 200);
    })(100, 400); //change these vals (in seconds) if you want.
})();
