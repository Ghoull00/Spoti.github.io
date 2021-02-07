app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });


fetch("https://api.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF")
.then(data => data.json())
.then(data => console.log(data))