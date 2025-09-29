export{};
console.log("Video 103")

interface IPerson {
    name: string;
    age: number;
    address?: string; //optional
    readonly language: string;
    sayHi: () => void;
}

const user:IPerson = {
    age: 25,
    name: "duy",
    language: "vn",
    sayHi: () =>  console.log("I'm user")
}

user.sayHi()

const user1:IPerson = {
    age: 25,
    name: "duy",
    address: "hcm",
    language: "vn",
    sayHi: () =>  console.log("I'm user1")
}

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
