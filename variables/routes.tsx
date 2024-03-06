import {
    MdBarChart,
    MdHome,
    MdOutlineProductionQuantityLimits,
    MdPeople,
    MdPerson,
    MdPostAdd
} from 'react-icons/md';

const routes = [
    {
        name: 'Main Dashboard',
        layout: '/admin',
        path: 'dashboard',
        icon: <MdHome className="h-6 w-6" />,
    },
    {
        name: 'Users',
        layout: '/admin',
        path: 'users',
        icon: <MdPeople className="h-6 w-6" />,
        secondary: true,
    },
    {
        name: 'Posts',
        layout: '/admin',
        icon: <MdBarChart className="h-6 w-6" />,
        path: 'posts',
    },
    {
        name: 'Products',
        layout: '/admin',
        icon: <MdOutlineProductionQuantityLimits className="h-6 w-6" />,
        path: 'products',
    },
    {
        name: 'Profile',
        layout: '/admin',
        path: 'profile',
        icon: <MdPerson className="h-6 w-6" />,
    }
];
export default routes;
