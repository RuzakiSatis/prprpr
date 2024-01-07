import PropTypes from 'prop-types';

export const posts = [
    {
        id: 1,
        img: '/images/Stray.jpg',
        Game: "Stray",
        aboutGame: "Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures."
    },
    {
        id: 2,
        img: '/images/cyberpunk 2077.jpg',
        Game: "Cyberpunk 2077",
        aboutGame: 'This acclaimed spy-thriller expansion to Cyberpunk 2077 takes V into the walled-off district of Dogtown and the dangerous world of spies. Become a secret agent and experience a pulsating story filled with twists, turns, and fate-defining choices; power up with the exclusive Relic skill tree, take on dynamic open-world missions, thrilling new gigs, and more!'
    },
    {
        id: 3,
        img: '/images/The Ascent.jpg',
        Game: "The Ascent",
        aboutGame: '"The Ascent" is a cyberpunk-themed action role-playing game (ARPG) developed by Neon Giant and published by Curve Digital. Released in 2021, the game is set in a dystopian, futuristic world called Veles, where players control a customizable character navigating through a vast, vertical city filled with various factions and corporate interests. '
    },
    {
        id: 4,
        img: '/images/Ghostrunner.jpg',
        Game: "Ghostrunner",
        aboutGame: 'The storyline revolves around the player\'s mission to climb the megastructure Dharma Tower, ruled by a tyrannical Keymaster, to confront a powerful antagonist and unravel the mysteries of the dystopian world. The protagonist can run on walls, perform acrobatic maneuvers, and eliminate enemies swiftly using a high-frequency katana.'
    },
    {
        id: 5,
        img: '/images/Citizen Sleeper.jpg',
        Game: "Citizen Sleeper",
        aboutGame: 'Drawing inspiration from tabletop RPGs, Citizen Sleeper delivers a player-created experience where you choose your own path and your decisions shape the rich game world. In each cycle, you roll the dice again and decide how to use the time given to you. You can make or break alliances, discover the truth and escape from those who want to get you.'
    },
    {
        id: 6,
        img: '/images/Blade Runner.jpg',
        Game: "Blade Runner",
        aboutGame: 'Is a point-and-click adventure game that is played from a third-person perspective. In this game, players navigate, explore, and manipulate the game world using the mouse. The point-and-click genre typically involves players interacting with the environment by clicking on objects, characters, or specific points on the screen to perform actions, solve puzzles, and advance the narrative. '
    },
    {
        id: 7,
        img: '/images/Cloudpunk.jpg',
        Game: "Cloudpunk",
        aboutGame: 'Cloudpunk is a neon-noir story in a rain-drenched cyberpunk metropolis. It\'s your first night on the job working for the Cloudpunk delivery service. Two rules: Don\'t miss a delivery and don\'t ask what\'s in the package. On March 31, 2021, ION LANDS announced the first DLC for Cloudpunk, known as City Of Ghosts.'
    },
    {
        id: 8,
        img: '/images/Deus Ex.jpg',
        Game: "Deus Ex",
        aboutGame: 'Deus Ex is one of the most influential games of its generation. Player freedom is at the heart of the gameplay and story of Deus Ex, where you play as JC Denton, a nano-augmented agent of the United Nations Anti-Terrorist Coalition. As you untangle the threads of a conspiracy orchestrated by mysterious groups vying for world domination, you’ll make choices that will ultimately define humanity’s future.'
    },
    {
        id: 9, 
        img: '/images/Satellite Reign.jpg',
        Game: "Satellite Reign",
        aboutGame: '"Satellite Reign" is a real-time strategy game set in a cyberpunk-themed world. The gameplay emphasizes strategic planning, stealth, and a variety of approaches to complete objectives. Players can use advanced technology, augmentations, and different agent skills to navigate the city, avoid security measures, and engage in combat when necessary.'
    },
    {
        id: 10,
        img: '/images/System Shock.jpg',
        Game: "System Shock",
        aboutGame: '"System Shock" is a classic first-person action-adventure game with pronounced cyberpunk and horror themes.  As the player explores the station, battles mutants and robots, and solves puzzles, the game is known for its atmospheric tension, nonlinear gameplay, and the influence it had on later games in the first-person shooter and immersive sim genres.'
    },
    {
        id: 11,
        img: '/images/Ruiner.jpg',
        Game: "Ruiner",
        aboutGame: '"Ruiner" is a cyberpunk top-down action shooter developed by Reikon Games and published by Devolver Digital. Released in 2017, the game is set in the dystopian metropolis of Rengkok, where players take on the role of a helmeted hero on a quest to rescue their kidnapped brother from a mysterious and powerful adversary.'
    },
    {
        id: 12,
        img: '/images/signslis.jpg',
        Game: "Signslis",
        aboutGame: 'Like System Shock, Signalis is another horror game that takes place in a dystopian future. The main character, Elster, wakes up from cryostasis in a world that she doesn\'t understand. She must look for her partner and the cause of what has happened in this brand-new world that a corrupt government owns.'
    }
]

posts.propTypes = {
    img: PropTypes.string.img,
    numberFollowers: PropTypes.number.numberFollowers,
};

