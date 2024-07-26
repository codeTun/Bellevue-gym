import gym from "../data/gym.json";
export function OurGym() {
  const images = [];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Gym
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Take a closer look at the different areas and features of our
            state-of-the-art gym.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {gym.gymItems.map((item, index) => (
            <div className="group"key={index}>
              <img
                src={item.imageSrc}
                width={600}
                height={400}
                alt={item.altText}
                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}
