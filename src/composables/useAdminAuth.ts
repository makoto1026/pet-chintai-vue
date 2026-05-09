import { ref, computed } from 'vue';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase';
import { ADMIN_EMAIL } from '@/entity/present';

const currentUser = ref<User | null>(auth.currentUser);
const authReady = ref(false);

const initPromise = new Promise<void>((resolve) => {
  onAuthStateChanged(auth, (user) => {
    currentUser.value = user;
    if (!authReady.value) {
      authReady.value = true;
      resolve();
    }
  });
});

const isAdmin = computed(
  () => currentUser.value !== null && currentUser.value.email === ADMIN_EMAIL
);

export function useAdminAuth() {
  const login = (email: string, password: string): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = (): Promise<void> => signOut(auth);

  const waitForAuthReady = (): Promise<void> => initPromise;

  return {
    currentUser,
    authReady,
    isAdmin,
    login,
    logout,
    waitForAuthReady,
  };
}
