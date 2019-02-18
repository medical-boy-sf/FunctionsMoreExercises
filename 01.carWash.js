function solve(command) {
    let sum = 0;
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'soap') {
            sum += 10;
        } else if (command[i] === 'water') {
            sum += sum * 0.2;
        } else if (command[i] === 'vacuum cleaner') {
            sum += sum * 0.25;
        } else if (command[i] === 'mud') {
            sum -= sum * 0.1;
        }
    }
    return `The car is ${sum.toFixed(2)}% clean.`;
}