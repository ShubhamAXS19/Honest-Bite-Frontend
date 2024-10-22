import { atom, selector } from "recoil";
import axios from "axios";

// Atom to store the user's state, fetched by a selector
export const userAtom = atom({
  key: "userAtom",
  default: selector({
    key: "userAtomSelector",
    get: async () => {
      try {
        const token =
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzBhOGNhZGRiMjA3MTJkMzg2NmVmZWUiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6InNodWJoYW0iLCJsYXN0TmFtZSI6InZpc2h3YWthcm1hIiwicG9zdHMiOlsiNjcwYTkxNWNhNDQ3YTQ2ODM2NTJiMGU4IiwiNjcwYTkxOWRhNDQ3YTQ2ODM2NTJiMGViIiwiNjcwYTkyNTZhNDQ3YTQ2ODM2NTJiMGVlIiwiNjcwYTkyZGRhNDQ3YTQ2ODM2NTJiMGYxIiwiNjcwYTkzMzZhNDQ3YTQ2ODM2NTJiMGY0IiwiNjcwYTkzOTBhNDQ3YTQ2ODM2NTJiMGY3IiwiNjcwYTkzZjBhNDQ3YTQ2ODM2NTJiMGZhIiwiNjcwYTk0NGZhNDQ3YTQ2ODM2NTJiMGZkIiwiNjcwYTk2NDhhNDQ3YTQ2ODM2NTJiMTAwIiwiNjcwYTk2OGNhNDQ3YTQ2ODM2NTJiMTAzIiwiNjcwYTk2ZDBhNDQ3YTQ2ODM2NTJiMTA2IiwiNjcwYTk3MjVhNDQ3YTQ2ODM2NTJiMTA5IiwiNjcwYTk3NmFhNDQ3YTQ2ODM2NTJiMTBjIiwiNjcwYTk3Y2NhNDQ3YTQ2ODM2NTJiMTBmIiwiNjcwYTk4MTFhNDQ3YTQ2ODM2NTJiMTEyIiwiNjcwYTk4NjdhNDQ3YTQ2ODM2NTJiMTE1IiwiNjcwYTk4ZDFhNDQ3YTQ2ODM2NTJiMTE4IiwiNjcwYTk5MTRhNDQ3YTQ2ODM2NTJiMTFiIiwiNjcwYTk5OGNhNDQ3YTQ2ODM2NTJiMTFlIiwiNjcwYWEwZWFmMjBkNzYzYTgyNmE3ZjQ1IiwiNjcxNWZiNTFkY2RkNjlhYjgwZjgzODgzIl0sImZvbGxvd2VycyI6MTAsImZvbGxvd2luZyI6MTAsImJvb2ttYXJrcyI6W10sImZhdiI6W10sImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTJUMTQ6NTA6MjEuNzMwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjFUMDY6NTc6MjEuNjcyWiIsImlhdCI6MTcyOTUyMjMzNCwiZXhwIjoxNzMyMTE0MzM0fQ.b5XvhlRgz8bpUgN2_HBMI-SGqUgyl9cEC-iGvaGDTwM5MWoFQxce0D2gmwL2MGsif2EGiGFdiAnUYlEk12H1uZziEe4QjUZV5Xb5ha2dyyJQZEJu9ffo5n1rF09QM9vUvGXPHOTVceyPxH3Wa7vOeDaG7BilmFrrEuHZ8i0LlvM";
        // const userId = localStorage.getItem("userId");
        // const userId = "670a8caddb20712d3866efee";
        const response = await axios.get(
          // `${import.meta.env.VITE_API_URL}/auth/${userId}/me`,
          `${import.meta.env.VITE_API_URL}/auth/670a8caddb20712d3866efee/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return {
          ...response.data,
          tempBookmarks: [...response.data.bookmarks], // Add tempBookmarks
        };
      } catch (error) {
        console.error("Error fetching user data: ", error);
        return null;
      }
    },
  }),
});

// export const bookmarkAtom = atom({
//   key: "bookmarkAtom",
//   default: selector({
//     key: "bookmarkAtomSelector",
//     get: async (userId, bookmarks) => {
//       try {
//         const token =
//           "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzBhOGNhZGRiMjA3MTJkMzg2NmVmZWUiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6InNodWJoYW0iLCJsYXN0TmFtZSI6InZpc2h3YWthcm1hIiwicG9zdHMiOlsiNjcwYTkxNWNhNDQ3YTQ2ODM2NTJiMGU4IiwiNjcwYTkxOWRhNDQ3YTQ2ODM2NTJiMGViIiwiNjcwYTkyNTZhNDQ3YTQ2ODM2NTJiMGVlIiwiNjcwYTkyZGRhNDQ3YTQ2ODM2NTJiMGYxIiwiNjcwYTkzMzZhNDQ3YTQ2ODM2NTJiMGY0IiwiNjcwYTkzOTBhNDQ3YTQ2ODM2NTJiMGY3IiwiNjcwYTkzZjBhNDQ3YTQ2ODM2NTJiMGZhIiwiNjcwYTk0NGZhNDQ3YTQ2ODM2NTJiMGZkIiwiNjcwYTk2NDhhNDQ3YTQ2ODM2NTJiMTAwIiwiNjcwYTk2OGNhNDQ3YTQ2ODM2NTJiMTAzIiwiNjcwYTk2ZDBhNDQ3YTQ2ODM2NTJiMTA2IiwiNjcwYTk3MjVhNDQ3YTQ2ODM2NTJiMTA5IiwiNjcwYTk3NmFhNDQ3YTQ2ODM2NTJiMTBjIiwiNjcwYTk3Y2NhNDQ3YTQ2ODM2NTJiMTBmIiwiNjcwYTk4MTFhNDQ3YTQ2ODM2NTJiMTEyIiwiNjcwYTk4NjdhNDQ3YTQ2ODM2NTJiMTE1IiwiNjcwYTk4ZDFhNDQ3YTQ2ODM2NTJiMTE4IiwiNjcwYTk5MTRhNDQ3YTQ2ODM2NTJiMTFiIiwiNjcwYTk5OGNhNDQ3YTQ2ODM2NTJiMTFlIiwiNjcwYWEwZWFmMjBkNzYzYTgyNmE3ZjQ1IiwiNjcxNWZiNTFkY2RkNjlhYjgwZjgzODgzIl0sImZvbGxvd2VycyI6MTAsImZvbGxvd2luZyI6MTAsImJvb2ttYXJrcyI6W10sImZhdiI6W10sImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTJUMTQ6NTA6MjEuNzMwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjFUMDY6NTc6MjEuNjcyWiIsImlhdCI6MTcyOTUyMjMzNCwiZXhwIjoxNzMyMTE0MzM0fQ.b5XvhlRgz8bpUgN2_HBMI-SGqUgyl9cEC-iGvaGDTwM5MWoFQxce0D2gmwL2MGsif2EGiGFdiAnUYlEk12H1uZziEe4QjUZV5Xb5ha2dyyJQZEJu9ffo5n1rF09QM9vUvGXPHOTVceyPxH3Wa7vOeDaG7BilmFrrEuHZ8i0LlvM";
//         await axios.patch(
//           `${import.meta.env.VITE_API_URL}/auth/${userId}/edit-me`,
//           { bookmarks },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Bookmarks synced successfully!");
//       } catch (error) {
//         console.error("Error syncing bookmarks:", error);
//       }
//     },
//   }),
// });

export const syncBookmarks = async (userId: string, bookmarks: []) => {
  try {
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzBhOGNhZGRiMjA3MTJkMzg2NmVmZWUiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6InNodWJoYW0iLCJsYXN0TmFtZSI6InZpc2h3YWthcm1hIiwicG9zdHMiOlsiNjcwYTkxNWNhNDQ3YTQ2ODM2NTJiMGU4IiwiNjcwYTkxOWRhNDQ3YTQ2ODM2NTJiMGViIiwiNjcwYTkyNTZhNDQ3YTQ2ODM2NTJiMGVlIiwiNjcwYTkyZGRhNDQ3YTQ2ODM2NTJiMGYxIiwiNjcwYTkzMzZhNDQ3YTQ2ODM2NTJiMGY0IiwiNjcwYTkzOTBhNDQ3YTQ2ODM2NTJiMGY3IiwiNjcwYTkzZjBhNDQ3YTQ2ODM2NTJiMGZhIiwiNjcwYTk0NGZhNDQ3YTQ2ODM2NTJiMGZkIiwiNjcwYTk2NDhhNDQ3YTQ2ODM2NTJiMTAwIiwiNjcwYTk2OGNhNDQ3YTQ2ODM2NTJiMTAzIiwiNjcwYTk2ZDBhNDQ3YTQ2ODM2NTJiMTA2IiwiNjcwYTk3MjVhNDQ3YTQ2ODM2NTJiMTA5IiwiNjcwYTk3NmFhNDQ3YTQ2ODM2NTJiMTBjIiwiNjcwYTk3Y2NhNDQ3YTQ2ODM2NTJiMTBmIiwiNjcwYTk4MTFhNDQ3YTQ2ODM2NTJiMTEyIiwiNjcwYTk4NjdhNDQ3YTQ2ODM2NTJiMTE1IiwiNjcwYTk4ZDFhNDQ3YTQ2ODM2NTJiMTE4IiwiNjcwYTk5MTRhNDQ3YTQ2ODM2NTJiMTFiIiwiNjcwYTk5OGNhNDQ3YTQ2ODM2NTJiMTFlIiwiNjcwYWEwZWFmMjBkNzYzYTgyNmE3ZjQ1IiwiNjcxNWZiNTFkY2RkNjlhYjgwZjgzODgzIl0sImZvbGxvd2VycyI6MTAsImZvbGxvd2luZyI6MTAsImJvb2ttYXJrcyI6W10sImZhdiI6W10sImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTJUMTQ6NTA6MjEuNzMwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjFUMDY6NTc6MjEuNjcyWiIsImlhdCI6MTcyOTUyMjMzNCwiZXhwIjoxNzMyMTE0MzM0fQ.b5XvhlRgz8bpUgN2_HBMI-SGqUgyl9cEC-iGvaGDTwM5MWoFQxce0D2gmwL2MGsif2EGiGFdiAnUYlEk12H1uZziEe4QjUZV5Xb5ha2dyyJQZEJu9ffo5n1rF09QM9vUvGXPHOTVceyPxH3Wa7vOeDaG7BilmFrrEuHZ8i0LlvM";
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/auth/${userId}/edit-me`,
      { bookmarks },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Bookmarks synced successfully!");
  } catch (error) {
    console.error("Error syncing bookmarks:", error);
  }
};
