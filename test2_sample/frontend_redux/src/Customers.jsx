import React from "react";
import Header from "./Header";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getFavoriteCustomers } from './customersSlice';

export async function loadCustomers() {
  const customers = await fetch("http://localhost:2222/customers");
  return customers;
}

export default function Customers() {
  const customers = useLoaderData();
  const favCustomers = useSelector((state) => getFavoriteCustomers(state));
  const customerList = customers.map((cust) => (
    <li key={cust.id}>
      <Link to={`${cust.id}`}>
        {favCustomers.find(e => e === cust.id) != undefined && <strong>{cust.name}</strong>}
        {favCustomers.find(e => e === cust.id) == undefined && cust.name}
      </Link>
    </li>
  ));

  return (
    <>
      <Header />
      <h2>Customers</h2>
      <ul>{customerList}</ul>
      <div>
        <Outlet />
      </div>
    </>
  );
}
