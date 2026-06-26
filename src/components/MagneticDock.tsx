"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}

interface MagneticDockProps {
    /** Array of dock items */
    items: DockItemData[]
    /** Maximum scale on hover */
    maxScale?: number
    /** Distance of magnetic effect in pixels */
    magneticDistance?: number
    /** Dock position */
    position?: "bottom" | "top" | "left" | "right"
    /** Background style */
    variant?: "glass" | "solid" | "transparent"
    /** Custom class name */
    className?: string
}

interface DockItemData {
    /** Unique identifier */
    id: string
    /** Display label */
    label: string
    /** Click handler */
    onClick?: () => void
    /** Whether item is active */
    isActive?: boolean
}

interface DockItemProps {
    item: DockItemData
    mouseX: MotionValue<number>
    maxScale: number
    magneticDistance: number
    isVertical: boolean
}

function DockItem({
    item,
    mouseX,
    maxScale,
    magneticDistance,
    isVertical,
}: DockItemProps) {
    const ref = React.useRef<HTMLButtonElement>(null)
    const [isHovered, setIsHovered] = React.useState(false)

    // Calculate distance from mouse to center of item
    const distance = useTransform(mouseX, (val: number) => {
        if (!ref.current) return magneticDistance + 1
        const rect = ref.current.getBoundingClientRect()
        const center = isVertical
            ? rect.top + rect.height / 2
            : rect.left + rect.width / 2
        return val - center
    })

    // Scale based on distance - closer = larger
    const scale = useTransform(distance, [-magneticDistance, 0, magneticDistance], [1, maxScale, 1])

    // Apply spring physics for smooth animation
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothScale = useSpring(scale, springConfig)

    // Floating effect
    const y = useTransform(smoothScale, (s) => (s - 1) * -5)
    const smoothY = useSpring(y, springConfig)

    return (
        <motion.button
            ref={ref}
            onClick={item.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center focus:outline-none"
            style={{
                scale: smoothScale,
                y: isVertical ? 0 : smoothY,
                x: isVertical ? smoothY : 0,
            }}
            whileTap={{ scale: 0.96 }}
        >
            {/* Text Pill Container */}
            <motion.div
                className={cn(
                    "relative px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg overflow-hidden whitespace-nowrap",
                    "bg-gradient-to-b from-slate-900/90 to-slate-950/90",
                    "backdrop-blur-sm",
                    "border",
                    item.isActive 
                        ? "border-amber-500/40 text-amber-400 font-bold bg-amber-500/5" 
                        : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700",
                    "shadow-md shadow-black/10 dark:shadow-black/30",
                    "flex items-center justify-center",
                    "transition-all duration-200"
                )}
                style={{
                    boxShadow: isHovered
                        ? "0 6px 18px rgba(245, 158, 11, 0.12), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 3px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.01)",
                }}
            >
                {/* Text */}
                <span className="capitalize text-[10px] md:text-xs font-semibold tracking-wide select-none">
                    {item.label}
                </span>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, transparent 100%)",
                        opacity: isHovered ? 0.9 : 0.5,
                    }}
                />
            </motion.div>

            {/* Hover glow */}
            <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                animate={{
                    boxShadow: isHovered
                        ? "0 0 20px rgba(245, 158, 11, 0.15)"
                        : "0 0 0px rgba(245, 158, 11, 0)",
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    )
}

function MagneticDock({
    items,
    maxScale = 1.18,
    magneticDistance = 60,
    position = "bottom",
    variant = "glass",
    className,
}: MagneticDockProps) {
    const mousePosition = useMotionValue(Infinity)
    const isVertical = position === "left" || position === "right"

    const handleMouseMove = React.useCallback(
        (e: React.MouseEvent) => {
            if (isVertical) {
                mousePosition.set(e.clientY)
            } else {
                mousePosition.set(e.clientX)
            }
        },
        [mousePosition, isVertical]
    )

    const handleMouseLeave = () => {
        mousePosition.set(Infinity)
    }

    const variantStyles = {
        glass: cn(
            "bg-slate-950/40",
            "backdrop-blur-xl",
            "border border-slate-900/50"
        ),
        solid: cn(
            "bg-slate-900",
            "border border-slate-800"
        ),
        transparent: "bg-transparent border-0",
    }

    const positionStyles = {
        bottom: "flex-row",
        top: "flex-row",
        left: "flex-col",
        right: "flex-col",
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "inline-flex items-center gap-2 p-1.5 rounded-2xl",
                variantStyles[variant],
                positionStyles[position],
                "shadow-2xl shadow-black/40",
                className
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {items.map((item) => (
                <DockItem
                    key={item.id}
                    item={item}
                    mouseX={mousePosition}
                    maxScale={maxScale}
                    magneticDistance={magneticDistance}
                    isVertical={isVertical}
                />
            ))}
        </motion.div>
    )
}

export {
    MagneticDock,
    type MagneticDockProps,
    type DockItemData,
}
