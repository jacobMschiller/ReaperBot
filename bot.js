(function() {
    function getTime(){ //function to get time in seconds
        const count = document.querySelector('#last-reap').textContent.split(' '); 
        if(count.length === 4){ 
            return parseInt(count[0], 10) * 60 + parseInt(count[2], 10); 
        } else if(count.length === 2 && ((count[1] == "minute") || (count[1] == "minutes"))){
            return parseInt(count[0], 10) * 60;
        } else if(count.length === 6){
            return parseInt(count[0], 10) * 3600 + parseInt(count[2], 10) * 60 + parseInt(count[4], 10);
        } else if(count.length === 2 && ((count[1] == "hour") || (count[1] == "hours"))){
            return parseInt(count[0], 10) * 3600;
        }
        return parseInt(count[0], 10); //else return just pure seconds
    }
    (function awaitTimeAndReap(n, f){ //function to reap at specified time n and free reap at specified time f.
        setInterval(() => {
            try{
                const TIMER = getTime();
                console.log("Current time: " + TIMER);
                if(document.querySelector('#reap-button-container').style.display !== 'none' && TIMER >= n){
                    document.querySelector('#reap-button').click();
                    console.log("Reaped!");
                } else if(document.querySelector('#free-reap-container').style.display !== 'none' && TIMER >= f){
                    document.querySelector('#free-reap-container').click();
                    console.log("Free Reaped!");
                }
            } catch(e) {
                console.err(e);
            } finally {
                (OBS=>new MutationObserver(_=>document.title=OBS.html()).observe(OBS[0],{childList:1}))($('#last-reap')) //Display curr time as tab title
            }
        }, 200);
    })(100, 400); //change these vals (n, f) (in seconds) if you want.
})();
