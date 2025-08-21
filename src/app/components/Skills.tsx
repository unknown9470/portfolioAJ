"use client";
import { skills } from "../data/SkillsData";

const Skills = () => {

  return (<>
    {/* Skills Overview */}
			<section className="bg-surface py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
						Expertise technique
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Une stack moderne orientée qualité, performance et maintenabilité
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
					{skills.map(({ icon: Icon, title, techs }) => (
						<div
							key={title}
							className="bg-white rounded-xl shadow transition hover:shadow-lg hover:-translate-y-1"
						>
							<div className="p-6 text-center">
								<div className="inline-flex p-3 bg-primary/10 text-primary rounded-lg mb-4">
									<Icon className="h-5 w-5" />
								</div>
								<h3 className="font-semibold mb-3">{title}</h3>
								<p className="text-sm opacity-80">{techs.join(' • ')}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			
			{/* CTA Section */}
			<section className="bg-surface py-16">
				<div className="text-center max-w-2xl mx-auto space-y-6">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Prêt à collaborer ?
					</h2>
					<p className="text-lg text-muted-foreground">
						Discutons de votre projet et voyons comment mon expertise peut vous
						aider à atteindre vos objectifs techniques et métier.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center p-4">
						<a
							href="/contact"
							className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-primary/80 transition"
						>
							Démarrer un projet
						</a>
						<a
							href="/cv-alexis-jeandenans.pdf"
							download
							className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg border border-primary text-primary bg-white hover:bg-primary/10 transition"
						>
							Télécharger mon CV
						</a>
					</div>
				</div>
			</section>
      </>
  );
};

export default Skills;