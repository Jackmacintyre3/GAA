const e = require("cors");

$("document").ready(function(){

    $.getJSON("http://localhost:3000/teams", function(data){
        console.log(data);
        $.each(data, function(i, value){
            $("#playersDropdown").append("<option value = ' " + value.ID + " ' >" + value.name + "</option>");
        });
    });

    $.getJSON("http://localhost:3000/players", function(data){
        console.log(data);
        $.each(data, function(i, value){
            $("#myTable").append("<tr> <td>" + value.name + "(#" + value.squadNumber + ")</td>" + "<td> <img src = 'logos/" + value.ID + ".webp'> " + value.teamName + "</tr>");
        });
    });

    $("#playersDropdown").on("change", function(){
        var option = $("#playersDropdown").val();
        $("#myTable").empty();

        if(option == "*")
        {
            $.getJSON("http://localhost:3000/players", function(data){
                console.log(data);
                $.each(data, function(i, value){
                $("#myTable").append("<tr> <td>" + value.name + "(#" + value.squadNumber + ")</td>" + "<td> <img src = 'logos/" + value.ID + ".webp'> " + value.teamName + "</tr>");
                });
            });
        }

        else
        {
            console.log(options);
            $.getJSON("http://localhost:3000/players", function(data){
                console.log(data);
                $.each(data, function(i, value){
                $("#myTable").append("<tr> <td>" + value.name + "(#" + value.squadNumber + ")</td>" + "<td> <img src = 'logos/" + value.ID + ".webp'> " + value.teamName + "</tr>");
                });
            });
        }
        
    });
});

