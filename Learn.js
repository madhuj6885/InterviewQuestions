let s = "abbbccdeef";     //o/p > ab3c2de2f;

let result = "";
//ab

for(let i=0; i<s.length; i++) {
    count = 1;//2

    if(result.includes(s[i])){

        count++;
        result += count;

    } else {
        result += s[i];
    }
}
console.log(result);
