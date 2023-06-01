import { deleteUser } from "@/firebase/CRUD/deleteUser";
import { UnsubscribeNewsLetter } from "@/types/newsLetterType";

import { NextApiRequest, NextApiResponse } from "next/types";

async function handleUnsubscribe(req: NextApiRequest, res: NextApiResponse) {
  const { uuid, email } = req.query as unknown as UnsubscribeNewsLetter;
  try {
    await deleteUser("userData", { uuid, email });
    return res
      .status(200)
      .send(
        `${email} have been unsubscribed, you will not receive emails anymore`
      );
  } catch (err) {
    return res.status(403).send({ err: `No user found` });
  }
}

export default handleUnsubscribe;
