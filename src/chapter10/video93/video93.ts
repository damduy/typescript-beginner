export{ };

console.log("Video 93")

let username: string | number = "duy@gmail.com"; //email

username = 123456; //id

username = "09123901"; //phone number

const printUsername = (username: string | number) => {
    if (typeof(username) === "string")
        console.log("My username = ", username.toUpperCase())
}

printUsername("Duy");