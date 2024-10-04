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
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmZlOTE4Y2I4ODExMGY4ZmM1ZDMyNzIiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6InNodWJoYW0iLCJsYXN0TmFtZSI6InZpc2h3YWFybWEiLCJwb3N0cyI6W10sImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDNUMTI6NDM6NTYuODEyWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMDNUMTI6NDQ6MzEuODUxWiIsImlhdCI6MTcyODAyMzA3MSwiZXhwIjoxNzI4MDIzOTcxfQ.Mqdaq9GaMSZz08Q_mxcgcY0u6-G4C63ouoEBMktejugHXuazcmYl14QWqcC_Q7JC8PGWSqG3tCXa5xQLQoXHCQ4ZN6Uvi1SPfO4P6yVAHF6Qf6EcfC1K9LMDpkEs2xt7QZuVkvg-06mVYdEo8HqokJsdiYufL088XY3EqfoWRWo";
        const response = await axios.get("http://localhost:3000/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching user data: ", error);
        throw error;
      }
    },
  }),
});
