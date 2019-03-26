// TODO: Get starting costs and multipliers from API
let values = {}

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "api/getStartingValues.php",
        dataType: "json",
        success: function(data, status) {
            setValues(data);
        }
    })
})

function setValues(v) {
    values['generalMultiplierCost'] = BigInt(v.generalMultiplierCost);
    values['generalMultiplier'] = BigInt(v[0].generalMultiplier);
}