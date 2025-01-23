import React from 'react';
import AddSkillModal from './AddSkillModal';

const MAX_SKILLS = 30;

function SkillSelector({ selectedSkills, onSkillsChange, readOnly = false }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSkillSelect = (skill) => {
    if (!readOnly && selectedSkills.length < MAX_SKILLS) {
      onSkillsChange([...selectedSkills, skill]);
    }
  };

  const isSkillLimitReached = selectedSkills.length >= MAX_SKILLS;

  const renderSkill = (skill) => (
    <div
      key={skill.name}
      style={{
        width: '140px',
        height: '160px',
        backgroundColor: '#2b2440',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px',
        boxSizing: 'border-box',
        position: 'relative',
        gap: '8px'
      }}
    >
      {!readOnly && (
        <button
          onClick={() => onSkillsChange(selectedSkills.filter(s => s.name !== skill.name))}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            fontSize: '14px',
            padding: 0,
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
        >
          ×
        </button>
      )}
      <img
        src={skill.image}
        alt={skill.name}
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'contain'
        }}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        flex: 1
      }}>
        <div style={{
          color: 'white',
          fontSize: '0.9rem',
          textAlign: 'center',
          fontWeight: '500',
          maxWidth: '100%',
          wordWrap: 'break-word'
        }}>
          {skill.name}
        </div>
        <div style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.8rem',
          textAlign: 'center'
        }}>
          {skill.pools?.join(', ')}
        </div>
        <div style={{
          color: skill.rarity === 'legendary' ? '#ffd700' : 'rgba(255,255,255,0.6)',
          fontSize: '0.8rem',
          textAlign: 'center',
          textTransform: 'capitalize',
          backgroundColor: skill.rarity === 'legendary' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
          padding: '2px 8px',
          borderRadius: '12px',
          display: 'inline-block'
        }}>
          {skill.rarity}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h3 style={{ color: 'white', marginBottom: '16px' }}>
        Supportive Items and Skills {!readOnly && `(${selectedSkills.length}/${MAX_SKILLS})`}
      </h3>
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }}>
        {selectedSkills.map(skill => renderSkill(skill))}
        {!readOnly && (
          <div
            onClick={() => !isSkillLimitReached && setIsModalOpen(true)}
            style={{
              width: '140px',
              height: '160px',
              backgroundColor: '#2b2440',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isSkillLimitReached ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease',
              opacity: isSkillLimitReached ? 0.5 : 1,
              position: 'relative'
            }}
            onMouseEnter={(e) => !isSkillLimitReached && (e.currentTarget.style.backgroundColor = '#3b3450')}
            onMouseLeave={(e) => !isSkillLimitReached && (e.currentTarget.style.backgroundColor = '#2b2440')}
          >
            {isSkillLimitReached ? (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.8rem',
                textAlign: 'center',
                width: '80%'
              }}>
                Skill limit reached
              </div>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            )}
          </div>
        )}
      </div>
      {!readOnly && (
        <AddSkillModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleSkillSelect}
          currentSkills={selectedSkills}
          isLimitReached={isSkillLimitReached}
        />
      )}
    </div>
  );
}

export default SkillSelector; 