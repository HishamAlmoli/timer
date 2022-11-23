
//let timeframe = [3000, 5000, 9000, 10000, 15000];
let timeframe = [];

if (!process.argv[2] || isNaN(process.argv[2]) || process.argv[2] < 0) {
    process.stdout.write('No');
    return 'No';
} else {
    
    for (let i = 2; i < process.argv.length; i++) {
        timeframe.push(process.argv[i] * 1000);
    }
    for (let i = 0; i < timeframe.length; i++) { 
        setTimeout(() => {
            process.stdout.write(`.`);
        }, timeframe[i]);
    }
    return 'Yes';
    //process.stdout.write('.');// or
    //process.stdout.write('\x07'); // Beep or /Ding doesn't work on my machine!!
}

