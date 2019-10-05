$.ajax ({
    method: "GET",
    url: "https://api.twitter.com/oauth2/token",
    data: "grant_type=client_credentials",
}).then(function(response) {
    console.log(response)
})