// import { atom, selector } from "recoil";
// import axios from "axios";

// // Atom to store the user's state, fetched by a selector
// export const postAtom = atom({
//   key: "postAtom",
//   default: selector({
//     key: "postAtomSelector",
//     get: async () => {
//       try {
//         const token =
//           "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmZmOGIxMTI5ZmY3YTVlYjdjZDY4MzUiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IlNodWJoYW0iLCJsYXN0TmFtZSI6IlZpc2h3YWthcm1hIiwicG9zdHMiOltdLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTA0VDA2OjI4OjMzLjIyM1oiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTA0VDA2OjI5OjA0LjAwOFoiLCJpYXQiOjE3MjgwMjM1NTEsImV4cCI6MTcyODAyNDQ1MX0.eEaqQ8sGxEGufvTSU-9hP0T1C37oK4gCR7EDOGIWwO96W61JOd2xqcCaE_0vT6EKxYjkMw1wKMH25-B8pKQNR0QiLJA2Im99o1R8NWyjHjNsIDMVoew-wFeglkECmqRfC_3vBwkl1YB66xNxybtuA_5tQA2KEOWkxqCpx2OEvY8";
//         const response = await axios.post(
//           "http://localhost:3000/v1/post/create-post",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               // Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         return response.data;
//       } catch (error) {
//         console.error("Error fetching user data: ", error);
//         throw error;
//       }
//     },
//   }),
// });
