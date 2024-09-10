// JavaScript code from earlier
function keyGenerate(txt, key) {
    console.log("Thank you for generating your public key ......!!");
    console.log(" ");
    let tk = (((key * (key % 10)) + (txt.length % 10)) % 26);
    let txt2 = txt;
    console.log("Key value changed and privatised successfully !! ");
    console.log(" ");
    entry(txt2, tk, key);
}

function entry(txt, tk, key) {
    let arr = Array.from(txt).map(c => c.charCodeAt(0));
    let finalKey = tk - txt.length + key;
    arr = arr.map(val => val + finalKey);

    let enc = String.fromCharCode(...arr);
    document.getElementById('output').innerHTML = "Encrypted text: " + enc;

    let a = [...arr, tk - key, key, txt.length];
    decrypt(a);
}

function decrypt(arr) {
    let len = arr[arr.length - 1];
    let newKey = arr[len] + arr[len + 1];
    let decryptedArr = arr.slice(0, len).map(val => val - (newKey - len + arr[len + 1]));
    
    let dnc = String.fromCharCode(...decryptedArr);
    document.getElementById('output').innerHTML += "<br>Decrypted text: " + dnc;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', () => {
        let txt = document.getElementById('message').value;
        let key = parseInt(document.getElementById('key').value);
        keyGenerate(txt, key);
    });
});
