var userTokens = 0;
var colorsArr = ["black", "red"]

$(".getTokensBtn").on("click", function(e) {
    e.preventDefault()
    userTokens = 200;
    $("#myTokens").html("My Tokens: " + userTokens)
    $(".betForm").append("<form>" + "<h5>Place Your Bet</h5>" +
    "<div id = 'chooseColor'><label for='color'>Choose Color</label>" +
    "<input type='text' id='color'></div>" +
    "<div id = 'chooseNumber'><label for='number'>Choose number 0 - 36</label>" +
    "<input type='number' id='number' min='0' max='36'></div>" +
    "<div id = 'placeBet'><label for='bet'>Bet amount</label>" +
    "<input type='number' id='bet' min='1' max='200'></div>" +
    "<button id='submitBet'>Bet</button>" +
    "</form>")


$("#submitBet").on("click", function(e) {
    e.preventDefault()
    if(userTokens === 0) {
        alert("Please get tokens first!")
    } else {
        var winningNumber = Math.floor(Math.random() * 37)
        var winningColor = colorsArr[Math.floor(Math.random()*colorsArr.length)]
        var colorGuess = $("#color").val().toLowerCase();
        var numberGuess = parseInt($("#number").val());
        var userBet = parseInt($("#bet").val());
        $("#winningNumber").html("Winning Number: " + winningNumber)
        $("#winningColor").html("Winning Color: " + winningColor)
        console.log(colorGuess)
        console.log(winningColor)
        console.log(numberGuess)
        console.log(winningNumber)

        if(colorGuess == winningColor && numberGuess === winningNumber) {
            userTokens += userBet
            $("#myTokens").html("My Tokens: " + userTokens)
        } else {
            userTokens = userTokens - userBet
            $("#myTokens").html("My Tokens: " + userTokens)
        }
    }
})
})