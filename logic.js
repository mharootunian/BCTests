$.ajax ({
    method: "GET",
    url: "https://api.twitter.com/oauth2/token",
    data: "grant_type=client_credentials",
    user: "EFRoCsMwQ4ZpqZF2oUzidrGg1:x2E0E3qH3rcSc4ZuMF52IVDCTqNwOw4BN8Uqj4B6V4byIgqCSC"
}).then(function(response) {
    console.log(response)
}, function(errResponse) { 
    console.log(`Error: ${errResponse}`)
})