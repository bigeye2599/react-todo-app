export const getUser = async (): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const username = document.cookie.split(":").find((cookie) => {
        const [key, value] = cookie.split("=");
        return key.trim() === "username" ? value : undefined;
      });

      if (username) {
        resolve({ username });
      }
      reject(new Error("Not logged in"));
    }, 500);
  });
};

const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

export const login = async (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.username === username && user.password && password
      );
      if (user) {
        document.cookie = `username=${user.username}`;
        resolve({ username: user.username });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 500);
  });
};
