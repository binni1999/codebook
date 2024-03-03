function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token: token, id: cbid };
}

export async function getUser() {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/users/${browserData.id}`,
    requestOptions
  );
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSession();

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/orders/${browserData.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  console.log("cart list ", cartList);
  const browserData = getSession();
  const order = {
    products: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: browserData.id,
    },
  };
  console.log("Json data ", JSON.stringify(order));
  const response = await fetch(`${process.env.REACT_APP_HOST}/orders/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}
