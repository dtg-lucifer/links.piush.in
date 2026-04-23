"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Glitch text ────────────────────────────────────────────────────────────
const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?";

function GlitchText({
	text,
	className,
	delay = 0,
}: { text: string; className?: string; delay?: number }) {
	const [display, setDisplay] = useState(text.replace(/[^\s]/g, "_"));
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setStarted(true), delay);
		return () => clearTimeout(t);
	}, [delay]);

	useEffect(() => {
		if (!started) return;
		let frame = 0;
		const interval = window.setInterval(() => {
			frame += 0.45;
			const next = text
				.split("")
				.map((char, i) => {
					if (char === " ") return " ";
					if (i < frame) return char;
					return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
				})
				.join("");
			setDisplay(next);
			if (frame >= text.length) {
				window.clearInterval(interval);
				setDisplay(text);
			}
		}, 38);
		return () => window.clearInterval(interval);
	}, [text, started]);

	return <span className={className}>{display}</span>;
}



// ─── Links data ──────────────────────────────────────────────────────────────
const links = [
	{
		id: "portfolio",
		label: "Portfolio",
		sublabel: "piush.in",
		url: "https://piush.in",
		tag: "01",
		accent: "#e2e8f0",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
			</svg>
		),
	},
	{
		id: "youtube",
		label: "YouTube",
		sublabel: "@thesolodevpiush",
		url: "https://www.youtube.com/@thesolodevpiush",
		tag: "02",
		accent: "#f87171",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
			</svg>
		),
	},
	{
		id: "articles",
		label: "Articles",
		sublabel: "piush.in/blog",
		url: "https://piush.in/blog",
		tag: "03",
		accent: "#60a5fa",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
			</svg>
		),
	},
	{
		id: "github",
		label: "GitHub",
		sublabel: "@dtg-lucifer",
		url: "https://github.com/dtg-lucifer",
		tag: "04",
		accent: "#e2e8f0",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		sublabel: "@bosepiush",
		url: "https://www.linkedin.com/in/bosepiush",
		tag: "05",
		accent: "#60a5fa",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		id: "hashnode",
		label: "Hashnode",
		sublabel: "@devpiush",
		url: "https://devpiush.hashnode.dev/",
		tag: "06",
		accent: "#818cf8",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z" />
			</svg>
		),
	},
	{
		id: "instagram",
		label: "Instagram",
		sublabel: "@piush.bose",
		url: "https://www.instagram.com/piush.bose",
		tag: "07",
		accent: "#f472b6",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
	},
	{
		id: "email",
		label: "Email",
		sublabel: "mail@piush.in",
		url: "mailto:mail@piush.in",
		tag: "08",
		accent: "#34d399",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
			</svg>
		),
	},
];

// ─── Single link row ─────────────────────────────────────────────────────────
function LinkRow({
	link,
	index,
}: { link: (typeof links)[0]; index: number }) {
	const [hovered, setHovered] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 300 + index * 60);
		return () => clearTimeout(t);
	}, [index]);

	return (
		<Link
			href={link.url}
			target={link.url.startsWith("mailto") ? undefined : "_blank"}
			rel="noopener noreferrer"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="group block relative border-border border-r lg:border-r-0"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateX(0)" : "translateX(-12px)",
				transition: `opacity 0.4s ease ${index * 60}ms, transform 0.4s ease ${index * 60}ms`,
			}}
		>
			{/* Active accent bar on left */}
			<div
				className="top-0 bottom-0 left-0 absolute w-[2px] transition-all duration-200"
				style={{
					background: hovered ? link.accent : "oklch(0.269 0 0)",
				}}
			/>

			<div className="flex items-center gap-0 pl-4">
				{/* Number */}
				<span
					className="w-8 font-mono text-[10px] transition-colors duration-200 shrink-0"
					style={{ color: hovered ? link.accent : "oklch(0.439 0 0)" }}
				>
					{link.tag}
				</span>

				{/* Icon */}
				<span
					className="mr-3 transition-colors duration-200 shrink-0"
					style={{ color: hovered ? link.accent : "oklch(0.556 0 0)" }}
				>
					{link.icon}
				</span>

				{/* Label block */}
				<span className="flex flex-col flex-1 py-3">
					<span
						className="font-mono font-medium text-sm leading-none tracking-wide transition-colors duration-200"
						style={{ color: hovered ? link.accent : "oklch(0.985 0 0)" }}
					>
						{hovered ? <GlitchText text={link.label} /> : link.label}
					</span>
					<span className="mt-1 font-mono text-[11px] text-muted-foreground leading-none">
						{link.sublabel}
					</span>
				</span>

				{/* Arrow */}
				<span
					className="pr-4 font-mono text-xs transition-all duration-200 shrink-0"
					style={{
						color: hovered ? link.accent : "oklch(0.439 0 0)",
						transform: hovered ? "translateX(4px)" : "translateX(0)",
					}}
				>
					→
				</span>
			</div>

			{/* Bottom rule */}
			<div
				className="h-px transition-colors duration-200"
				style={{ background: hovered ? `${link.accent}30` : "oklch(0.269 0 0)" }}
			/>
		</Link>
	);
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Page() {
	const [tick, setTick] = useState(0);
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		const id = setInterval(() => setTick((t) => t + 1), 500);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="relative bg-background min-h-screen overflow-hidden text-foreground">
			{/* ── Layout: two columns on lg, stacked on mobile ── */}
			<div className="z-10 relative flex lg:flex-row flex-col min-h-screen">

				{/* ══ LEFT PANEL — photo + identity ══════════════════════════════ */}
				<div className="relative lg:w-[42%] lg:min-h-screen shrink-0">

					{/* ── DESKTOP: full-height, clipped with diagonal slant ── */}
					<div
						className="hidden lg:block absolute inset-0"
						style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
					>
						<Image
							src="/assets/pictures/pp_2.webp"
							alt="Piush Bose"
							fill
							className={`object-cover object-top transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
							onLoad={() => setImgLoaded(true)}
							priority
						/>
						{/* Bottom fade for text legibility */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, oklch(0.145 0 0) 0%, oklch(0.145 0 0 / 0.5) 35%, transparent 65%)",
							}}
						/>
						{/*
							Diagonal fade matching the clip-path slant.
							Clip: (100%,0) → (88%,100%) = 12% leftward over full height ≈ 97° gradient.
						*/}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(97deg, transparent 60%, oklch(0.145 0 0 / 0.6) 78%, oklch(0.145 0 0) 92%)",
							}}
						/>
					</div>

					{/* ── MOBILE: 70vh tall, no clip, centered ── */}
					<div
						className="lg:hidden relative w-full"
						style={{ height: "70vh", minHeight: "320px" }}
					>
						<Image
							src="/assets/pictures/pp_2.webp"
							alt="Piush Bose"
							fill
							className={`object-cover object-center transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
							onLoad={() => setImgLoaded(true)}
							priority
						/>
						{/* Bottom fade for text legibility */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, oklch(0.145 0 0) 0%, oklch(0.145 0 0 / 0.6) 40%, transparent 70%)",
							}}
						/>
					</div>

					{/* Identity text — overlaid on photo bottom */}
					<div className="right-0 bottom-0 left-0 absolute p-6 lg:p-10">
						{/* Top rule */}
						<div className="flex items-center gap-3 mb-4">
							<div className="flex-1 bg-foreground/20 h-px" />
							<span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em]">
								PIUSH.IN
							</span>
						</div>

						<h1 className="font-light text-foreground leading-none tracking-tight">
							<span className="block text-4xl sm:text-5xl lg:text-6xl">
								<GlitchText text="PIUSH" delay={100} />
							</span>
							<span className="block text-muted-foreground text-4xl sm:text-5xl lg:text-6xl">
								<GlitchText text="BOSE" delay={400} />
							</span>
						</h1>

						<div className="space-y-1 mt-4">
							<p className="font-mono text-muted-foreground text-xs tracking-widest">
								SOFTWARE ENGINEER · SDE II
							</p>
							<p className="font-mono text-muted-foreground/60 text-xs">
								NETPIEDEV · KOLKATA, INDIA
							</p>
						</div>

						{/* Status */}
						<div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm mt-5 px-3 py-1.5 border border-border">
							<span className="bg-green-500 rounded-full w-1.5 h-1.5 animate-pulse" />
							<span className="font-mono text-[10px] text-muted-foreground tracking-widest">
								AVAILABLE FOR WORK
							</span>
							<span
								className="font-mono text-[10px] text-foreground/50"
								style={{ opacity: tick % 2 === 0 ? 1 : 0, transition: "opacity 0.1s" }}
							>
								▌
							</span>
						</div>

						{/* Tags */}
						<div className="flex flex-wrap gap-2 mt-4">
							{["Cloud", "DevOps", "Backend", "Web3"].map((t) => (
								<span
									key={t}
									className="px-2 py-0.5 border border-border/60 font-mono text-[10px] text-muted-foreground/70 tracking-widest"
								>
									{t}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* ══ RIGHT PANEL — links ════════════════════════════════════════ */}
				<div className="flex flex-col flex-1 justify-center px-6 lg:px-12 py-10 lg:py-16">

					{/* Panel header */}
					<div className="flex justify-between items-end mb-6">
						<div>
							<p className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.3em]">
								FIND ME AT
							</p>
							<div className="flex items-center gap-2 mt-1">
								<div className="bg-foreground/40 w-6 h-px" />
								<span className="font-mono text-muted-foreground text-xs tracking-widest">
									{links.length} LINKS
								</span>
							</div>
						</div>
						<span className="font-mono text-[10px] text-muted-foreground/30 tracking-widest">
							2026
						</span>
					</div>

					{/* Top border */}
					<div className="mb-0 bg-border h-px" />

					{/* Link rows */}
					<div className="flex flex-col">
						{links.map((link, i) => (
							<LinkRow key={link.id} link={link} index={i} />
						))}
					</div>

					{/* Bottom border */}
					<div className="bg-border h-px" />

					{/* Footer */}
					<div className="flex justify-between items-center mt-8">
						<span className="font-mono text-[10px] text-muted-foreground/30 tracking-widest">
							© 2026 PIUSH BOSE
						</span>
						<span className="font-mono text-[10px] text-muted-foreground/30 tracking-widest">
							ALL RIGHTS RESERVED
						</span>
					</div>
				</div>
			</div>

		</div>
	);
}
