'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'About', href: '/about', icon: 'UserIcon' },
    { label: 'Skills', href: '/skills', icon: 'CodeBracketIcon' },
    { label: 'Portfolio', href: '/portfolio', icon: 'BriefcaseIcon' },
    { label: 'Experience', href: '/experience', icon: 'AcademicCapIcon' },
    { label: 'Blog', href: '/blog', icon: 'DocumentTextIcon' },
  ];

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base ease-out ${
          isScrolled ? 'bg-card shadow-elevation-md' : 'bg-card'
        } ${className}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/homepage"
              className="flex items-center space-x-3 group"
              aria-label="DataDev Portfolio Home"
            >
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000"
                  className="transition-transform duration-base group-hover:scale-110"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    fill="url(#logo-gradient)"
                  />
                  <path
                    d="M12 14L16 10L20 14M20 14L24 10L28 14M20 14V26M12 26L16 30L20 26M20 26L24 30L28 26"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color-primary)" />
                      <stop offset="1" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="hidden sm:block">
              <span className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-base">      
               Tiago Silva
                </span>
                <span className="block text-xs text-muted-foreground font-body">
                  Portfolio
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-base ${
                    isActiveRoute(item.href)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                  {isActiveRoute(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-conversion text-conversion-foreground rounded-md font-cta font-semibold text-sm hover:bg-conversion/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base"
              >
                Contact Me
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-base"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Icon
                  name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-16 left-0 right-0 bg-card shadow-elevation-lg animate-slide-in-from-top">
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-base ${
                    isActiveRoute(item.href)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full mt-4 px-4 py-3 bg-conversion text-conversion-foreground rounded-md font-cta font-semibold text-base hover:bg-conversion/90 transition-colors duration-base"
              >
                Contact Me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;