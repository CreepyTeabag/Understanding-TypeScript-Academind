var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // error
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError("An error occurred!", 500);
