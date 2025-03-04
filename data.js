const story = [
    {
        text: "You are a man in the country of Gambia, on a quest to find a legendary artifact hidden deep in the jungle. Your journey begins at the edge of the dense forest.",
        choices: ["Enter the forest", "Ask locals for directions"],
        loseChoice: 1,
        loseMessage: "The locals warn you of the dangers ahead, but you ignore their advice and get lost in the jungle.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/3523353f-89f2-4574-b206-68e54fe54974/Leonardo_Anime_XL_a_boy_standing_infront_of_a_dark_scary_fores_0.jpg"
    },
    {
        text: "As you venture deeper into the forest, you encounter a mysterious old man who offers you a map to the artifact. However, he warns of dangerous creatures along the way.",
        choices: ["Accept the map", "Decline the map"],
        loseChoice: 1,
        loseMessage: "Without the map, you wander aimlessly and fall prey to the jungle's hazards.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/aec7c2c7-78c7-4f7c-a38f-36b978fb7e8f/Leonardo_Anime_XL_As_you_venture_deeper_into_the_forest_you_en_1.jpg"
    },
    {
        text: "Following the map, you come across a river infested with crocodiles. You must find a way to cross.",
        choices: ["Build a raft", "Look for a bridge"],
        loseChoice: 0,
        loseMessage: "Your raft is attacked by crocodiles, and you barely escape with your life.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/96e60711-a8be-4f58-9f1b-336f8e037ee3/Leonardo_Anime_XL_Following_the_map_you_come_across_a_river_in_1.jpg"
    },
    {
        text: "You successfully cross the river and continue your journey. Suddenly, you hear the roar of a lion nearby.",
        choices: ["Investigate the sound", "Quickly move away"],
        loseChoice: 0,
        loseMessage: "You encounter a hungry lion and become its next meal.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/9357d8cf-50b1-4025-bdea-1fd476717e0e/Leonardo_Anime_XL_You_successfully_cross_the_river_and_continu_2.jpg"
    },
    {
        text: "You find the legendary artifact hidden in an ancient temple. As you reach for it, the ground begins to shake, and the temple starts to collapse.",
        choices: ["Grab the artifact and run", "Leave the artifact and escape"],
        loseChoice: 1,
        loseMessage: "You escape the temple but lose the artifact forever.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/f32e465c-ef8d-4784-b5a2-23640f998dec/Leonardo_Anime_XL_You_find_the_legendary_artifact_hidden_in_an_3.jpg"
    },
    {
        text: "With the artifact in hand, you make your way back through the forest. You encounter a group of poachers who seem interested in your find.",
        choices: ["Confront the poachers", "Sneak past them"],
        loseChoice: 0,
        loseMessage: "The poachers overpower you and take the artifact.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/032db703-245d-4c58-88a9-a2764a31a4b6/Leonardo_Anime_XL_With_a_glowing_artifact_in_hand_you_make_you_1.jpg"
    },
    {
        text: "You manage to evade the poachers and continue your journey. Night falls, and you need to find a safe place to rest.",
        choices: ["Set up camp", "Keep moving"],
        loseChoice: 1,
        loseMessage: "Exhausted, you collapse and are found by hostile creatures.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/8c0bc10c-8e27-41da-8865-1be7361ef798/Leonardo_Anime_XL_You_manage_to_evade_the_poachers_and_continu_1.jpg"
    },
    {
        text: "Exhausted, you decide to set up camp for the night. As you sleep, you hear strange noises outside your tent.",
        choices: ["Investigate the noise", "Stay in the tent"],
        loseChoice: 0,
        loseMessage: "You are ambushed by a group of bandits and lose the artifact.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/86271034-1755-4d1a-8199-d9ba14a8e61c/Leonardo_Anime_XL_a_boy_in_a_tent_hears_strange_noises_outsid_0.jpg"
    },
    {
        text: "You wake up to find that the artifact has been stolen. You must track down the thief and retrieve it.",
        choices: ["Follow the thief's tracks", "Return to the village for help"],
        loseChoice: 1,
        loseMessage: "By the time you return with help, the thief is long gone.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/e5b946fc-e68c-436c-bebc-a711b186926c/Leonardo_Anime_XL_You_wake_up_in_the_forest_to_find_that_the_a_2.jpg"
    },
    {
        text: "Following the tracks, you discover the thief is a mischievous monkey. You chase it through the jungle until you corner it.",
        choices: ["Negotiate with the monkey", "Forcefully take the artifact"],
        loseChoice: 1,
        loseMessage: "The monkey calls for help, and you are surrounded by a troop of angry monkeys.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/153f5385-c001-4566-8ca2-fedcd0601668/Leonardo_Anime_XL_Following_the_tracks_you_discover_the_thief_2.jpg"
    },
    {
        text: "You successfully retrieve the artifact and return to your village. The elders are impressed with your bravery and grant you a special title.",
        choices: ["Accept the title", "Decline the title"],
        loseChoice: 1,
        loseMessage: "The villagers are disappointed, and you lose their respect.",
        image: "https://cdn.leonardo.ai/users/c1b62be6-2e2b-4698-ac3d-7661570593b0/generations/c84016b8-54ae-4544-9bc9-52fd28c97160/Leonardo_Anime_XL_a_village_of_african_people_celebrating_the_2.jpg"
    }
];
