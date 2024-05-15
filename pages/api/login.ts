import type { NextApiRequest, NextApiResponse } from "next";

type LoginData = {
  email: string;
  password: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | { error: string }>
) {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginData;

    // Check if the email and password match the expected values
    if (email === "test@rapptrlabs.com" && password === "Test123") {
      const payload = {
        user_id: 16,
        user_email: "test@rapptrlabs.com",
        user_username: "testuser",
        user_is_active: 1,
        user_profile_image:
          "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png",
        user_last_active_epoch: 1544680026,
        user_creation_epoch: 1544713200,
        user_is_new: 1,
        user_token:
          "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e",
      };

      // Return the fake JWT token
      res.status(200).json(payload);
    } else {
      // Return an error if email or password is incorrect
      res.status(401).json({ error: "Invalid email or password" });
    }
  } else {
    // Return an error if the request method is not POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
