import { forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TABS = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Produtos", id: "produtos" },
  { label: "Vantagens", id: "vantagens" },
] as const;

interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

const Navbar = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Moves the sliding cursor to the selected tab
  useEffect(() => {
    const el = tabsRef.current[selected];
    if (!el) return;
    const { width } = el.getBoundingClientRect();
    setPosition({ left: el.offsetLeft, width, opacity: 1 });
  }, [selected]);

  // Scroll spy — highlights the section currently on screen
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.35;
      let current = 0;
      TABS.forEach((tab, i) => {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= threshold) current = i;
      });
      setSelected(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSelect = (i: number, id: string) => {
    setSelected(i);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navegação principal"
      className="absolute left-1/2 top-2 z-50 -translate-x-1/2 md:top-3"
    >
      <ul
        onMouseLeave={() => {
          const el = tabsRef.current[selected];
          if (!el) return;
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }}
className="relative mx-auto flex w-fit rounded-full border-2 border-neutral-900 bg-[#F1E8D6] p-1.5 shadow-[2px_2px_0_0_#1c1917] md:p-1"
      >
        {TABS.map((tab, i) => (
          <Tab
            key={tab.id}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            setPosition={setPosition}
            onClick={() => handleSelect(i, tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: (pos: CursorPosition) => void;
  onClick: () => void;
}

const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => (
    <li
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => {
        if (typeof ref === "function" || !ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer select-none px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white mix-blend-difference md:px-4 md:py-1.5 md:text-sm"
    >
      {children}
    </li>
  ),
);

Tab.displayName = "Tab";

const Cursor = ({ position }: { position: CursorPosition }) => (
  <motion.li
    aria-hidden
    animate={{ left: position.left, width: position.width, opacity: position.opacity }}
    className="absolute inset-y-1 left-0 z-0 rounded-full bg-neutral-900"
  />
);

export default Navbar;