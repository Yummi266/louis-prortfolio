
export default function About() {
    return (
        <section
            id="about"
            className="w-full min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-70px)] md:min-h-[calc(100dvh-74px)]
                scroll-mt-16 sm:scroll-mt-[70px] md:scroll-mt-[74px]
                bg-[#F8F7F4] text-[#171717]"
        >
            <div className="grid min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-70px)] md:min-h-[calc(100dvh-74px)] grid-cols-1 lg:grid-cols-[48%_52%]">

                {/* LEFT: PORTRAIT */}
                <div className="relative w-full aspect-[4/5] max-h-[75dvh] lg:max-h-none lg:aspect-auto lg:min-h-full overflow-hidden bg-[#1a1a17]">
                    <img
                        src="/images/suit2.png"
                        alt="Thu Wai Aung - Louis"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* Subtle bottom gradient for label contrast */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Image label */}
                    <div className="relative z-10 flex h-full items-end p-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase">
                                Computer Science Student
                            </p>
                            <p className="text-sm font-semibold tracking-widest mt-1">
                                THU WAI AUNG · LOUIS
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: MAGAZINE CONTENT */}
                <div className="flex flex-col justify-between px-6 py-10 sm:px-10 lg:px-12 lg:py-8">

                    <div>
                        {/* HEADING */}
                        <div className="mb-5">
                            <h2 className="font-serif text-[clamp(4rem,7vw,6.5rem)] leading-[0.78] tracking-[-0.06em]">
                                Who's
                            </h2>

                            <h2 className="font-serif italic text-[clamp(4rem,7vw,6.5rem)] leading-[0.85] tracking-[-0.07em]">
                                Louis?
                            </h2>
                        </div>

                        {/* TAGLINE */}
                        <p className="max-w-md text-[11px] sm:text-xs font-bold uppercase leading-[1.5] tracking-wide mb-5">
                            A continuous learner with a passion
                            for technology, creativity, and
                            problem-solving.
                        </p>

                        {/* INTRODUCTION */}
                        <div className="text-[13px] sm:text-sm leading-[1.55] text-[#333333]">

                            <p className="first-letter:float-left first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.75] first-letter:pr-2 first-letter:pt-1">
                                I'm Thu Wai Aung, also known as Louis, a Computer Science and
                                Engineering student at Parul University, expected to graduate
                                in 2027. I'm an aspiring Web Developer and UI/UX Designer
                                passionate about creating user-friendly digital experiences.
                            </p>

                            <p className="mt-3">
                                I'm someone who believes that learning never stops. My
                                curiosity about technology drives me to explore new tools,
                                experiment with ideas, and turn concepts into real-world
                                projects. I enjoy coding, web design, discovering new
                                technologies, and finding creative ways to solve problems.
                            </p>

                            <p className="mt-3">
                                I love working with people, exchanging ideas, and collaborating
                                with a team because I believe great results come from learning
                                and growing together. I'm a dedicated and adaptable person who
                                sees every challenge as an opportunity to improve.
                            </p>

                            <p className="mt-3">
                                Outside my technical interests, I enjoy watching, playing,
                                and exploring things that inspire my creativity. My goal is
                                not just to become a better developer, but to create
                                meaningful digital experiences that make a positive
                                difference.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM: QR CODE */}
                    <div className="flex justify-end items-end mt-8">
                        <a
                            href="/images/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-2"
                        >
                            <img
                                src="/images/QR.png"
                                alt="Scan to view my resume"
                                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                            />

                            <span className="font-serif text-xs tracking-wide underline underline-offset-4 group-hover:opacity-60 transition">
                                SCAN TO VIEW MY RESUME
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
