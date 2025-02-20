

// Task 1
function capitalizeWords(input: string): string {
    if (input.trim() === "") return ""; // Handle empty strings

    return input
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
console.log(capitalizeWords("hello world"));



// Task 2
function isValidNumber(value: unknown): boolean {
    return typeof value === "number" && !isNaN(value);
}
console.log(isValidNumber(42)); 
console.log(isValidNumber("SHOUQ")); 



// Task 3
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; 
}

function createUser(user: User): string {
    return `User ${user.name} with email ${user.email} created successfully`;
}


const newUser: User = {
    id: 1,
    name: "Shouq",
    email: "shouqalbdrani@gmail.com",
};
console.log(createUser(newUser)); 



// Task 4 
class Product {
    public name: string;
    public category: string;
    private price: number; 

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public getDiscountedPrice(discount: number): number {
        return this.price - (this.price * discount) / 100;
    }
}
const phone = new Product("Phone", 3000, "Electronics");
console.log(`Original Price: $3000`);
console.log(`Discounted Price (20% off): $${phone.getDiscountedPrice(20)}`);





//Task 5
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}
const numbers = [5, 10, 15, 20, 25, 2, 1];
const lessThanTen = filterArray(numbers, num => num < 10);
console.log(lessThanTen); 



// Task 6
export async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

fetchUsers().then(users => console.log(users));


