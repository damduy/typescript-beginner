export{};
console.log("Video 102")

type TUsername = string | number; //union type

type TStudent = {
    id: number;
    name: string
}

type TCoder = {
    address: string;
    language: string;
}

type TProgrammer = TStudent & TCoder;

const duy: TProgrammer = {
    id: 123,
    name: "Duy",
    address: "HCM",
    language: "TypeScript"
}

let username: TUsername = "damduy";

username = 123;