import Sidebar from "@/components/sidabar/Sidebar";
import { Footer } from "@/components/ui/footer/Footer";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        {" "}
        <TopMenu />
        <Sidebar/>
      <div className="">
        {children}
      </div>
      <Footer/>
    </main>
  );
}
