export default function Contactanos({ text, iconLeft, iconRight }) {
  return (
    <section className="bg-dorado text-black font-bold text-3xl text-center p-12 relative left-1/2 -translate-x-1/2 ">
      <h2 className="text-2xl font-semibold text-white mb-4">"{text}"</h2>
      <button
        id="modal-button"
        className="bg-white p-4 inline-block rounded-2xl z-10 relative hover:bg-orange-600 hover:scale-105 transition-all"
      >
        Contáctanos ahora
      </button>

      <img className="absolute h-[160px] hidden md:block bottom-4 left-0" src={iconLeft} alt="" />
      <img className="absolute h-[160px] hidden md:block bottom-4 right-0" src={iconRight} alt="" />
    </section>
  );
}
