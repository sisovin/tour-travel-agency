import argon2 from 'argon2';

export async function hashPassword(password: string): Promise<string> {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new Error('Error hashing password');
  }
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
  try {
    const isMatch = await argon2.verify(hash, password);
    return isMatch;
  } catch (err) {
    throw new Error('Error verifying password');
  }
}

export async function hashToken(token: string): Promise<string> {
  try {
    const hash = await argon2.hash(token);
    return hash;
  } catch (err) {
    throw new Error('Error hashing token');
  }
}

export async function verifyToken(hash: string, token: string): Promise<boolean> {
  try {
    const isMatch = await argon2.verify(hash, token);
    return isMatch;
  } catch (err) {
    throw new Error('Error verifying token');
  }
}
