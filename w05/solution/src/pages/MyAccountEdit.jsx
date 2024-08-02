import React from 'react';
import { getMyAccount, updateMyAccount } from '../api/myaccount';
import { useLoaderData, Form, useNavigate, redirect } from 'react-router-dom';

export async function loadMyAccount() {
  const myAccount = await getMyAccount();
  return myAccount;
}

export async function saveMyAccount({ request }) {
  const formData = await request.formData();
  const newData = Object.fromEntries(formData);
  await updateMyAccount(newData);
  return redirect('/myaccount');
}

export default function MyAccountEdit() {
  const myAccount = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>My Account</h2>
      <Form method="post">
        <div>
          <label>First Name</label>
          <input name="firstName" defaultValue={myAccount.firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" defaultValue={myAccount.lastName} />
        </div>
        <div>
          <label>Address</label>
          <input name="address" defaultValue={myAccount.address} />
        </div>
        <div>
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" onClick={() => navigate(-1)} />
        </div>
      </Form>
    </>
  )
}
