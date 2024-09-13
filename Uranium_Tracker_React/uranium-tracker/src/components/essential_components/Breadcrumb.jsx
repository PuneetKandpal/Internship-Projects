const Breadcrumb = ({ link }) => {
  return (
    <div>
      <div class="bg-black1 shadow-lg px-6 md:px-20 py-5 fixed top-0 left-0 w-full z-50">
        <ul class="flex gap-x-1 md:gap-x-2 text-[12px] md:text-sm text-white/40 lato tracking-[0.3px]">
          <a
            class="hover:text-lime2 font-medium transition-all duration-200"
            href="/essentials"
          >
            Uranium Essentials
          </a>
          <span> > </span>
          <a
            class="hover:text-lime2 font-medium transition-all duration-200"
            href={link}
          >
            What Is Uranium
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
