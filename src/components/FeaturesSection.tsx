
import React from 'react';
import { IconContract, IconStairs, IconInterests, IconReferral } from './FeatureIcons';

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-white rounded-2xl px-6 md:px-16 lg:px-20 py-16 flex flex-col gap-16">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {/* Feature 1 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[180px] h-[180px] bg-[#D7E0E0] rounded-full flex items-center justify-center overflow-hidden">
                        <IconContract className="w-full h-full scale-75" />
                    </div>
                    <h3 className="text-[#043c54] text-2xl font-bold">Contrato digital</h3>
                    <p className="text-[#043c54]/70 text-lg max-w-[250px]">Respaldamos cada préstamo, a través de contratos con validez legal</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[180px] h-[180px] bg-[#D7E0E0] rounded-full flex items-center justify-center overflow-hidden">
                        <IconStairs className="w-full h-full scale-75" />
                    </div>
                    <h3 className="text-[#043c54] text-2xl font-bold">Prestamos escalera</h3>
                    <p className="text-[#043c54]/70 text-lg max-w-[250px]">Empieza con s/100. Paga puntual y recibe el límite de cada subida hasta S/1000</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[180px] h-[180px] bg-[#D7E0E0] rounded-full flex items-center justify-center overflow-hidden">
                        <IconInterests className="w-full h-full scale-75" />
                    </div>
                    <h3 className="text-[#043c54] text-2xl font-bold">Devolución de intereses</h3>
                    <p className="text-[#043c54]/70 text-lg max-w-[250px]">Cada préstamo pagado a tiempo tiene recompensa de los intereses pagados</p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[180px] h-[180px] bg-[#D7E0E0] rounded-full flex items-center justify-center overflow-hidden">
                        <IconReferral className="w-full h-full scale-75" />
                    </div>
                    <h3 className="text-[#043c54] text-2xl font-bold">Gana dinero refiriendo</h3>
                    <p className="text-[#043c54]/70 text-lg max-w-[250px]">Por cada persona referida que pague su primer préstamo. Gana s/ 15.00</p>
                </div>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col items-center gap-10 border-t border-gray-100 pt-16">
                <h2 className="text-[#3d8c8c] text-3xl md:text-5xl font-black italic">
                    Nos respaldan <span className="text-[#043c54]">para respaldarte a ti_</span>
                </h2>

                {/* Partner Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-xl text-[#043c54]">Wichay</span>
                        <span className="text-xs uppercase tracking-widest text-[#043c54]">Continental</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-black text-2xl text-[#043c54]">STARTUP <span className="text-[#3d8c8c]">PERÚ</span></span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-xl text-[#043c54]">PRO <span className="text-[#3d8c8c]">Innóvate</span></span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-2xl text-[#043c54] tracking-tighter">SciFy</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-xl text-[#043c54]">UTEC <span className="text-xs block font-normal -mt-1">VENTURES</span></span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-black text-2xl text-[#043c54]">PECAP</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
