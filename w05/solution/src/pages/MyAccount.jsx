import React from 'react';
import Header from '../components/Header';
import { Link, useLoaderData } from 'react-router-dom';
import { getMyAccount } from '../api/myaccount';

export async function loadMyAccount() {
  return getMyAccount();
}

export default function MyAccount() {
  const myAccount = useLoaderData();

  return (
    <>
      <Header />
      <h1>My Account</h1>
      <div>
        <p>First name: {myAccount.firstName}</p>
        <p>Last name: {myAccount.lastName}</p>
        <p>Address: {myAccount.address}</p>
        <Link to='edit'>Edit</Link>
      </div>
    </>
  )
}
