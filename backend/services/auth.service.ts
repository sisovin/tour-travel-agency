import { hashPassword, verifyPassword, hashToken, verifyToken } from '../config/argon2';
import { signToken, verifyToken as verifyJwtToken } from '../config/jwt';
import { User } from '../models/user.model';

export class AuthService {
  static async register(email: string, password: string) {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ email, passwordHash: hashedPassword });
    const token = signToken({ id: user.id, email: user.email });
    return { user, token };
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const isPasswordValid = await verifyPassword(user.passwordHash, password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }
    const token = signToken({ id: user.id, email: user.email });
    return { user, token };
  }

  static async refreshToken(token: string) {
    const payload = verifyJwtToken(token);
    if (!payload) {
      throw new Error('Invalid token');
    }
    const newToken = signToken(payload);
    return { token: newToken };
  }
}
