import { getAdmin } from "@/actions/admin";
import Header from "@/components/header";
import { notFound } from "next/navigation";
import { Sidebar } from "./sidebar";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const admin = await getAdmin();
  if (!admin.authorized) {
    return notFound();
  }
  return (
    <div className="">
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-[5.5rem] fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[5.5rem] h-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
