export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3MGM0ZTJkNC04NWJkLTRhZDEtYTg1NC1iNmE5MjdmZjA5ZTIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNTM4MTU1OCwiZXhwIjoxNzI1OTg2MzU4fQ.o7S2mxqMNDcCwAj-slribCoaQ4p2DGaX0iFtLoPvNNI";

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};
