'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 7,
    text: 'Years of IT HelpDesk experience',
  },
  {
    num: 34,
    text: 'Coding Projects Completed',
  },
  {
    num: 200,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mt-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-3 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Stats;
