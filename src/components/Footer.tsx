"use client";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Vipul Pawar. All rights reserved.
                    </p>

                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
