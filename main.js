// main.js
window.addEventListener('DOMContentLoaded', init);
TrackJS.track('Testing TrackJS!');
                        
class Error {
    constructor(message) {
        this.message = message;
        this.name = "MyCustomError";
    }
}

async function init() {
    let buttons = document.getElementsByTagName('button');
    
    for(let i = 0; i < buttons.length; i++) {
        let type = buttons[i].innerText;

        if(type == "Console Log") {
            buttons[i].addEventListener('click', log);
        }
        else if(type == "Calculate") {
            buttons[i].addEventListener('click', mightMaybeWordButProbablyNot);
        }
        else if(type == "Console Error") {
            buttons[i].addEventListener('click', error);
        }

        else if(type == "Console Count") {
            buttons[i].addEventListener('click', count);
        }

        else if(type == "Console Warn") {
            buttons[i].addEventListener('click', warn);
        }

        else if(type == "Console Assert") {
            buttons[i].addEventListener('click', assert);
        }

        else if(type == "Console Clear") {
            buttons[i].addEventListener('click', clear);
        }

        else if(type == "Console Dir") {
            buttons[i].addEventListener('click', dir);
        }

        else if(type == "Console dirxml") {
            buttons[i].addEventListener('click', dirxml);
        }

        else if(type == "Console Group Start") {
            buttons[i].addEventListener('click', groupStart);
        }

        else if(type == "Console Group End") {
            buttons[i].addEventListener('click', myGroupEnd);
        }

        else if(type == "Console Table") {
            buttons[i].addEventListener('click', table);
        }

        else if(type == "Start Timer") {
            buttons[i].addEventListener('click', startTimer);
        }

        else if(type == "End Timer") {
            buttons[i].addEventListener('click', endTimer);
        }

        else if(type == "Console Trace") {
            buttons[i].addEventListener('click', trace);
        }

        else if(type == "Trigger a Global Error") {
            buttons[i].addEventListener('click', triggerGlobalError);
        }
    }
}

function log() {
    console.log("Hello World!");
}

function error() {
    console.error("This is an error message");
}

function count() {
    console.count("somethingCountable");
}

function warn() {
    console.warn("This is a warning!");
}

function assert() {
    const x = 1;
    const y = 2;
    const reason = "one is less than two"
    console.assert(x > y, {x, y, reason});
}

function clear() {
    console.clear();
}

function dir() {
    console.dir(document.head);
}

function dirxml() {
    console.dirxml(document);
}

function groupStart() {
    const label = "this is a group label";
    console.group(label);
}

function myGroupEnd() {
    const label = "this is a group label";
    console.groupEnd(label);
}

function table() {
    let buttons = document.getElementsByTagName('button');
    console.table(buttons);
}

function startTimer() {
    console.time();
}

function endTimer(){
    console.timeEnd();
}

function trace() {
    console.trace();
}

function triggerGlobalError() {
    let error = new Error("oops, global error here");
    throw error;
}