// TODO: Get starting costs and multipliers from API
let values = {}

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "api/getStartingValues.php",
        dataType: "json",
        success: function(data, status) {
            values = data;
        }
    })
})