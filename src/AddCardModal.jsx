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
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import cards from './utils/cardData';

function AddCardModal({ isOpen, onClose, onAdd }) {
  const [cardType, setCardType] = useState('');
  const [isCardMenuOpen, setIsCardMenuOpen] = useState(false);
  const [cardSearchText, setCardSearchText] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(null);
  const [selectedEnchantment, setSelectedEnchantment] = useState(null);
  const [sizeFilter, setSizeFilter] = useState('all');
  const cardTypeRef = useRef(null);

  const handleAddCard = () => {
    if (selectedCard && selectedRarity) {
      onAdd({ 
        size: selectedCard.size, 
        type: selectedCard.name,
        image: selectedCard.image,
        rarity: selectedRarity,
        enchantment: selectedEnchantment
      });
      onClose();
      setSelectedCard(null);
      setSelectedRarity(null);
      setSelectedEnchantment(null);
      setCardType('');
    }
  };

  const openCardMenu = () => {
    setIsCardMenuOpen(true);
  };

  const closeCardMenu = () => {
    setIsCardMenuOpen(false);
  };

  const handleCardSearchChange = (event) => {
    setCardSearchText(event.target.value);
  };

  const handleSizeFilterChange = (event, newSize) => {
    setSizeFilter(newSize || 'all');
  };

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(cardSearchText.toLowerCase());
    const matchesSize = sizeFilter === 'all' || card.size === sizeFilter;
    return matchesSearch && matchesSize;
  });

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setCardType(card.name);
    setSelectedRarity(null);
    closeCardMenu();
  };

  const getAvailableRarities = (card) => {
    if (!card?.rarity) return [];
    
    switch(card.rarity.toLowerCase()) {
      case 'diamond+':
        return ['Diamond'];
      case 'gold+':
        return ['Gold', 'Diamond'];
      case 'silver+':
        return ['Silver', 'Gold', 'Diamond'];
      case 'bronze+':
        return ['Bronze', 'Silver', 'Gold', 'Diamond'];
      default:
        return [card.rarity];
    }
  };

  const getAvailableEnchantments = (card) => {
    return card?.enchantments || [];
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardTypeRef.current && !cardTypeRef.current.contains(event.target)) {
        closeCardMenu();
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
        <Typography variant="h6">Add card</Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ overflowY: 'visible' }}>
        <Box sx={{ mb: 3 }}>
          <ToggleButtonGroup
            value={sizeFilter}
            exclusive
            onChange={handleSizeFilterChange}
            aria-label="card size filter"
            sx={{
              width: '100%',
              '& .MuiToggleButton-root': {
                flex: 1,
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                textTransform: 'none',
                '&.Mui-selected': {
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#357abd',
                  }
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }
            }}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ position: 'relative' }} ref={cardTypeRef}>
          <TextField
            fullWidth
            value={cardType}
            onClick={openCardMenu}
            placeholder="Select a card"
            InputProps={{
              readOnly: true,
              startAdornment: selectedCard && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mr: 1,
                  position: 'relative',
                  width: 30,
                  height: 30
                }}>
                  <img 
                    src={selectedCard.image} 
                    alt={selectedCard.name}
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
          {isCardMenuOpen && (
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
                  placeholder="Search cards..."
                  value={cardSearchText}
                  onChange={handleCardSearchChange}
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
                  {filteredCards.map((card, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        selected={selectedCard?.name === card.name}
                        onClick={() => handleSelectCard(card)}
                        sx={{
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
                            src={card.image} 
                            alt={card.name} 
                            style={{ 
                              height: '30px', 
                              width: '30px',
                              objectFit: 'contain'
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={card.name} 
                          secondary={card.size}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: 'white',
                            },
                            '& .MuiListItemText-secondary': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              textTransform: 'capitalize',
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          )}
        </Box>

        {selectedCard && (
          <>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: 'white' }}>
                Select Rarity
              </Typography>
              <ToggleButtonGroup
                value={selectedRarity}
                exclusive
                onChange={(e, newRarity) => setSelectedRarity(newRarity)}
                aria-label="card rarity"
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  '& .MuiToggleButton-root': {
                    flex: '1 0 auto',
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    textTransform: 'none',
                    minWidth: '100px',
                    '&.Mui-selected': {
                      backgroundColor: '#4a90e2',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#357abd',
                      }
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }
                }}
              >
                {getAvailableRarities(selectedCard).map((rarity) => (
                  <ToggleButton key={rarity} value={rarity.toLowerCase()}>
                    {rarity}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>

            {selectedCard.enchantments && selectedCard.enchantments.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, color: 'white' }}>
                  Select Enchantment (Optional)
                </Typography>
                <ToggleButtonGroup
                  value={selectedEnchantment}
                  exclusive
                  onChange={(e, newEnchantment) => setSelectedEnchantment(newEnchantment)}
                  aria-label="card enchantment"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    '& .MuiToggleButton-root': {
                      flex: '1 0 auto',
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      textTransform: 'none',
                      minWidth: '100px',
                      '&.Mui-selected': {
                        backgroundColor: '#4a90e2',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#357abd',
                        }
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }
                    }
                  }}
                >
                  {getAvailableEnchantments(selectedCard).map((enchantment) => (
                    <ToggleButton key={enchantment} value={enchantment.toLowerCase()}>
                      {enchantment}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>
            )}
          </>
        )}
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
          onClick={handleAddCard}
          disabled={!selectedCard || !selectedRarity}
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

export default AddCardModal;
