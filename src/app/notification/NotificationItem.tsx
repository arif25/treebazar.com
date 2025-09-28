import Image from 'next/image';

interface NotificationItemProps {
  imageSrc: string;
  title: string;
  format: string;
  price: number;
  timeAgo: string;
}

const NotificationItem = ({
  imageSrc,
  title,
  format,
  price,
  timeAgo,
}: NotificationItemProps) => {
  return (
    <div className="flex gap-4 p-4 border-b">
      <div className="min-w-[50px]">
        <Image src={imageSrc} alt={title} width={50} height={75} className="rounded-sm" />
      </div>
      <div className="flex-1 text-sm text-gray-800">
        <p>
          Your wishlist item <span className="font-semibold">{title}</span> ({format}) is now available at a reduced price of <span className="font-semibold">Rs. {price}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{timeAgo}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
