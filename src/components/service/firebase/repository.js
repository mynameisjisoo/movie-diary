import { getDatabase, ref, set } from 'firebase/database';

class Repository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  saveReview(userId, review) {
    set(ref(this.db, `${userId}/reviews/${review.id}`), review);
  }
}

export default Repository;
