"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, GraduationCap, Code2, MonitorPlay, Droplets, Mic, Compass, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-blue-500/30">
      {/* Decorative gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none no-print">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 lg:py-32 print:max-w-none print:px-0 print:py-0">
        {/* Header Section */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-20 print:mb-12"
        >
          <motion.div variants={fadeIn} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white print:text-4xl">
              Hubert Brończyk
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium tracking-wide print:text-lg">
              Full Stack Web Developer & Przedsiębiorca
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-xs">
              <div className="flex items-center gap-1.5"><MapPin size={16} /> Toruń, Polska</div>
              <div className="flex items-center gap-1.5"><Mail size={16} /> hubert@soha.com.pl</div>
              <div className="flex items-center gap-1.5"><Briefcase size={16} /> Własna działalność (SoHa PSA)</div>
            </div>
            <div className="flex gap-4 pt-4 no-print">
              <a href="https://github.com/Fakelatency" target="_blank" rel="noreferrer" title="GitHub" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.5 3.3 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
              </a>
              <a href="https://pl.linkedin.com/in/hubertbronczyk" target="_blank" rel="noreferrer" title="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://sohadev.pl" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white">
                <MonitorPlay size={20} />
              </a>
              <button onClick={() => window.print()} className="ml-auto px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors text-sm">
                Generuj PDF / Drukuj
              </button>
            </div>
          </motion.div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-12 print:block print:w-full">
          {/* Main Content Column */}
          <div className="order-2 lg:order-1 lg:col-span-2 lg:row-span-3 space-y-16 print:block print:w-full">

            {/* O Mnie */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                O mnie
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                22-letni Full Stack Web Developer i współzałożyciel SoHa PSA ze świetnym zrozumieniem całego cyklu powstawania oprogramowania. Zajmuję się tworzeniem zaawansowanych systemów od fazy koncepcyjnej, przez architekturę, aż po deployment i wsparcie klientów. Jako pasjonat nowoczesnych technologii stale poszerzam swoją wiedzę, co łączę ze studiami informatycznymi oraz aktywnościami wymagającymi dużej odpowiedzialności, takimi jak komercyjne realizacje dźwiękowe (nagłośnienie koncertów i eventów), nurkowanie czy praca instruktora pływania dla dzieci i dorosłych. Poszukuję wyzwań m.in. w projektach integrujących oprogramowanie ze sprzętem / IoT, w których mogę wykorzystać swoje wszechstronne zaplecze jednocześnie poszerzając swoją wiedzę.
              </p>
            </motion.section>

            {/* Doświadczenie Zawodowe */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <Briefcase className="text-blue-400" /> Doświadczenie i Zlecenia Komercyjne
              </h2>

              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xl font-medium text-white">Full Stack Developer & Współzałożyciel</h3>
                <div className="text-blue-400 text-sm mb-3">SoHa PSA • Toruń • 10.2024 - obecnie</div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Kompleksowe realizacje systemów IT dla klientów B2B oraz administracja rozwiązaniami (DevOps, PM2).</li>
                  <li>Projektowanie aplikacji webowych w oparciu o nowoczesne technologie (Figma).</li>
                  <li>Projektowanie architektury baz danych (PostgreSQL, PrismaDB) oraz tworzenie dedykowanych API.</li>
                  <li>Inżynieria UI/UX (React, Next.js, TailwindCSS) dla responsywnych, współczesnych interfejsów (w tym SPA/SSR).</li>
                  <li>Współpraca z klientami w celu zrozumienia ich potrzeb i dostarczenia rozwiązań spełniających ich oczekiwania w 100%.</li>
                  <li>Zarządzanie i prowadzenie firmy od strony prawno/technicznej: dokumenty, umowy, kontakty z klientami, marketing, fakturowanie, pozyskiwanie klientów.</li>
                  <li>Przykładowa realizacja: Juventus Payments - Aplikacjia płatności dla Juventus academy Toruń. Z aplikacji od prawie 2 lat korzysta kilkuset użytkowników i dwie osoby od strony administratora.</li>
                  <li>Przykładowa realizacja: SedoApp - CRM Zaprojektowany na wymiar dla firmy z branży recyklingu odpadów. Z aplikacji korzysta kilkunastu pracowników firmy. Aplikacja jest stale rozwijana i ulepszana na podstawie stałej obsługi.</li>
                  <li>Przykładowa realizacja: Aktywniprzezpokolenia.pl - Prosta strona na silniku wordpress, wizytówka stowarzyszenia sportowego.</li>

                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xl font-medium text-white">Frontend Developer & Współzałożyciel</h3>
                <div className="text-blue-400 text-sm mb-3">Immune Solutions • Toruń • 09.2023 - 11.2024 </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Zarządzanie i prowadzenie firmy od strony technicznej, dokumenty, kontakty z klientami, marketing, fakturowanie.</li>
                  <li>Projektowanie UI/UX (Figma) .</li>
                  <li>Pozyskiwanie pierwszych klientów komercyjnych.</li>
                  <li>Programowanie frontendowych części aplikacji.</li>
                  <li>Przykładowa realizacja: Folwark Pod Dębem - Strona internetowa dla agroturystyki, posiadała innowacyjny system połączenia rezerwacji z booking za pomocą formatu .ical.</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xl font-medium text-white">Instruktor Pływania</h3>
                <div className="text-blue-400 text-sm mb-3">Stowarzyszenie RRR • Toruń • 09.2024 - obecnie </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Prowadzenie zajęć grupowych nauki pływania dla dzieci i dorosłych.</li>
                  <li>Zapewnienie bezpieczeństwa w wodzie i na basenie oraz udzielanie pierwszej pomocy w razie potrzeby.</li>
                  <li>Motywowanie i wspieranie uczestników w procesie nauki pływania. Indywidualne podejście do każdego uczestnika.</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xl font-medium text-white">Instruktor Pływania</h3>
                <div className="text-blue-400 text-sm mb-3">Aktywni przez pokolenia • Toruń • 10.2025 - obecnie </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Prowadzenie indywidualnych zajęć nauki pływania dla dzieci i dorosłych.</li>
                  <li>Dostosowywanie metod nauczania do indywidualnych potrzeb uczestników.</li>
                  <li>Współpraca z dziećmi i młodzieżą z niepełnosprawnościami i zaburzeniami.</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xl font-medium text-white">Dźwiękowiec / Realizator Dźwięku</h3>
                <div className="text-blue-400 text-sm mb-3">Freelance • Toruń • 05.2022 - 10.2023 </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Realizacja dźwięku na koncertach i eventach. Obsługa konsoli Behrigher X16/32, Wing</li>
                  <li>Obsługa sprzętu nagłośnieniowego. Lini frontowej i monitorów odsłuchowych</li>
                  <li>Współpraca z zespołami muzycznymi i organizatorami wydarzeń.</li>
                  <li>Przykładowa realizacja: <a href="https://www.youtube.com/live/3Dr3-HQ44Cc?si=Gf-7UacwbPOqSBBy&t=2588" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Zapis wideo koncertu na YouTube</a></li>
                </ul>
              </motion.div>


            </motion.section>

            {/* Wybrane Projekty Open Source */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 print-break-inside-avoid"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <Code2 className="text-blue-400" /> Wybrane Projekty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a variants={fadeIn} href="https://github.com/Fakelatency/Padel-Mixer" target="_blank" rel="noreferrer" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Padel-Mixer</h3>
                  <p className="text-sm text-gray-400 mt-2 mb-4">Zaawansowana platforma Full-stack do zarządzania turniejami Padel, z generowaniem drabinek, śledzeniem wyników na żywo i systemem logowania.</p>
                  <div className="flex gap-2 text-xs text-blue-300">
                    <span className="px-2 py-1 rounded-md bg-blue-900/30">TypeScript</span>
                    <span className="px-2 py-1 rounded-md bg-blue-900/30">Next.js</span>
                  </div>
                </motion.a>

                <motion.a variants={fadeIn} href="https://github.com/Fakelatency/Schedule-ZTM-Py" target="_blank" rel="noreferrer" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Schedule-ZTM-Py</h3>
                  <p className="text-sm text-gray-400 mt-2 mb-4">Konsolowa aplikacja w Pythonie integrująca się z API ZTM Warszawa do wyświetlania rozkładów jazdy na żywo.</p>
                  <div className="flex gap-2 text-xs text-blue-300">
                    <span className="px-2 py-1 rounded-md bg-blue-900/30">Python</span>
                    <span className="px-2 py-1 rounded-md bg-blue-900/30">API</span>
                  </div>
                </motion.a>
              </div>
            </motion.section>

          </div>

          {/* Tech Stack Column (Top on mobile, Right on desktop) */}
          <div className="order-1 lg:order-2 lg:col-start-3 lg:row-start-1 print:block print:w-full print:mt-12">

            {/* Umiejętności Techniczne */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 print-break-inside-avoid"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                Tech Stack
              </h2>

              <motion.div variants={fadeIn} className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript', 'Wordpress'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">Backend & DB</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'PostgreSQL', 'PrismaDB', 'Python', 'Lua', 'Express.js'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">Narzędzia / DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'NPM/Yarn/PNPM', 'PM2', 'Linux', 'Docker', 'Github', 'Windows', 'Figma', 'Postman'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">Języki</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">Język Polski - ojczysty</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">Język angielski - C1/C1+</span>
                  </div>

                </div>
              </motion.div>
            </motion.section>
          </div>

          {/* Sidebar Part 2: Edukacja & Atuty (Bottom on mobile) */}
          <div className="order-3 lg:order-3 lg:col-start-3 lg:row-start-2 space-y-12 print:block print:w-full print:mt-12">

            {/* Edukacja */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 print-break-inside-avoid"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <GraduationCap className="text-blue-400" /> Edukacja
              </h2>
              <motion.div variants={fadeIn} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1.5" />
                <h3 className="text-lg font-medium text-white">Informatyka (zaoczne)</h3>
                <div className="text-blue-400 text-sm border-b border-white/5 pb-2">Uniwersytet Mikołaja Kopernika w Toruniu • II Rok</div>
              </motion.div>
            </motion.section>

            {/* Inne Zdolności (Soft Skills / Atuty) */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 print-break-inside-avoid"
            >
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                Dodatkowe Atuty
              </h2>
              <motion.div variants={fadeIn} className="space-y-4 text-gray-400">
                <p className="text-sm flex gap-3 items-start">
                  <Mic className="shrink-0 text-blue-400 mt-0.5" size={18} />
                  <span><strong>Realizacja dźwięku estradowego</strong><br />Odporność na stres, praca na live-eventach i błyskawiczne rozwiązywanie problemów (troubleshooting w czasie rzeczywistym).</span>
                </p>
                <p className="text-sm flex gap-3 items-start">
                  <Droplets className="shrink-0 text-blue-400 mt-0.5" size={18} />
                  <span><strong>Instruktor pływania</strong><br />Rozwinięte zdolności interpersonalne, szkoleniowe (mentoring) oraz konsekwencja w samodoskonaleniu. Wysoce rozwinięta cierpliwość, zrozumienie i opanowanie, które wykorzystuję na basenie przekłada się na łatwość w nawiązywaniu kontaktów biznesowych</span>
                </p>
                <p className="text-sm flex gap-3 items-start mt-4">
                  <Compass className="shrink-0 text-blue-400 mt-0.5" size={18} />
                  <span><strong>Nurek techniczny</strong><br />Sport obarczony wysokim ryzykiem, wymagający opanowania, precyzji i umiejętności podejmowania decyzji pod presją jak i dokładnego przygotowania przed każdym zanurzeniem.</span>
                </p>
                <p className="text-sm flex gap-3 items-start mt-4">
                  <Medal className="shrink-0 text-blue-400 mt-0.5" size={18} />
                  <span><strong>Były wyczynowy zawodnik</strong><br />10 lat profesjonalnego treningu (10-12 jednostek tygodniowo), finalista Mistrzostw Polski i dawny członek kadry młodzików. Nauczyło mnie to żelaznej dyscypliny, sumienności i wybitnej etyki pracy.</span>
                </p>
              </motion.div>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}
