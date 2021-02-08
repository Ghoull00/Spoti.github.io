const token = "BQBO9atsclNGsv4_X9yt3ADrIEGaB7AbkbnXoNIjjjDs3EYQIeI4jX1rhpRzJEiEvQnwH87RIj7hhX25bRdkmVxfVkBDNTpf5wsHiAQX02LtIKo_fA5fWj7cDCmYl0Ctz6F4kc-TaIDoFHXIod4b6rNDPw"


fetch("https://accounts.spotify.com/api/token",{
    method: "POST",
    headers: {
        'Authorization': 'Basic NzEyODM2NzUxYjdlNDIxNWJmNWJlZGQ3ZGZlN2FhZTI6ZmY1Y2MwZDY5MjBiNDRkNTkxYjFiMGZhZWQzN2UwOWM='
    },
    body: JSON.stringify({
        'grant_type': "client_credentials",
        'refresh_token': "AQDmYSMtWSvHPc9kE1bobQavK1gPu-2Gr1z8OnKVLez7UfzLDDq_Mewi0AZ1lNTZTvaTWpgPNvzhV1cq53-kAag8tvPDzPXsi5GbsXhtK7MJEYPjZUrB8mEO9OiwpmIiXJI"
    }),
}).then(request => request.json())
.then(data => console.log(data))