import React from 'react';

type FocusPackage = {
  name: string;
  target: string;
  price: string;
  payment: string;
};

const focusPackages: FocusPackage[] = [
  {
    name: 'GKS',
    target: 'Học bổng chính phủ Hàn Quốc',
    price: 'Từ 8.500.000 - 12.000.000 VNĐ',
    payment: 'Thanh toán 1 lần trước khi bắt đầu',
  },
  {
    name: 'Khối IST',
    target: 'Học bổng các trường khoa học kỹ thuật: HKUST, KAIST, UNIST, DGIST, GIST, POSTECH',
    price: '15.000.000 VNĐ',
    payment: 'Thanh toán hai đợt',
  },
  {
    name: 'Grad Europe',
    target: 'Học bổng bậc sau đại học ở Châu Âu',
    price: 'Từ 12.000.000 - 18.000.000 VNĐ',
    payment: 'Thanh toán 1 lần trước khi bắt đầu',
  },
  {
    name: 'USA Scholarship',
    target: 'Học bổng du học Mỹ (mọi bậc học)',
    price: '20.000.000 - 30.000.000 VNĐ',
    payment: 'Thanh toán 1 lần trước khi bắt đầu',
  },
  {
    name: 'General Scholarship',
    target: 'Du học các học bổng không nằm trong danh sách kể trên',
    price: 'Từ 9.000.000 - 12.000.000 VNĐ',
    payment: 'Thanh toán 1 lần trước khi bắt đầu',
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
