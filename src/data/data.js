import moment from "moment/moment";


// * Dashboard
export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];


// * New users dashboard data
export const NewUsers = [
  {
    name: "Alle Keller",
    profession: "Software Engineer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Alisha Devidson",
    profession: "Manager",
    img: "https://images.unsplash.com/photo-1734033923463-d32aa24ecca3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Russ Linville",
    profession: "UI/UX Developer",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Grant gustine",
    profession: "Sales Manager",
    img: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


// * Products table data
export const ordersData = [
  {
    id:1,
    name: "Beauty Products",
    items: 158,
    image: "https://images.pexels.com/photos/3735617/pexels-photo-3735617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    price: "1000"
  },
  {
    id:2,
    name: "Apple Airpods",
    items: 120,
    image: "https://images.pexels.com/photos/3921845/pexels-photo-3921845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    price: "448"
  },
  {
    id:3,
    name: "Arts & Crafts",
    items: 118,
    image: "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    price: "580"
  },
  {
    id:4,
    name: "Language courses",
    items: 100,
    image: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Inactive",
    price: "300"
  },
  {
    id:5,
    name: "Electronics",
    items: 95,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    price: "735"
  },
  {
    id:6,
    name: "Pets Supplies",
    items: 90,
    image: "https://images.pexels.com/photos/10880504/pexels-photo-10880504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Inactive",
    price: "200"
  },
  {
    id:7,
    name: "Fashion Accessories",
    items: 85,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    price: "350"
  },
  {
    id:8,
    name: "Cookware",
    items: 70,
    image: "https://images.pexels.com/photos/7303732/pexels-photo-7303732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "Inactive",
    price: "300"
  }

]


// * User table data
export const userData = [
  {
    name: {
      id:1,
      firstName: 'Jerome ',
      lastName: 'Harris',
      image:"https://images.pexels.com/photos/10171449/pexels-photo-10171449.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "jerome@gmail.com",
      status: "active"
    },
    date: "07 April 2025",
    profit:"680",
  },
  {
    name: {
      id:2,
      firstName: 'Olivia',
      lastName: 'Styles',
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "olivia@gmail.com",
      status: "active"
    },
    date: "05 April 2025",
    profit:"510",
    
  },
  {
    name: {
      id:3,
      firstName: 'Elijah',
      lastName: 'Vandy',
      image:"https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "elijah@gmail.com",
      status: "Inactive"
    },
    date: "03 April 2025",
    profit:"390",
    
  },
  {
    name: {
      id:4,
      firstName: 'Susan',
      lastName: 'Carlo',
      image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "susan@gmail.com",
      status: "active"
    },
    date: "03 April 2025",
    profit:"817",
  },
  {
    name: {
      id:5,
      firstName: 'Joshua',
      lastName: 'Rolluffs',
      image: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "joshua@gmail.com",
      status: "Inactive"
    },
    date: "02 April 2025",
    profit:"607",
  }, {
    name: {
      id:6,
      firstName: 'Jane',
      lastName: 'Doe',
      image: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "jane@gmail.com",
      status: "Inactive"
    },
    date: "02 April 2025",
    profit:"507",
  },
  {
    name: {
      id:7,
      firstName: 'Joe',
      lastName: 'Doe',
      image: "https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "joe@gmail.com",
      status: "active"
    },
    date: "04 April 2025",
    profit:"524",
  },
  {
    name: {
      id:8,
      firstName: 'Kevin',
      lastName: 'Vandy',
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "kevin@gmail.com",
      status: "Inactive"
    },
    date: "04 April 2025",
    profit:"550",
  },
  {
    name: {
      id:9,
      firstName: 'Edison',
      lastName: 'Moon',
      image: "https://images.pexels.com/photos/5662926/pexels-photo-5662926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "kedison@gmail.com",
      status: "active"
    },
    date: "05 April 2025",
    profit:"500",
  },
]