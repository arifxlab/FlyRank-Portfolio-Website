import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "./Container";

import { navigationItems } from "../../data/navigation";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
                <Container>
                    <nav
                        className="flex h-20 items-center justify-between"
                        aria-label="Main navigation"
                    >
                        <a
                            href="/"
                            className="group text-xl font-bold tracking-tight text-white"
                        >
                            <span className="transition-colors duration-300 group-hover:text-cyan-300">
                                Arif
                            </span>
                            <span className="text-cyan-400">
                                .
                            </span>
                        </a>

                        <div className="hidden items-center gap-8 md:flex">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group relative text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                                >
                                    {item.name}

                                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setIsOpen((previous) => !previous)
                            }
                            aria-label={
                                isOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isOpen}
                            className="rounded-lg p-2 text-2xl text-gray-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </nav>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="overflow-hidden md:hidden"
                            >
                                <div className="border-t border-white/10 py-6">
                                    <div className="flex flex-col gap-3">
                                        {navigationItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                onClick={() =>
                                                    setIsOpen(false)
                                                }
                                                className="rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-cyan-300"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </div>
        </header>
    );
}

export default Navbar;