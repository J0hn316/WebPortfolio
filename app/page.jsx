import Photo from '@/components/Photo';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{' '}
              <span className="text-accent">John C.Wrimene</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate full-stack web developer based in the Cincinnati
              area. I enjoy creating projects inspired by the video games and
              anime I loved as a kid. I approach each project with 100% effort,
              always keeping the client's needs in mind. Whether working with a
              team or independently, I am highly motivated and constantly eager
              to learn new things.
            </p>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
