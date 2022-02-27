export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Flowers',
        status: 'danger',
        weeks: 35544675,
        budget: 'California'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Danial Bere',
        gmail: 'Danial@gmail.com',
        productName: 'Tree',
        status: 'danger',
        weeks: 409875432,
        budget: 'Munisch'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Emily Beek',
        gmail: 'Emilyr@gmail.com',
        productName: 'Tulip Flowers	',
        status: 'success',
        weeks: 98765432,
        budget: 'Paris'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Jhan Gover',
        gmail: 'Jhanr@gmail.com',
        productName: 'Tree',
        status: 'success',
        weeks: 87654321,
        budget: 'Tunis'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Eve Bere',
        gmail: 'Eve@gmail.com',
        productName: 'Tree',
        status: 'danger',
        weeks: 769875432,
        budget: 'Munisch'
    },
    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Anna Buicker',
        gmail: 'Anna@gmail.com',
        productName: 'Red Flowers',
        status: 'success',
        weeks: 35544675,
        budget: 'Paris'
    },

]

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]