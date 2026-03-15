import { sql } from "../config/db.js";

export const createUser = async (
  firstname,
  lastname,
  email,
  password,
  role,
) => {
  const [user] = await sql`
    INSERT INTO users (firstname, lastname, email, password, role) VALUES (${firstname}, ${lastname}, ${email}, ${password}, ${role})
    RETURNING id, firstname, lastname, email, role`;
  return user;
};

export const findUserByEmail = async (email) => {
  const [user] = await sql`
        SELECT * FROM users WHERE email = ${email}
    `;
  return user;
};
