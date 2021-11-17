import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class Repository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  saveReview(userId, review) {
    set(ref(this.db, `${userId}/reviews/${review.id}`), review);
  }

  removeReview(userId, review) {
    remove(ref(this.db, `${userId}/reviews/${review.id}`));
  }

  syncReview(userId, onUpdate) {
    const query = ref(this.db, `${userId}/reviews`);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
}

export default Repository;
