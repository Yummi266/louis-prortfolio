export default function Home() {
  return (
    <section
      id="home"
      className="w-full bg-[#050505] text-white overflow-x-hidden
        scroll-mt-16 sm:scroll-mt-[70px] md:scroll-mt-[74px]"
    >
      <div className="
        relative w-full max-w-[1440px] mx-auto
        min-h-[max(540px,calc(100dvh-64px))]
        sm:min-h-[max(540px,calc(100dvh-70px))]
        md:min-h-[max(540px,calc(100dvh-74px))]
        px-5 sm:px-8 md:px-12 lg:px-16
        pt-6 sm:pt-10 md:pt-[6.5dvh]
        pb-5 sm:pb-7 md:pb-9
        flex flex-col justify-between
        overflow-hidden bg-[#050505]
      ">

        {/* TOP HEADER + METADATA */}
        <div className="w-full flex flex-col gap-1.5 sm:gap-2">
          {/* HEADING */}
          <div className="relative z-10 w-full">
            <h1 className="
              text-center font-black uppercase
              tracking-[-0.025em] leading-[0.88]
              text-[clamp(1.75rem,min(8.8vw,12.5dvh),126px)]
              whitespace-nowrap select-none
            ">
              WEB DEVELOPER
            </h1>
          </div>

          {/* UPPER METADATA ROW */}
          <div className="relative z-30 grid grid-cols-2 gap-3 sm:flex sm:items-start sm:justify-between w-full">
            {/* UNIVERSITY & TAGLINE */}
            <div className="min-w-0 max-w-[260px] text-left sm:text-center sm:ml-[1%]">
              <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider text-white">
                PARUL UNIVERSITY
              </p>
              <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-[13px] italic
                font-medium leading-[1.35] text-white/90">
                &ldquo;Crafting digital experiences
                <br className="hidden sm:inline" />{" "}
                through code and creativity.&rdquo;
              </p>
            </div>

            {/* GRADUATION & DEGREE */}
            <div className="min-w-0 text-right sm:text-center sm:mr-[1%]">
              <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider text-white">
                GRADUATING: 2027
              </p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-xs md:text-[13px] font-semibold
                leading-[1.35] text-white/40 uppercase">
                COMPUTER SCIENCE AND
                <br />
                ENGINEERING (B.TECH)
              </p>
            </div>
          </div>
        </div>

        {/* PORTRAIT */}
        <div className="
          absolute z-20 bottom-0 left-1/2 -translate-x-1/2
          w-[92%] sm:w-[74%] md:w-[60%] lg:w-[52%]
          max-w-[760px]
          h-[65%] sm:h-[76%] md:h-[84%] lg:h-[86%]
          flex items-end justify-center
          pointer-events-none
        ">
          <img
            src="/images/Suit.png"
            alt="Thu Wai Aung - Louis"
            className="w-full h-full object-contain object-bottom grayscale contrast-105"
          />
        </div>

        {/* BOTTOM METADATA ROW */}
        <div className="relative z-30 mt-auto w-full flex items-end justify-between gap-3 sm:gap-4 pt-6">
          {/* NAME & BARCODE */}
          <div className="min-w-0">
            <h2 className="text-xs sm:text-base md:text-lg lg:text-[21px]
              font-bold text-white/45 leading-tight
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              THU WAI AUNG (Louis)
            </h2>
            <img
              src="/images/Barcod.gif"
              alt="Louis Portfolio Barcode"
              className="mt-2 sm:mt-2.5 w-[135px] sm:w-[185px] md:w-[220px] lg:w-[245px]
                h-auto object-contain"
            />
          </div>

          {/* ROLE */}
          <div className="shrink-0 text-right">
            <h2 className="text-xs sm:text-lg md:text-2xl lg:text-[26px]
              font-black uppercase tracking-tight whitespace-nowrap text-white
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              UI/UX DESIGNER
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
