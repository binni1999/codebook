export async function getProductList(searchTerm) {
  // const response = await fetch(
  //   `http://localhost:8080/products/search${searchTerm ? searchTerm : ""}`
  // );
  const response = await fetch(`${process.env.REACT_APP_HOST}/products`);
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
export async function getProduct(id) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
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

export async function getFeaturedList() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products/featured_Products`
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

export async function serachProduct(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products/search/${searchTerm}`
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
