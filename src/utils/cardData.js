const cards = [
      { 
        name: 'Abacus',
        rarity: 'gold+',
        image: '/src/assets/cards/Abacus.avif',
        size: 'small',
        enchantments: ['Heavy', 'Golden', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Agility Boots',
        rarity: 'bronze+',
        image: '/src/assets/cards/AgilityBoots.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Alpha Ray',
        rarity: 'bronze+',
        image: '/src/assets/cards/AlphaRay.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Amber',
        rarity: 'silver+',
        image: '/src/assets/cards/Amber.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Ambergris',
        rarity: 'bronze+',
        image: '/src/assets/cards/Ambergris.avif',
        size: 'small',
        enchantments: ['Heavy', 'Golden', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Anchor',
        rarity: 'gold+',
        image: '/src/assets/cards/Anchor.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Angry Balloon Bot',
        rarity: 'silver+',
        image: '/src/assets/cards/AngryBalloonBot.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Antimatter Chamber',
        rarity: 'diamond+',
        image: '/src/assets/cards/AntimatterChamber.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Apropos Chapeau',
        rarity: 'silver+',
        image: '/src/assets/cards/AproposChapeau.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Arbalest',
        rarity: 'silver+',
        image: '/src/assets/cards/Arbalest.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Arc Blaster',
        rarity: 'bronze+',
        image: '/src/assets/cards/ArcBlaster.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Arkens Ring',
        rarity: 'diamond+',
        image: '/src/assets/cards/ArkensRing.avif',
        size: 'small',
        enchantments: []
      },
      { 
        name: 'Armored Core',
        rarity: 'bronze+',
        image: '/src/assets/cards/ArmoredCore.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic']
      },
      { 
        name: 'Astrolabe',
        rarity: 'silver+',
        image: '/src/assets/cards/Astrolabe.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Athanor',
        rarity: 'bronze+',
        image: '/src/assets/cards/Athanor.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Atlas Stone',
        rarity: 'diamond+',
        image: '/src/assets/cards/AtlasStone.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Atlatl',
        rarity: 'bronze+',
        image: '/src/assets/cards/Atlatl.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'ATM',
        rarity: 'bronze+',
        image: '/src/assets/cards/ATM.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Golden', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Atomic Clock',
        rarity: 'silver+',
        image: '/src/assets/cards/AtomicClock.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Bag of Jewels',
        rarity: 'bronze+',
        image: '/src/assets/cards/BagOfJewels.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Balcony',
        rarity: 'silver+',
        image: '/src/assets/cards/Balcony.avif',
        size: 'medium',
        enchantments: ['Golden', 'Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Ballista',
        rarity: 'gold+',
        image: '/src/assets/cards/Ballista.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Balloon Bot',
        rarity: 'silver+',
        image: '/src/assets/cards/BalloonBot.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Bandages',
        rarity: 'bronze+',
        image: '/src/assets/cards/Bandages.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Bar of Gold',
        rarity: 'bronze+',
        image: '/src/assets/cards/BarOfGold.avif',
        size: 'small',
        enchantments: []
      },
      { 
        name: 'Barbed Wire',
        rarity: 'silver+',
        image: '/src/assets/cards/BarbedWire.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Barrel',
        rarity: 'bronze+',
        image: '/src/assets/cards/Barrel.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Basilisk Fang',
        rarity: 'gold+',
        image: '/src/assets/cards/BasiliskFang.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Battery',
        rarity: 'bronze+',
        image: '/src/assets/cards/Battery.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Bayonet',
        rarity: 'bronze+',
        image: '/src/assets/cards/Bayonet.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Beach Ball',
        rarity: 'bronze+',
        image: '/src/assets/cards/BeachBall.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Beast of Burden',
        rarity: 'bronze+',
        image: '/src/assets/cards/BeastOfBurden.avif',
        size: 'large',
        enchantments: ['Heavy', 'Golden', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Beehive',
        rarity: 'silver+',
        image: '/src/assets/cards/Beehive.avif',
        size: 'medium',
        enchantments: ['Golden']
      },
      { 
        name: 'Bellelista',
        rarity: 'silver+',
        image: '/src/assets/cards/Bellelista.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Belt',
        rarity: 'silver+',
        image: '/src/assets/cards/Belt.avif',
        size: 'medium',
        enchantments: []
      },
      { 
        name: 'Beta Ray',
        rarity: 'gold+',
        image: '/src/assets/cards/BetaRay.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Bill Dozer',
        rarity: 'silver+',
        image: '/src/assets/cards/BillDozer.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Billboard',
        rarity: 'gold+',
        image: '/src/assets/cards/Billboard.avif',
        size: 'large',
        enchantments: ['Golden', 'Deadly', 'Shiny']
      },
      { 
        name: 'Black Ice',
        rarity: 'bronze+',
        image: '/src/assets/cards/BlackIce.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Black Pepper',
        rarity: 'silver+',
        image: '/src/assets/cards/BlackPepper.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Black Rose',
        rarity: 'bronze+',
        image: '/src/assets/cards/BlackRose.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Blast Doors',
        rarity: 'bronze+',
        image: '/src/assets/cards/BlastDoors.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Blow Torch',
        rarity: 'bronze+',
        image: '/src/assets/cards/BlowTorch.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Blowgun',
        rarity: 'diamond+',
        image: '/src/assets/cards/Blowgun.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Blue Gumball',
        rarity: 'bronze+',
        image: '/src/assets/cards/BlueGumball.avif',
        size: 'small',
        enchantments: [
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Blue Piggles A',
        rarity: 'bronze+',
        image: '/src/assets/cards/BluePigglesA.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Blue Piggles L',
        rarity: 'bronze+',
        image: '/src/assets/cards/BluePigglesL.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Blue Piggles R',
        rarity: 'bronze+',
        image: '/src/assets/cards/BluePigglesR.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Blue Piggles X',
        rarity: 'bronze+',
        image: '/src/assets/cards/BluePigglesX.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Bluenanas',
        rarity: 'bronze+',
        image: '/src/assets/cards/Bluenanas.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Blunderbuss',
        rarity: 'gold+',
        image: '/src/assets/cards/Blunderbuss.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Bolas',
        rarity: 'bronze+',
        image: '/src/assets/cards/Bolas.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Bomb Squad',
        rarity: 'bronze+',
        image: '/src/assets/cards/BombSquad.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Booby Trap',
        rarity: 'silver+',
        image: '/src/assets/cards/BoobyTrap.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Bootstraps',
        rarity: 'silver+',
        image: '/src/assets/cards/Bootstraps.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Bottled Lightning',
        rarity: 'bronze+',
        image: '/src/assets/cards/BottledLightning.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Brass Knuckles',
        rarity: 'bronze+',
        image: '/src/assets/cards/BrassKnuckles.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Brick Buddy',
        rarity: 'bronze+',
        image: '/src/assets/cards/BrickBuddy.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Briefcase',
        rarity: 'bronze+',
        image: '/src/assets/cards/Briefcase.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Golden',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Broken Shackles',
        rarity: 'silver+',
        image: '/src/assets/cards/BrokenShackles.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Bulky Package',
        rarity: 'bronze+',
        image: '/src/assets/cards/BulkyPackage.avif',
        size: 'medium',
        enchantments: []
      },
      { 
        name: 'Bunker',
        rarity: 'silver+',
        image: '/src/assets/cards/Bunker.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery'
        ]
      },
      { 
        name: 'Bushel',
        rarity: 'bronze+',
        image: '/src/assets/cards/Bushel.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Business Card',
        rarity: 'silver+',
        image: '/src/assets/cards/BusinessCard.avif',
        size: 'small',
        enchantments: [
          'Golden',
          'Shiny'
        ]
      },
      { 
        name: 'Busy Bee',
        rarity: 'silver+',
        image: '/src/assets/cards/BusyBee.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Butter',
        rarity: 'bronze+',
        image: '/src/assets/cards/Butter.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Butterfly Swords',
        rarity: 'silver+',
        image: '/src/assets/cards/ButterflySwords.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Caltrops',
        rarity: 'diamond+',
        image: '/src/assets/cards/Caltrops.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Candy Mail',
        rarity: 'bronze+',
        image: '/src/assets/cards/CandyMail.avif',
        size: 'medium',
        enchantments: []
      },
      { 
        name: 'Cannon',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cannon.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Cannonade',
        rarity: 'silver+',
        image: '/src/assets/cards/Cannonade.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Obsidian',
          'Deadly'
        ]
      },
      { 
        name: 'Cannonball',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cannonball.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Capacitor',
        rarity: 'silver+',
        image: '/src/assets/cards/Capacitor.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Captains Wheel',
        rarity: 'silver+',
        image: '/src/assets/cards/CaptainsWheel.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Cargo Shorts',
        rarity: 'silver+',
        image: '/src/assets/cards/CargoShorts.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Shiny'
        ]
      },
      { 
        name: 'Cash Cannon',
        rarity: 'silver+',
        image: '/src/assets/cards/CashCannon.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Golden',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Cash Register',
        rarity: 'bronze+',
        image: '/src/assets/cards/CashRegister.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Shiny'
        ]
      },
      { 
        name: 'Catalyst',
        rarity: 'silver+',
        image: '/src/assets/cards/Catalyst.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly'
        ]
      },
      { 
        name: 'Catfish',
        rarity: 'bronze+',
        image: '/src/assets/cards/Catfish.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cauldron',
        rarity: 'silver+',
        image: '/src/assets/cards/Cauldron.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Char Cole',
        rarity: 'silver+',
        image: '/src/assets/cards/CharCole.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Charging Station',
        rarity: 'gold+',
        image: '/src/assets/cards/ChargingStation.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Chemsnail',
        rarity: 'bronze+',
        image: '/src/assets/cards/Chemsnail.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Chocolate Bar',
        rarity: 'bronze+',
        image: '/src/assets/cards/ChocolateBar.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Chris Army Knife',
        rarity: 'bronze+',
        image: '/src/assets/cards/ChrisArmyKnife.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Chronobarrier',
        rarity: 'gold+',
        image: '/src/assets/cards/Chronobarrier.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Chum',
        rarity: 'bronze+',
        image: '/src/assets/cards/Chum.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cinders',
        rarity: 'silver+',
        image: '/src/assets/cards/Cinders.avif',
        size: 'small',
        enchantments: [
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Citrus',
        rarity: 'bronze+',
        image: '/src/assets/cards/Citrus.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Clamera',
        rarity: 'bronze+',
        image: '/src/assets/cards/Clamera.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Claw Arm',
        rarity: 'gold+',
        image: '/src/assets/cards/ClawArm.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Clawrence',
        rarity: 'silver+',
        image: '/src/assets/cards/Clawrence.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Claws',
        rarity: 'bronze+',
        image: '/src/assets/cards/Claws.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Clockwork Blades',
        rarity: 'bronze+',
        image: '/src/assets/cards/ClockworkBlades.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Closed Sign',
        rarity: 'gold+',
        image: '/src/assets/cards/ClosedSign.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Coconut',
        rarity: 'bronze+',
        image: '/src/assets/cards/Coconut.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Cog',
        rarity: 'silver+',
        image: '/src/assets/cards/Cog.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Colossal Popsicle',
        rarity: 'silver+',
        image: '/src/assets/cards/ColossalPopsicle.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Combat Core',
        rarity: 'silver+',
        image: '/src/assets/cards/CombatCore.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Companion Core',
        rarity: 'bronze+',
        image: '/src/assets/cards/CompanionCore.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Concealed Dagger',
        rarity: 'silver+',
        image: '/src/assets/cards/ConcealedDagger.avif',
        size: 'small',
        enchantments: [
          'Golden',
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Cookies',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cookies.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Cool LEDs',
        rarity: 'bronze+',
        image: '/src/assets/cards/CoolLEDs.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Coolant',
        rarity: 'bronze+',
        image: '/src/assets/cards/Coolant.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Cooling Fan',
        rarity: 'silver+',
        image: '/src/assets/cards/CoolingFan.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Copper Ed',
        rarity: 'bronze+',
        image: '/src/assets/cards/CopperEd.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Coral',
        rarity: 'bronze+',
        image: '/src/assets/cards/Coral.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Coral Armor',
        rarity: 'bronze+',
        image: '/src/assets/cards/CoralArmor.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cosmic Amulet',
        rarity: 'gold+',
        image: '/src/assets/cards/CosmicAmulet.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cosmic Plumage',
        rarity: 'silver+',
        image: '/src/assets/cards/CosmicPlumage.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cove',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cove.avif',
        size: 'large',
        enchantments: [
          'Golden',
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Crane',
        rarity: 'gold+',
        image: '/src/assets/cards/Crane.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Critical Core',
        rarity: 'bronze+',
        image: '/src/assets/cards/CriticalCore.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Crook',
        rarity: 'silver+',
        image: '/src/assets/cards/Crook.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Crows Nest',
        rarity: 'bronze+',
        image: '/src/assets/cards/CrowsNest.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly',
          'Shiny'
        ]
      },
      { 
        name: 'Crusher Claw',
        rarity: 'bronze+',
        image: '/src/assets/cards/CrusherClaw.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Cryosleeve',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cryosleeve.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Cryosphere',
        rarity: 'gold+',
        image: '/src/assets/cards/Cryosphere.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Crypto',
        rarity: 'bronze+',
        image: '/src/assets/cards/Crypto.avif',
        size: 'small',
        enchantments: [
          'Golden',
          'Shiny'
        ]
      },
      { 
        name: 'Crystal Bonsai',
        rarity: 'bronze+',
        image: '/src/assets/cards/CrystalBonsai.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Golden',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Curry',
        rarity: 'silver+',
        image: '/src/assets/cards/Curry.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Cutlass',
        rarity: 'bronze+',
        image: '/src/assets/cards/Cutlass.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Dam',
        rarity: 'gold+',
        image: '/src/assets/cards/Dam.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Death Caps',
        rarity: 'gold+',
        image: '/src/assets/cards/DeathCaps.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Deed',
        rarity: 'silver+',
        image: '/src/assets/cards/Deed.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Shiny'
        ]
      },
      { 
        name: 'Diana-Saur',
        rarity: 'silver+',
        image: '/src/assets/cards/Diana-Saur.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Disguise',
        rarity: 'silver+',
        image: '/src/assets/cards/Disguise.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly'
        ]
      },
      { 
        name: 'Dishwasher',
        rarity: 'bronze+',
        image: '/src/assets/cards/Dishwasher.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'DJ Rob0t',
        rarity: 'silver+',
        image: '/src/assets/cards/DJRob0t.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Dock Lines',
        rarity: 'bronze+',
        image: '/src/assets/cards/DockLines.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Dog',
        rarity: 'bronze+',
        image: '/src/assets/cards/Dog.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Heavy',
          'Icy'
        ]
      },
      { 
        name: "Dooley's Scarf",
        rarity: 'silver+',
        image: '/src/assets/cards/DooleysScarf.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Double Barrel',
        rarity: 'bronze+',
        image: '/src/assets/cards/DoubleBarrel.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Double Whammy',
        rarity: 'silver+',
        image: '/src/assets/cards/DoubleWhammy.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic'
        ]
      },
      { 
        name: 'Dragon Tooth',
        rarity: 'gold+',
        image: '/src/assets/cards/DragonTooth.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Golden',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Dragon Whelp',
        rarity: 'silver+',
        image: '/src/assets/cards/DragonWhelp.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Duct Tape',
        rarity: 'bronze+',
        image: '/src/assets/cards/DuctTape.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic'
        ]
      },
      { 
        name: 'Eagle Talisman',
        rarity: 'bronze+',
        image: '/src/assets/cards/EagleTalisman.avif',
        size: 'small',
        enchantments: [
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Earrings',
        rarity: 'silver+',
        image: '/src/assets/cards/Earrings.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Ectoplasm',
        rarity: 'silver+',
        image: '/src/assets/cards/Ectoplasm.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Electric Eels',
        rarity: 'silver+',
        image: '/src/assets/cards/ElectricEels.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Emerald',
        rarity: 'silver+',
        image: '/src/assets/cards/Emerald.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Energy Potion',
        rarity: 'bronze+',
        image: '/src/assets/cards/EnergyPotion.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Epicurean Chocolate',
        rarity: 'bronze+',
        image: '/src/assets/cards/EpicureanChocolate.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Exoskeleton',
        rarity: 'bronze+',
        image: '/src/assets/cards/Exoskeleton.avif',
        size: 'medium',
        enchantments: [
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Extract',
        rarity: 'silver+',
        image: '/src/assets/cards/Extract.avif',
        size: 'small',
        enchantments: [
          'Toxic',
          'Shiny'
        ]
      },
      { 
        name: 'Eye of the Colossus',
        rarity: 'legendary',
        image: '/src/assets/cards/EyeOfTheColossus.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Fang',
        rarity: 'bronze+',
        image: '/src/assets/cards/Fang.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Feather',
        rarity: 'bronze+',
        image: '/src/assets/cards/Feather.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Fiber Optics',
        rarity: 'gold+',
        image: '/src/assets/cards/FiberOptics.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Figurehead',
        rarity: 'silver+',
        image: '/src/assets/cards/Figurehead.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Fire Claw',
        rarity: 'bronze+',
        image: '/src/assets/cards/FireClaw.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Fire Potion',
        rarity: 'bronze+',
        image: '/src/assets/cards/FirePotion.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'First Aiden',
        rarity: 'bronze+',
        image: '/src/assets/cards/FirstAiden.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Fishing Net',
        rarity: 'bronze+',
        image: '/src/assets/cards/FishingNet.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Fishing Rod',
        rarity: 'bronze+',
        image: '/src/assets/cards/FishingRod.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Fixer Upper',
        rarity: 'bronze+',
        image: '/src/assets/cards/FixerUpper.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Golden',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Flagship',
        rarity: 'silver+',
        image: '/src/assets/cards/Flagship.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Flail',
        rarity: 'bronze+',
        image: '/src/assets/cards/Flail.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo'
        ]
      },
      { 
        name: 'Flamberge',
        rarity: 'legendary',
        image: '/src/assets/cards/Flamberge.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Flamethrower',
        rarity: 'gold+',
        image: '/src/assets/cards/Flamethrower.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Flashbang',
        rarity: 'silver+',
        image: '/src/assets/cards/Flashbang.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative'
        ]
      },
      { 
        name: 'Focused Core',
        rarity: 'bronze+',
        image: '/src/assets/cards/FocusedCore.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Force Field',
        rarity: 'bronze+',
        image: '/src/assets/cards/ForceField.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Forklift',
        rarity: 'gold+',
        image: '/src/assets/cards/Forklift.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo'
        ]
      },
      { 
        name: 'Fort',
        rarity: 'gold+',
        image: '/src/assets/cards/Fort.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Fossilized Femur',
        rarity: 'silver+',
        image: '/src/assets/cards/FossilizedFemur.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Frost Potion',
        rarity: 'silver+',
        image: '/src/assets/cards/FrostPotion.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery'
        ]
      },
      { 
        name: 'Frozen Bludgeon',
        rarity: 'bronze+',
        image: '/src/assets/cards/FrozenBludgeon.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Fuel Rod',
        rarity: 'bronze+',
        image: '/src/assets/cards/FuelRod.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Gamma Ray',
        rarity: 'silver+',
        image: '/src/assets/cards/GammaRay.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Ganjo',
        rarity: 'bronze+',
        image: '/src/assets/cards/Ganjo.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Gatling Gun',
        rarity: 'gold+',
        image: '/src/assets/cards/GatlingGun.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Gavel',
        rarity: 'gold+',
        image: '/src/assets/cards/Gavel.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Deadly',
          'Shiny',
          'Obsidian'
        ]
      },
      { 
        name: 'Gearnola Bar',
        rarity: 'bronze+',
        image: '/src/assets/cards/GearnolaBar.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Genie Lamp',
        rarity: 'diamond+',
        image: '/src/assets/cards/GenieLamp.avif',
        size: 'small',
        enchantments: []
      },
      { 
        name: 'Giant Ice Club',
        rarity: 'gold+',
        image: '/src/assets/cards/GiantIceClub.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Gland',
        rarity: 'bronze+',
        image: '/src/assets/cards/Gland.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Globe',
        rarity: 'silver+',
        image: '/src/assets/cards/Globe.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Goggles',
        rarity: 'bronze+',
        image: '/src/assets/cards/Goggles.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Golf Clubs',
        rarity: 'bronze+',
        image: '/src/assets/cards/GolfClubs.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'GPU',
        rarity: 'bronze+',
        image: '/src/assets/cards/GPU.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Grapeshot',
        rarity: 'silver+',
        image: '/src/assets/cards/Grapeshot.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Grappling Hook',
        rarity: 'silver+',
        image: '/src/assets/cards/GrapplingHook.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Green Gumball',
        rarity: 'bronze+',
        image: '/src/assets/cards/GreenGumball.avif',
        size: 'small',
        enchantments: [
          'Shiny'
        ]
      },
      { 
        name: 'Grenade',
        rarity: 'bronze+',
        image: '/src/assets/cards/Grenade.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery'
        ]
      },
      { 
        name: 'Grindstone',
        rarity: 'silver+',
        image: '/src/assets/cards/Grindstone.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Gumball Machine',
        rarity: 'silver+',
        image: '/src/assets/cards/GumballMachine.avif',
        size: 'medium',
        enchantments: [
          'Golden',
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Gunpowder',
        rarity: 'silver+',
        image: '/src/assets/cards/Gunpowder.avif',
        size: 'small',
        enchantments: ['Shiny']
      },
      { 
        name: 'Hacksaw',
        rarity: 'gold+',
        image: '/src/assets/cards/Hacksaw.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Hakurvian Launcher',
        rarity: 'bronze+',
        image: '/src/assets/cards/HakurvianLauncher.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Haladie',
        rarity: 'bronze+',
        image: '/src/assets/cards/Haladie.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Hammer',
        rarity: 'silver+',
        image: '/src/assets/cards/Hammer.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Hammlet',
        rarity: 'bronze+',
        image: '/src/assets/cards/Hammlet.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Hammock',
        rarity: 'gold+',
        image: '/src/assets/cards/Hammock.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Handaxe',
        rarity: 'bronze+',
        image: '/src/assets/cards/Handaxe.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Harmadillo',
        rarity: 'bronze+',
        image: '/src/assets/cards/Harmadillo.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Harpoon',
        rarity: 'bronze+',
        image: '/src/assets/cards/Harpoon.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Hatchet',
        rarity: 'bronze+',
        image: '/src/assets/cards/Hatchet.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Hemlock',
        rarity: 'bronze+',
        image: '/src/assets/cards/Hemlock.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Hogwash',
        rarity: 'silver+',
        image: '/src/assets/cards/Hogwash.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Holsters',
        rarity: 'silver+',
        image: '/src/assets/cards/Holsters.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Toxic',
          'Fiery',
          'Deadly'
        ]
      },
      { 
        name: 'Honing Steel',
        rarity: 'bronze+',
        image: '/src/assets/cards/HoningSteel.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Hot Springs',
        rarity: 'bronze+',
        image: '/src/assets/cards/HotSprings.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Hydraulic Squeezer',
        rarity: 'silver+',
        image: '/src/assets/cards/HydraulicSqueezer.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Ice 9000',
        rarity: 'bronze+',
        image: '/src/assets/cards/Ice9000.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Ice Cream Truck',
        rarity: 'silver+',
        image: '/src/assets/cards/IceCreamTruck.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Ice Cubes',
        rarity: 'gold+',
        image: '/src/assets/cards/IceCubes.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Ice Pick',
        rarity: 'silver+',
        image: '/src/assets/cards/IcePick.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Iceberg',
        rarity: 'diamond+',
        image: '/src/assets/cards/Iceberg.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery'
        ]
      },
      { 
        name: 'Icebreaker',
        rarity: 'silver+',
        image: '/src/assets/cards/Icebreaker.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Icicle',
        rarity: 'bronze+',
        image: '/src/assets/cards/Icicle.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny'
        ]
      },
      { 
        name: 'Igloo',
        rarity: 'silver+',
        image: '/src/assets/cards/Igloo.avif',
        size: 'large',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Ignition Core',
        rarity: 'bronze+',
        image: '/src/assets/cards/IgnitionCore.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'IllusoRay',
        rarity: 'bronze+',
        image: '/src/assets/cards/IllusoRay.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Improvised Bludgeon',
        rarity: 'bronze+',
        image: '/src/assets/cards/ImprovisedBludgeon.avif',
        size: 'medium',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly',
          'Obsidian'
        ]
      },
      { 
        name: 'Incendiary Rounds',
        rarity: 'silver+',
        image: '/src/assets/cards/IncendiaryRounds.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Incense',
        rarity: 'silver+',
        image: '/src/assets/cards/Incense.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Induction Aegis',
        rarity: 'bronze+',
        image: '/src/assets/cards/InductionAegis.avif',
        size: 'small',
        enchantments: [
          'Heavy',
          'Icy',
          'Turbo',
          'Shielded',
          'Restorative',
          'Toxic',
          'Fiery',
          'Shiny',
          'Deadly'
        ]
      },
      { 
        name: 'Infernal Greatsword',
        rarity: 'legendary',
        image: '/src/assets/cards/InfernalGreatsword.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Necronomicon',
        rarity: 'legendary',
        image: '/src/assets/cards/Necronomicon.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly']
      },
      { 
        name: 'Octopus',
        rarity: 'legendary',
        image: '/src/assets/cards/Octopus.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Scythe',
        rarity: 'legendary',
        image: '/src/assets/cards/Scythe.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Singularity',
        rarity: 'legendary',
        image: '/src/assets/cards/Singularity.avif',
        size: 'small',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny']
      },
      { 
        name: 'Soul of the District',
        rarity: 'legendary',
        image: '/src/assets/cards/SoulOfTheDistrict.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'Teddy',
        rarity: 'legendary',
        image: '/src/assets/cards/Teddy.avif',
        size: 'medium',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Deadly', 'Obsidian']
      },
      { 
        name: 'The Eclipse',
        rarity: 'legendary',
        image: '/src/assets/cards/TheEclipse.avif',
        size: 'large',
        enchantments: ['Heavy', 'Icy', 'Turbo', 'Shielded', 'Restorative', 'Toxic', 'Fiery', 'Shiny', 'Obsidian']
      }
    ];
    
    export default cards;
