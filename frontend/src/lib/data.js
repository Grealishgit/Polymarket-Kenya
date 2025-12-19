import { HiMiniArrowTrendingUp } from "react-icons/hi2";

export const mainLinks = [
    { name: 'Trending', path: '/trending', icon: HiMiniArrowTrendingUp },
    { name: 'Breaking', path: '/breaking', icon: '' },
    { name: 'New', path: '/new', icon: '' },
]

export const navLinks = [

    { name: 'Politics', path: '/' },
    { name: 'Sports', path: '/' },
    { name: 'Finance', path: '/' },
    { name: 'Crypto', path: '/' },
    { name: 'Geopolitics', path: '/' },
    { name: 'Earnings', path: '/' },
    { name: 'Tech', path: '/' },
    { name: 'Culture', path: '/' },
    { name: 'World', path: '/' },
    { name: 'Economy', path: '/' },
    { name: 'Elections', path: '/' },
    { name: 'Mentions', path: '/' },
    { name: 'More', path: '/' },
]


export const trendingLinks = [
    { name: 'All', path: '/' },
    { name: 'Trump', path: '/' },
    { name: 'Epstein', path: '/' },
    { name: 'Venezuela', path: '/' },
    { name: 'Paul vs. Joshua', path: '/' },
    { name: 'Fed', path: '/' },
    { name: 'Ukrain', path: '/' },
    { name: 'SpaceX', path: '/' },
    { name: 'Warner Bros', path: '/' },
    { name: 'Lighter', path: '/' },
    { name: 'Best of 2025', path: '/' },
    { name: 'Equities', path: '/' },
    { name: 'Weather', path: '/' },
    { name: 'Derivatives', path: '/' },
    { name: 'Primaries', path: '/' },
    { name: 'Midterms', path: '/' },
    { name: 'Honduras Election', path: '/' },
    { name: 'Movies', path: '/' },
    { name: 'China', path: '/' },
    { name: 'Global Elections', path: '/' },
    { name: 'Gaza', path: '/' },
    { name: 'Parlays', path: '/' },
    { name: 'Earnings', path: '/' },
    { name: 'Israel', path: '/' },
    { name: 'AI', path: '/' },
    { name: 'Earn 4%', path: '/' },
    { name: 'US Election', path: '/' },
    { name: 'Crypto Prices', path: '/' },
    { name: 'Bitcoin', path: '/' },
]

export const trendingInputs = [
    { name: 'tiktok', path: '/' },
    { name: 'brown university', path: '/' },
    { name: 'jake paul', path: '/' },
    { name: 'mvp', path: '/' },
    { name: 'epstein', path: '/' },
]

export const trendingData = [
    {
        id: 1,
        title: 'Will Trump release Epstein files by...?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-trump-release-epstein-files-by-1D_iBMrzbQj2.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$16m Vol.',
        options: [
            {
                date: 'December 19',
                percentage: 89,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                date: 'December 20',
                percentage: 92,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 2,
        title: 'Who will Trump nominate as Fed Chair?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwho-will-trump-nominate-as-fed-chair-9p19ttRwsbKL.png&w=96&q=75',
        category: 'Politics',
        volume: '$72m Vol.',
        options: [
            {
                name: 'Kevin Hassett',
                percentage: 55,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                name: 'Kevin Warsh',
                percentage: 20,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 3,
        title: 'How many Gold Cards will Trump sell in 2025?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fhow-many-gold-cards-will-trump-sell-in-2025-UlOBdrjUX5Go.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$8m Vol.',
        author: 'David Friedberg',
        frequency: 'Monthly',
        options: [
            {
                range: '101-1k',
                percentage: 4,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                range: '1k-2.5k',
                percentage: 8,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 4,
        title: 'Will Bitcoin reach $150k by December 31?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwhat-will-trump-say-at-national-defense-authorization-act-signing-on-december-18-QByhHuUSSwrs.jpg&w=96&q=75',
        category: 'Crypto',
        volume: '$45m Vol.',
        options: [
            {
                date: 'December 20',
                percentage: 67,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                date: 'December 31',
                percentage: 78,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 5,
        title: 'Will Ukraine reclaim territory by...?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-trump-and-putin-meet-next-in-another-country-754-536-882-631-152-Sivx1Fw9C2UJ.jpg&w=96&q=75',
        category: 'Geopolitics',
        volume: '$23m Vol.',
        options: [
            {
                date: 'December 19',
                percentage: 34,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                date: 'December 20',
                percentage: 41,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                date: 'December 31',
                percentage: 52,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 6,
        title: 'Will SpaceX launch Starship successfully?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-trump-remove-jerome-powell-njJA1TCPwhmt.jpg&w=96&q=75',
        category: 'Tech',
        volume: '$12m Vol.',
        author: 'Elon Musk',
        options: [
            {
                date: 'December 20',
                percentage: 85,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                date: 'December 31',
                percentage: 93,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 7,
        title: 'Ukraine Tomahawk missile strike by December 31?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fnothing-ever-happens-world-leader-out-edition-3t_x9n_2vnR7.jpg&w=96&q=75',
        category: 'Geopolitics',
        volume: '$338k Vol.',
        chance: '<1%',
        type: 'simple'
    },
    {
        id: 8,
        title: 'Will Trump remove his Rob Reiner post?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-trump-remove-jerome-powell-njJA1TCPwhmt.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$133k Vol.',
        chance: '1%',
        type: 'simple'
    },
    {
        id: 9,
        title: 'Ukraine agrees not to join NATO in 2025?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-xi-visit-the-us-by-december-31-aW19ohLq1WIS.jpg&w=96&q=75',
        category: 'Geopolitics',
        volume: '$1m Vol.',
        frequency: 'Annual',
        chance: '5%',
        type: 'simple'
    },
    {
        id: 10,
        title: 'Will Trump acquire Greenland in 2025?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-trump-be-impeached-in-2025-bm5xwPQil7AC.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$5m Vol.',
        chance: '1%',
        type: 'simple'
    },
    {
        id: 11,
        title: 'Trump approval rating on December 19?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwill-the-court-force-trump-to-refund-tariffs-2h3USn8WqtbE.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$89k Vol.',
        frequency: 'Weekly',
        chance: null,
        type: 'range',
        options: [
            {
                range: '<42.0',
                percentage: '<1%',
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                range: '42.0-42.4',
                percentage: '5%',
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    },
    {
        id: 12,
        title: 'Who will Trump talk to in December?',
        image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fwhich-countries-will-donald-trump-visit-in-2025-MFgaFiz7YhFu.jpg&w=96&q=75',
        category: 'Politics',
        volume: '$754k Vol.',
        frequency: 'Monthly',
        options: [
            {
                name: 'Elon Musk',
                percentage: 30,
                yesVotes: 'Yes',
                noVotes: 'No'
            },
            {
                name: 'Vladimir Putin',
                percentage: 27,
                yesVotes: 'Yes',
                noVotes: 'No'
            }
        ]
    }
]