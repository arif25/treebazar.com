

import AddressCard from "./AddressCard";        

const addressData = [
  {
    type: 'Home',
    name: 'Jane Ipsum',
    phone: '+1 (555) 987-6543',
    address:
      '742 Ipsum Boulevard, Building 9, Floor 12, Suite 1205, Lorem Heights Complex, Dolorville, Consectetur District, Sit Amet Province 987654, Countryland',
  },
  {
    type: 'Office',
    name: 'Sayed Ishaq',
    phone: '9999999999',
    address:
      '123 Lorem Street, Apt. 45, Dolor City, Ipsum State 56789, Country'
  }, 
  {
    type: 'Home',
    name: 'John Lorem',
    phone: '+1 (555) 123-4567',
    address:
      '742 Ipsum Boulevard, Building 9, Floor 12, Suite 1205, Lorem Heights Complex, Dolorville, Consectetur District, Sit Amet Province 987654, Countryland',
  }
];

export default function ManageAddresses() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <button className="text-blue-600 font-medium mb-6 flex items-center gap-2">
        <span className="text-xl">+</span> Add a New Address
      </button>

      <div className="space-y-4">
        {addressData.map((addr, index) => (
          <AddressCard key={index} {...addr} /> 
          // <div key={index}> { addr.name } </div>
        ))}
      </div>
    </div>
  );
}
