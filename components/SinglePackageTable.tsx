import React from 'react';

type SinglePackage = {
  name: string;
  target: string;
  price: string;
  payment: string;
};

const singlePackages: SinglePackage[] = [
  {
    name: 'Tư vấn apply',
    target: 'Giải đáp thắc mắc, định hướng apply, góp ý CV',
    price: '150.000 VNĐ / 30 phút',
    payment: 'Thanh toán 1 lần',
  },
  {
    name: 'Essay Feedback',
    target: 'Feedback một trong các bài viết: Study Plan, Personal Statement, Research Statement, Cover Letter hoặc LOR',
    price: '800.000 VNĐ / 1 tiếng / 1 loại bài',
    payment: 'Thanh toán 1 lần',
  },
  {
    name: 'Mock Interview',
    target: 'Luyện phỏng vấn theo hồ sơ và học bổng cụ thể',
    price: '800.000 VNĐ / 1 tiếng',
    payment: 'Thanh toán 1 lần',
  },
  {
    name: 'CV & Cover Letter Review',
    target: 'Chỉnh sửa CV và thư xin học bổng hoặc thư gửi giáo sư',
    price: '1.100.000 VNĐ / 90 phút',
    payment: 'Thanh toán 1 lần',
  },
];

const SinglePackageTable: React.FC = () => {
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
          {singlePackages.map((pkg, index) => (
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

export default SinglePackageTable;
