import { getDatabase } from "firebase/database";
import fbAppConnect from "../controllers/firebaseConnection";

const database = getDatabase(fbAppConnect);
