import React from 'react';
import bronzeSmall from '../assets/overlay/Bronze_S.png';
import bronzeMedium from '../assets/overlay/Bronze_M.png';
import bronzeLarge from '../assets/overlay/Bronze_L.png';
import silverSmall from '../assets/overlay/Silver_S.png';
import silverMedium from '../assets/overlay/Silver_M.png';
import silverLarge from '../assets/overlay/Silver_L.png';
import goldSmall from '../assets/overlay/Gold_S.png';
import goldMedium from '../assets/overlay/Gold_M.png';
import goldLarge from '../assets/overlay/Gold_L.png';
import diamondSmall from '../assets/overlay/Diamond_S.png';
import diamondMedium from '../assets/overlay/Diamond_M.png';
import diamondLarge from '../assets/overlay/Diamond_L.png';
import legendarySmall from '../assets/overlay/Legendary_S.png';
import legendaryMedium from '../assets/overlay/Legendary_M.png';
import legendaryLarge from '../assets/overlay/Legendary_L.png';

// Enchantment icons
import heavyIcon from '../assets/enchant/Heavy.png';
import deadlyIcon from '../assets/enchant/Deadly.png';
import obsidianIcon from '../assets/enchant/Obsidian.png';
import fieryIcon from '../assets/enchant/Fiery.png';
import shinyIcon from '../assets/enchant/Shiny.png';
import icyIcon from '../assets/enchant/Icy.png';
import goldenIcon from '../assets/enchant/Golden.png';
import restorativeIcon from '../assets/enchant/Restorative.png';
import toxicIcon from '../assets/enchant/Toxic.png';
import turboIcon from '../assets/enchant/Turbo.png';
import shieldedIcon from '../assets/enchant/Shielded.png';

const enchantmentIcons = {
  heavy: heavyIcon,
  deadly: deadlyIcon,
  obsidian: obsidianIcon,
  fiery: fieryIcon,
  shiny: shinyIcon,
  icy: icyIcon,
  golden: goldenIcon,
  restorative: restorativeIcon,
  toxic: toxicIcon,
  turbo: turboIcon,
  shielded: shieldedIcon
};

const getOverlayImage = (rarity, size) => {
  switch(rarity?.toLowerCase()) {
    case 'bronze':
      return size === 'small' ? bronzeSmall : size === 'medium' ? bronzeMedium : bronzeLarge;
    case 'silver':
      return size === 'small' ? silverSmall : size === 'medium' ? silverMedium : silverLarge;
    case 'gold':
      return size === 'small' ? goldSmall : size === 'medium' ? goldMedium : goldLarge;
    case 'diamond':
      return size === 'small' ? diamondSmall : size === 'medium' ? diamondMedium : diamondLarge;
    case 'legendary':
      return size === 'small' ? legendarySmall : size === 'medium' ? legendaryMedium : legendaryLarge;
    default:
      return null;
  }
};

function CardWithOverlay({ card, slot }) {
  if (!card) return null;

  const slotWidth = slot.size === 'small' ? '84px' : 
                   slot.size === 'medium' ? '172px' : 
                   '252px';

  return (
    <div style={{ position: 'relative' }}>
      <img 
        src={card.image} 
        alt={card.name}
        style={{ 
          width: slotWidth,
          height: '172px',
          objectFit: slot.size === 'small' ? 'fill' : 
                    slot.size === 'medium' ? 'cover' : 
                    'fill',
          borderRadius: '6px',
          display: 'block',
          backgroundColor: 'transparent'
        }} 
      />
      {slot.rarity && (
        <img
          src={getOverlayImage(slot.rarity, slot.size)}
          alt={`${slot.rarity} overlay`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />
      )}
      {slot.enchantment && (
        <img
          src={enchantmentIcons[slot.enchantment.toLowerCase()]}
          alt={`${slot.enchantment} enchantment`}
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            width: '32px',
            height: '32px',
            pointerEvents: 'none',
            filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))'
          }}
        />
      )}
    </div>
  );
}

export default CardWithOverlay; 