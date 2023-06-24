export type ProjectType = {
    id: string;
    type: string,
    name: string;
    description: string;
    longDescription: string;
    image: string;
    stack: string[];
    hostedLink: string;
    githubLink: string;
    features: string[];
    gallery: string[]
}

export const projectList: ProjectType[] = [
    {
        id: "blendmart", 
        type: "app",
        name: "BlendMart",
        description: "An E-Commerce Application.",
        longDescription: "BlendMart is an online store where you can browse, shop, and buy products with ease.",
        image: "/assets/blendmart/home.png",
        hostedLink: "https://blendmart.netlify.app",
        githubLink: "https://github.com/SauravKumar-max/eCommerce-app",
        stack: ["ReactJS", "Typescript", "Material UI", "React Router", "NodeJS", "ExpressJS", "MongoDB", "JWT"],
        features: [
            "Browse and explore a wide range of products.", 
            "Efficiently sort, filter, and search for specific products based on various criteria.",
            "Create a personalized wishlist to save desired products for future reference.",
            "Add products to cart for convenient purchase.",
            "Secure integration with Stripe payment gateway for seamless transactions.",
            "JWT authentication for enhanced security and user authentication.",
            "Mobile-friendly design with responsive layout to ensure optimal user experience across different devices."
        ],
        gallery: [
            "/assets/blendmart/home.png", 
            "/assets/blendmart/products.png", 
            "/assets/blendmart/cart.png",
            "/assets/blendmart/wishlist.png",
            "/assets/blendmart/address.png",
            "/assets/blendmart/addaddress.png",
            "/assets/blendmart/payment.png",
            "/assets/blendmart/login.png",
            "/assets/blendmart/signup.png"
        ]
    },
    {
        id: "blendmedia",
        type: "app",
        name: "BlendMedia",
        description: "A Social Media Application.",
        longDescription: "BlendMedia is a social media app created for developers to connect and collaborate with each other, building a lively community for interaction.",
        image: "/assets/blendmedia/home.png",
        hostedLink: "https://blendmedia.netlify.app",
        githubLink: "https://github.com/SauravKumar-max/social-media-app",
        stack: ["ReactJS", "CSS", "Typescript", "React Router", "Apollo Client", "NodeJS", "ExpressJS", "MongoDB", "GraphQL", "JWT"],
        features: [
            "Personalized feed that provides relevant content based on user connections.", 
            "Ability to create posts with both text and images for engaging content creation.",
            "Interactions with posts including liking, commenting, bookmarking, and sharing options.",
            "User search functionality to discover and connect with other users.",
            "Access to a curated list of bookmarked posts.",
            "Ability to follow and unfollow other users to stay updated on their activities.",
            "Editable user profile for customization and personalization.",
            "Option to switch to a dark mode for improved readability in low-light environments.",
            "Implementation of JWT authentication for enhanced security and user authentication.",
            "Mobile-friendly design with responsive layout to ensure optimal user experience across different devices."
        ],
        gallery: [
            "/assets/blendmedia/home.png", 
            "/assets/blendmedia/addpost.png",
            "/assets/blendmedia/bookmark.png", 
            "/assets/blendmedia/search.png",
            "/assets/blendmedia/comment.png",
            "/assets/blendmedia/editprofile.png",
            "/assets/blendmedia/profile.png",
            "/assets/blendmedia/login.png",
            "/assets/blendmedia/signup.png"
        ]
    },
    {
        id: "quizzard", 
        type: "game",
        name: "Quizzard",
        description: "A Quiz Game Application.",
        longDescription: "Quizzard is a fun quiz game app that offers a variety of engaging quizzes for players to enjoy and to compete for the top spot.",
        image: "/assets/quizzard/home.png",
        hostedLink: "https://quizzard-v1.netlify.app",
        githubLink: "https://github.com/SauravKumar-max/Quiz-App-TS",
        stack: ["ReactJS", "Typescript", "Chakra UI", "React Router", "NodeJS", "ExpressJS", "MongoDB", "JWT"],
        features: [
            "Diverse collection of multiple quizzes covering various topics for an engaging and educational experience.", 
            "Instant checking of answers and scores after completing each quiz, allowing users to assess their performance.",
            "Track and save the latest scores for each quiz played.",
            "Leaderboard showcasing the top ten players based on their scores.",
            "Seamless and secure registration and authentication with Google Sign-Up using Google Cloud services.",
            "Option to switch to a dark mode for improved readability in low-light environments.",
            "Implementation of JWT authentication for secure user access.",
            "Mobile-friendly design with responsive layout to ensure optimal user experience across different devices."
        ],
        gallery: [
            "/assets/quizzard/home.png", 
            "/assets/quizzard/quiz.png",
            "/assets/quizzard/userscore.png", 
            "/assets/quizzard/scoreboard.png",
            "/assets/quizzard/userdetail.png",
            "/assets/quizzard/googlelogin.png",
        ]
    },
    {
        id: "blendchat", 
        type: "app",
        name: "BlendChat",
        description: "A Chat Application.",
        longDescription: "BlendChat is a chat app that lets users connect and have real-time conversations with others, creating smooth communication and meaningful connections.",
        image: "/assets/blendchat/home.png",
        hostedLink: "https://blendchat.netlify.app",
        githubLink: "https://github.com/SauravKumar-max/chat-app",
        stack: ["ReactJS", "Typescript", "Material UI", "React Router", "SocketIO", "NodeJS", "ExpressJS", "MongoDB", "JWT"],
        features: [
            "Real-time chat functionality for instant messaging between users.", 
            "Ability to create individual or group chats for personalized or collaborative conversations.",
            "Option to leave a group chat for user flexibility and control.",
            "User-level ability to delete individual chats, while only admins can delete group chats.",
            "Access to group information such as group name, group picture, and member list for easy reference.",
            "Display of profile picture, name, and bio of individual chat participants for better context.",
            "User-friendly interface for editing profile picture, name, and bio to customize personal information.",
            "Secure login using JWT authentication for user authentication and access control.",
            "Mobile-friendly design with responsive layout to ensure optimal user experience across different devices."
        ],
        gallery: [
            "/assets/blendchat/home.png", 
            "/assets/blendchat/chat.png",
            "/assets/blendchat/chatinfo.png", 
            "/assets/blendchat/deletechat.png",
            "/assets/blendchat/addchat.png",
            "/assets/blendchat/groupchat.png",
            "/assets/blendchat/userprofile.png",
            "/assets/blendchat/login.png",
            "/assets/blendchat/signup.png"
        ]
    },
    {
        id: "wordle", 
        type: "game",
        name: "Wordle",
        description: "A Word Game.",
        longDescription: "Wordle is a popular word game that challenges and exercises your brain as you try to guess the correct word.",
        image: "/assets/wordle/home.png",
        hostedLink: "https://moonshot-wordle.netlify.app/",
        githubLink: "https://github.com/SauravKumar-max/moonshot-wordle",
        stack: ["NextJS", "TailwindCSS", "React Toastify"],
        features: [
            "Random selection of a secret word for each round, ensuring a unique challenge.", 
            "Interactive user interface allowing players to guess the word by typing letter combinations manually or using an on-screen keyboard.",
            "Real-time feedback displayed to indicate correct letters in the correct positions (matching) and correct letters in incorrect positions (misplaced).",
            "Ability to reset the game, allowing players to start a new round or try a different word.",
            "Pop-up notifications to inform players whether they have won or lost the game after a certain number of guesses, enhancing the suspense and excitement of gameplay.",
            "Dark mode option for a visually appealing and comfortable gaming experience in low-light environments.",
            "Mobile responsiveness, ensuring the game is accessible and enjoyable across different devices."
        ],
        gallery: [
            "/assets/wordle/home.png", 
            "/assets/wordle/lostgame.png",
            "/assets/wordle/lost.png", 
            "/assets/wordle/wongame.png",
            "/assets/wordle/won.png",
            "/assets/wordle/dark.png"
        ]
    },
    
]