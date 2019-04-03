 $(document).ready(function () {
            $("button").click(function () {
                $("#indianStateName").load("data/indianStates.json", function(responseText){
                    var indianState = JSON.parse(responseText);
                    console.log(indianState.states);

                    var htmlString = "";
                    for (var j = 0; j < indianState.states.length; j ++) {
                        console.log(j);
                        htmlString = htmlString + "<tr>" + "<td>" + indianState.states[j].state.state_name + "</td>" + "<td>" + indianState.states[j].state.state_id + "</td>" + "</tr><br>"
                        //$("#indianStateName").html("Indian State name: " + indianState.states[j].state.state_name);
                        //$("#indianStateAbbrev").html("Indian State name: " + indianState.states[j].state.state_id);
                    }

                    $("#indianStateName").html(htmlString);

                });
            });
        });



//$("#indianStateName").html("Indian State name: " + indianState.states[0].state.state_name + "<br>Abbreviation: " + indianState.states[0].state.state_id);
