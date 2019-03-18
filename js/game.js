// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "campus.jpg",
    levels: {

        start: {
            message: "You attend your dream college and you're set to be a lawyer when your brother comes and tells you that your father has gone missingand he wants you to help you find him.",
            choices: [
                {
                    text: "Go with your brother",
                    nextLevel: "leave",
                },

                {
                    text: "Ignore him and continue college",
                    nextLevel: "college",
                },
            ]
        },

        leave: {
            background_image: "impala.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You travel and come across what you think might be a demon terrorizing a town",
            choices: [
                {
                    text: "storm in and fight",
                    nextLevel: "brawn",
                },

                {
                    text: "Stop and attempt to gather more information",
                    nextLevel: "brains",
                },
            ]
        },


        college: {
            background_image:"campus.jpg",
            message: "You throw your brother out and stay in school until you graduate, eventually he comes back",
 choices: [
                {
                    text: "Go with your brother",
                    nextLevel: "leave",
                },

                {
                    text: "Tell him to leave and pursue your law career",
                    nextLevel: "Life",
                },
            ]
        },


     
 brains: {
            background_image:"libary.jpg",
            message: "You do research at the Library and discover that it's a Woman in White",
 choices: [
                {
                    text: "Go get salt and get attack",
                    nextLevel: "attack",
                },

                {
                    text: "Create a plan that might succeed.",
                    nextLevel: "plan",
                },
            ]
        },
        
         brawn: {
            background_image:"wiw.jpeg",
            message: "The demon fights you and you almost don't make it out alive.",
 choices: [
                {
                    text: "Go prepare a plan",
                    nextLevel: "brains",
                },

                {
                    text: "Leave",
                    nextLevel: "coward",
                },
            ]
        },
         Life: {
            background_image:"bad.jpg",
            message: "You get married to your college sweetheart and have two kids. She is eventually killed by a demon that you should have hunted with your brother.Allow me to play you the worlds saddest song on the worlds smallest violin",

            
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
};
