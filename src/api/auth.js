export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "shiva9996@gmail.com" && password === "shiva9996") {
        resolve({ token: "969696" });
      } else {
        reject({ message: "Invalid credentials" });
      }
    }, 500);
  });
};
