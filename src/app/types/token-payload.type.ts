import { Link } from "../links";
import { User } from "./user.type";

export interface TokenPayload {
    user: User;
    routes: Link[];
}