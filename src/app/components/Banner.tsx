"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Banner() {
	return (
		<main>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/backgroundportfolio.png"
						alt=""
						className="w-full h-full object-cover"
                        width={1920}
                        height={1080}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
				</div>

				{/* Content */}
				<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
						<div className="space-y-4">
							<span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
								Développeur Full-Stack
							</span>
							<h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
								Alexis{' '}
								<span className="gradient-hero bg-clip-text text-transparent">
									Jeandenans
								</span>
							</h1>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
								Expert front-end React/Next.js, passionné par la{' '}
								<strong>Clean Architecture</strong>, la <strong>CI/CD</strong>{' '}
								et l&apos;<strong>observabilité</strong>. Je transforme vos idées en
								applications robustes et performantes.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/projects"
								className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-primary/80 transition"
							>
								Voir mes projets
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
							<a
								href="/contact"
								className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg border border-primary text-primary bg-white hover:bg-primary/10 transition"
							>
								Me contacter
							</a>
						</div>
					</div>
				</div>
			</section>

			
		</main>
	);
}