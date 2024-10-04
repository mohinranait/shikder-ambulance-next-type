
interface HeaderMenus {
    _id: string;
    path: string;
    label: string;
}

export const headerMenus : HeaderMenus[] = [
    {_id: '1', path:'/', label:"Home"},
    {_id: '2', path:'/about-us', label:"About"},
    {_id: '5', path:'/services', label:"Service"},
    {_id: '3', path:'/contact-us', label:"Contact"},
    {_id: '4', path:'/blogs', label:"Blog"},
]


export const posts = [
    {
        _id: 1,
        title: 'Web Design',
        image: '/images/posts/2.jpeg',
        rating: 3,
    },
    {
        _id: 2,
        title: 'Web Development',
        image: '/images/posts/3.jpeg',
        rating: 4,
    },
    {
        _id: 3,
        title: 'Cafe in Boston',
        image: '/images/posts/4.jpg',
        rating: 1,
    },
    {
        _id: 4,
        title: 'Rent a Car in Texas',
        image: '/images/posts/5.jpeg',
        rating: 2,
    },
    {
        _id: 5,
        title: 'Rent a Car in Texas',
        image: '/images/posts/5.jpeg',
        rating: 4,
    },
]