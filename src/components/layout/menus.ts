export interface Menu {
  title: string;
  slug: string;
}

type Menus = Menu[];

export const menus: Menus = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Services",
    slug: "/services",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];
