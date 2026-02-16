import { useState } from "react";

const LOGO_SRC = "/logo-emony.png";
const HERO_GIF_SRC = "/hero-characters.gif";

export default function EMonyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openApp() {
    window.location.href = "https://app.emony.info/";
  }

  return (
    <div className="w-full min-h-screen bg-[#043c54] flex flex-col py-2 px-2 md:py-4 md:px-4 gap-4">
      {/* Frame principal */}
      <div className="h-screen bg-white rounded-2xl overflow-hidden relative flex flex-col shrink-0">

        {/* Header */}
        <header className="relative w-full h-[120px] md:h-[144px] bg-[#043c54] overflow-hidden">

          {/* Fondo blanco inferior */}
          <div className="absolute bottom-0 w-full h-[60px] md:h-[96px] bg-white rounded-tl-[80px] rounded-tr-[40px]" />

          {/* Caja blanca superior con nav y botones */}
          <div className="absolute top-0 left-[240px] md:left-80 h-[80px] md:h-[112px] right-0
                          bg-white
                          rounded-tl-[40px]
                          rounded-tr-[0px]
                          rounded-bl-[0px]
                          rounded-br-[0px]
                          z-10
                          flex items-center justify-between px-6 md:px-10">

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
              <a href="#" className="text-[#043c54] font-semibold text-xl xl:text-2xl">Qué somos</a>
              <a href="#" className="text-[#043c54] font-light text-xl xl:text-2xl">Equipo</a>
              <a href="#" className="text-[#043c54] font-light text-xl xl:text-2xl">Asistencia</a>
              <a href="#" className="text-[#043c54] font-light text-xl xl:text-2xl">Blog</a>
            </nav>

            {/* Buttons desktop */}
            <div className="hidden lg:flex gap-3">
              <button
                onClick={openApp}
                className="px-6 py-2.5 bg-[#043c54] text-[#7fbfbf] rounded-full text-base xl:text-lg font-bold hover:opacity-90 transition-opacity min-w-[150px] xl:min-w-[170px] text-center"
              >
                Explora eMony
              </button>
              <button className="px-6 py-2.5 bg-[#7fbfbf] text-[#043c54] rounded-full text-base xl:text-lg font-bold hover:opacity-90 transition-opacity min-w-[150px] xl:min-w-[170px] text-center">
                Únete +
              </button>
            </div>

            {/* Hamburger mobile/tablet */}
            <button
              className="lg:hidden ml-auto text-[#043c54] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Logo en zona azul con curva */}
          <div className="absolute top-0 left-0 h-[80px] md:h-[112px] w-[240px] md:w-80 bg-[#043c54] rounded-br-[40px] flex items-center justify-center z-10">
            <img src={LOGO_SRC} alt="eMony" className="h-14 md:h-20 -mt-2 md:-mt-3" />
          </div>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-[100px] md:top-[120px] left-0 right-0 bg-white z-20 px-6 py-4 shadow-lg flex flex-col gap-4">
            <a href="#" className="text-[#043c54] font-semibold text-lg">Qué somos</a>
            <a href="#" className="text-[#043c54] font-light text-lg">Equipo</a>
            <a href="#" className="text-[#043c54] font-light text-lg">Asistencia</a>
            <a href="#" className="text-[#043c54] font-light text-lg">Blog</a>
            <div className="flex gap-3 pt-2">
              <button
                onClick={openApp}
                className="px-5 py-2 bg-[#043c54] text-[#7fbfbf] rounded-full text-sm font-bold"
              >
                Explora eMony
              </button>
              <button className="px-5 py-2 bg-[#7fbfbf] text-[#043c54] rounded-full text-sm font-bold">
                Únete +
              </button>
            </div>
          </div>
        )}

        {/* Hero content - ocupa el resto del frame */}
        <div className="flex-1 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-center gap-8 min-h-0">
          {/* Columna izquierda - Texto */}
          <div className="shrink-0 text-center lg:text-left py-4 lg:py-0">
            <h1 className="text-[40px] sm:text-[55px] md:text-[70px] xl:text-[90px] font-black text-[#043c54] leading-[0.9]">
              No SOMOS
            </h1>

            <div className="flex items-center gap-3 md:gap-5 mt-2 justify-center lg:justify-start">
              <div>
                <p className="text-[36px] sm:text-[50px] md:text-[65px] xl:text-[80px] text-[#043c54] leading-[0.85]">UN</p>
                <p className="text-[16px] sm:text-[22px] md:text-[26px] xl:text-[32px] text-[#043c54] leading-tight">BANCO</p>
              </div>

              <div className="bg-[#3d8c8c] rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4">
                <p className="text-white font-black text-[16px] sm:text-[22px] md:text-[28px] xl:text-[34px] leading-tight">
                  No prestamos
                </p>
                <p className="text-white font-black text-[28px] sm:text-[38px] md:text-[48px] xl:text-[60px] leading-[0.9] text-center">
                  DINERO
                </p>
              </div>
            </div>

            <p className="text-[#7ebebf] text-[18px] sm:text-[24px] md:text-[28px] xl:text-[34px] mt-4 md:mt-8">
              ¿Entonces qué somos?
            </p>

            <div className="mt-2 md:mt-4 flex justify-center lg:justify-start">
              <svg width="40" height="18" viewBox="0 0 50 22" fill="none">
                <path
                  d="M4 4L25 18L46 4"
                  stroke="#043c54"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Columna derecha - GIF */}
          <div className="flex-1 flex items-center justify-center self-stretch min-h-0 min-w-0">
            <img
              src={HERO_GIF_SRC}
              alt="Personajes eMony"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Tagline fuera del frame */}
      <p className="text-center text-[14px] sm:text-[18px] md:text-[22px] py-2 md:py-4">
        <span className="text-white font-light">Hacemos </span>
        <span className="text-[#7fbfbf] font-semibold">simples y seguros</span>
        <span className="text-white font-light"> los préstamos entre personas</span>
      </p>

      {/* Sección ¿Cómo funciona? */}
      <div className="bg-white rounded-2xl px-6 md:px-16 lg:px-20 py-10 md:py-16 relative overflow-hidden shrink-0">
        <h2 className="text-[#043c54] text-3xl md:text-5xl font-bold italic mb-12 md:mb-20">
          ¿Cómo funciona?
        </h2>

        {/* Contenedor de pasos con líneas */}
        <div className="relative">
          {/* Tarjetas de pasos */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-8">
            {/* Paso 1 - Solicita */}
            <div className="bg-[#a8d5d5] rounded-2xl p-8 md:p-10 w-full md:w-[30%] relative min-h-[140px] md:min-h-[180px]">
              <div className="absolute -top-4 -left-1 bg-[#043c54] text-white w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold">
                1
              </div>
              <h3 className="text-[#043c54] text-3xl md:text-4xl font-bold mt-2">Solicita</h3>
              <p className="text-[#043c54]/70 text-lg md:text-xl mt-3">Define cuánto y plazos</p>
            </div>

            {/* Paso 2 - Conecta */}
            <div className="bg-[#a8d5d5] rounded-2xl p-8 md:p-10 w-full md:w-[30%] relative min-h-[140px] md:min-h-[180px]">
              <div className="absolute -top-4 -left-1 bg-[#043c54] text-white w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold">
                2
              </div>
              <h3 className="text-[#043c54] text-3xl md:text-4xl font-bold mt-2">Conecta</h3>
              <p className="text-[#043c54]/70 text-lg md:text-xl mt-3">Otra persona acepta y envía</p>
            </div>

            {/* Paso 3 - Recibe */}
            <div className="bg-[#a8d5d5] rounded-2xl p-8 md:p-10 w-full md:w-[30%] relative min-h-[140px] md:min-h-[180px]">
              <div className="absolute -top-4 -left-1 bg-[#043c54] text-white w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold">
                3
              </div>
              <h3 className="text-[#043c54] text-3xl md:text-4xl font-bold mt-2">Recibe</h3>
              <p className="text-[#043c54]/70 text-lg md:text-xl mt-3">Dinero directo a tu cuenta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
