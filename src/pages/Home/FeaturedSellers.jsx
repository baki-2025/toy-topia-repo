const FeaturedSellers = () => (
  <section className="py-10 px-6 bg-red-300">
    <h2 className="text-3xl font-bold text-center mb-6">🏆 Featured Sellers</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {/* Example sellers */}
      {["Alice Toys", "HappyKids", "Toy World"].map((seller, i) => (
        <div key={i} className="card bg-green-200 shadow-xl p-4 text-red-500 text-center">
          <h3 className="text-xl font-semibold">{seller}</h3>
          <p className="text-gray-600">Top rated local toy seller.</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedSellers;
