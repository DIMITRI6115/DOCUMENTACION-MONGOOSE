import jwt from "jsonwebtoken";

const generarToken = (usuario) => {
  return jwt.sign(
    {
      sub: usuario._id.toString()
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  );
};

export default generarToken;
