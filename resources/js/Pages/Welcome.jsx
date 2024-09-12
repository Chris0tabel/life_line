import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import BloodDonationInfo from '@/Components/BloodDonationInfo';
import DonationProcess from '@/Components/DonationProcess';
import lifeline1 from '/public/build/images/lifeline1.png';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import illustration2 from '/public/build/images/illustration2.png';



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white-50 text-black/50 dark:bg-black dark:text-white/50">

                <div className=" selection:bg-[#FF2D20] selection:text-white">
                    <nav className="items-center  border-b flex flex-row justify-between ">

                            <div className="flex lg:justify-center ">
                            <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">


                            <NavLink href={route('About')} active={route().current('About')}>
                                   About
                                </NavLink>

                                <NavLink href={route('profile.public')} active={route().current('profile.public')}>
                                    Donor
                                </NavLink>
                                <NavLink href={route('Faq')} active={route().current('Faq')}>
                                    FAQ
                                </NavLink>

                            </div>
                            <div>
                            {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>



                            </nav>



                        <main className="w-full items-center mx-auto md:flex-row ">
                        <section className="flex flex-row items-center justify-between w-full h-full ">
                            <div className="text-left px-4 lg:px-20 mx-auto">
                                <h1 id='line1'className="text-black text-4xl lg:text-5xl tracking-wider">Welcome to</h1>
                                <h1 id='line2'className="text-black text-6xl lg:text-7xl my-4 lg:my-11">Lifeline</h1>
                                <h2 id='line3'className="text-black text-2xl lg:text-3xl">Your blood counts!</h2>
                            </div>
                            <div className="w-full h-full lg:w-1/2 rounded ">
                                <img src={illustration2} alt="Lifeline" className=" " />
                            </div>
                        </section>

                    </main>




                        <BloodDonationInfo></BloodDonationInfo>
                        <DonationProcess></DonationProcess>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>

                </div>
            </div>
        </>
    );
}
