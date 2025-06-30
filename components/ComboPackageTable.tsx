import React from 'react';

type FocusPackage = {
  name: string;
  target: string;
  price: string;
  payment: string;
};

const focusPackages: FocusPackage[] = [
  {
    name: 'Regional Combo 5-Uni',
    target: 'Tối đa 5 trường/học bổng tại Châu Á, Âu, Úc',
    price: '30.000.000 VNĐ',
    payment: 'Thanh toán 2 đợt',
  },
  {
    name: 'Regional Combo 10-Uni',
    target: 'Tối đa 10 trường/học bổng tại Châu Á, Âu, Úc',
    price: '50.000.000 VNĐ',
    payment: 'Thanh toán 2 đợt',
  },
  {
    name: 'Fast Retailing Combo',
    target: 'Học bổng Fast Retailing (Apply học bổng và trường sau khi đậu học bổng)',
    price: '30.000.000 VNĐ',
    payment: 'Thanh toán 2 đợt',
  },
  {
    name: 'Global Combo 5-Uni',
    target: 'Tối đa 5 trường/học bổng, bao gồm Mỹ và các khu vực khác',
    price: '50.000.000 VNĐ',
    payment: 'Thanh toán 2 đợt',
  },
  {
    name: 'Global Combo 10-Uni',
    target: 'Tối đa 10 - 15 trường, bao gồm Mỹ và các khu vực khác',
    price: '100.000.000 VNĐ',
    payment: 'Thanh toán 3 đợt',
  },
];

const FocusPackageTable: React.FC = () => {
  return (
    <div className="overflow-x-auto py-10 px-1 md:px-1">
      <table className="min-w-full border border-gray-200 shadow-md rounded-md">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="text-left px-4 py-3 border-b">Tên gói</th>
            <th className="text-left px-4 py-3 border-b">Đối tượng áp dụng</th>
            <th className="text-left px-4 py-3 border-b">Giá</th>
            <th className="text-left px-4 py-3 border-b">Hình thức thanh toán</th>
          </tr>
        </thead>
        <tbody>
          {focusPackages.map((pkg, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3 border-b">{pkg.name}</td>
              <td className="px-4 py-3 border-b">{pkg.target}</td>
              <td className="px-4 py-3 border-b text-red-600 font-medium">{pkg.price}</td>
              <td className="px-4 py-3 border-b">{pkg.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FocusPackageTable;
