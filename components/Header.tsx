"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MEGA_MENU_SECTIONS } from "./navData";

const LANGUAGES = [
  { code: "en-US", short: "EN · Global", label: "English (Global)" },
  { code: "en-GB", short: "EN · UK", label: "English (UK)" },
  { code: "de", short: "DE · DE", label: "Deutsch" },
  { code: "fr", short: "FR · FR", label: "Français" },
  { code: "es", short: "ES · ES", label: "Español" },
];

function ChevronDownIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${rotated ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M13.2 13.2L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="10"
        cy="10"
        rx="3.25"
        ry="7.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.2 7.5H16.8M3.2 12.5H16.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5H15M3 9H15M3 13H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MegaMenuArtwork() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-md bg-[#10535A]">
      <svg
        viewBox="0 0 288 192"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
      >
        {/* 6 radiating spokes */}
        <g
          stroke="#00C8B8"
          strokeOpacity="0.32"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <line x1="144" y1="20" x2="144" y2="66" />
          <line x1="144" y1="126" x2="144" y2="172" />
          <line x1="88" y1="62" x2="120" y2="81" />
          <line x1="168" y1="111" x2="200" y2="130" />
          <line x1="200" y1="62" x2="168" y2="81" />
          <line x1="120" y1="111" x2="88" y2="130" />

          {/* 4 corner diagonal ticks */}
          <line x1="36" y1="14" x2="58" y2="28" />
          <line x1="252" y1="14" x2="230" y2="28" />
          <line x1="36" y1="178" x2="58" y2="164" />
          <line x1="252" y1="178" x2="230" y2="164" />
        </g>

        {/* Center ring & dot */}
        <circle
          cx="144"
          cy="96"
          r="26"
          stroke="#00C8B8"
          strokeWidth="7"
        />
        <circle cx="144" cy="96" r="7" fill="#00C8B8" />
      </svg>
    </div>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en-US");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<string>("platform");
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setSearchOpen(false);
        setLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setSearchOpen(false);
        setLangOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelClose();
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openSectionOnHover = (id: string) => {
    cancelClose();
    setSearchOpen(false);
    setLangOpen(false);
    setOpenDropdown(id);
  };

  const toggleSectionOnClick = (id: string) => {
    cancelClose();
    setSearchOpen(false);
    setLangOpen(false);
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const activeLanguage =
    LANGUAGES.find((lang) => lang.code === selectedLang) ?? LANGUAGES[0];
  const activeMegaMenu = MEGA_MENU_SECTIONS.find(
    (section) => section.id === openDropdown
  );
  const activeMobileSection =
    MEGA_MENU_SECTIONS.find((section) => section.id === mobileTab) ??
    MEGA_MENU_SECTIONS[0];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs"
    >
      <div className="relative mx-auto max-w-[1440px] rounded-2xl bg-white shadow-[0px_1px_2px_0px_rgba(12,46,48,0.08)]">
        {/* Desktop Header */}
        <div className="hidden h-20 items-center justify-between px-6 lg:flex lg:px-10 xl:px-16">
          <Link
            href="/"
            aria-label="ZoiQuest home"
            className="inline-flex shrink-0 items-center"
          >
            <Image
              src="/images/zoiquest-logo-png 1.png"
              alt="ZoiQuest"
              width={154}
              height={46}
              priority
              className="h-[44px] w-auto object-contain"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-0.5 xl:gap-1"
          >
            {MEGA_MENU_SECTIONS.map((section) => {
              const isOpen = openDropdown === section.id;
              return (
                <div
                  key={section.id}
                  onMouseEnter={() => openSectionOnHover(section.id)}
                  onMouseLeave={scheduleClose}
                  className={`border-b-2 transition-colors ${
                    isOpen ? "border-[#10535A]" : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleSectionOnClick(section.id)}
                    className={`inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-[10px] px-2.5 py-3 text-sm font-semibold leading-5 text-[#0C2E30] transition-colors hover:bg-[#F3F8F8] xl:px-3 ${
                      isOpen ? "bg-[#F3F8F8]/60" : ""
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronDownIcon rotated={isOpen} />
                  </button>
                </div>
              );
            })}

            <Link
              href="#pricing"
              onMouseEnter={scheduleClose}
              className="inline-flex min-h-11 items-center rounded-[10px] border-b-2 border-transparent px-2.5 py-3 text-sm font-semibold leading-5 text-[#0C2E30] transition-colors hover:bg-[#F3F8F8] xl:px-3"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2 pl-2 xl:pl-10">
            <div className="relative">
              <button
                type="button"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => {
                  setOpenDropdown(null);
                  setLangOpen(false);
                  setSearchOpen((prev) => !prev);
                }}
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] text-[#0C2E30] transition-colors hover:bg-[#F3F8F8]"
              >
                <SearchIcon />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-[#DCE8E9] bg-white p-3 shadow-lg">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSearchOpen(false);
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search ZoiQuest..."
                      aria-label="Search ZoiQuest"
                      autoFocus
                      className="h-10 w-full rounded-lg border border-[#DCE8E9] px-3 text-sm text-[#0C2E30] outline-none focus:border-[#10535A]"
                    />
                  </form>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-label="Select language"
                aria-expanded={langOpen}
                onClick={() => {
                  setOpenDropdown(null);
                  setSearchOpen(false);
                  setLangOpen((prev) => !prev);
                }}
                className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-[10px] border border-[#DCE8E9] bg-white px-3 py-2.5 text-sm font-medium text-[#0C2E30] transition-colors hover:bg-[#F3F8F8]"
              >
                <GlobeIcon />
                <span className="whitespace-nowrap">{activeLanguage.short}</span>
                <ChevronDownIcon rotated={langOpen} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[#DCE8E9] bg-white p-1.5 shadow-lg">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-[#F3F8F8] ${
                        selectedLang === lang.code
                          ? "font-semibold text-[#10535A]"
                          : "font-medium text-[#0C2E30]"
                      }`}
                    >
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#sign-in"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#DCE8E9] bg-white px-4 pt-2.5 pb-3 text-center text-sm font-semibold leading-5 text-[#0C2E30] transition-colors hover:bg-[#F3F8F8]"
            >
              Sign in
            </Link>

            <Link
              href="#book-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#10535A] bg-[#10535A] px-4 pt-2.5 pb-3 text-center text-sm font-semibold leading-5 text-white transition-colors hover:border-[#0C3F45] hover:bg-[#0C3F45]"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* Desktop Mega-Menu Dropdown Panel */}
        {activeMegaMenu && (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="hidden lg:block absolute left-0 right-0 top-full z-50 px-6 pt-3 xl:px-10"
          >
            <div className="mx-auto max-w-[1280px] rounded-2xl border border-[#DCE8E9] bg-white px-6 py-8 shadow-[0px_2px_8px_0px_rgba(12,46,48,0.06),0px_16px_40px_0px_rgba(12,46,48,0.16)] xl:px-8">
              <div className="flex items-start gap-8">
                <div className="grid flex-1 grid-cols-4 gap-8">
                  {activeMegaMenu.columns.map((col) => (
                    <div key={col.heading} className="flex flex-col gap-3">
                      <h3 className="text-sm font-bold leading-5 text-[#0C2E30]">
                        {col.heading}
                      </h3>
                      <ul className="flex flex-col">
                        {col.links.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block py-2 text-sm font-normal leading-5 text-[#466B6F] transition-colors hover:text-[#0C2E30]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex w-72 shrink-0 flex-col gap-3">
                  <div className="flex flex-col gap-2.5">
                    <MegaMenuArtwork />
                    <p className="text-xs font-semibold leading-5 text-[#0C2E30]">
                      {activeMegaMenu.featureCaption}
                    </p>
                  </div>
                  <Link
                    href={activeMegaMenu.viewAllHref}
                    onClick={() => setOpenDropdown(null)}
                    className="inline-block w-fit text-xs font-semibold leading-5 text-[#0C2E30] underline underline-offset-4 hover:text-[#10535A]"
                  >
                    {activeMegaMenu.viewAllLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Header */}
        <div className="flex h-[68px] items-center justify-between px-4 lg:hidden">
          <Link
            href="/"
            aria-label="ZoiQuest home"
            className="inline-flex items-center"
          >
            <Image
              src="/images/zoiquest-logo-png 1.png"
              alt="ZoiQuest"
              width={154}
              height={46}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] border border-[#DCE8E9] bg-white px-3.5 py-2.5 text-sm font-semibold leading-5 text-[#0C2E30] transition-colors hover:bg-[#F3F8F8]"
          >
            <MenuIcon open={mobileOpen} />
            <span>Menu</span>
          </button>
        </div>

        {/* Mobile Mega-Menu Drawer */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[#DCE8E9] px-4 pb-6 pt-3 lg:hidden">
            {/* Section Tabs */}
            <nav
              aria-label="Mobile navigation"
              className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-[#DCE8E9] pb-3"
            >
              {MEGA_MENU_SECTIONS.map((section) => {
                const isSelected = mobileTab === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setMobileTab(section.id)}
                    className={`inline-flex cursor-pointer items-center gap-1 border-b-2 py-2 text-xs font-semibold transition-colors ${
                      isSelected
                        ? "border-[#10535A] text-[#0C2E30]"
                        : "border-transparent text-[#466B6F]"
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronDownIcon rotated={isSelected} />
                  </button>
                );
              })}

              <Link
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-xs font-semibold text-[#466B6F] hover:text-[#0C2E30]"
              >
                Pricing
              </Link>
            </nav>

            {/* Active Mobile Section Content */}
            <div className="mt-4 flex flex-col gap-5">
              {activeMobileSection.columns.map((col) => (
                <div key={col.heading} className="flex flex-col gap-1.5">
                  <h3 className="text-xs font-bold leading-5 text-[#0C2E30]">
                    {col.heading}
                  </h3>
                  <ul className="flex flex-col">
                    {col.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm font-normal leading-5 text-[#466B6F] hover:text-[#0C2E30]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-2.5 pt-1">
                <MegaMenuArtwork />
                <p className="text-xs font-semibold leading-5 text-[#0C2E30]">
                  {activeMobileSection.featureCaption}
                </p>
                <Link
                  href={activeMobileSection.viewAllHref}
                  onClick={() => setMobileOpen(false)}
                  className="inline-block w-fit text-xs font-semibold leading-5 text-[#0C2E30] underline underline-offset-4"
                >
                  {activeMobileSection.viewAllLabel}
                </Link>
              </div>
            </div>

            {/* Mobile Search, Language & Actions */}
            <div className="mt-6 flex flex-col gap-3 border-t border-[#DCE8E9] pt-4">
              <div className="flex items-center gap-2">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ZoiQuest..."
                  aria-label="Search ZoiQuest"
                  className="h-11 flex-1 rounded-[10px] border border-[#DCE8E9] px-3 text-sm text-[#0C2E30] outline-none focus:border-[#10535A]"
                />
                <select
                  aria-label="Select language"
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="h-11 rounded-[10px] border border-[#DCE8E9] bg-white px-3 text-sm font-medium text-[#0C2E30] outline-none"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.short}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#DCE8E9] bg-white px-4 text-sm font-semibold text-[#0C2E30] hover:bg-[#F3F8F8]"
                >
                  Sign in
                </Link>
                <Link
                  href="#book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#10535A] bg-[#10535A] px-4 text-sm font-semibold text-white hover:bg-[#0C3F45]"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
