import { Request, Response } from 'express';
import { hashPassword, verifyPassword } from '../config/argon2';
import { signToken, verifyToken } from '../config/jwt';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const hashedPassword = await hashPassword(password);
      const user = await User.create({ email, passwordHash: hashedPassword });
      const token = signToken({ id: user.id, email: user.email });
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isPasswordValid = await verifyPassword(user.passwordHash, password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = signToken({ id: user.id, email: user.email });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  }

  static async refreshToken(req: Request, res: Response) {
    try {
      const { token } = req.body;
      const payload = verifyToken(token);
      if (!payload) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const newToken = signToken(payload);
      res.status(200).json({ token: newToken });
    } catch (error) {
      res.status(500).json({ message: 'Error refreshing token', error });
    }
  }
}
