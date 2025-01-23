import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './contexts/AuthContext';
import CreateBuild from './CreateBuild';

function EditBuild({ onBuildUpdated }) {
  const { buildId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [build, setBuild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBuild() {
      try {
        const buildDoc = await getDoc(doc(db, 'builds', buildId));
        if (!buildDoc.exists()) {
          setError('Build not found');
          return;
        }

        const buildData = buildDoc.data();
        if (buildData.userId !== user.uid) {
          setError('You do not have permission to edit this build');
          return;
        }

        setBuild({ id: buildDoc.id, ...buildData });
      } catch (error) {
        console.error('Error fetching build:', error);
        setError('Failed to load build');
      } finally {
        setLoading(false);
      }
    }

    fetchBuild();
  }, [buildId, user]);

  const handleUpdate = async (updatedData) => {
    try {
      const buildRef = doc(db, 'builds', buildId);
      await updateDoc(buildRef, {
        ...updatedData,
        updatedAt: serverTimestamp()
      });
      onBuildUpdated?.();
      navigate(`/build/${buildId}`);
    } catch (error) {
      console.error('Error updating build:', error);
      throw new Error('Failed to update build');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <CreateBuild 
      isEditing={true}
      initialBuild={build}
      onSubmit={handleUpdate}
    />
  );
}

export default EditBuild; 