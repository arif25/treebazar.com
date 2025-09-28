
import Header from "@/components/header/Header";
import NotificationItem from "./NotificationItem";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Home() {
  const notifications = [
    {
      imageSrc: '/images/product-item.jpg',
      title: 'And the Mountains Echoed',
      format: 'Paperback',
      price: 377,
      timeAgo: '2 hours ago',
    },
    {
      imageSrc: '/images/product-item.jpg',
      title: "Bad Boy's Guide to the Good Indian Girl",
      format: 'Paperback',
      price: 204,
      timeAgo: '15 hours ago',
    },
    {
      imageSrc: '/images/product-item.jpg',
      title: 'Hardy Boys Complete Series (Set of 66 Books)',
      format: 'Hardcover',
      price: 13035,
      timeAgo: '1 day ago', 
    },
    {
      imageSrc: '/images/product-item.jpg',
      title: 'And the Mountains Echoed',
      format: 'Paperback',
      price: 377,
      timeAgo: '2 hours ago',
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-md mx-auto mt-10 shadow-lg border rounded-md bg-white">
        <h2 className="text-lg font-bold p-4 border-b bg-gray-100">Notifications</h2>
        {notifications.map((n, idx) => (
          <NotificationItem key={idx} {...n} />
        ))}
      </main>
      <Footer />
    </>
  );
}
