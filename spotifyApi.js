const token = "BQD6SUXdLCjfICzF8QuW6czLp6yqrKTSDY3KO5-_JqJp1_GWrVD8Z8dxhwNnm8hGGr4fxDzAuTJE89gABgFtVi45Gdtm9bW67ug8f77nQCfCUySJR-IpP6HzE29uDssyoqd-2L7Ti7vA-ArfAZAvodg_Ag"

function artists(){
    fetch("https://api.spotify.com/v1/artists/4jpaXieuls7LVzG1uma5Rs",{
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(request => request.json())
    .then(data => document.getElementById("artist_id").innerHTML = data.name)
/*
    fetch("https://api.spotify.com/v1/artists/4jpaXieuls7LVzG1uma5Rs/albums",{
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(request => request.json())
    .then(data => {

    })*/
}

fetch("https://accounts.spotify.com/api/token",{
    method: "POST",
    headers: {
        'Authorization': 'Basic NzEyODM2NzUxYjdlNDIxNWJmNWJlZGQ3ZGZlN2FhZTI6ZmY1Y2MwZDY5MjBiNDRkNTkxYjFiMGZhZWQzN2UwOWM='
    },
    body: {
        'grant_type': "refresh_token",
        'refresh_token': "AQDmYSMtWSvHPc9kE1bobQavK1gPu-2Gr1z8OnKVLez7UfzLDDq_Mewi0AZ1lNTZTvaTWpgPNvzhV1cq53-kAag8tvPDzPXsi5GbsXhtK7MJEYPjZUrB8mEO9OiwpmIiXJI"
    },
}).then(request => request.json())
.then(data => console.log(data))

