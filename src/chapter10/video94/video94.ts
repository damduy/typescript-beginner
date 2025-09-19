export{ };

console.log("Video 94");

//optional
const student1: {
    name:string;
    id:number;
    phone?:number;
} = {
    name: "duy",
    id: 123
}

const student2: {
    name:string;
    id:number;
    phone?:number;
} = {
    name: "duy",
    id: 123,
    phone: 12321321
}

const person: {
    name:string;
    age:number;
    address:string;
    isHandsome:boolean;
} = {
    name: "Duy",
    age: 25,
    address: "hcm",
    isHandsome: false
}

const printInfo = (people: {
    name:string;
    age:number;
    address:string;
    isHandsome:boolean;
}) => {
    console.log("Your name: ", people.name)
}

printInfo(person)