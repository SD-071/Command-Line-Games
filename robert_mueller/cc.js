
    const args = process.argv.slice(2);
    if (args.length != 2) {
    console.error('Please provide one phrase and one number');
    return;
    }

    w=[...args[0]];
    delta=parseInt(args[1], 10);

    const ints = w.map(char => char.codePointAt(0));

    const ai="a".codePointAt(0);
    const zi="z".codePointAt(0);
    const Ai="A".codePointAt(0);
    const Zi="Z".codePointAt(0);

    const newints=ints.map((i) => {
        if (i>=ai && i<=zi) {
            i+=delta;
            if (i<ai)       { i=zi+1-(ai-i);}
            else if (i>zi)  { i=ai-1+(i-zi);}
        }
        else if (i>=Ai && i<=Zi) {
            i+=delta;
            if (i<Ai)       { i=Zi+1-(Ai-i);}
            else if (i>Zi)  { i=Ai-1+(i-Zi);}
        }
        return i;
    });

    console.log(String.fromCodePoint(...newints));
