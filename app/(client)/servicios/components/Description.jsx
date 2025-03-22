export default function Description({ title, text }) {
  return (
    <section className="bg-dorado text-white w-screen relative left-1/2 -translate-x-1/2 text-center">
      <div className="max-w-6xl m-auto p-4 md:py-16">
        <h3 className="font-bold text-xl mb-2 font-title">{title}</h3>
        <p className="text-justify">{text}</p>
      </div>
    </section>
  );
}
