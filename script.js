// Downloading and preparing the rsaLibrary
// The rsaLibrary depends on these objects and they must be instantiated before using the rsaLibrary object.
var navigator = {};
var window = {};
if(!pm.globals.has("rsaLibrary")){
    pm.sendRequest("https://kjur.github.io/jsrsasign/jsrsasign-all-min.js", function (err, res) {
    if (err){
        console.log(err);
    }
    else {
        pm.globals.set("rsaLibrary", res.text());
    }})
}
eval(postman.getGlobalVariable("rsaLibrary"));

// Encrypting {YOUR-PLAIN-TEXT} using {YOUR-PUBLIC-KEY} ... 
const plainPublicKey = postman.getEnvironmentVariable("YOUR-PUBLIC-KEY");
const stringToEncrypt = postman.getEnvironmentVariable("YOUR-PLAIN-TEXT");

const publicKey = KEYUTIL.getKey(plainPublicKey)
const encryptedHex = KJUR.crypto.Cipher.encrypt(stringToEncrypt, publicKey, "RSA")
const encryptedBase64 = hextob64(encryptedHex);

// Setting the encrypted value to {YOUR-HEADER-NAME} request header
const Header = require('postman-collection').Header;
pm.request.headers.add(new Header("YOUR-HEADER-NAME: " + encryptedBase64));
