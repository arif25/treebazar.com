

type AddressCardProps = {
  type: string;
  name: string;
  phone: string;
  address: string;  
};

export default function AddressCard({ type, name, phone, address }: AddressCardProps) {
  return (
    <>
    <div className="border rounded-md p-4 bg-gray-50 relative">
      <div className="absolute top-4 right-4 text-gray-400 cursor-pointer">⋮</div>

      <div className="mb-2">
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded uppercase mr-2">
          {type} 
        </span>
        <span className="font-semibold">{name}</span>{' '}
        <span className="text-sm text-gray-600">{phone}</span>
      </div>
      <p className="text-sm text-gray-700">{address}</p> 
    </div>
    </>
  );
}
