import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import styles from "./styles/styles.module.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Create Auth",
  description: "Portfolio Auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${urbanist.className} ${styles.bg_color}`}>
      <p>Auth Layout</p>
      {children}
    </div>
  );
}
