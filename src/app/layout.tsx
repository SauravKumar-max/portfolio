import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Saurav Kumar",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-2xl mx-auto mt-24">{children}</div>
      </body>
    </html>
  );
}
