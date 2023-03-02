export const getUser = async (url, set) => {
  const response = await fetch(`${url}/api/user/getall`);
  const data = await response.json();
  // console.log(data);
  set(data)
  return data
}