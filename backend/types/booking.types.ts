export interface CreateBookingDTO {
  userId: number;
  type: 'hotel' | 'flight' | 'tour';
  referenceId: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface UpdateBookingDTO {
  status: 'pending' | 'confirmed' | 'cancelled';
}
