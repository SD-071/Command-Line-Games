function isVowel(s)
{
    const regex = /^[aeiouAEIOU]$/;
    return regex.test(s); // a bit overkill
}

function convertWord(w) {
    w=w.trim(); // remove white space at both ends

    if (w.length>=2) {

        const isCap= (w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase());

        if (!isVowel(w[0]) && isVowel(w[1])) {
            w =  w.slice(1) + w[0].toLowerCase() + "ay";
        } else
        if (!isVowel(w[0]) && !isVowel(w[1])) {
             w = w.slice(2) + w.slice(0,2).toLowerCase() + "ay";
        }
        else if (isVowel(w[0])){
            w = w + "way";
        }
        if (isCap) { w=w[0].toUpperCase() + w.slice(1);}
    }
    return w;
}

    const args = process.argv.slice(2);
    if (args.length < 1) {
    console.error('Please provide at least one word');
    return;
    }

    ww=args.join(" ");
    wwa=ww.split(/\s+/).filter(word => word.length > 0)
    wwo=wwa.map(convertWord);
    console.log(wwo.join(" "));
