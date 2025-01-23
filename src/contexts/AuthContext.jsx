import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset
} from 'firebase/auth';
import { app } from '../firebase';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const db = getFirestore(app);

  async function signup(email, password, username) {
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's profile with the username
      await updateProfile(userCredential.user, {
        displayName: username
      });

      // Store additional user info in Firestore
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userDocRef, {
        username,
        email,
        createdAt: new Date()
      });

      // Immediately set the user state with the correct username
      setUser({
        ...userCredential.user,
        username: username
      });

      return userCredential;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  async function forgotPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error;
    }
  }

  async function verifyResetToken(token) {
    try {
      await verifyPasswordResetCode(auth, token);
      return true;
    } catch (error) {
      console.error('Error verifying reset token:', error);
      throw error;
    }
  }

  async function resetPassword(token, newPassword) {
    try {
      await confirmPasswordReset(auth, token, newPassword);
      return true;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          console.log('Auth state changed - user logged in:', user);
          // Get additional user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          console.log('User data from Firestore:', userData);
          
          setUser({
            ...user,
            username: userData?.username || user.displayName
          });
        } else {
          console.log('Auth state changed - user logged out');
          setUser(null);
        }
      } catch (error) {
        console.error('Error in auth state change:', error);
        // If Firestore fetch fails, use displayName from auth
        setUser(user ? {
          ...user,
          username: user.displayName
        } : null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [auth, db]);

  const value = {
    user,
    signup,
    login,
    logout,
    forgotPassword,
    verifyResetToken,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 