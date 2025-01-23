const skills = [
  {
    name: 'Adaptive Ordinance',
    image: '/src/assets/skills/AdaptiveOrdinance.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'You have (2 » 4 » 6) Regeneration for each item with Ammo you have. [0]'
  },
  {
    name: 'Advanced Synthetics',
    image: '/src/assets/skills/AdvancedSynthetics.avif',
    pools: ['Dooley', 'Stelle'],
    rarity: 'gold+',
    description: 'When you Level Up, upgrade a (Bronze-tier » Silver-tier) item.'
  },
  {
    name: 'Aggressive',
    image: '/src/assets/skills/Aggressive.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you use a Weapon, give it (+2% » +4% » +6% » +8%) crit Chance for the fight.'
  },
  {
    name: 'Alacrity',
    image: '/src/assets/skills/Alacrity.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Crit each fight, Charge 1 item 1 second(s).'
  },
  {
    name: 'All Talk',
    image: '/src/assets/skills/AllTalk.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'While you have more than half Health, your weapons have (+25 » +50) damage.'
  },
  {
    name: 'Ambush',
    image: '/src/assets/skills/Ambush.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'At the start of each fight, deal damage equal to (15% » 30%) of the enemy\'s Max Health.'
  },
  {
    name: 'Ammo Stash',
    image: '/src/assets/skills/AmmoStash.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'Your leftmost item with Ammo has (+1 » +2 » +3 » +4) Max Ammo.'
  },
  {
    name: 'Anything to Win',
    image: '/src/assets/skills/AnythingToWin.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'When you use a non-weapon item, Burn (1 » 2 » 3) and Poison (1 » 2 » 3).'
  },
  {
    name: 'Arbitrage',
    image: '/src/assets/skills/Arbitrage.avif',
    pools: ['Vanessa', 'Pygmalien', 'Stelle'],
    rarity: 'bronze+',
    description: 'When you win a fight against a player, gain (2 » 3 » 4 » 5) gold.'
  },
  {
    name: 'Arms Dealer',
    image: '/src/assets/skills/ArmsDealer.avif',
    pools: ['Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'When you buy a Weapon, gain (20 » 30 » 40 » 50) Max Health.'
  },
  {
    name: 'Arms Race',
    image: '/src/assets/skills/ArmsRace.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'Your items have (+2% » +3%) Crit Chance for each weapon you have. [0]'
  },
  {
    name: 'Artillery Spotter',
    image: '/src/assets/skills/ArtillerySpotter.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'If you have 4 or fewer items, your items have (+5% » +10% » +20%) Crit Chance.'
  },
  {
    name: 'Assault Focus',
    image: '/src/assets/skills/AssaultFocus.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When any non-weapon item is used, slow it for (2 » 4) second(s).'
  },
  {
    name: 'Augmented Defenses',
    image: '/src/assets/skills/AugmentedDefenses.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'Your Shield items have +1 Shield. When you sell a small item, increase this bonus by (+1 » +2 » +3 » +4) Shield.'
  },
  {
    name: 'Augmented Weaponry',
    image: '/src/assets/skills/AugmentedWeaponry.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'Your weapons have +1 Damage. When you sell a small item, increase this bonus by (+1 » +2 » +3 » +4) Damage.'
  },
  {
    name: 'Backroom Dealings',
    image: '/src/assets/skills/BackroomDealings.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'silver+',
    description: 'When you visit a Merchant, gain (25 » 50 » 75) Max Health.'
  },
  {
    name: 'Backup Defenses',
    image: '/src/assets/skills/BackupDefenses.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'gold+',
    description: 'The first time you fall below half health each fight, Shield equal to (20% » 30%) of your Max Health. [0%]'
  },
  {
    name: 'Balanced Friendship',
    image: '/src/assets/skills/BalancedFriendship.avif',
    pools: ['Vanessa', 'Dooley'],
    rarity: 'silver+',
    description: 'Your Weapons have (+2 » +4 » +6) damage and Shield items have (+2 » +4 » +6) shield for each friend you have. [0, 0]'
  },
  {
    name: 'Barnacle Crusted',
    image: '/src/assets/skills/BarnacleCrusted.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'Reduce the cooldown of your aquatic items by (10% » 20%).'
  },
  {
    name: 'Beautiful Friendship',
    image: '/src/assets/skills/BeautifulFriendship.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'When you use a Friend, your weapons gain (3 » 6) damage for the fight.'
  },
  {
    name: 'Berserker',
    image: '/src/assets/skills/Berserker.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'While your enemy has more health than you, your Weapons have their cooldowns reduced by (5% » 10% » 20%).'
  },
  {
    name: 'Big Ego',
    image: '/src/assets/skills/BigEgo.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'Your Weapons have Lifesteal.'
  },
  {
    name: 'Big Guns',
    image: '/src/assets/skills/BigGuns.avif',
    pools: ['Vanessa', 'Pygmalien', 'Stelle'],
    rarity: 'diamond+',
    description: 'Double the damage of your Large weapons.'
  },
  {
    name: 'Big Numbers',
    image: '/src/assets/skills/BigNumbers.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'Your large items have (+25% » +50%) crit chance'
  },
  {
    name: 'Blizzard',
    image: '/src/assets/skills/Blizzard.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'At the start of each fight, Freeze all non-weapon items for (2 » 3) second(s).'
  },
  {
    name: 'Bloodhound',
    image: '/src/assets/skills/Bloodhound.avif',
    pools: ['Vanessa', 'Jules'],
    rarity: 'silver+',
    description: 'The first time your enemy falls below half health each fight, Charge your items (2 » 3 » 4) second(s).'
  },
  {
    name: 'Boar Market',
    image: '/src/assets/skills/BoarMarket.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'Your leftmost and rightmost Weapons have + Damage equal to (1x » 2x) their value.'
  },
  {
    name: 'Bold Under Pressure',
    image: '/src/assets/skills/BoldUnderPressure.avif',
    pools: ['Vanessa', 'Pygmalien', 'Jules', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Haste (2 » 4 » 6) items 2 second(s).'
  },
  {
    name: 'Bonk',
    image: '/src/assets/skills/Bonk.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'Enemy cooldowns are increased by 1 second(s).'
  },
  {
    name: 'Brawler',
    image: '/src/assets/skills/Brawler.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'You have (+100 » +200 » +300) Max Health for each Weapon you have. [0]'
  },
  {
    name: 'Buddy System',
    image: '/src/assets/skills/BuddySystem.avif',
    pools: ['Dooley'],
    rarity: 'silver+',
    description: 'If you have exactly one friend, reduce its and the Core\'s cooldown by (5% » 10% » 15%).'
  },
  {
    name: 'Building Crescendo',
    image: '/src/assets/skills/BuildingCrescendo.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'When you use an item, your items gain (10% » 15%) crit chance for the fight.\nYour items have 100% less crit chance.'
  },
  {
    name: 'Bullet Time',
    image: '/src/assets/skills/BulletTime.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you use an Ammo item each fight, Slow 1 item for 1 second(s).'
  },
  {
    name: 'Burn Containment',
    image: '/src/assets/skills/BurnContainment.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Burn each fight, Charge 1 Shield item 1 second(s).'
  },
  {
    name: 'Burning Rage',
    image: '/src/assets/skills/BurningRage.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you Burn, your Weapons gain (+2 » +4 » +6 » +8) damage for the fight.'
  },
  {
    name: 'Burning Shield',
    image: '/src/assets/skills/BurningShield.avif',
    pools: ['Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Shield equal to (2 » 3 » 4) times the Burn on your opponent. [0]'
  },
  {
    name: 'Burst of Flame',
    image: '/src/assets/skills/BurstOfFlame.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'The first time your enemy falls below half health, Burn (10 » 15 » 20 » 25).'
  },
  {
    name: 'Captain\'s Charge',
    image: '/src/assets/skills/CaptainsCharge.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Haste (2 » 3 » 4) items for 3 second(s).'
  },
  {
    name: 'Cash Deposits',
    image: '/src/assets/skills/CashDeposits.avif',
    pools: ['Pygmalien'],
    rarity: 'diamond+',
    description: 'Your weapons have + damage equal to your gold.'
  },
  {
    name: 'Chemical Fire',
    image: '/src/assets/skills/ChemicalFire.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'Your Burn items have (+2 » +4 » +6) Burn.\nYour Poison items have (+2 » +4 » +6) Poison.'
  },
  {
    name: 'Chilling Touch',
    image: '/src/assets/skills/ChillingTouch.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'The first time you Freeze each fight, Slow all your opponent\'s items for (3 » 5 » 7) second(s).'
  },
  {
    name: 'Chocoholic',
    image: '/src/assets/skills/Chocoholic.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'When you sell a medium or large item, get (1 » 2) Chocolate Bar(s).'
  },
  {
    name: 'Circle of Life',
    image: '/src/assets/skills/CircleOfLife.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'diamond+',
    description: 'Your leftmost Weapon has lifesteal.'
  },
  {
    name: 'Clean Storefront',
    image: '/src/assets/skills/CleanStorefront.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'Your leftmost item has (+15 » +30 » +50) value during combat.'
  },
  {
    name: 'Combat Medic',
    image: '/src/assets/skills/CombatMedic.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'gold+',
    description: 'When you Heal, an item gains (3% » 5%) Crit Chance for the fight.'
  },
  {
    name: 'Command Ship',
    image: '/src/assets/skills/CommandShip.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'If you have a vehicle, reduce your non-vehicle items\' cooldowns by (10% » 15% » 20%).'
  },
  {
    name: 'Commercial Zoning',
    image: '/src/assets/skills/CommercialZoning.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'When you use a Property, deal damage equal to (1x » 2x) your gold. [NaN]'
  },
  {
    name: 'Conflagration',
    image: '/src/assets/skills/Conflagration.avif',
    pools: ['Vanessa', 'Dooley', 'Mak', 'Jules', 'Stelle'],
    rarity: 'gold+',
    description: 'When you use an item with Burn, that item gains (1 » 2) Burn for the fight.'
  },
  {
    name: 'Coolant Leak',
    image: '/src/assets/skills/CoolantLeak.avif',
    pools: ['Pygmalien', 'Dooley', 'Jules', 'Mak'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you use your rightmost item each fight, Freeze 1 item for 1 second(s).'
  },
  {
    name: 'Corrosive Toxins',
    image: '/src/assets/skills/CorrosiveToxins.avif',
    pools: ['Mak'],
    rarity: 'gold+',
    description: 'When you Poison, enemy Weapons lose (2 » 4) damage.'
  },
  {
    name: 'Cosmic Wind',
    image: '/src/assets/skills/CosmicWind.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'When you Crit, Haste an item for (1 » 2 » 3) second(s).'
  },
  {
    name: 'CPU Throttling',
    image: '/src/assets/skills/CPUThrottling.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use The Core each fight, Slow 1 item for 2 second(s).'
  },
  {
    name: 'Crashing Waves',
    image: '/src/assets/skills/CrashingWaves.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use an Aquatic item each fight, Haste 1 weapon for 1 second(s).'
  },
  {
    name: 'Creeping Chill',
    image: '/src/assets/skills/CreepingChill.avif',
    pools: ['Dooley', 'Vanessa', 'Mak', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you Slow each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Creeping Toxins',
    image: '/src/assets/skills/CreepingToxins.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Slow each fight, Charge 1 Poison item 1 second(s).'
  },
  {
    name: 'Critical Aid',
    image: '/src/assets/skills/CriticalAid.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Heal items have (+5% » +10% » +15% » +20%) Crit chance.'
  },
  {
    name: 'Critical Captain',
    image: '/src/assets/skills/CriticalCaptain.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle'],
    rarity: 'bronze+',
    description: 'The first time you use a Large item each fight, your items gain (+4% » +8% » +12% » +16%) Crit Chance for the fight.'
  },
  {
    name: 'Critical Investments',
    image: '/src/assets/skills/CriticalInvestments.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'Your Properties have (+10% » +15% » +20%) Crit chance.'
  },
  {
    name: 'Critical Protector',
    image: '/src/assets/skills/CriticalProtector.avif',
    pools: ['Pygmalien', 'Dooley'],
    rarity: 'bronze+',
    description: 'Your Shield items have (+5% » +10% » +15% » +20%) Crit chance.'
  },
  {
    name: 'Cryomastery',
    image: '/src/assets/skills/Cryomastery.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you Freeze, your Shield items gain (3 » 5) Shield for the fight.'
  },
  {
    name: 'Deadly Eye',
    image: '/src/assets/skills/DeadlyEye.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Weapons have (+5% » +10% » +15% » +20%) Crit chance.'
  },
  {
    name: 'Defense Grid',
    image: '/src/assets/skills/DefenseGrid.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'At the start of each fight, gain shield equal to (10% » 20% » 35% » 50%) of your max health.'
  },
  {
    name: 'Defensive Stance',
    image: '/src/assets/skills/DefensiveStance.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'When you use a weapon, your Shield items gain (3 » 6 » 9) Shield for the fight.'
  },
  {
    name: 'Depth Charge',
    image: '/src/assets/skills/DepthCharge.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'If you have exactly one weapon, it has (+5 » +10) Max Ammo.\n...if it is also Aquatic, it has (+25 » +50) Damage.'
  },
  {
    name: 'Desperate Cleanse',
    image: '/src/assets/skills/DesperateCleanse.avif',
    pools: ['Pygmalien', 'Dooley'],
    rarity: 'diamond+',
    description: 'The first time you fall below half health each fight, remove Freeze and Slow from your items and Cleanse half your Burn and Poison.'
  },
  {
    name: 'Desperate Strike',
    image: '/src/assets/skills/DesperateStrike.avif',
    pools: ['Vanessa', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'While you have less health than your opponent, your items gain (10% » 15% » 20%) Crit Chance.'
  },
  {
    name: 'Diamond Fangs',
    image: '/src/assets/skills/DiamondFangs.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'Your Small Diamond-tier items have their cooldowns reduced by (30% » 40% » 50% » 60%).'
  },
  {
    name: 'Diamond Heart',
    image: '/src/assets/skills/DiamondHeart.avif',
    pools: ['Pygmalien', 'Stelle'],
    rarity: 'gold+',
    description: 'You have (+300 » +500) Max Health for each Diamond-tier item you have. [0]'
  },
  {
    name: 'Distributed Systems',
    image: '/src/assets/skills/DistributedSystems.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use a large item, haste (2 » 3) small items for (2 » 3) second(s).'
  },
  {
    name: 'Draconic Rage',
    image: '/src/assets/skills/DraconicRage.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use a Medium item, a Burn item gains (10 » 15) burn for the fight.'
  },
  {
    name: 'Electrified Hull',
    image: '/src/assets/skills/ElectrifiedHull.avif',
    pools: ['Pygmalien', 'Dooley'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you Shield each fight, Charge 1 item 1 second(s).'
  },
  {
    name: 'Emergency Burn',
    image: '/src/assets/skills/EmergencyBurn.avif',
    pools: ['Dooley', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Burn (20 » 30 » 40).'
  },
  {
    name: 'Emergency Draught',
    image: '/src/assets/skills/EmergencyDraught.avif',
    pools: ['Mak'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, gain (20 » 30 » 40) Regeneration for the fight.'
  },
  {
    name: 'Emergency Shield',
    image: '/src/assets/skills/EmergencyShield.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'diamond+',
    description: 'The first time you fall below half health each fight, use your highest Shield item.'
  },
  {
    name: 'Endurance',
    image: '/src/assets/skills/Endurance.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'silver+',
    description: 'When you use a weapon, give your Healing items (+10 » +20 » +30) Healing for the fight.'
  },
  {
    name: 'Equivalent Exchange',
    image: '/src/assets/skills/EquivalentExchange.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you Heal, charge a Poison 1 second.'
  },
  {
    name: 'Expert Pilot',
    image: '/src/assets/skills/ExpertPilot.avif',
    pools: ['Stelle'],
    rarity: 'gold+',
    description: 'Cooldown 10 seconds\nYour Shield Vehicles gain (30% » 60%) Shield.\nYour Weapon Vehicles gain (30% » 60%) Damage.'
  },
  {
    name: 'Exposing Toxins',
    image: '/src/assets/skills/ExposingToxins.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'When you Poison, your items gain (+1% » +2% » +3%) Crit Chance for the fight.'
  },
  {
    name: 'Extreme Comfort',
    image: '/src/assets/skills/ExtremeComfort.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you heal, your Shield items gain (1 » 2 » 3 » 4) shield for the fight.'
  },
  {
    name: 'Fiery',
    image: '/src/assets/skills/Fiery.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Mak', 'Stelle'],
    rarity: 'bronze+',
    description: 'Your Burn items have (+2 » +4 » +6 » +8) Burn.'
  },
  {
    name: 'Fiery Rebirth',
    image: '/src/assets/skills/FieryRebirth.avif',
    pools: ['Common'],
    rarity: 'legendary',
    description: 'The first time you would die each fight, Heal to full.'
  },
  {
    name: 'Final Dose',
    image: '/src/assets/skills/FinalDose.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'bronze+',
    description: 'Your rightmost Poison item has (+3 » +6 » +9 » +12) Poison.'
  },
  {
    name: 'Final Flame',
    image: '/src/assets/skills/FinalFlame.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your rightmost Burn item has (+3 » +6 » +9 » +12) Burn.'
  },
  {
    name: 'Finesse Shield',
    image: '/src/assets/skills/FinesseShield.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'While your enemy has more health than you, your Shield items have their cooldowns reduced by (5% » 10% » 20%).'
  },
  {
    name: 'Firepower',
    image: '/src/assets/skills/Firepower.avif',
    pools: ['Dooley'],
    rarity: 'silver+',
    description: 'When you use the Core, adjacent weapons gain (10 » 20 » 30) damage for the fight.'
  },
  {
    name: 'Firestarter',
    image: '/src/assets/skills/Firestarter.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'At the start of each fight, burn (17 » 25 » 35).'
  },
  {
    name: 'First Flames',
    image: '/src/assets/skills/FirstFlames.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Burn (10 » 15 » 20).'
  },
  {
    name: 'First Responder',
    image: '/src/assets/skills/FirstResponder.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your leftmost Heal item has (+20 » +35 » +50 » +65) Heal.'
  },
  {
    name: 'First Strike',
    image: '/src/assets/skills/FirstStrike.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'Your items have (+30% » +50%) Crit Chance.\nWhen you use an item, all your items lose 10% crit chance for the fight.'
  },
  {
    name: 'Flamedancer',
    image: '/src/assets/skills/Flamedancer.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'Your Burn items have (+2% » +4% » +6% » +8%) Crit Chance.'
  },
  {
    name: 'Flanking Aid',
    image: '/src/assets/skills/FlankingAid.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Adjacent items gain (15 » 20 » 25) Healing for the fight.'
  },
  {
    name: 'Flanking Criticals',
    image: '/src/assets/skills/FlankingCriticals.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Adjacent items gain (15% » 20% » 25%) Crit Chance for the fight.'
  },
  {
    name: 'Flanking Fire',
    image: '/src/assets/skills/FlankingFire.avif',
    pools: ['Vanessa', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Adjacent items gain (7 » 10 » 13) Burn for the fight.'
  },
  {
    name: 'Flanking Shield',
    image: '/src/assets/skills/FlankingShield.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, adjacent Shield items gain (15 » 30 » 50) Shield for the fight.'
  },
  {
    name: 'Flanking Shots',
    image: '/src/assets/skills/FlankingShots.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, adjacent weapons gain (15 » 30 » 50) Damage for the fight.'
  },
  {
    name: 'Flanking Toxins',
    image: '/src/assets/skills/FlankingToxins.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, adjacent Poison items gain (4 » 6 » 8) Poison for the fight.'
  },
  {
    name: 'Flashy Mechanic',
    image: '/src/assets/skills/FlashyMechanic.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'When you use a Tool, items adjacent to it gain (3% » 6% » 9%) Crit chance.'
  },
  {
    name: 'Flashy Pilot',
    image: '/src/assets/skills/FlashyPilot.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'When you use a Vehicle, your items gain (10% » 20% » 30%) Crit chance.'
  },
  {
    name: 'Flashy Reload',
    image: '/src/assets/skills/FlashyReload.avif',
    pools: ['Vanessa'],
    rarity: 'diamond+',
    description: 'When you Crit with an item, reload another item +1 ammo.'
  },
  {
    name: 'Flurry of Blows',
    image: '/src/assets/skills/FlurryOfBlows.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you use a Weapon each fight, charge 1 item 1 second(s).'
  },
  {
    name: 'Focused Rage',
    image: '/src/assets/skills/FocusedRage.avif',
    pools: ['Pygmalien', 'Dooley'],
    rarity: 'diamond+',
    description: 'The first time you fall below half health each fight, double all your items\' Crit Chance for the fight.'
  },
  {
    name: 'Follow-Up Care',
    image: '/src/assets/skills/FollowUpCare.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your rightmost Heal item has (+20 » +35 » +50 » +65) Heal.'
  },
  {
    name: 'Foreboding Winds',
    image: '/src/assets/skills/ForebodingWinds.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When any player uses an item, all items gain (2% » 4%) Crit Chance for the fight.'
  },
  {
    name: 'Frontal Shielding',
    image: '/src/assets/skills/FrontalShielding.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'bronze+',
    description: 'Your leftmost Shield item has (+20 » +30 » +40 » +50) Shield.'
  },
  {
    name: 'Frostfire',
    image: '/src/assets/skills/Frostfire.avif',
    pools: ['Dooley', 'Vanessa', 'Mak', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you Burn each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Frozen Flames',
    image: '/src/assets/skills/FrozenFlames.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak', 'Pygmalien'],
    rarity: 'silver+',
    description: 'When your items gain Freeze, Burn (8 » 12 » 16).'
  },
  {
    name: 'Frozen Shot',
    image: '/src/assets/skills/FrozenShot.avif',
    pools: ['Pygmalien', 'Dooley', 'Jules', 'Mak'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you use your Slowest weapon each fight, Freeze 1 item of equal or smaller size for 1 second(s).'
  },
  {
    name: 'Frozen Synapse',
    image: '/src/assets/skills/FrozenSynapse.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Freeze each fight, Haste the Core for 2 second(s).'
  },
  {
    name: 'Full Arsenal',
    image: '/src/assets/skills/FullArsenal.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'Your item\'s cooldowns are reduced by (5% » 10%) if you have a Vehicle, reduced by (5% » 10%) if you have a Weapon, and reduced by (5% » 10%) if you have a Tool.'
  },
  {
    name: 'Glass Cannon',
    image: '/src/assets/skills/GlassCannon.avif',
    pools: ['Vanessa', 'Dooley', 'Mak', 'Stelle'],
    rarity: 'diamond+',
    description: 'Both players\' weapons have double damage.'
  },
  {
    name: 'Grease Fire',
    image: '/src/assets/skills/GreaseFire.avif',
    pools: ['Dooley', 'Jules', 'Stelle'],
    rarity: 'gold+',
    description: 'When you use a tool, Burn (3 » 5).'
  },
  {
    name: 'Gunner',
    image: '/src/assets/skills/Gunner.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'Your items have (+1 » +2 » +3) Max Ammo.'
  },
  {
    name: 'Hard Shell',
    image: '/src/assets/skills/HardShell.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'The first time you fall below half health each fight, Shield equal to (20% » 30% » 40% » 50%) of your Max Health. [0]'
  },
  {
    name: 'Hardened Shield',
    image: '/src/assets/skills/HardenedShield.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'When your enemy uses a Weapon, your Shield items gain (5 » 10 » 15) Shield for the fight.'
  },
  {
    name: 'Hardly Workin\'',
    image: '/src/assets/skills/HardlyWorkin.avif',
    pools: ['Dooley', 'Vanessa', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'When you Slow, gain (2 » 4) Regeneration for the fight.'
  },
  {
    name: 'Heal Power',
    image: '/src/assets/skills/HealPower.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Heal items have (+10 » +20 » +30 » +40) Heal.'
  },
  {
    name: 'Healthy Hoarder',
    image: '/src/assets/skills/HealthyHoarder.avif',
    pools: ['Pygmalien'],
    rarity: 'bronze+',
    description: 'You have (+35 » +100 » +200 » +300) Max Health for each Non-Weapon item you have. [0]'
  },
  {
    name: 'Healthy Lifestyle',
    image: '/src/assets/skills/HealthyLifestyle.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'silver+',
    description: 'You have (1 » 2 » 3) Regeneration for each non-weapon item you have. [0]'
  },
  {
    name: 'Healthy Tip',
    image: '/src/assets/skills/HealthyTip.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'When you gain gold, gain Max Health equal to (1x » 2x) the amount of gold gained.'
  },
  {
    name: 'Heat Lover',
    image: '/src/assets/skills/HeatLover.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you or your enemy Burns, gain (2 » 4 » 6 » 8) Regeneration for the fight.'
  },
  {
    name: 'Heat Shield',
    image: '/src/assets/skills/HeatShield.avif',
    pools: ['Dooley', 'Stelle'],
    rarity: 'gold+',
    description: 'When you Burn with an item, gain Shield equal to (1x » 2x) that item\'s Burn.'
  },
  {
    name: 'Heated Shells',
    image: '/src/assets/skills/HeatedShells.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'When you use an Ammo item, Burn (2 » 3 » 4).'
  },
  {
    name: 'Heavy Firepower',
    image: '/src/assets/skills/HeavyFirepower.avif',
    pools: ['Dooley', 'Vanessa', 'Mak', 'Pygmalien', 'Stelle', 'Jules'],
    rarity: 'silver+',
    description: 'If you have 4 or fewer items in play, your Weapons have (+25 » +50 » +75) damage.'
  },
  {
    name: 'Heavy Machinery',
    image: '/src/assets/skills/HeavyMachinery.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use The Core each fight, Haste 1 item for 2 second(s).'
  },
  {
    name: 'Heavy Mettle',
    image: '/src/assets/skills/HeavyMettle.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'Your Shield items have + Shield equal to (2 » 3 » 4) times your level. [NaN]'
  },
  {
    name: 'Heavy Shielding',
    image: '/src/assets/skills/HeavyShielding.avif',
    pools: ['Stelle', 'Dooley', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Large Shield items have (+12 » +36 » +72 » +120) shield.'
  },
  {
    name: 'Heavy Weaponry',
    image: '/src/assets/skills/HeavyWeaponry.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Large Weapons deal (+12 » +36 » +72 » +120) Damage.'
  },
  {
    name: 'Honed Arsenal',
    image: '/src/assets/skills/HonedArsenal.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'Your items have (+1% » +3% » +5%) Crit Chance per Weapon you have. [0%]'
  },
  {
    name: 'Honed Strike',
    image: '/src/assets/skills/HonedStrike.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'When you Crit with an item, it gains (+5% » +10%) Crit Chance for the fight.'
  },
  {
    name: 'Hot Spot',
    image: '/src/assets/skills/HotSpot.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'When you use your leftmost item, Burn (2 » 3 » 4).'
  },
  {
    name: 'Housewarming Gifts',
    image: '/src/assets/skills/HousewarmingGifts.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'When you buy a property, gain (1 » 2) Chocolate Bar(s) and (1 » 2) Spare Change.'
  },
  {
    name: 'Hunker Down',
    image: '/src/assets/skills/HunkerDown.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Shield equal to (30% » 50% » 80%) of your Max Health. [0]'
  },
  {
    name: 'Hyper Focus',
    image: '/src/assets/skills/HyperFocus.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'If you have only one medium item, its cooldown is reduced by 30%.'
  },
  {
    name: 'Hypnotic Drain',
    image: '/src/assets/skills/HypnoticDrain.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you use a weapon with Lifesteal, Freeze a smaller item for 2 second(s).'
  },
  {
    name: 'Ice Bullets',
    image: '/src/assets/skills/IceBullets.avif',
    pools: ['Vanessa'],
    rarity: 'diamond+',
    description: 'When you Freeze, reload an Weapon 1 ammo.'
  },
  {
    name: 'Ignition',
    image: '/src/assets/skills/Ignition.avif',
    pools: ['Stelle'],
    rarity: 'diamond+'
  },
  {
    name: 'Immolating Spark',
    image: '/src/assets/skills/ImmolatingSpark.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your leftmost Burn item has (+3 » +6 » +9 » +12) Burn.'
  },
  {
    name: 'Improved Toxins',
    image: '/src/assets/skills/ImprovedToxins.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Poison items have (+2 » +4 » +6 » +8) Poison.'
  },
  {
    name: 'Improvised Burn',
    image: '/src/assets/skills/ImprovisedBurn.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'When you Crit, your Burn items gain (1 » 2) Burn for the fight.'
  },
  {
    name: 'Improvised Heal',
    image: '/src/assets/skills/ImprovisedHeal.avif',
    pools: ['Pygmalien', 'Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'When you Crit, your Heal items gain (10 » 20 » 30) Heal for the fight.'
  },
  {
    name: 'Improvised Poison',
    image: '/src/assets/skills/ImprovisedPoison.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'When you Crit, your Poison items gain (1 » 2) Poison for the fight.'
  },
  {
    name: 'Improvised Protection',
    image: '/src/assets/skills/ImprovisedProtection.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'silver+',
    description: 'When you Crit, your Shield items gain (5 » 10 » 15) Shield for the fight.'
  },
  {
    name: 'Improvised Weaponry',
    image: '/src/assets/skills/ImprovisedWeaponry.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'When you Crit, your weapons gain (5 » 10 » 15) Damage for the fight.'
  },
  {
    name: 'Industrialist',
    image: '/src/assets/skills/Industrialist.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'Reduce the cooldown of your Properties by (10% » 15%).'
  },
  {
    name: 'Inexorable',
    image: '/src/assets/skills/Inexorable.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'Your items have +2% crit chance. When you start a fight, increase this bonus by (+2% » +4% » +6%).'
  },
  {
    name: 'Initial Chill',
    image: '/src/assets/skills/InitialChill.avif',
    pools: ['Pygmalien', 'Dooley', 'Jules', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Initial Dose',
    image: '/src/assets/skills/InitialDose.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'bronze+',
    description: 'Your leftmost Poison item has (+3 » +6 » +9 » +12) Poison.'
  },
  {
    name: 'Into the Void',
    image: '/src/assets/skills/IntoTheVoid.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'At the start of each fight, destroy an item on each player\'s board for the fight.'
  },
  {
    name: 'Intrusion Countermeasures',
    image: '/src/assets/skills/IntrusionCountermeasures.avif',
    pools: ['Dooley'],
    rarity: 'diamond+',
    description: 'The first time you fall below half health in a fight, use your Friends.'
  },
  {
    name: 'Invigorating Blade',
    image: '/src/assets/skills/InvigoratingBlade.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use a Weapon each fight, Charge 1 Heal item 1 second(s).'
  },
  {
    name: 'Invigorating Cold',
    image: '/src/assets/skills/InvigoratingCold.avif',
    pools: ['Dooley', 'Jules', 'Stelle', 'Pygmalien', 'Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you Freeze each fight, Haste (1 » 2 » 3) items for 2 second(s).'
  },
  {
    name: 'Iron Sharpens Iron',
    image: '/src/assets/skills/IronSharpensIron.avif',
    pools: ['Vanessa', 'Jules', 'Mak'],
    rarity: 'silver+',
    description: 'Your leftmost Weapon has +2 damage. When you buy a weapon, increase this bonus by (2 » 3 » 4).'
  },
  {
    name: 'Juggler',
    image: '/src/assets/skills/Juggler.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you use a small item, Charge a large item for 1 second(s).'
  },
  {
    name: 'Jury Rigger',
    image: '/src/assets/skills/JuryRigger.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'When you use an item with Ammo, reload (1 » 2 » 3) the item to the left of it.'
  },
  {
    name: 'Keen Eye',
    image: '/src/assets/skills/KeenEye.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your items have (+4% » +8% » +12% » +16%) Crit chance.'
  },
  {
    name: 'Knife Tricks',
    image: '/src/assets/skills/KnifeTricks.avif',
    pools: ['Vanessa', 'Pygmalien', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'diamond+',
    description: 'When you use a weapon, reduce its cooldown by 5% for the fight.'
  },
  {
    name: 'Large Appetites',
    image: '/src/assets/skills/LargeAppetites.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'If you have 4 or fewer items, you have (+500 » +1000 » +2000) Max Health.'
  },
  {
    name: 'Large Poisons',
    image: '/src/assets/skills/LargePoisons.avif',
    pools: ['Mak'],
    rarity: 'bronze+',
    description: 'Your Large Poison items have (+4 » +8 » +12 » +16) Poison.'
  },
  {
    name: 'Lash Out',
    image: '/src/assets/skills/LashOut.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'At the start of each fight, Poison (3 » 6 » 9 » 12).'
  },
  {
    name: 'Left Eye',
    image: '/src/assets/skills/LeftEye.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your leftmost item has (+8% » +16% » +24% » +32%) Crit chance.'
  },
  {
    name: 'Left-Handed',
    image: '/src/assets/skills/LeftHanded.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your leftmost Weapon deals (+20 » +30 » +40 » +50) Damage.'
  },
  {
    name: 'Lefty Loosey',
    image: '/src/assets/skills/LeftyLoosey.avif',
    pools: ['Dooley', 'Jules', 'Vanessa'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use your leftmost item each fight, Haste 1 item for 1 second(s).'
  },
  {
    name: 'Lethargy',
    image: '/src/assets/skills/Lethargy.avif',
    pools: ['Pygmalien', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'All items have a cooldown increase of (30% » 50%).'
  },
  {
    name: 'Letting off Steam',
    image: '/src/assets/skills/LettingOffSteam.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Burn each fight, Haste the Core for 2 second(s).'
  },
  {
    name: 'Lifting',
    image: '/src/assets/skills/Lifting.avif',
    pools: ['Pygmalien', 'Vanessa', 'Jules'],
    rarity: 'silver+',
    description: 'Your weapons have +1 Damage. When you buy a Weapon, increase this bonus by (+1 » +2 » +3) Damage.'
  },
  {
    name: 'Like Clockwork',
    image: '/src/assets/skills/LikeClockwork.avif',
    pools: ['Dooley'],
    rarity: 'bronze+',
    description: 'When you level up, give your Weapons (+5 » +10 » +15 » +20) damage. If you have a Weapon Core, double this.'
  },
  {
    name: 'Liquid Cooled',
    image: '/src/assets/skills/LiquidCooled.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times use the Core each fight, Freeze 1 item of equal or smaller size for 1 second(s).'
  },
  {
    name: 'Living Flame',
    image: '/src/assets/skills/LivingFlame.avif',
    pools: ['Vanessa', 'Dooley', 'Mak', 'Jules', 'Stelle'],
    rarity: 'diamond+',
    description: 'The first time you fall below half health each fight, your Burn items have their cooldowns reduced by 50% for the fight.'
  },
  {
    name: 'Loaded Fury',
    image: '/src/assets/skills/LoadedFury.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'Your items have +0 damage for each ammo you have on your items in play. [0]'
  },
  {
    name: 'Long Strides',
    image: '/src/assets/skills/LongStrides.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'If you have 4 or fewer items, your items have their cooldowns reduced by (4% » 8% » 12%).'
  },
  {
    name: 'Machine Learning',
    image: '/src/assets/skills/MachineLearning.avif',
    pools: ['Dooley'],
    rarity: 'silver+',
    description: 'When you buy or upgrade this, upgrade the core.'
  },
  {
    name: 'Makeshift Plate',
    image: '/src/assets/skills/MakeshiftPlate.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'Your Shield items have +1 Shield for every (4 » 3 » 2) gold you have. [NaN]'
  },
  {
    name: 'Master Salesman',
    image: '/src/assets/skills/MasterSalesman.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'Your items have double value during combat.'
  },
  {
    name: 'Medical Ward',
    image: '/src/assets/skills/MedicalWard.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Large Heal items have (+12 » +36 » +72 » +120) Heal.'
  },
  {
    name: 'Microfiber',
    image: '/src/assets/skills/Microfiber.avif',
    pools: ['Stelle', 'Dooley', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Small Shield items have (+3 » +9 » +18 » +30) shield.'
  },
  {
    name: 'Minimalist',
    image: '/src/assets/skills/Minimalist.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'If you have no weapons, your items\' cooldowns are reduced by (10% » 20%).'
  },
  {
    name: 'Mixed Message',
    image: '/src/assets/skills/MixedMessage.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times you use a non-Weapon item each fight, Charge 1 Weapon 1 second(s).'
  },
  {
    name: 'Moth to a Flame',
    image: '/src/assets/skills/MothToAFlame.avif',
    pools: ['Dooley', 'Mak'],
    rarity: 'diamond+',
    description: 'You have Regeneration equal to half the Burn on your enemy.'
  },
  {
    name: 'Nanite Healing',
    image: '/src/assets/skills/NaniteHealing.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Small Heal items have (+3 » +9 » +18 » +30) Heal.'
  },
  {
    name: 'Neophiliac',
    image: '/src/assets/skills/Neophiliac.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'The first time you freeze, burn, slow, poison, and haste each fight, charge an item (2 » 4) second(s).'
  },
  {
    name: 'Net Launcher',
    image: '/src/assets/skills/NetLauncher.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Slow (2 » 3 » 4) item(s) for 3 second(s).'
  },
  {
    name: 'Noisy Cricket',
    image: '/src/assets/skills/NoisyCricket.avif',
    pools: ['Dooley', 'Vanessa', 'Mak', 'Pygmalien', 'Stelle', 'Jules'],
    rarity: 'silver+',
    description: 'If you have at least 7 items in play, your Weapons deal (+20 » +25 » +30) damage.'
  },
  {
    name: 'Oceanic Rush',
    image: '/src/assets/skills/OceanicRush.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'At the start of each fight, Haste (1 » 2 » 3) Aquatic items for 2 second(s).'
  },
  {
    name: 'One Shot, One Kill',
    image: '/src/assets/skills/OneShot,OneKill.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'If you only have one weapon, it deals triple damage and has its cooldown increased by 50%.'
  },
  {
    name: 'Open for Business',
    image: '/src/assets/skills/OpenForBusiness.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'You have (+1 » +2 » +3) income for each Property you have (including Stash).'
  },
  {
    name: 'Outmaneuver',
    image: '/src/assets/skills/Outmaneuver.avif',
    pools: ['Vanessa', 'Stelle'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Slow each fight, Haste 1 vehicle for 2 second(s).'
  },
  {
    name: 'Overclocked',
    image: '/src/assets/skills/Overclocked.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'The Core has its cooldown reduced by (10% » 15%).\nWhile you have Burn, double this effect.'
  },
  {
    name: 'Panic',
    image: '/src/assets/skills/Panic.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'The first time you fall below 50% health each fight, reload (2 » 4 » 6 » 8) items.'
  },
  {
    name: 'Paralytic Poison',
    image: '/src/assets/skills/ParalyticPoison.avif',
    pools: ['Dooley', 'Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you Poison each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Paralyzing Rush',
    image: '/src/assets/skills/ParalyzingRush.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you Slow, Haste a Weapon (1 » 2) second(s).'
  },
  {
    name: 'Parting Shot',
    image: '/src/assets/skills/PartingShot.avif',
    pools: ['Vanessa'],
    rarity: 'gold+',
    description: 'When you use an item with Ammo, give it (+5% » +10%) Crit Chance for the fight.'
  },
  {
    name: 'Party Like it\'s 011111001111',
    image: '/src/assets/skills/PartyLikeIts011111001111.avif',
    pools: ['Dooley'],
    rarity: 'silver+',
    description: 'When you upgrade a Friend, your other items gain (3 » 6 » 9) bonus Damage, (3 » 6 » 9) bonus Shield and (1 » 2 » 3) bonus Burn.'
  },
  {
    name: 'Peaceful Eye',
    image: '/src/assets/skills/PeacefulEye.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Non-Weapon items have (+5% » +10% » +15% » +20%) Crit chance.'
  },
  {
    name: 'Petrifying Gaze',
    image: '/src/assets/skills/PetrifyingGaze.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Freeze all enemy items for (1 » 2 » 3) second(s).'
  },
  {
    name: 'Pickpocket',
    image: '/src/assets/skills/Pickpocket.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'At the start of each fight, gain (1 » 2 » 3 » 4) gold.'
  },
  {
    name: 'Poison Tyrant',
    image: '/src/assets/skills/PoisonTyrant.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you or your enemy Poisons, gain (2 » 4 » 6 » 8) Regeneration for the fight.'
  },
  {
    name: 'Poisonous Opener',
    image: '/src/assets/skills/PoisonousOpener.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Poison (10 » 15 » 20).'
  },
  {
    name: 'Power Broker',
    image: '/src/assets/skills/PowerBroker.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'Your weapons have + damage equal to (1x » 2x) your income.'
  },
  {
    name: 'Precision Diver',
    image: '/src/assets/skills/PrecisionDiver.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'Your Aquatic items have (+8% » +10% » +12%) Crit chance.'
  },
  {
    name: 'Prime Real Estate',
    image: '/src/assets/skills/PrimeRealEstate.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'When you use a Property, adjacent items gain (5 » 10 » 15) Crit chance for the fight.'
  },
  {
    name: 'Property Mogul',
    image: '/src/assets/skills/PropertyMogul.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'When you buy a Property, gain (50 » 100 » 150) Max Health.'
  },
  {
    name: 'Prosperity',
    image: '/src/assets/skills/Prosperity.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'Your Shield items have + Shield equal to the value of your Items. [0]'
  },
  {
    name: 'Purifying Flame',
    image: '/src/assets/skills/PurifyingFlame.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you gain Regeneration, a Burn item gains (1 » 2) Burn for the fight.'
  },
  {
    name: 'Pyromania',
    image: '/src/assets/skills/Pyromania.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use a large item, Burn (10 » 15).'
  },
  {
    name: 'Quality over Quantity',
    image: '/src/assets/skills/QualityOverQuantity.avif',
    pools: ['Vanessa', 'Pygmalien', 'Mak'],
    rarity: 'gold+',
    description: 'If you have exactly one weapon, it has Lifesteal and (5% » 10%) Crit Chance.'
  },
  {
    name: 'Quick Freeze',
    image: '/src/assets/skills/QuickFreeze.avif',
    pools: ['Dooley', 'Vanessa', 'Stelle', 'Jules'],
    rarity: 'silver+',
    description: 'The first time you Haste each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Quick Ignition',
    image: '/src/assets/skills/QuickIgnition.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Mak'],
    rarity: 'gold+',
    description: 'At the start of each fight, Haste (2 » 3) Burn items for 2 second(s).'
  },
  {
    name: 'Rapid Relief',
    image: '/src/assets/skills/RapidRelief.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'silver+',
    description: 'While your enemy has more health than you, your Heal items have their cooldowns reduced by (5% » 10%).'
  },
  {
    name: 'Ravenous',
    image: '/src/assets/skills/Ravenous.avif',
    pools: ['Common'],
    rarity: 'legendary',
    description: 'The first time you fall below half health each fight, destroy an item for the fight.'
  },
  {
    name: 'Re-Tooled',
    image: '/src/assets/skills/ReTooled.avif',
    pools: ['Pygmalien', 'Jules', 'Mak', 'Vanessa', 'Dooley', 'Stelle'],
    rarity: 'diamond+',
    description: 'Your leftmost Tool has +1 Multicast.'
  },
  {
    name: 'Reaching the Summit',
    image: '/src/assets/skills/ReachingTheSummit.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak', 'Pygmalien'],
    rarity: 'gold+',
    description: 'When you Freeze, your items gain (+2% » +4%) Crit Chance for the fight.'
  },
  {
    name: 'Rear Shielding',
    image: '/src/assets/skills/RearShielding.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle'],
    rarity: 'bronze+',
    description: 'Your rightmost Shield item has (+20 » +30 » +40 » +50) Shield.'
  },
  {
    name: 'Red Envelope',
    image: '/src/assets/skills/RedEnvelope.avif',
    pools: ['Vanessa', 'Pygmalien', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'When you buy this, gain 10 gold.'
  },
  {
    name: 'Reel \'Em In',
    image: '/src/assets/skills/ReelEmIn.avif',
    pools: ['Vanessa', 'Stelle'],
    rarity: 'diamond+',
    description: 'The first time your enemy falls below half health each fight, your items have their cooldowns reduced by 50% for the fight.'
  },
  {
    name: 'Regenerative',
    image: '/src/assets/skills/Regenerative.avif',
    pools: ['Vanessa', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'You have (10 » 20 » 30) Regeneration.'
  },
  {
    name: 'Reinforced Steel',
    image: '/src/assets/skills/ReinforcedSteel.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'When you use a Property, your Weapons gain (+5 » +10 » +15) damage and your Shield items gain (+5 » +10 » +15) shield for the fight.'
  },
  {
    name: 'Renovation',
    image: '/src/assets/skills/Renovation.avif',
    pools: ['Pygmalien'],
    rarity: 'diamond+',
    description: 'When you level up, upgrade a Property.'
  },
  {
    name: 'Reserve Shield',
    image: '/src/assets/skills/ReserveShield.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, Shield equal to (10% » 20% » 30%) of your max health.'
  },
  {
    name: 'Retaliatory Toxins',
    image: '/src/assets/skills/RetaliatoryToxins.avif',
    pools: ['Dooley', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, Poison (20 » 30 » 40).'
  },
  {
    name: 'Retool',
    image: '/src/assets/skills/Retool.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you use a Tool, reload 1 to adjacent items.'
  },
  {
    name: 'Rigged',
    image: '/src/assets/skills/Rigged.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'At the start of each fight, Haste (2 » 3 » 4 » 5) items for 3 second(s).'
  },
  {
    name: 'Right Eye',
    image: '/src/assets/skills/RightEye.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your rightmost item has (+8% » +16% » +24% » +32%) Crit chance.'
  },
  {
    name: 'Right-Handed',
    image: '/src/assets/skills/RightHanded.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your rightmost Weapon has (+20 » +30 » +40 » +50) Damage.'
  },
  {
    name: 'Righty Tighty',
    image: '/src/assets/skills/RightyTighty.avif',
    pools: ['Dooley', 'Mak', 'Vanessa'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use your rightmost item each fight, slow 1 item for 1 second(s).'
  },
  {
    name: 'Rush',
    image: '/src/assets/skills/Rush.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'At the start of each fight, Haste a weapon (3 » 5 » 7 » 9) second(s).'
  },
  {
    name: 'Rust',
    image: '/src/assets/skills/Rust.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'At the start of each fight, slow an item for (3 » 5 » 7 » 9) second(s).'
  },
  {
    name: 'Sabotage',
    image: '/src/assets/skills/Sabotage.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use a Tool each fight, Slow 1 item for 1 second(s).'
  },
  {
    name: 'Second Degree Burns',
    image: '/src/assets/skills/SecondDegreeBurns.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Medium Burn items have (+2 » +4 » +6 » +8) Burn.'
  },
  {
    name: 'Second Wind',
    image: '/src/assets/skills/SecondWind.avif',
    pools: ['Pygmalien', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you use a Large item each fight, heal (20% » 40% » 60%) of your max health.'
  },
  {
    name: 'Sharp Corners',
    image: '/src/assets/skills/SharpCorners.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'When you Shield, your weapons gain (3 » 6 » 9) damage for the fight.'
  },
  {
    name: 'Sharpened Steel',
    image: '/src/assets/skills/SharpenedSteel.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'When you use a Weapon, Adjacent items gain (4% » 8% » 12%) Crit Chance for the fight.'
  },
  {
    name: 'Shatter',
    image: '/src/assets/skills/Shatter.avif',
    pools: ['Vanessa', 'Pygmalien', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'When you freeze, your Weapons gain (+10 » +15 » +20) damage for the fight.'
  },
  {
    name: 'Shellshock',
    image: '/src/assets/skills/Shellshock.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'Your items have +0 damage for each ammo you have on your items in play. [0]'
  },
  {
    name: 'Shield Bash',
    image: '/src/assets/skills/ShieldBash.avif',
    pools: ['Pygmalien', 'Vanessa', 'Dooley', 'Stelle'],
    rarity: 'gold+',
    description: 'The first (4 » 8) times your enemy uses a non-weapon item each fight, Charge 1 Weapon 1 second(s).'
  },
  {
    name: 'Shored Up',
    image: '/src/assets/skills/ShoredUp.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you Heal, charge a Shield item 1 second.'
  },
  {
    name: 'Sick Burn',
    image: '/src/assets/skills/SickBurn.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you Poison each fight, charge 1 Burn item 1 second(s).'
  },
  {
    name: 'Slow and Steady',
    image: '/src/assets/skills/SlowAndSteady.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'When you Slow, your weapons gain (3 » 6) damage for the fight.'
  },
  {
    name: 'Slowed Targets',
    image: '/src/assets/skills/SlowedTargets.avif',
    pools: ['Vanessa', 'Dooley', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'When you Slow, your items gain (+1% » +2% » +3%) Crit Chance for the fight.'
  },
  {
    name: 'Small Weaponry',
    image: '/src/assets/skills/SmallWeaponry.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Small Weapons deal (+3 » +9 » +18 » +30) Damage.'
  },
  {
    name: 'Snowstorm',
    image: '/src/assets/skills/Snowstorm.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you freeze, your weapons gain (2 » 4 » 6 » 8) damage for the fight.'
  },
  {
    name: 'Sparring Partner',
    image: '/src/assets/skills/SparringPartner.avif',
    pools: ['Common'],
    rarity: 'legendary',
    description: 'When you would die, Cleanse all Burn and Poison, double your Max Health and Heal to full. In addition, your enemy gains 1 Gold.'
  },
  {
    name: 'Specialist',
    image: '/src/assets/skills/Specialist.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'silver+',
    description: 'If you have exactly 1 weapon, your Shield items have (+10 » +20 » +30) shield.'
  },
  {
    name: 'Standard Ordnance',
    image: '/src/assets/skills/StandardOrdnance.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Medium Weapons deal (+6 » +18 » +36 » +60) Damage.'
  },
  {
    name: 'Standardized Care',
    image: '/src/assets/skills/StandardizedCare.avif',
    pools: ['Pygmalien', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Medium Heal items have (+6 » +18 » +36 » +60) Heal.'
  },
  {
    name: 'Standardized Defenses',
    image: '/src/assets/skills/StandardizedDefenses.avif',
    pools: ['Stelle', 'Dooley', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Medium Shield items have (+6 » +18 » +36 » +60) shield.'
  },
  {
    name: 'Standardized Toxins',
    image: '/src/assets/skills/StandardizedToxins.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Medium Poison items have (+2 » +4 » +6 » +8) Poison.'
  },
  {
    name: 'Static Acceleration',
    image: '/src/assets/skills/StaticAcceleration.avif',
    pools: ['Dooley', 'Stelle', 'Mak'],
    rarity: 'gold+',
    description: 'When you Haste, your items gain (+1% » +2%) crit chance for the fight.'
  },
  {
    name: 'Staying Power',
    image: '/src/assets/skills/StayingPower.avif',
    pools: ['Pygmalien'],
    rarity: 'bronze+',
    description: 'When you use a Tool, Heal (5 » 10 » 15 » 20).'
  },
  {
    name: 'Stop That!',
    image: '/src/assets/skills/StopThat.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'silver+',
    description: 'The first time you fall below half health each fight, slow (2 » 4 » 4) items for (2 » 2 » 6) second(s).'
  },
  {
    name: 'Strength',
    image: '/src/assets/skills/Strength.avif',
    pools: ['Jules', 'Stelle', 'Mak', 'Dooley', 'Vanessa', 'Pygmalien'],
    rarity: 'bronze+',
    description: 'Your Weapons deal (+10 » +15 » +20 » +25) Damage.'
  },
  {
    name: 'Strong Arm',
    image: '/src/assets/skills/StrongArm.avif',
    pools: ['Pygmalien'],
    rarity: 'silver+',
    description: 'Your Weapons have + Damage equal to (1x » 2x » 3x) your income. [NaN]'
  },
  {
    name: 'Stunning Strike',
    image: '/src/assets/skills/StunningStrike.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'The first time you Crit each fight, Freeze an item for (3 » 4 » 5) second(s).'
  },
  {
    name: 'Submerged',
    image: '/src/assets/skills/Submerged.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'Your Weapons have (+3 » +6 » +9) Damage for each Aquatic item you have. [0]\nYour Shield items have (+3 » +6 » +9) Shield for each Aquatic item you have. [0]'
  },
  {
    name: 'Tall Buildings',
    image: '/src/assets/skills/TallBuildings.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'When you use a Property, haste items adjacent to it (1 » 2) second(s).'
  },
  {
    name: 'Tempering',
    image: '/src/assets/skills/Tempering.avif',
    pools: ['Vanessa', 'Jules'],
    rarity: 'silver+',
    description: 'When you use a weapon, give it (+3 » +6 » +9) damage for the fight.'
  },
  {
    name: 'Temporal Strike',
    image: '/src/assets/skills/TemporalStrike.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'gold+',
    description: 'If you have exactly one weapon, the first (5 » 10) times you use it each fight, Slow 1 item for 3 second(s).'
  },
  {
    name: 'The Best Defense',
    image: '/src/assets/skills/TheBestDefense.avif',
    pools: ['Vanessa'],
    rarity: 'silver+',
    description: 'When you use a weapon, give weapons adjacent to it (+3 » +6 » +9) damage for the fight.'
  },
  {
    name: 'The Right Tool',
    image: '/src/assets/skills/TheRightTool.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'Your non-tool items have (+5% » +10% » +15%) Crit Chance for each tool you have. [0]'
  },
  {
    name: 'Thick Hide',
    image: '/src/assets/skills/ThickHide.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you slow, charge an item 1 second(s).'
  },
  {
    name: 'Third Degree Burns',
    image: '/src/assets/skills/ThirdDegreeBurns.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'bronze+',
    description: 'Your Large Burn items have (+4 » +8 » +12 » +16) Burn.'
  },
  {
    name: 'Time to Tinker',
    image: '/src/assets/skills/TimeToTinker.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you Haste, Shield (10 » 20 » 30 » 40).'
  },
  {
    name: 'Tiny Dancer',
    image: '/src/assets/skills/TinyDancer.avif',
    pools: ['Dooley', 'Vanessa'],
    rarity: 'silver+',
    description: 'If you have at least 7 items in play, your items have their cooldowns reduced by (5% » 10% » 15%).'
  },
  {
    name: 'Titanium Casing',
    image: '/src/assets/skills/TitaniumCasing.avif',
    pools: ['Dooley'],
    rarity: 'gold+',
    description: 'When you use The Core, your Shield items gain (15 » 30) Shield for the fight.'
  },
  {
    name: 'Tools of the Trade',
    image: '/src/assets/skills/ToolsOfTheTrade.avif',
    pools: ['Dooley', 'Jules', 'Stelle'],
    rarity: 'gold+',
    description: 'The first (5 » 10) times you use a Tool each fight, Haste 1 Tool for 1 second(s).'
  },
  {
    name: 'Toughness',
    image: '/src/assets/skills/Toughness.avif',
    pools: ['Pygmalien', 'Dooley', 'Stelle'],
    rarity: 'bronze+',
    description: 'Your Shield items have (+10 » +15 » +20 » +25) Shield.'
  },
  {
    name: 'Toxic',
    image: '/src/assets/skills/Toxic.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'When you poison, your weapons gain (5 » 10 » 15) damage for the fight.'
  },
  {
    name: 'Toxic Exposure',
    image: '/src/assets/skills/ToxicExposure.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'gold+',
    description: 'When you Poison, your enemy loses (5 » 10) Max Health for the fight.'
  },
  {
    name: 'Toxic Flame',
    image: '/src/assets/skills/ToxicFlame.avif',
    pools: ['Vanessa', 'Dooley', 'Mak'],
    rarity: 'gold+',
    description: 'When you Burn with an item, Poison (1 » 2).\nWhen you Poison with an item, Burn (2 » 4).'
  },
  {
    name: 'Toxic Friendship',
    image: '/src/assets/skills/ToxicFriendship.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use a Friend, Poison (1 » 2).'
  },
  {
    name: 'Toxic Weapons',
    image: '/src/assets/skills/ToxicWeapons.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'silver+',
    description: 'Your Poison items have (+2 » +4 » +6) Poison for each Weapon you have. [0]'
  },
  {
    name: 'Toxin Injector',
    image: '/src/assets/skills/ToxinInjector.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'gold+',
    description: 'At the start of each fight, Haste (2 » 3) Poison items for 2 second(s).'
  },
  {
    name: 'Tracer Fire',
    image: '/src/assets/skills/TracerFire.avif',
    pools: ['Vanessa', 'Dooley', 'Jules', 'Stelle', 'Mak'],
    rarity: 'silver+',
    description: 'When you burn, your items gain (+1% » +2% » +3%) Crit Chance for the fight.'
  },
  {
    name: 'Trader',
    image: '/src/assets/skills/Trader.avif',
    pools: ['Pygmalien'],
    rarity: 'gold+',
    description: 'At the start of each day, your items gain (1 » 2) value.'
  },
  {
    name: 'Trained',
    image: '/src/assets/skills/Trained.avif',
    pools: ['Common'],
    rarity: 'bronze+',
    description: 'When you slow, a weapon gains (+5 » +10 » +15 » +20) damage for the fight.'
  },
  {
    name: 'Trickle Down Economics',
    image: '/src/assets/skills/TrickleDownEconomics.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use a large item, haste an item for (3 » 4) second(s).'
  },
  {
    name: 'Unwavering',
    image: '/src/assets/skills/Unwavering.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you use an item, Shield (20 » 40).'
  },
  {
    name: 'Vengeance',
    image: '/src/assets/skills/Vengeance.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'Your leftmost and rightmost items have their cooldowns reduced by (5% » 10% » 15%).'
  },
  {
    name: 'Venomous Vitality',
    image: '/src/assets/skills/VenomousVitality.avif',
    pools: ['Vanessa', 'Mak'],
    rarity: 'diamond+',
    description: 'You have Regeneration equal to half the Poison on your enemy.'
  },
  {
    name: 'Void Energy',
    image: '/src/assets/skills/VoidEnergy.avif',
    pools: ['Common'],
    rarity: 'diamond+',
    description: 'When you Burn, charge a Shield item 1 second.'
  },
  {
    name: 'Void Rage',
    image: '/src/assets/skills/VoidRage.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you burn, Haste an item for (1 » 2) second(s).'
  },
  {
    name: 'Void Render',
    image: '/src/assets/skills/VoidRender.avif',
    pools: ['Common'],
    rarity: 'gold+',
    description: 'When you destroy an item during combat, your Weapons gain (100 » 200) damage and your burn items gain (10 » 20) Burn for the fight.'
  },
  {
    name: 'Warm Hugs',
    image: '/src/assets/skills/WarmHugs.avif',
    pools: ['Dooley', 'Vanessa'],
    rarity: 'gold+',
    description: 'When you use a Friend, Burn (2 » 3).'
  },
  {
    name: 'Waters of Infinity',
    image: '/src/assets/skills/WatersOfInfinity.avif',
    pools: ['Common'],
    rarity: 'silver+',
    description: 'You have (+8 » +12 » +16) Regeneration.'
  },
  {
    name: 'Well-Oiled Machine',
    image: '/src/assets/skills/WellOiledMachine.avif',
    pools: ['Dooley'],
    rarity: 'diamond+',
    description: 'When you use The Core, reduce an item\'s cooldown by 5% for the fight.'
  },
  {
    name: 'Workin\' Hard',
    image: '/src/assets/skills/WorkinHard.avif',
    pools: ['Dooley', 'Jules', 'Stelle'],
    rarity: 'gold+',
    description: 'Your weapons have +7 Damage for each Tool you have. [0]'
  }
];

export default skills; 