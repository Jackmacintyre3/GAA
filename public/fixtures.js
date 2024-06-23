$("document").ready(function(){
    $.getJSON("http://localhost:3000/fixtures/", function(data){
        console.log(data);
        $.each(data, function(i, value){
            $("#tbody").append("<tr><td>"+value.datetime+
            "</td><td>" + value.round + "</td><td>" + value.group +
            "</td><td><img src=logos/" + value.hTeamID + ".webp width=25px height=20px></td><td>" +
            value.hTeam + "</td><td>" + value.hTeamScore + "</td><td>" + value.sTeamScore + "</td><td>" +
            value.aTeam + "</td><td> <img src=logos/" +
            value.aTeamID + ".webp width=25px height=20px></td><td>" + value.stadium +"</td><td>");
        });
    });
});