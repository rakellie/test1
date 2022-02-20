function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function (res) {
        console.log(res.message);
        //find that image, going to style (HAS to be style) with specific attribute, set the value of res.message into url 
        document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
     })
}

function getSpecificDog() {
    const name = document.querySelector('#dog-name').value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function (res) {
        if (res.status === 'error') {
            //alert("sad no dog found");
            document.querySelector('#error-message').style.visibility='visible';
        } else {
            console.log(res.message);
            //find that image, going to style (HAS to be style) with specific attribute, set the value of res.message into url 
            document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
            document.querySelector('#error-message').style.visibility='hidden';
        }
     }) 
}


document.querySelector('#dog-name').addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
        const name = document.querySelector('#dog-name').value;
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => res.json())
        .then(function (res) {
            if (res.status === 'error') {
                //alert("sad no dog found");
                document.querySelector('#error-message').style.visibility='visible';
            } else {
                console.log(res.message);
                //find that image, going to style (HAS to be style) with specific attribute, set the value of res.message into url 
                document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
                document.querySelector('#error-message').style.visibility='hidden';
            }
        }) 
    } 
 });
