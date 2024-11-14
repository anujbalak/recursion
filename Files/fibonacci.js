// So the basic of fibonacci sequence is that, a sequence of numbers in which each number equals the sum of the two preceding numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// fn = f(n-1) + f(-2)

/// iteration way

function fibs(n) {
    for (let i; i < n; i++) {
        console.log(i);
    }
}
console.log('a')
fibs(2)