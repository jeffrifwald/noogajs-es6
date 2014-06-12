function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log('1 + 2 + 3 + 4 = ', sum(1, 2, 3, 4));
