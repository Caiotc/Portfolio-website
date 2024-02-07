type NavigationLinksProps = {
  NavigationLinks: Array<{ name: string }>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (id: string) => void;
};

export const NavigationLinks = ({
  NavigationLinks,
  setIsMenuOpen,
  scrollToSection,
}: NavigationLinksProps) => {
  return (
    <>
      {NavigationLinks.map((link) => {
        return (
          link && (
            <li className="shadow-sm text-lg p-4 flex items-center ">
              <a
                className="w-full h-full flex justify-center items-baseline"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  scrollToSection(link.name);
                }}
              >
                {link.name}
              </a>
            </li>
          )
        );
      })}
    </>
  );
};
