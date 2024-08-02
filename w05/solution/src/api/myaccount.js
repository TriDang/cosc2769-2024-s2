// This script simulates my acount data processing tasks

const myAccount = {
  firstName: "Tri",
  lastName: "Dang",
  address: "RMIT",
};

// get my account
export async function getMyAccount() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(myAccount), 1000);
  });
}

// update my account
export async function updateMyAccount(newData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      myAccount.firstName = newData.firstName;
      myAccount.lastName = newData.lastName;
      myAccount.address = newData.address;
      resolve(myAccount);
    }, 1000);
  });
}
