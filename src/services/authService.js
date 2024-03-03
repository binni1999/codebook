export async function login(authDetail) {
  const requestOption = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestOption
  );
  // console.log("This is the actual ", await response.json());
  if (!response.ok) {
    const e = await response.json();
    // eslint-disable-next-line no-throw-literal
    throw {
      message: e.message,
      statusCode: response.status,
    };
  }
  const data = await response.json();
  if (data.jwtToken) {
    sessionStorage.setItem("token", JSON.stringify(data.jwtToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.id));
  }
  return data;
}

export async function register(authDetail) {
  const requestOption = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/signup`,
    requestOption
  );
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();

  if (data.jwtToken) {
    sessionStorage.setItem("token", JSON.stringify(data.jwtToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.id));
  }
  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
