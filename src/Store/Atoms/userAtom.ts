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
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2xsb3dlcnMiOjAsImZvbGxvd2luZyI6MCwiX2lkIjoiNjcwOTVhMDE1NGY0NWU1YzQxY2RlNjRkIiwiZW1haWwiOiJzdjc3MzQ2MEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJzaHViaGFtIiwibGFzdE5hbWUiOiJ2aXNod2FrYXJtYSIsInBvc3RzIjpbIjY3MDk1YWY0NTRmNDVlNWM0MWNkZTY1YyIsIjY3MDk2YTMzNmE0MDU5ZDBjNDMyYjA3MyIsIjY3MDk2YzE0OWJiNTI2YjJjM2MwMWRkMiIsIjY3MDk2Yzg1MWJjYzljZmU4NjAzNmU1YSIsIjY3MDk3Mjc1MjY4OTJlNmMzMzdiNTJjZCIsIjY3MDk3MmE1MjY4OTJlNmMzMzdiNTJkMyJdLCJib29rbWFya3MiOltdLCJmYXYiOltdLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTExVDE3OjAxOjUzLjI0NFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTExVDE4OjQ3OjAxLjc1NFoiLCJpYXQiOjE3Mjg2NzI1OTAsImV4cCI6MTczMTI2NDU5MH0.cZP8ih6Gok7Bc6EHZ40psD5Jx1fmm1hDDvr5hmw8_GcCxHL_4iZbVTyao_vqH19ywrCEsaEVa7ks0ccF4tVrJ4eW1VDGaO5KX-3KjyqDRdXEfjBbQktP0kuz5PoQC6becG-no91NMRkb4G5ehKEh-FLVpafKNWeRwdKd1Bjm6VA";
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:3000/v1/auth/${userId}/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching user data: ", error);
        return null;
      }
    },
  }),
});
