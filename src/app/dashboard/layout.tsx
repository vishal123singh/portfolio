import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import styles from "./styles/styles.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Create Dasboard",
  description: "Portfolio Dashboard",
};

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${urbanist.className} ${poppins.className} ${styles.bg_color}`}
    >
      <p>Dashboard Layout</p>
      {children}
    </div>
  );
}
