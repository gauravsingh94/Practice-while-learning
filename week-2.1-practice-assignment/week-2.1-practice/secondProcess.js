function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callbackfn(result)
{
    result.json().then(logResponseBody)
}

var sendObject = {
    methord:"Get"
}
fetch("http://localhost:3000/sum?counter=12",sendObject).then(callbackfn)
