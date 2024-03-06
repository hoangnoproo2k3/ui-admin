'use client'
import Footer from "@/components/admin/footer/Footer";
import Navbar from "@/components/admin/navbar";
import SidebarHorizon from "@/components/admin/sidebar";
import { getActiveNavbar, getActiveRoute } from "@/utils/navigation";
import routes from "@/variables/routes";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // if (isWindowAvailable()) document.documentElement.dir = 'ltr';
    return (
        <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
            <SidebarHorizon routes={routes} open={open} setOpen={setOpen} variant="admin" />
            <div className="h-full w-full font-dm dark:bg-navy-900">
                {/* Main Content */}
                <main
                    className={`mx-2.5 flex-none transition-all dark:bg-navy-900 md:pr-2 xl:ml-[323px]`}
                >
                    {/* Routes */}
                    <div>
                        <Navbar
                            onOpenSidenav={() => setOpen(!open)}
                            brandText={getActiveRoute(routes, pathname)}
                            secondary={getActiveNavbar(routes, pathname)}
                        />
                        <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
                            {children}
                        </div>
                        <div className="p-3">
                            <Footer />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;