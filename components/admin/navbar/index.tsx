import React from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiAlignJustify } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import Configurator from './Configurator';
import Dropdown from '@/components/dropdown';
import NavLink from '@/components/link/NavLink';
import Image from 'next/image';
import Link from 'next/link';
import {
    IoMdNotificationsOutline
} from 'react-icons/io';
import avatar from '/public/img/avatars/avatar5.png';

const Navbar = (props: {
    onOpenSidenav: () => void;
    brandText: string;
    secondary?: boolean | string;
    [x: string]: any;
}) => {
    const { onOpenSidenav, brandText, mini, hovered } = props;
    const [darkmode, setDarkmode] = React.useState(false);

    React.useEffect(() => {
        setDarkmode(document.body.classList.contains('dark'));
    }, []);
    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
            <div className="ml-[6px]">
                <div className="h-6 w-[224px] pt-1">
                    <a
                        className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href=" "
                    >
                        Pages
                        <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                            {' '}
                            /{' '}
                        </span>
                    </a>
                    <NavLink
                        className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href="#"
                    >
                        {brandText}
                    </NavLink>
                </div>
                <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                    <NavLink
                        href="#"
                        className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                    >
                        {brandText}
                    </NavLink>
                </p>
            </div>

            <div className="relative mt-[3px] flex h-[61px] w-[140px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[140px] md:flex-grow-0 md:gap-1 xl:w-[140px] xl:gap-2">
                <span
                    className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
                    onClick={onOpenSidenav}
                >
                    <FiAlignJustify className="h-5 w-5" />
                </span>
                {/* start Notification */}
                <Dropdown
                    button={
                        <p className="cursor-pointer">
                            <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                        </p>
                    }
                    animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
                    classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
                >
                    <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                        <div className="flex items-center justify-between">
                            <p className="text-base font-bold text-navy-700 dark:text-white">
                                Notification
                            </p>
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                Mark all read
                            </p>
                        </div>

                        <button className="flex w-full items-center">
                            <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                <BsArrowBarUp />
                            </div>
                            <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                    New Update: Admin UI Dashboard PRO
                                </p>
                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                    A new update for your downloaded item is available!
                                </p>
                            </div>
                        </button>

                        <button className="flex w-full items-center">
                            <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                <BsArrowBarUp />
                            </div>
                            <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                    New Update: Admin UI Dashboard PRO
                                </p>
                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                    A new update for your downloaded item is available!
                                </p>
                            </div>
                        </button>
                    </div>
                </Dropdown>
                <div
                    className="cursor-pointer text-gray-600"
                    onClick={() => {
                        if (darkmode) {
                            document.body.classList.remove('dark');
                            setDarkmode(false);
                        } else {
                            document.body.classList.add('dark');
                            setDarkmode(true);
                        }
                    }}
                >
                    {darkmode ? (
                        <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                    ) : (
                        <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                    )}
                </div>
                {/* Profile & Dropdown */}
                <Dropdown
                    button={
                        <Image
                            // width="2"
                            // height="20"
                            className="h-10 w-10 rounded-full"
                            src={avatar}
                            alt="Elon Musk"
                        />
                    }
                    classNames={'py-2 top-8 -left-[180px] w-max'}
                >
                    <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                        <div className="ml-4 mt-3">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                    👋 Hey, Adela
                                </p>{' '}
                            </div>
                        </div>
                        <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                        <div className="ml-4 mt-3 flex flex-col">
                            <Link
                                href="/admin/profile"
                                className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                            >
                                Profile Settings
                            </Link>
                            <a
                                href=" "
                                className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                            >
                                Newsletter Settings
                            </a>
                            <a
                                href=""
                                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                            >
                                Log Out
                            </a>
                        </div>
                    </div>
                </Dropdown>
            </div>
        </nav>
    );
};

export default Navbar;