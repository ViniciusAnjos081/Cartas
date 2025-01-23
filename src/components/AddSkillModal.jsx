import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import skills from '../utils/skillsData';

function AddSkillModal({ isOpen, onClose, onSelect, currentSkills, isLimitReached }) {
  const [skillType, setSkillType] = useState('');
  const [isSkillMenuOpen, setIsSkillMenuOpen] = useState(false);
  const [skillSearchText, setSkillSearchText] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillTypeRef = useRef(null);

  const handleAddSkill = () => {
    if (selectedSkill && !isLimitReached) {
      onSelect(selectedSkill);
      setSelectedSkill(null);
      setSkillType('');
    }
  };

  const openSkillMenu = () => {
    setIsSkillMenuOpen(true);
  };

  const closeSkillMenu = () => {
    setIsSkillMenuOpen(false);
  };

  const handleSkillSearchChange = (event) => {
    event.preventDefault();
    setSkillSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(skillSearchText.toLowerCase());
    return matchesSearch;
  });

  const handleSelectSkill = (skill) => {
    if (!currentSkills.some(s => s.name === skill.name)) {
      setSelectedSkill(skill);
      setSkillType(skill.name);
      closeSkillMenu();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (skillTypeRef.current && !skillTypeRef.current.contains(event.target)) {
        closeSkillMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      fullWidth 
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: '#2b2440',
          color: 'white',
          overflowY: 'visible'
        }
      }}
      sx={{
        '& .MuiDialog-paper': {
          overflowY: 'visible'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        mb: 2
      }}>
        <Typography variant="h6">
          Add skill {isLimitReached && '(Limit reached)'}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ overflowY: 'visible' }}>
        <Box sx={{ position: 'relative' }} ref={skillTypeRef}>
          <TextField
            fullWidth
            value={skillType}
            onClick={openSkillMenu}
            placeholder="Select a skill"
            InputProps={{
              readOnly: true,
              startAdornment: selectedSkill && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mr: 1,
                  position: 'relative',
                  width: 30,
                  height: 30
                }}>
                  <img 
                    src={selectedSkill.image} 
                    alt={selectedSkill.name}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }} 
                  />
                </Box>
              ),
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#4a90e2',
                },
              },
            }}
          />
          {isSkillMenuOpen && (
            <Box
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#2b2440',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 1,
                zIndex: 9999,
                mt: 1,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                maxHeight: 'min(460px, calc(100vh - var(--menu-top, 0px) - 120px))',
                display: 'flex',
                flexDirection: 'column'
              }}
              ref={(el) => {
                if (el) {
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty('--menu-top', `${rect.top}px`);
                }
              }}
            >
              <Box sx={{ p: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search skills..."
                  value={skillSearchText}
                  onChange={(e) => setSkillSearchText(e.target.value)}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                />
              </Box>
              <Box sx={{ 
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px',
                },
              }}>
                <List>
                  {filteredSkills.map((skill, index) => {
                    const isAlreadyAdded = currentSkills.some(s => s.name === skill.name);
                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          selected={selectedSkill?.name === skill.name}
                          onClick={() => !isAlreadyAdded && handleSelectSkill(skill)}
                          disabled={isAlreadyAdded}
                          sx={{
                            opacity: isAlreadyAdded ? 0.5 : 1,
                            '&.Mui-selected': {
                              backgroundColor: '#4a90e2',
                              '&:hover': {
                                backgroundColor: '#357abd',
                              },
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <img 
                              src={skill.image} 
                              alt={skill.name} 
                              style={{ 
                                height: '30px', 
                                width: '30px',
                                objectFit: 'contain'
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={skill.name} 
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  sx={{
                                    display: 'block',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    mb: 0.5
                                  }}
                                >
                                  {skill.pools?.join(', ')}
                                </Typography>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  sx={{
                                    display: 'inline-block',
                                    color: skill.rarity === 'legendary' ? '#ffd700' : 'rgba(255, 255, 255, 0.6)',
                                    textTransform: 'capitalize',
                                    backgroundColor: skill.rarity === 'legendary' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '0.75rem'
                                  }}
                                >
                                  {skill.rarity}
                                </Typography>
                              </React.Fragment>
                            }
                            sx={{
                              '& .MuiListItemText-primary': {
                                color: 'white',
                                fontSize: '0.9rem',
                                marginBottom: '4px'
                              },
                              '& .MuiListItemText-secondary': {
                                fontSize: '0.8rem',
                                lineHeight: 1.2
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: 2,
        justifyContent: 'space-between'
      }}>
        <Button 
          onClick={onClose}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleAddSkill}
          disabled={!selectedSkill}
          sx={{
            backgroundColor: '#4a90e2',
            color: 'white',
            '&:hover': {
              backgroundColor: '#357abd',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(74, 144, 226, 0.3)',
              color: 'rgba(255, 255, 255, 0.3)',
            }
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddSkillModal; 