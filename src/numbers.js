import react from 'react';
import axios from 'axios';

console.log(document.URL);
let value = document.URL;
let paramString = value.split('?')[1];
let params_arr = paramString.split('&');
for(let i = 0; i < params_arr.length; i++) {
    let pair = params_arr[i].split('=');
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
}
        
function Numbers()
{
    return (
    <div>
        <h1>numbers</h1>
    </div>
    )
}

export default Numbers;