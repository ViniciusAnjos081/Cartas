import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import cards from './utils/cardData';
import CardWithOverlay from './components/CardWithOverlay';
import SkillSelector from './components/SkillSelector';

function BuildDetails() {
  const [build, setBuild] = useState(null);
  const [loading, setLoading] = useState(true);
  const { buildId } = useParams();

  useEffect(() => {
    async function fetchBuild() {
      try {
        const buildDoc = await getDoc(doc(db, 'builds', buildId));
        if (buildDoc.exists()) {
          const data = buildDoc.data();
          setBuild({
            id: buildDoc.id,
            ...data,
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate()
          });
        }
      } catch (error) {
        console.error('Error fetching build:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBuild();
  }, [buildId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!build) {
    return <div>Build not found</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{build.title}</h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Back</Link>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0' }}>By {build.username}</p>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0', fontSize: '0.9rem' }}>
          Created on {build.createdAt?.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <span style={{
            padding: '4px 8px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '4px',
            color: 'white',
            fontSize: '0.8rem'
          }}>
            {build.hero.split('/')[0].charAt(0).toUpperCase() + build.hero.split('/')[0].slice(1)}
          </span>
          {build.hero.includes('/') && (
            <span style={{
              padding: '4px 8px',
              backgroundColor: 'rgba(74, 144, 226, 0.3)',
              borderRadius: '4px',
              color: 'white',
              fontSize: '0.8rem'
            }}>
              {build.hero.split('/')[1].split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          )}
        </div>
      </div>

      {build.overview && (
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#4a90e2', marginBottom: '8px' }}>Overview</h3>
          <p style={{ color: 'white', lineHeight: '1.6' }}>{build.overview}</p>
        </div>
      )}

      <div className="example-board">
        <h3>Board</h3>
        <div className="example-board-slots" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 80px)',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#2b2440',
          borderRadius: '8px',
          width: 'fit-content',
          height: '172px',
          margin: '0 auto',
          overflow: 'hidden'
        }}>
          {build.boardSlots?.map((slot, index) => {
            if (!slot || slot.isStart) {
              const card = slot ? cards.find(card => card.name === slot.type) : null;
              const slotWidth = slot ? 
                (slot.size === 'small' ? '84px' : 
                 slot.size === 'medium' ? '172px' : 
                 '252px') : '80px';

              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: slot ? 'transparent' : '#4a4a5a',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '172px',
                    width: slotWidth,
                    position: 'relative',
                    gridColumn: slot ? `span ${slot.size === 'small' ? 1 : slot.size === 'medium' ? 2 : 3}` : 'span 1',
                    border: slot ? '2px solid #4a90e2' : 'none',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxSizing: 'border-box'
                  }}
                >
                  {card && (
                    <CardWithOverlay card={card} slot={slot} />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
        {build.description && (
          <div style={{ marginTop: '16px', color: 'white' }}>
            <div dangerouslySetInnerHTML={{ __html: build.description }} />
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: '32px' }}>
        <SkillSelector 
          selectedSkills={build.skills || []}
          onSkillsChange={() => {}}
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default BuildDetails; 