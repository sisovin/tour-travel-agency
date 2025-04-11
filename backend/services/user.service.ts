import { User } from '../models/user.model';

export class UserService {
  static async getUserProfile(userId: number) {
    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error fetching user profile: ${error.message}`);
    }
  }

  static async updateUserProfile(userId: number, updateData: Partial<User>) {
    try {
      const user = await User.update(updateData, { where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error updating user profile: ${error.message}`);
    }
  }

  static async deleteUser(userId: number) {
    try {
      const user = await User.destroy({ where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}
