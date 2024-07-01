const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5">
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © John C.Wrimene {currentYear}{' '}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
