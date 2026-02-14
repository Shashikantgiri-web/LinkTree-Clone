'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Generate', href: '/generate' },
        { name: 'Templates', href: '/templates' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Learn', href: '/learn' },
        { name: 'Pricing', href: '/pricing' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
            <nav
                className={`
                    w-full max-w-7xl h-16 sm:h-20 flex items-center justify-between px-6 sm:px-10
                    rounded-2xl border transition-all duration-500
                    ${scrolled
                        ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl scale-[1.02]'
                        : 'bg-white/5 backdrop-blur-md border-white/5'
                    }
                `}
            >
                {/* Logo and Branding */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img src="/logo.svg" alt="LinkTree Logo" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/70 tracking-tight hidden sm:block">
                            LinkTree
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-white/80 hover:text-white px-5 py-2.5 rounded-xl hover:bg-white/5 transition-all active:scale-95"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="
                            relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out 
                            rounded-full shadow-md group active:scale-95
                        "
                    >
                        <span className="absolute inset-0 w-full h-full bg-linear-to-br from-primary via-primary to-accent"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white/20 opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-sm sm:text-base font-semibold">Sign up for free</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-3' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-40 lg:hidden transition-all duration-500
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
                    onClick={() => setIsOpen(false)}
                />

                {/* Content */}
                <div
                    className={`
                        absolute right-0 top-0 h-full w-[80%] max-w-sm bg-black/90 border-l border-white/10 p-8 pt-24 
                        transition-transform duration-500 ease-out shadow-2xl
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link, idx) => (
                            <li
                                key={link.name}
                                className="animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-white/60 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 flex flex-col gap-4">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-4 text-center text-xl font-semibold border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-4 text-center text-xl font-bold rounded-2xl bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                        >
                            Sign up for free
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar