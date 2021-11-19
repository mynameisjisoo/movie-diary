import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';

class Oauth {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login = method => {
    const provider = this.getProvider(method);
    signInWithPopup(this.firebaseAuth, provider); //
  };

  logout = () => {
    this.firebaseAuth.signOut();
  };

  onAuthChange = onUserChange => {
    onAuthStateChanged(this.firebaseAuth, user => {
      onUserChange(user);
    });
  };

  getProvider(method) {
    switch (method) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${method}`);
    }
  }
}

export default Oauth;
