 $(document).ready(function () {
            $("button").click(function () {
                $("#indianStatesInfo").load("data/indianStates.json", function(responseText){
                    var indianState = JSON.parse(responseText);
                    $("#indianStatesInfo").html(indianState.states[1].state.state_id);
                });
            });
        });
