import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { img } from "framer-motion/client";

export const HoverEffect = ({items,clasName})=>{
    const [projects, setProjects] = useState(items);
};

return(
    <div className={`card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}>
        {projects.map((item,projectIndex)=>{
            // Image
            <img
                src={item.image}
                alt={item.title}
                className="card-image text-xl font-bold relative z-20 mt-2"
            />
            // Title
            
             {/* Hover Background */}
            <AnimatePresence>
                <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                    }}
                    exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                    }}
                />
            </AnimatePresence>
        })}
    </div>
)