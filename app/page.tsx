"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function GlitchText({ text, className }: { text: string; className?: string }) {
	const [display, setDisplay] = useState(text.replace(/[^\s]/g, "_"));

	useEffect(() => {
		let frame = 0;
		const interval = window.setInterval(() => {
			frame += 0.4;
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
		}, 40);
		return () => window.clearInterval(interval);
	}, [text]);

	return <span className={className}>{display}</span>;
}

const links = [
	{
		id: "portfolio",
		label: "Portfolio",
		sublabel: "piush.in",
		url: "https://piush.in",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
			</svg>
		),
		accent: "group-hover:text-foreground",
		tag: "SITE",
	},
	{
		id: "youtube",
		label: "YouTube",
		sublabel: "@thesolodevpiush",
		url: "https://www.youtube.com/@thesolodevpiush",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
			</svg>
		),
		accent: "group-hover:text-red-400",
		tag: "VIDEO",
	},
	{
		id: "articles",
		label: "Articles",
		sublabel: "piush.in/blog",
		url: "https://piush.in/blog",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
			</svg>
		),
		accent: "group-hover:text-blue-400",
		tag: "BLOG",
	},
	{
		id: "github",
		label: "GitHub",
		sublabel: "@dtg-lucifer",
		url: "https://github.com/dtg-lucifer",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
		accent: "group-hover:text-foreground",
		tag: "CODE",
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		sublabel: "@bosepiush",
		url: "https://www.linkedin.com/in/bosepiush",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
		accent: "group-hover:text-blue-500",
		tag: "WORK",
	},
	{
		id: "hashnode",
		label: "Hashnode",
		sublabel: "@devpiush",
		url: "https://devpiush.hashnode.dev/",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z" />
			</svg>
		),
		accent: "group-hover:text-blue-400",
		tag: "WRITE",
	},
	{
		id: "instagram",
		label: "Instagram",
		sublabel: "@piush.bose",
		url: "https://www.instagram.com/piush.bose",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
		accent: "group-hover:text-pink-400",
		tag: "SOCIAL",
	},
	{
		id: "email",
		label: "Email",
		sublabel: "mail@piush.in",
		url: "mailto:mail@piush.in",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
			</svg>
		),
		accent: "group-hover:text-green-400",
		tag: "MAIL",
	},
];

function LinkCard({ link, index }: { link: (typeof links)[0]; index: number }) {
	const [hovered, setHovered] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 100 + index * 80);
		return () => clearTimeout(t);
	}, [index]);

	return (
		<Link
			href={link.url}
			target={link.url.startsWith("mailto") ? undefined : "_blank"}
			rel="noopener noreferrer"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`group relative flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-muted-foreground/40 hover:bg-secondary/60 hover:shadow-lg hover:shadow-black/20 ${
				mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
			}`}
			style={{ transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border-color 0.3s, background-color 0.3s, box-shadow 0.3s` }}
		>
			{/* Left: icon */}
			<span className={`shrink-0 text-muted-foreground transition-colors duration-300 ${link.accent}`}>
				{link.icon}
			</span>

			{/* Center: label + sublabel */}
			<span className="flex flex-col flex-1 min-w-0">
				<span className="font-medium text-foreground text-sm truncate leading-tight">
					{hovered ? <GlitchText text={link.label} /> : link.label}
				</span>
				<span className="mt-0.5 font-mono text-muted-foreground text-xs truncate leading-tight">
					{link.sublabel}
				</span>
			</span>

			{/* Right: tag */}
			<span className="font-mono text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground/70 tracking-widest transition-colors duration-300 shrink-0">
				{link.tag}
			</span>

			{/* Arrow */}
			<svg
				className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground/70 transition-all translate-x-0 group-hover:translate-x-1 duration-300 shrink-0"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</Link>
	);
}

export default function LinktreePage() {
	const [tick, setTick] = useState(0);
	const [avatarLoaded, setAvatarLoaded] = useState(false);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	// Animated clock tick for the terminal cursor
	useEffect(() => {
		const id = setInterval(() => setTick((t) => t + 1), 600);
		return () => clearInterval(id);
	}, []);

	// Subtle grid / scanline canvas background
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);

		let animId: number;
		let t = 0;

		const draw = () => {
			t += 0.003;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Subtle dot grid
			const spacing = 40;
			for (let x = 0; x < canvas.width; x += spacing) {
				for (let y = 0; y < canvas.height; y += spacing) {
					const dist = Math.sqrt(
						(x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2,
					);
					const maxDist = Math.sqrt((canvas.width / 2) ** 2 + (canvas.height / 2) ** 2);
					const alpha = (1 - dist / maxDist) * 0.12 + Math.sin(t + dist * 0.01) * 0.03;
					ctx.beginPath();
					ctx.arc(x, y, 1, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`;
					ctx.fill();
				}
			}

			animId = requestAnimationFrame(draw);
		};

		draw();
		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="relative bg-background min-h-screen overflow-hidden text-foreground">
			{/* Animated dot-grid background */}
			<canvas
				ref={canvasRef}
				className="z-0 fixed inset-0 pointer-events-none"
				aria-hidden="true"
			/>

			{/* Radial vignette */}
			<div
				className="z-0 fixed inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, oklch(0.145 0 0) 100%)",
				}}
				aria-hidden="true"
			/>

			{/* Main content */}
			<main className="z-10 relative flex flex-col justify-center items-center mx-auto px-4 sm:px-6 py-16 max-w-lg min-h-screen">
				{/* ── Header ── */}
				<div className="flex flex-col items-center gap-5 mb-10 w-full text-center">
					{/* Avatar */}
					<div className="relative">
						<div
							className="absolute -inset-1 opacity-30 rounded-full"
							style={{
								background:
									"conic-gradient(from 0deg, oklch(0.708 0 0), oklch(0.269 0 0), oklch(0.708 0 0))",
								animation: "spin 8s linear infinite",
							}}
							aria-hidden="true"
						/>
						<div className="relative bg-secondary border border-border rounded-full w-24 h-24 overflow-hidden">
							<Image
								src="/assets/pictures/pp_1.webp"
								alt="Piush Bose"
								fill
								className={`object-cover transition-opacity duration-700 ${avatarLoaded ? "opacity-100" : "opacity-0"}`}
								onLoad={() => setAvatarLoaded(true)}
								priority
							/>
						</div>
					</div>

					{/* Name */}
					<div className="space-y-1">
						<h1 className="font-light text-2xl sm:text-3xl tracking-tight">
							<GlitchText text="Piush Bose" />
						</h1>
						<p className="font-mono text-muted-foreground text-xs tracking-widest">
							SOFTWARE ENGINEER · SDE II
						</p>
					</div>

					{/* Terminal-style status line */}
					<div className="flex items-center gap-2 bg-secondary/40 backdrop-blur-sm px-4 py-1.5 border border-border rounded-full font-mono text-muted-foreground text-xs">
						<span className="bg-green-500 rounded-full w-1.5 h-1.5 animate-pulse" />
						<span>available for work</span>
						<span className="text-muted-foreground/40">·</span>
						<span>kolkata, india</span>
						<span
							className="inline-block ml-1 w-[1ch] text-foreground/60"
							style={{ opacity: tick % 2 === 0 ? 1 : 0, transition: "opacity 0.1s" }}
						>
							▌
						</span>
					</div>

					{/* Bio */}
					<p className="max-w-xs text-muted-foreground text-sm text-center leading-relaxed">
						Building scalable, event-driven systems and resilient backend architecture. Cloud · DevOps · Web3.
					</p>
				</div>

				{/* ── Divider ── */}
				<div className="flex items-center gap-4 mb-8 w-full">
					<div className="flex-1 bg-border h-px" />
					<span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">LINKS</span>
					<div className="flex-1 bg-border h-px" />
				</div>

				{/* ── Link Cards ── */}
				<div className="flex flex-col gap-2.5 w-full">
					{links.map((link, i) => (
						<LinkCard key={link.id} link={link} index={i} />
					))}
				</div>

				{/* ── Footer ── */}
				<div className="mt-12 font-mono text-[10px] text-muted-foreground/40 tracking-widest">
					© 2026 PIUSH BOSE
				</div>
			</main>

			<style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	);
}
