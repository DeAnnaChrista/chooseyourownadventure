// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "forest.gif",
    levels: {

        start: {
            message: "It's 2019, and the scientists have predicted that the world will end by 2060. Your children may not live to be 21.",
            choices: [
                {
                    text: "I dont care",
                    nextLevel: "leave",
                },

                {
                    text: "I'll take better preventative measures",
                    nextLevel: "college",
                },
            ]
        },

        leave: {
            background_image: "forest.gif",
            music:  "98_Lost_Mine.mp3",
            message: "The oceans begin to rise due to glacial melt. Centuries old diseases and gases are released",
            choices: [
                {
                    text: "Continue current course of action",
                    nextLevel: "brawn",
                },

                {
                    text: "Stop and try to fight for your planet",
                    nextLevel: "brains",
                },
            ]
        },


        college: {
            background_image:"forest.gif",
            message: "You and friends start helping to convert others to our cause",
 choices: [
                {
                    text: "We need to fight for more",
                    nextLevel: "leave",
                },

                {
                    text: "We've done enough",
                    nextLevel: "Life",
                },
            ]
        },


     
 brains: {
            background_image:"forest.gif",
            message: "They begin to build barriers for major cities who sit on water  and fight the government",
 choices: [
                {
                    text: "I've done enough",
                    nextLevel: "brawn",
                },

                {
                    text: "We can do so much more",
                    nextLevel: "think",
                },
            ]
        },
        
         brawn: {
            background_image:"forest.gif",
            message: "50% of the human population dies, major cities are flooded and underwater.",
 choices: [
                {
                    text: "I'm not affected by it so whatever",
                    nextLevel: "coward",
                },

                {
                    text: "Start fighting for what little you have left",
                    nextLevel: "brains",
                },
            ]
        },
         Death: {
            background_image:"bad.jpg",
            message: "The planet dries out due to the amount of heat trapped by greenhouse gases. You and everyone you love are buirned alive. You could have prevented this ,but now the earth is close to rivaling Mars as a heat source.",

            
        },
          coward: {
            background_image:"forest.gif",
            message: "The earth eventually begins to get really hot all animals begin to die of heat stroke.",
 choices: [
                {
                    text: "We still have plants",
                    nextLevel: "Death",
                },

                {
                    text: "Start fighting ",
                    nextLevel: "think",
                },
            ]
        },
        
         think: {
            background_image:"forest.gif",
            message: "Working with enviornmentalists you develop a light filter and begin cloning what little animals you have left.",
 choices: [
                {
                    text: "Continue with science",
                    nextLevel: "Develop",
                },

                {
                    text: "Venture out ",
                    nextLevel: "Develop",
                },
            ]
        },
        
          Develop: {
            background_image:"forest.gif",
            message: "Congrats! You've saved earth , you rose to the occasion and earths occupants thank you.",

            
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
};
