function fruit(){
    let ageVideo = prompt("What's your age ?");
    switch (ageVideo) {
    case '12':
        document.getElementById('show').innerHTML = `<p>${ageVideo}</p>`;
        console.log("Your age is 12" + "\r\n");
        
        // break;

    case '13':
        console.log("Your age is 13" + "\r\n");
        // break;

    case '14':
        console.log("Your age is 14" + "\r\n");
        // break;

    case '15':
        console.log("Your age is 15" + "\r\n");
        // break;

    default:
        console.log(`Your age ${ageVideo} is not match` + "\r\n");
    }
}

function refresh(){
    window.location.reload();
}