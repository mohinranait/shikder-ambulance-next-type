'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import { MdHelpOutline } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';

const BottomNav = () => {
    const navItems = [
        {
            id: 1,
            route: '/account',
            icon: <TbHome size={20} />,
            title: 'Home',
        },
        {
            id: 2,
            route: '/dashboard/withdraw',
            icon: <IoWalletOutline size={20} />,
            title: 'Withdraw',
        },
        {
            id: 3,
            route: '/customer-service',
            icon: <MdHelpOutline size={22} />,
            title: 'Help',
        },
        {
            id: 4,
            route: '/profile',
            icon: <FaRegUserCircle size={20} />,
            title: 'Profile',
        },
    ];

    const currentPath = usePathname();

    return (
        <div className="mx-auto mb-2 mt-auto flex w-full items-center justify-between rounded-xl bg-secondary-foreground px-4 py-3 text-2xl shadow-md sm:h-[45px] md:h-[70px] md:px-7 lg:px-10">
            {navItems.map((item) => (
                <Link
                    key={item.id}
                    className={`flex w-14 flex-col items-center gap-1 rounded-full text-sm md:text-base ${currentPath === item.route ? 'text-primary' : 'text-white'}`}
                    href={item.route}
                >
                    <div
                        className={` ${currentPath === item.route ? '-mt-10 flex size-12 items-center justify-center rounded-full border-[6px] border-theme bg-secondary-foreground sm:size-14' : ''}`}
                    >
                        <h2>{item.icon}</h2>
                    </div>
                    <h2 className="hidden sm:block"> {item.title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default BottomNav;
