import "./globals.css";
import SideBar from "@/components/Sidebar/SideBar";

export const metadata = {
  title: "Tweety",
  description: "Share your thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-gray-950 flex flex-col sm:flex-row w-screen min-h-screen">
        <SideBar />
        <main className="flex-grow sm:ml-[25%] md:ml-[20%] p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
