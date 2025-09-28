import Header from "@/components/header/Header";
import ManageAddresses from "./ManageAddresses";
import Footer from "@/components/footer/Footer";

export default function AddressesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 p-6">
        <ManageAddresses /> 
      </main>
      <Footer />
    </>
  );
}