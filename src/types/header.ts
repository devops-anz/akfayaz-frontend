// TypeScript interfaces for header/navbar data structures

export interface MenuLink {
  title: string;
  url: string;
}

export interface portfolioLink {
  title: string;
  url: string;
  icon: string;
}

export interface SubMenuItem {
  title: string;
  url: string;
  subMenu?: SubMenuItem[];
}

export interface NavbarListItem {
  title: string;
  url: string;
  subMenu?: SubMenuItem[];
}

export interface HeaderData {
  id: number;
  company_name: string;
  logo: string;
  logo_url: string;
  description: string;
  menu_links: MenuLink[];
  footer_links: MenuLink[];
  portfolio_links: portfolioLink[];
  button_text: string;
  button_link: string;
  email_text: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface HeaderApiResponse {
  success: boolean;
  data: HeaderData;
  message?: string;
}

// Legacy navbar data structure for backward compatibility
export interface NavbarData {
  companyName: string;
  navbarList: NavbarListItem[];
}

// Props for navbar components
export interface NavbarProps {
  headerData?: HeaderData;
}

export interface MobileNavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navbarData: NavbarData;
}

// Return type for fetch functions
export interface FetchHeaderDataReturn {
  data: HeaderData | null;
  error: string | null;
}

// Mapped data structure for component compatibility
export interface MappedHeaderData {
  companyName: string;
  description: string;
  navbarList: NavbarListItem[];
  portfolioLinks: portfolioLink[];
  FooterList: NavbarListItem[];
  buttonText: string;
  buttonLink: string;
  emailText: string;
  email: string;
  logoUrl: string;
}

export interface MappedFooterData {
  companyName: string;
  description: string;
  FooterList: NavbarListItem[];
  portfolioLinks: portfolioLink[];
  navbarList?: NavbarListItem[];
  buttonText?: string;
  buttonLink?: string;
  emailText?: string;
  email?: string;
  logoUrl?: string;
}
