import { NewsLetter } from "@/components/NewsLetter";
import { db } from "@/firebase/clientApp";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name }: NewsLetter = req.body;
    try {
    await addDoc((collection(db,'userData')),{email:email, name:name})
    return res.status(200).send({email:email, name:name})
    } catch(err) {
      console.log(err)
      return res.status(500).send('No possible save')
    }
  }
}
export default handler;
