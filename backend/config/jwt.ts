import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default_secret';

export function signToken(payload: object, expiresIn: string | number = '1h'): string {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token: string): object | null {
  try {
    return jwt.verify(token, secret) as object;
  } catch (err) {
    return null;
  }
}
