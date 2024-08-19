import React from 'react';

export default function CarPriceTable({ cars }) {
  const expensivePrice = 60000;
  const data = cars.map((car) => {
    const registrationFee = car.imported ? car.price * 0.10 : car.price * 0.05;
    const totalPrice = car.price + registrationFee;
    const expensive = totalPrice > expensivePrice ? true : false;

    return (
      <tr className={expensive ? 'expensive' : 'inexpensive'} key={car.id}>
        <td>{car.id}</td>
        <td>{car.name}</td>
        <td>{car.imported ? 'Yes' : 'No'}</td>
        <td>{car.price}</td>
        <td>{registrationFee}</td>
        <td>{totalPrice}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Imported</th>
          <th>Price</th>
          <th>Registration Fee</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  );
}
