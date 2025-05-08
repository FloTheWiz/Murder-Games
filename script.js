//script by leo
var userData = { chars: [] }
//first: hd, second: picked off chips, third: free agent
var messageData = `  - High-definition cookies - it/its - [Charismatic, Leader, Pixelate, Has Fought] - [Panacea Pellet, Panacea Pellet, Vanilla Ice Cream] - ^High-definition_cookie.png
  - FantasTies - he/him - [Devious, Vigilant, Lunatic] - [Handgun, Kevlar Vest, Tourniquet] - 1.jpg
  - Kruta - he/him - [Bulky, Artist, Nerd] - [Riot Shield, Pet Rock, Sword] - 2.png
  - someguy - he/him - [The Gift, Glasses, Nerd] - [Wish Ring, Pet Hawk, Shotgun] - 3.jpg
  - Pigma Jonas - he/him - [Devious, Charismatic, Hypersomniac] - [Flamethrower, Pet Tiger, Cookie Dough] - 4.jpeg
  - Kleut - he/him - [Annoying, Marksmen, Analytical] - [Bow, Kevlar Vest, Dapper Suit] - 5.png
  - Jane, God of War - they/them - [Devious, Lunatic, Unstable] - [Knight Armor, Riot Shield, Big Stick] - 6.png
  - Remix man - he/him - [Rich, Artist, Inventor] - [Gun Parts, Pet Hawk, Scrap Metal] - 7.png
  - Fork - he/him - [Goth, Leader, Charismatic] - [Roll of Fabric, Dapper Suit, Sword] - 8.jpg
  - Third Coming - he/him - [Devious, Nerd, Artist] - [Shotgun, Batch of Cookies, Riot Shield] - 9.png
  - Nimsi - he/him - [Lunatic, Ninja, The Gift] - [Flamethrower, Pet Rock, Vanilla Ice Cream] - 10.png
  - Rhubarb - he/him - [Cute, Scrappy, Inventor] - [Random Item Orb, Gun Parts, Slingshot] - 11.png
  - helloperson. - he/him - [Peaceful, Peaceful, Peaceful] - [Wish Ring, Wish Ring, Wish Ring] - 12.png
  - B0B_Mc_B0b - he/him - [Glasses, Analytical, Vigilant] - [Wish Ring, Slingshot, Medicine] - 13.jpg
  - Captain Sable - she/her - [Scrappy, Inventor, Survivalist] - [Leather Scraps, Roll of Fabric, Scrap Metal] - 14.jpeg
  - sage - he/him - [Kind, Analytical, Inventor] - [Batch of Cookies, Scrap Metal, Axe] - 15.jpeg
  - Step - he/him - [Meek, Glasses, Nerd] - [Wish Ring, Angel in a Bottle, Panacea Pellet] - 16.png
  - Limes - he/him - [Cowardly, Ninja, Medic] - [Wizard Robe, Random Item Orb, Pet Turtle] - 17.jpg
  - trufflz - he/him - [Devious, Seductive, Charismatic] - [AED, Shotgun, Pet Rock] - 18.png
  - fish_bleue - he/him - [Nerd, Rich, Seductive] - [High-pressure Garden Hose, Panacea Pellet, Kevlar Vest] - 19.jpg
  - Babies with rusty nails - they/them - [Bulky, Seductive, Leader] - [Roll of Fabric, First Aid Kit, Medicine] - 55.jpg
===
  - A chocolate chip cookie but with the chips picked off for some reason - it/its - [Charismatic, Leader, Disassemble, Has Fought] - [Panacea Pellet, Panacea pellet, Vanilla Ice Cream] - ^A_chocolate_chip_cookie_but_with_the_chips_picked_off_for_some_reason.png
  - Flo - they/them - [Leader, Sociopath, Seductive] - [Wizard Robe, Magic Wand, Bikini] - 20.png
  - fishe - he/him - [] - [] - 21.png
  - UsagiK - he/him - [Cute, Artist, Lunatic] - [Flamethrower, Pet Tiger, Cookie Dough] - 22.jpg
  - Dire - he/him - [Haste, Ninja, Nerd] - [Shuriken, High-pressure Garden Hose, Knight Armor] - 23.jpg
  - Fififoop - she/her - [Seductive, Pyromania, Sociopath] - [Respawn Anchor, Flamethrower, Roll of Fabric] - 24.webp
  - Quick50 - he/him - [Inventor, Scrappy, Rich] - [Big Stick, Roll of Fabric, Magic dust] - 25.jpeg
  - Tempest - it/its - [Lunatic, Pyromania, Unstable] - [Combat Gear, Flamethrower, Scrap Metal] - 26.png
  - Spoofyguy - he/him - [Nerd, Pyromania, Naive] - [Wish Ring, Magic Wand, Angel in a Bottle] - 27.jpg
  - yeetdragon24 - he/him - [Peaceful, Peaceful, Peaceful] - [Wish Ring, Wish Ring, Respawn Anchor] - 28.png
  - Vivibug - she/her - [Lunatic, Suicidal, Cute] - [Cursed Knife, Wish Ring, Angel in a Bottle] - 29.jpg
  - hiiamataco - he/him - [Marksmen, Haste, Lunatic] - [Random Item Orb, Bow, Roll of Fabric] - 30.png
  - MrP - he/him - [Lunatic, Artist, Analytical] - [Angel in a Bottle, Gun Parts, Freezing Sapphire] - 31.png
  - Samyli - he/him - [Ninja, Survivalist, Lunatic] - [Pet Turtle, Sword, Cookie Dough] - 32.png
  - mr. tribute - he/him - [Naive, Clumsy, Nerd] - [] - 33.jpg
  - Budep - he/him - [Annoying, Pyromania, The Gift] - [Pet Rock, Wish Ring, Flamethrower] - 34.png
  - Kreepyro - he/him - [Pyromania, Sociopath, Inventor] - [Scrap Metal, Gun Parts, Flamethrower] - 35.png
  - omar uvu - he/him - [Devious, Seductive, Rich] - [Shotgun, Medicine, Kite Shield] - 36.png
  - Key - he/him - [Nerd, Haste, Leader] - [Wish Ring, Flamethrower, Leather Scraps] - 37.png
  - Rice - he/him - [Marksmen, Survivalist, Lunatic] - [Bow, Random Item Orb, Pet Rock] - 38.png
  - Greg - he/him - [Suicidal, Sociopath] - [Shotgun] - 39.png
  - Telko - they/them - [Lunatic, Artist, Cute] - [Axe, Roll of Fabric, First Aid Kit] - 56.png
===
  - Banarnar - he/him - [Inventor, Scrappy, Cute] - [Random Item Orb, Gun Parts, Slingshot] - 40.jpg
  - 10 shiny wrinklers - they/them - [Bulky, Rich, Cute] - [Cookie Dough, Handgun, Kevlar Vest] - 41.png
  - CursedSliver - they/them - [Inventor, Hypersomniac, Clumsy] - [Mint Essence, Topaz with a Hole, AED] - 42.png
  - Shorooli - he/him - [Seductive, Ninja, Vigilant] - [Pet Hawk, Sword, Roll of Fabric] - 43.png
  - Frax - it/its - [Lunatic, Animal Ken, The Gift] - [Pet Turtle, Magic Wand] - 44.png
  - Loading - it/its - [Leader, Analytical, Ninja] - [Freezing Sapphire, Combat Gear, Leather Scraps] - 45.png
  - Trop - he/him - [Suicidal, Lunatic, Marksmen] - [Combat Gear, Shotgun, Scrap Metal] - 46.jpeg
  - shk - she/her - [Cute, Medic, Charismatic] - [Pet Rock, Tourniquet, Axe] - 47.jpg
  - mcm - he/him - [Nerd, Cute, The Gift] - [Magic Wand, Wish Ring, Pet Rock] - 48.jpeg
  - Jamie - he/him - [Pyromania, Unstable, Scrappy] - [Pet Rock, Vanilla Ice Cream, Flamethrower] - 49.png
  - Cynthia - she/her - [Devious, Lunatic, Charismatic] - [Pet Hawk, Bow, Mint Essence] - 50.png
  - magma cube(s) - they/them - [Pyromania, Sociopath, Analytical] - [Flamethrower, First Aid Kit, Leather Scraps] - 51.png
  - Nyan Cat - they/them - [Clumsy, Kind, Analytical] - [Magic wand, Wish Ring, Magic Dust] - 52.png
  - cookiemains - he/him - [Annoying, Naive, Lunatic] - [Respawn Anchor, Panacea Pellet, Lucky Coin] - 53.png
  - fry - he/him - [Cute, Devious, Charismatic] - [Magic dust, Wish Ring, Leather Scraps] - 54.png
  - Charlie - he/him - [Haste, Analytical, Nerd] - [Magic Wand, Wizard Robe, Magic Dust] - 57.png
  - Orteil - he/him - [Plot Armor, Lunatic, Unstable, Stubborn, Inventor, Nerd] - [] - ^orteil.png
  - Opti - he/him - [Plot Armor, Survivalist, Scrappy, Stubborn, Peaceful, Nerd] - [] - ^opti.webp
  - Cookie Clicker - it/its - [] - [A Really Good Guidebook, Cookie Dough, Batch of Cookies, Mint Essence, Hot Chocolate, Panacea Pellet] - ^CookieClicker.png
  - Grandma - she/her - [] - [Pet Lobster, Leather Scraps, Scrap Metal, Roll of Fabric, Gun Parts, Magic Dust] - ^GrandmaPic.png`
userData.teams = [
    { name: "NOTEAM" }, 
    { name: "High-definition cookies", color: '#000', icon: 'dashnetGames/High-definition_cookie.png' }, 
    { name: "A chocolate chip cookie but with the chips picked off for some reason", color: '#fff', icon: 'dashnetGames/A_chocolate_chip_cookie_but_with_the_chips_picked_off_for_some_reason.png' }
]
var genderMatch = {
    'he/him': 0,
    'she/her': 1,
    'they/them': 2,
    'it/its': 3
};
var synonymConvert = {
    'high-pressure garden hose': 'high pressure garden hose',
    'random item orb': 'random orb',
    'aed': 'AED'
};
var t1 = 0
var t2 = 0
var altCount = 0
var priorityTeam = Math.random() < 0.5 ? 0 : 1
messageData.split("\n===\n").forEach((str, category) => {
    str.split("\n").forEach(text => {
        let teamTo = category;
        if (teamTo === 2) {
            teamTo = (t1 < t2 ? 0 : (t1 === t2 ? priorityTeam : 1));
        }
        if (teamTo === 0) {
            t1++
        } else if (teamTo === 1) {
            t2++
        }
        var split = text.split(' - ').slice(1);
        userData.chars.push({ 
            name: split[0], 
            g: genderMatch[split[1]], 
            t: 0, 
            team: ["High-definition cookies", "A chocolate chip cookie but with the chips picked off for some reason", "NOTEAM"][teamTo], 
            pic: (split[4][0] == '^')?('dashnetGames/' + split[4].slice(1)):('dashnetGames/tributes/' + split[4]),
            perks: (split[2]!='[]'?split[2].toLowerCase().replace("[", "").replace("]", "").split(", "):[]).concat((split[3]!='[]'?split[3].toLowerCase().replace("[", "").replace("]", "").split(", "):[])) 
        })
        for (let i in userData.chars[userData.chars.length - 1].perks) {
            if (synonymConvert[userData.chars[userData.chars.length - 1].perks[i]]) {
                userData.chars[userData.chars.length - 1].perks[i] = synonymConvert[userData.chars[userData.chars.length - 1].perks[i]]
            }
        }
    })
})
console.log(userData);
window.userDataJSON = JSON.stringify(userData);
/*G.importSetup(JSON.stringify(userData))
G.start()
setTimeout(() => {
    var interval = setInterval(() => G.nextRound(), 250)
    if (window.interval) clearInterval(interval)
}, 1000)*/

//misc
function countUniques(str) { let c = 0; let h = ''; for (let i in str) { if (!h.includes(str[i])) { h += str[i]; c++; } } return c; }
function countUniqueLetters(str) { let c = 0; let h = ''; const a = 'qwertyuiopasdfghjklzxcvbnm'; for (let i in str) { if (!h.includes(str[i]) && a.includes(str[i])) { h += str[i]; c++; } } return c; }