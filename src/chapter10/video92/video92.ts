export {};

console.log("Video 92");

//infer
const sum = (a: number, b: number) => {
    return a + b;
}

//name: any
const sayHi = (name: string) => {
    console.log("Say hi...", name)
}

sayHi("Duy");

const mySum = sum(9, 6);
console.log("My Sum = ", mySum);