import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddCardModal from './AddCardModal';
import cards from './utils/cardData';
import { TextField } from '@mui/material';
import { useAuth } from './contexts/AuthContext';
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import CardWithOverlay from './components/CardWithOverlay';
import SkillSelector from './components/SkillSelector';
import AddSkillModal from './components/AddSkillModal';

function CreateBuild({ isEditing = false, initialBuild = null, onSubmit, onBuildSaved }) {
  const [title, setTitle] = useState(initialBuild?.title || '');
  const [selectedHero, setSelectedHero] = useState(initialBuild?.hero || 'dooley');
  const [boardDescription, setBoardDescription] = useState(initialBuild?.description || '');
  const [overview, setOverview] = useState(initialBuild?.overview || '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [boardSlots, setBoardSlots] = useState(initialBuild?.boardSlots || Array(10).fill(null));
  const [selectedSkills, setSelectedSkills] = useState(initialBuild?.skills || []);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (initialBuild) {
      setBoardDescription(initialBuild.description || '');
    }
  }, [initialBuild]);

  const handleTitleChange = (event) => {
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
    }
  };

  const handleHeroChange = (event) => {
    const value = event.target.value;
    // If a core option is selected, we'll store it as "dooley/core-name"
    setSelectedHero(value);
  };

  const handleBoardDescriptionChange = (value) => {
    // Strip HTML tags to count only text characters
    const textOnly = value.replace(/<[^>]*>/g, '');
    if (textOnly.length <= 1000) {
      setBoardDescription(value);
    }
  };

  const handleOverviewChange = (event) => {
    if (event.target.value.length <= 2000) {
      setOverview(event.target.value);
    }
  };

  const openModal = (slotIndex) => {
    setIsModalOpen(true);
    setSelectedSlot(slotIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleAddCard = (cardData) => {
    const { size, type, rarity, enchantment } = cardData;
    const cardSize = size === 'small' ? 1 : size === 'medium' ? 2 : size === 'large' ? 3 : 1;

    const newBoardSlots = [...boardSlots];
    let placed = false;

    for (let i = 0; i <= 10 - cardSize; i++) {
      const consecutiveSlots = newBoardSlots.slice(i, i + cardSize);
      if (consecutiveSlots.every(slot => slot === null)) {
        for (let j = 0; j < cardSize; j++) {
          newBoardSlots[i + j] = {
            type,
            size,
            rarity,
            enchantment,
            cardIndex: i,
            isStart: j === 0
          };
        }
        placed = true;
        break;
      }
    }

    if (placed) {
      setBoardSlots(newBoardSlots);
    } else {
      alert('Not enough space on the board. The card would exceed the 10-slot limit.');
    }
    closeModal();
  };

  const handleRemoveCard = (slotIndex) => {
    const currentSlot = boardSlots[slotIndex];
    if (!currentSlot) return;

    const cardSize = currentSlot.size === 'small' ? 1 : currentSlot.size === 'medium' ? 2 : currentSlot.size === 'large' ? 3 : 1;
    const newBoardSlots = [...boardSlots];
    
    if (currentSlot && currentSlot.cardIndex !== undefined) {
      for (let j = 0; j < cardSize; j++) {
        if (newBoardSlots[currentSlot.cardIndex + j] && newBoardSlots[currentSlot.cardIndex + j].type === currentSlot.type) {
          newBoardSlots[currentSlot.cardIndex + j] = null;
        }
      }
    }
    setBoardSlots(newBoardSlots);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const buildData = {
        title,
        hero: selectedHero,
        overview,
        description: boardDescription,
        boardSlots,
        skills: selectedSkills,
        userId: user.uid,
        username: user.displayName || 'Unknown User'
      };

      if (!isEditing) {
        // Creating new build
        buildData.createdAt = serverTimestamp();
        buildData.updatedAt = serverTimestamp();
        buildData.upvotes = [];
        
        const docRef = await addDoc(collection(db, 'builds'), buildData);
        onBuildSaved?.();
        navigate(`/build/${docRef.id}`);
      } else {
        // Updating existing build
        await onSubmit(buildData);
      }
    } catch (error) {
      console.error('Failed to save build:', error);
      throw new Error('Failed to save build');
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'link']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'link'
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{isEditing ? 'Edit Build' : 'Create Build'}</h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Back</Link>
      </div>
      <form className="create-build-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Build Title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter your build title..."
          inputProps={{
            maxLength: 50,
            style: { color: 'white' }
          }}
          helperText={`${title.length}/50`}
          FormHelperTextProps={{
            sx: { color: 'rgba(255, 255, 255, 0.7)', textAlign: 'right', mr: 0 }
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4a90e2',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#4a90e2',
            },
          }}
        />
        <select value={selectedHero} onChange={handleHeroChange}>
          <option value="" disabled>Heroes</option>
          <optgroup label="Dooley">
            <option value="dooley">Dooley (Default)</option>
            <option value="dooley/armored-core">Armored Core</option>
            <option value="dooley/combat-core">Combat Core</option>
            <option value="dooley/companion-core">Companion Core</option>
            <option value="dooley/critical-core">Critical Core</option>
            <option value="dooley/ignition-core">Ignition Core</option>
            <option value="dooley/the-core">The Core</option>
            <option value="dooley/weaponized-core">Weaponized Core</option>
          </optgroup>
          <option value="pygmalien">Pygmalien</option>
          <option value="vanessa">Vanessa</option>
        </select>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Overview"
          value={overview}
          onChange={handleOverviewChange}
          placeholder="Add a brief overview of your build..."
          inputProps={{
            maxLength: 2000,
            style: { resize: 'none' }
          }}
          helperText={`${overview.length}/2000`}
          FormHelperTextProps={{
            sx: { color: 'rgba(255, 255, 255, 0.7)', textAlign: 'right', mr: 0 }
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4a90e2',
              },
              '& textarea': {
                resize: 'none'
              }
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#4a90e2',
            },
          }}
        />
        <div className="example-board">
          <h3>Example Board</h3>
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
            {boardSlots.map((slot, index) => {
              const card = slot ? cards.find(card => card.name === slot.type) : null;
              
              if (!slot || slot.isStart) {
                const slotWidth = slot ? 
                  (slot.size === 'small' ? '84px' : 
                   slot.size === 'medium' ? '172px' : 
                   '252px') : '80px';

                return (
                  <div
                    key={index}
                    className="example-board-slot"
                    onClick={() => slot ? handleRemoveCard(index) : openModal(index)}
                    style={{
                      backgroundColor: slot ? 'transparent' : '#4a4a5a',
                      cursor: 'pointer',
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
                    {!card && (
                      <div style={{
                        fontSize: '24px',
                        color: '#ffffff80'
                      }}>+</div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="example-board-text-area">
            <ReactQuill
              value={boardDescription}
              onChange={handleBoardDescriptionChange}
              modules={modules}
              formats={formats}
              placeholder="Add any details about the board..."
            />
            <div style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'right', 
              marginTop: '4px',
              fontSize: '0.75rem' 
            }}>
              {boardDescription.replace(/<[^>]*>/g, '').length}/1000
            </div>
          </div>
        </div>
        <div style={{ marginTop: '32px' }}>
          <SkillSelector 
            selectedSkills={selectedSkills}
            onSkillsChange={setSelectedSkills}
          />
        </div>
        <button type="submit" className="save-button">
          {isEditing ? 'Update Build' : 'Create Build'}
        </button>
      </form>
      <AddCardModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={handleAddCard}
      />
      <AddSkillModal
        isOpen={isSkillModalOpen}
        onClose={() => setIsSkillModalOpen(false)}
        onSelect={(skill) => {
          setSelectedSkills(prev => [...prev, skill]);
          setIsSkillModalOpen(false);
        }}
        currentSkills={selectedSkills}
      />
    </div>
  );
}

export default CreateBuild;
