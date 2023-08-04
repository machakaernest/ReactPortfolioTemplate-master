import po from "../img/po.png"
import ap from "../img/ap.png"
import Mac from "../img/Mac.png"
import Mac2 from "../img/Mac2.png"
import m3 from "../img/m3.png"
import m4 from "../img/m4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(231, 21, 99), rgb(86, 51, 1) "];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ernest",
    lastName: "Machaka",
    initials: "ME", // the example uses first and last, but feel free to use three or more if you like.
    position: "Future Programmer",
    selfPortrait: po, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fired by tea '
        },
        {
            emoji: '🌎',
            text: 'based in the RSA'
        },
        {
            emoji: "💼",
            text: "Programming sites"
        },
        {
            emoji: "📧",
            text: "machakanaernest@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "A language that doesn't affect the way you think about programming is not worth knowing",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github',  'htm', 'css', ],
            exposedTo: ['nodejs', 'python', ]
        }
    ,
    hobbies: [
        {
            label: 'poems',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'baking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Task 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: ap
        },
        {
            title: "Task 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: Mac
        },
        {
            title: "Task 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: Mac2
        },
        {
            title: "Task 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: m3
        },
        {
            title: "Task 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: m4
        }
    ]
}