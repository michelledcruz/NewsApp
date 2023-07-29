import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    data={
    articles : [
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Dakin Andone, Rebekah Riess, Melissa Alonso",
            "title": "Alabama death row inmate James Barber is executed following scrutiny over state’s lethal injection process - CNN",
            "description": "Alabama death row inmate James Barber was executed early Friday morning after the US Supreme Court denied his request for a stay, despite his claim that lethal injection could result in cruel and unusual punishment.",
            "url": "https://www.cnn.com/2023/07/20/us/alabama-james-barber-execution/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230718131831-james-barber.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-21T08:23:00Z",
            "content": "Alabama death row inmate James Barber was executed early Friday morning after the US Supreme Court denied his request for a stay, despite his claim that lethal injection could result in cruel and unu… [+3800 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Rob Picheta",
            "title": "Rishi Sunak suffers two election losses as British voters reject ailing Conservative government - CNN",
            "description": "Britain’s beleaguered Prime Minister Rishi Sunak suffered a damaging political blow on Friday as voters rejected his party in two parliamentary elections it could ordinarily have expected to win.",
            "url": "https://www.cnn.com/2023/07/20/uk/uk-byelections-rishi-sunak-boris-johnson-intl-gbr/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328073155-rishi-sunak-030823.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-21T07:30:00Z",
            "content": "Britains beleaguered Prime Minister Rishi Sunak suffered a damaging political blow on Friday as voters rejected his party in two parliamentary elections it could ordinarily have expected to win.The… [+3745 chars]"
            },
            {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": "HEATHER HOLLINGSWORTH",
            "title": "Attention turns to Mega Millions after California store sells winning Powerball ticket - The Associated Press",
            "description": "Lottery dreamers are setting their sights on the growing Mega Millions jackpot now that a ticket worth more than $1 billion finally has been sold for the Powerball lottery.",
            "url": "https://apnews.com/article/mega-millions-jackpot-drawing-7a684b6fc3c79470b5f43009bff6ef46",
            "urlToImage": "https://dims.apnews.com/dims4/default/87963ae/2147483647/strip/true/crop/8134x4575+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe9%2F2e%2Fcff248537152fc4130f3c73b8c41%2F50eebcba3fa142eaa7018c169b619beb",
            "publishedAt": "2023-07-21T05:59:00Z",
            "content": "Lottery dreamers are setting their sights on the growing Mega Millions jackpot drawing on Friday after a ticket worth more than $1 billion was sold for the Powerball lottery. Heres a look at how this… [+3090 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Mary Jo White's report provides blueprint for potential criminal prosecution of Daniel Snyder - NBC Sports",
            "description": "The end of Snyder's time in the NFL could spark the beginning of an entirely different adventure.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/mary-jo-whites-report-provides-blueprint-for-potential-criminal-prosecution-of-daniel-snyder",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/5d89dc2/2147483647/strip/true/crop/565x318+0+1/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Fbb%2F2d%2F97256797dbace85f35106737a52b%2Fgettyimages-623392262-e1671030179522.jpg",
            "publishedAt": "2023-07-21T05:01:04Z",
            "content": "For Daniel Snyder, theres a chance the end of his tenure as owner of the Commanders could be the beginning of an entirely different adventure. The long-awaited report from Mary Jo White, released mo… [+9619 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "EURACTIV"
            },
            "author": "Aleksandra Krzysztoszek",
            "title": "Poland's deployment of border troops concerns Russia - EURACTIV",
            "description": "",
            "url": "https://www.euractiv.com/section/politics/news/polands-deployment-of-border-troops-concerns-russia/",
            "urlToImage": "https://www.euractiv.com/wp-content/uploads/sites/2/2023/07/11418152-800x450.jpg",
            "publishedAt": "2023-07-21T04:38:22Z",
            "content": "Warsaws increasingly hostile attitude requires more attention to ensure the security of Russia and Belarus, Kremlin Spokesman Dmitry Peskov said after Poland decided to deploy its military troops on … [+2263 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Variety"
            },
            "author": "Elizabeth Wagmeister",
            "title": "Britney Spears and Will.i.am Drop New Song ‘Mind Your Business’ - Variety",
            "description": "Britney Spears is getting back to the music — again. The Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is t…",
            "url": "https://variety.com/2023/music/news/britney-spears-will-i-am-song-mind-your-business-1235673190/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/07/williamXbritney_MindYourBusiness_CVR_IMAGE.jpg?crop=0px%2C551px%2C3000px%2C1687px&resize=1000%2C563",
            "publishedAt": "2023-07-21T04:07:00Z",
            "content": "Britney Spears is getting back to the music — again. The Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is the second song to be rel… [+3177 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Walmart.com"
            },
            "author": null,
            "title": "Walmart Launches Walmart+ Assist: Half Price Memberships for Those on Government Assistance - Walmart Corporate",
            "description": "Helping people save money and live better is at the core of everything we do at Walmart, and Walmart+ is that mission supercharged. Since launching Walmart+ in 2020, we have worked hard to curate a membership offering that pairs benefits with savings, providi…",
            "url": "https://corporate.walmart.com/newsroom/2023/07/20/walmart-launches-walmart-assist-half-price-memberships-for-those-on-government-assistance",
            "urlToImage": "https://cdn.corporate.walmart.com/dims4/WMT/c373844/2147483647/strip/true/crop/3333x1750+0+63/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb3%2F21%2Ffaa991954aeaa5278a0308d16be1%2Fw-bag-of-groceries-on-the-counter.jpg",
            "publishedAt": "2023-07-21T04:02:20Z",
            "content": "Helping people save money and live better is at the core of everything we do at Walmart, and Walmart+ is that mission supercharged. Since launching Walmart+ in 2020, we have worked hard to curate a m… [+1991 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "TSMC: Chip giant delays Arizona production in blow to Biden - BBC",
            "description": "Taiwan-based TSMC says semiconductors manufacturing at its Arizona plant will no longer begin in 2024.",
            "url": "https://www.bbc.com/news/business-66264392",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/26E5/production/_130475990_gettyimages-1556474759.jpg",
            "publishedAt": "2023-07-21T03:38:43Z",
            "content": "Chipmaking giant Taiwan Semiconductor (TSMC) has delayed the start of production at its factory in the US state of Arizona, in a setback to President Biden's technology ambitions. The firm says chip… [+2218 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Katherine Donlevy",
            "title": "Hunter Biden spotted at Malibu hotspot Nobu as secret FBI file on Bidens unveiled - New York Post ",
            "description": "The scandal-riddled first son appeared unbothered leaving the swanky beachside spot that’s co-owned by Robert De Niro.",
            "url": "https://nypost.com/2023/07/20/hunter-biden-spotted-at-malibu-nobu-as-fbi-file-on-bidens-unveiled/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/Untitled-1-32.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-07-21T03:06:00Z",
            "content": "Hunter Biden was spotted Thursday enjoying a lavish lunch at Malibu hotspot Nobu as news swarmed of the newly unveiled bombshell FBI informant file describing a $10 million bribery allegation against… [+2701 chars]"
            },
            {
            "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Google developing AI tools to help journalists report the news - Al Jazeera English",
            "description": "Tech giant says AI-powered tool is not intended to replace ‘essential’ role journalists play in covering the news.",
            "url": "https://www.aljazeera.com/economy/2023/7/21/google-developing-ai-tools-to-help-journalists-report-the-news",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23201643159449-1689900879.jpg?resize=1920%2C1440",
            "publishedAt": "2023-07-21T02:14:56Z",
            "content": "Google is developing artificial intelligence-enabled tools to help journalists research and write news articles, a development that is likely to rattle nerves across the media industry after years of… [+2011 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "John Miller, Christina Maxouris",
            "title": "Investigators in Gilgo Beach case operating on theory that the killings occurred in suspect’s home - CNN",
            "description": "Since the spring of this year, investigators looking into the Gilgo Beach serial killings case have been operating on the theory that the suspect, Rex Heuermann, committed the killings in his Massapequa Park, New York, home.",
            "url": "https://www.cnn.com/2023/07/20/us/gilgo-beach-serial-killings-rex-heuermann-house/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230720142616-01-rex-heuermann-home-investigation-0719.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-21T02:07:00Z",
            "content": "Since the spring of this year, investigators looking into the Gilgo Beach serial killings case have been operating on the theory that the suspect, Rex Heuermann, committed the killings in his Massape… [+5843 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AZCentral"
            },
            "author": "Shaun McKinnon",
            "title": "This is how Phoenix is surviving its worst-ever heat wave - The Arizona Republic",
            "description": "America's hottest big city is in the middle of the worst-ever heat wave, but people continue to work and play, with a few extra precautions.",
            "url": "https://www.azcentral.com/story/news/local/arizona/2023/07/20/how-phoenix-is-surviving-its-worst-ever-heat-wave/70434655007/",
            "urlToImage": "https://www.azcentral.com/gcdn/authoring/authoring-images/2023/07/20/PPHX/70435861007-Morgan_Wallen_Fans20.JPG?crop=2999,1695,x0,y135&width=2999&height=1695&format=pjpg&auto=webp",
            "publishedAt": "2023-07-21T01:57:17Z",
            "content": "A little before 7 a.m. Wednesday, the official National Weather Service thermometer at Phoenix Sky Harbor International Airport registered 97 degrees, the lowest reading since the previous morning an… [+12833 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "David Propper",
            "title": "Harrowing moment explosion causes buses to go airborne, almost crush man in Johannesburg caught on video - New York Post ",
            "description": "Eyewitnesses recounted that some people were sitting in the minibus taxis, waiting to go home when the explosion tossed them in the air.",
            "url": "https://nypost.com/2023/07/20/explosion-causes-buses-to-go-airborne-almost-crush-man-in-johannesburg/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014391551.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-07-21T01:54:00Z",
            "content": "The moment a powerful blast sent a line of minibuses airborne and people on the streets of Johannesburg running for their lives was captured in shocking footage this week.The closed-circuit footage… [+2179 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Ben Morse",
            "title": "Canada headlines second day of Women’s World Cup action as Olympic champion faces Nigeria - CNN",
            "description": "The Women’s World Cup is finally here and the tournament’s second day of action holds plenty of intriguing storylines.",
            "url": "https://www.cnn.com/2023/07/20/football/womens-world-cup-canada-nigeria-switzerland-philippines-spain-costa-rica-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230719122720-04-wwc-2023-lookahead.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-21T01:26:00Z",
            "content": "The Womens World Cup is finally here and the tournaments second day of action holds plenty of intriguing storylines.Olympic champion Canada kicks off its campaign in the opening game of Fridays act… [+6989 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Bradford Betz",
            "title": "Indian police arrest 4 in rape of women who were paraded naked through street before assault - Fox News",
            "description": "Four men in India have been arrested for their alleged involvement in a mob who paraded women naked through a street before raping them.",
            "url": "https://www.foxnews.com/world/indian-police-arrest-4-rape-women-paraded-naked-street-assault",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/India-Ethnic-Clashes.jpg",
            "publishedAt": "2023-07-21T01:08:00Z",
            "content": "Indian authorities arrested four people Thursday in connection with two women who were paraded naked by a mob in the State of Manipur, India, and raped. Manipur police said four individuals had bee… [+3161 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Brian Costello",
            "title": "Jets defenders came ready to battle Aaron Rodgers in training camp - New York Post ",
            "description": "Observations from Jets training camp on Thursday.",
            "url": "https://nypost.com/2023/07/20/jets-training-camp-aaron-rodgers-testing-his-defense/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-g2dhq51xn-1689897168950.jpg?quality=75&strip=all&1689882828&w=1024",
            "publishedAt": "2023-07-21T00:31:00Z",
            "content": "Observations from Jets training camp on Thursday.Sight for sore eyes Aaron Rodgers was at quarterback and hope returned to the Jets to start training camp. It has been ages since the Jets entered … [+1502 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "More than one-third of U.S. under heat alerts - CBS News",
            "description": "More than 125 million Americans -- over one-third of the U.S. population -- are under heat alerts. NOAA warns large swathes of the country will experience po...",
            "url": "https://www.youtube.com/watch?v=GOrxPIx5mjE",
            "urlToImage": "https://i.ytimg.com/vi/GOrxPIx5mjE/maxresdefault.jpg",
            "publishedAt": "2023-07-21T00:27:11Z",
            "content": null
            },
            {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Steve Gardner, Cydney Henderson",
            "title": "British Open 2023: Round 2 tee times, TV, live stream for Friday - USA TODAY",
            "description": "Amateur Christo Lamprecht co-leads after the opening round of the British Open. Here are the tee times and viewing details for Friday's second round.",
            "url": "https://www.usatoday.com/story/sports/golf/2023/07/20/british-open-2023-round-2-tee-times-tv-live-stream/70424147007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/07/20/USAT/70437660007-Lamprecht0720.jpg?crop=5697,3219,x0,y0&width=3200&height=1809&format=pjpg&auto=webp",
            "publishedAt": "2023-07-21T00:08:27Z",
            "content": "South African amateur golfer Christo Lamprecht is tied for the lead at the British Open entering Friday's second round of play at Royal Liverpool in Hoylake, England. Lamprecht, a member of the Geor… [+6067 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fox Baltimore"
            },
            "author": "Sinéad Hawkins",
            "title": "West Nile virus detected in Anne Arundel County mosquitoes: Spraying scheduled in the area - Fox Baltimore",
            "description": "West Nile virus detected in Anne Arundel County mosquitoes: Spraying scheduled in the areaMosquitoes trapped in two parts of Anne Arundel Conty and a spraying i",
            "url": "https://foxbaltimore.com/news/local/west-nile-virus-detected-in-anne-arundel-county-mosquitoes-spraying-scheduled-in-the-area",
            "urlToImage": "https://foxbaltimore.com/resources/media/f74734a4-68bc-43e8-885d-cfd9b52b517c-large16x9_westnilevirus.jpg",
            "publishedAt": "2023-07-20T22:58:47Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "How El Nino is helping drive heatwaves and extreme weather? | WION Climate Tracker - WION",
            "description": "Countries around the world are battling intense heatwaves. And now, with the onset of El Nino, temperatures are reaching record levels. Scientists say climat...",
            "url": "https://www.youtube.com/watch?v=RuWSpJ9Stxo",
            "urlToImage": "https://i.ytimg.com/vi/RuWSpJ9Stxo/maxresdefault.jpg",
            "publishedAt": "2023-07-20T22:30:05Z",
            "content": null
            }
            ],
    country: [
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "news": null,
        "news": "BREAKING NEWS",
        "title": "Maharashtra Man Wins Rs 5 Crore While Gambling Online. Then Loses 58 Crore - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and BREAKING NEWS",
        "url": "https://www.ndtv.com/news",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-07-23T03:42:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": "Press Trust of India",
        "title": "Smriti Mandhana Fires Back At Reporter Questioning Harmanpreet Kaur's Criticism Of Umpires - NDTV Sports",
        "description": "Talking about Harmanpreet Kaur's actions being contrary to 'Spirit of Cricket', Smriti Mandhana said that will be a discussion for another day.",
        "url": "https://sports.ndtv.com/cricket/smriti-mandhana-fires-back-at-reporter-questioning-harmanpreet-kaurs-criticism-of-umpires-4232616",
        "urlToImage": "https://c.ndtvimg.com/2023-07/vvpgf1v_smriti-mandhana-pc_650x300_23_July_23.jpg",
        "publishedAt": "2023-07-23T03:14:09Z",
        "content": "Harmanpreet Kaur might have gone ballistic but Indian vice-captain Smriti Mandhana was way more tempered in her criticism of Bangladeshi umpires Muhammad Kamruzzaman and Tanvir Ahmed after the third … [+2325 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT ENTERTAINMENT Desk",
        "news": "ENTERTAINMENT",
        "title": "Oppenheimer BO day 2: Film mints ₹17 cr in India, takes earning to over ₹31 cr - Hindustan Times",
        "description": "Oppenheimer stars Cillian Murphy in the lead role. The film also features Emily Blunt, Matt Damon, Robert Downey Jr and Florence Pugh among others. | Hollywood",
        "url": "https://www.hindustantimes.com/ENTERTAINMENT/hollywood/oppenheimer-box-office-day-2-collection-christopher-nolan-film-cillian-murphy-emily-blunt-101690079383215.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/23/1600x900/Oppenheimer_1690080139011_1690080139247.jpg",
        "publishedAt": "2023-07-23T03:00:22Z",
        "content": "Oppenheimer, which released in theatres on Friday, continues to soar at the box office in India. Directed by Christopher Nolan, the film has minted 17 crore on the second day of its release. (Also Re… [+2278 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livemint"
        },
        "author": "Livemint",
        "news": "BREAKING NEWS",
        "title": "Manipur Violence: Two women gang-raped and murdered on day of viral video case | Mint - Mint",
        "description": "Two tribal women in Manipur were allegedly gang-raped and murdered, while a viral video of naked women being paraded by men has surfaced. Six arrests have been made.",
        "url": "https://www.livemint.com/news/india/manipur-violence-two-women-gang-raped-and-murdered-on-day-of-viral-video-case-11690076376811.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/23/600x338/Women-set-fire-to-the-house-of-one-of-the-men-accu_1690077640313_1690077653199.jpg",
        "publishedAt": "2023-07-23T02:02:38Z",
        "content": "Two tribal women were allegedly gang-raped and murdered in violence-hit Manipur on the same day a viral video of two naked women being paraded by dozen men in the northeast state has surfaced on soci… [+1779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Meet Mumbai man behind Rs 68000 crore group acquiring India's 1st private hill station for Rs 1814 crore - DNA India",
        "description": "In 2022, Ajay Harinath Singh had also joined the race to buy debt-ridden Anil Ambani firm Reliance Capital. His company will now revive Lavasa.",
        "url": "https://www.dnaindia.com/business/report-mumbai-man-ajay-harinath-singh-rs-68000-crore-darwin-empire-india-1st-private-hill-station-1814-crore-lavasa-3052984",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/07/23/2600457-ajay-lavasa-1.jpg",
        "publishedAt": "2023-07-23T01:59:00Z",
        "content": "In 2022, Ajay Harinath Singh had also joined the race to buy debt-ridden Anil Ambani firm Reliance Capital. His company will now revive Lavasa.Ajay Harinath Singh’s company Darwin Platform Infrastruc… [+2113 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "news": "SPOTLIGHT",
        "title": "Quordle 545 answers for July 23: Get all green boxes! Check Quordle hints, clues, solutions - HT Tech",
        "description": "Quordle 545 answer for July 23: You are going to have to work hard for a win today and we recommend you take the help of Quordle hints, clues and solutions to ensure victory.",
        "url": "https://tech.hindustantimes.com/how-to/quordle-545-answers-for-july-23-get-all-green-boxes-check-quordle-hints-clues-solutions-71690073910287.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/23/1600x900/quordle_1654498442093_1690074080103.webp",
        "publishedAt": "2023-07-23T01:03:33Z",
        "content": "Quordle 545 answers for July 23: The last thing any player wants on a Sunday morning is to deal with a tricky puzzle. Sunday is the weekend and a time when people finally relax from the stress of the… [+1730 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "Aniruddha Dhar",
        "news": "BREAKING NEWS",
        "title": "'Red' alert in Gujarat's Junagadh after heavy rain; Mumbai showers to continue - Hindustan Times",
        "description": "Heavy to very heavy rain pounded several Gujarat districts and Saurashtra regions, triggering a flood-like situation in urban areas and isolating villages. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/mumbai-rain-updates-gujarat-junagadh-rain-flood-heavy-rain-raigad-landslide-maharashtra-downpour-traffic-advisory-mumbai-101690071235307.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/23/1600x900/PTI07-22-2023-RPT290A-1_1690073832024_1690073860254.jpg",
        "publishedAt": "2023-07-23T01:01:40Z",
        "content": "After witnessing incessant rainfall on Saturday, Mumbai is likely to get some respite from the heavy showers as the India Meteorological Department (IMD) has downgraded the Maharashtra capital's oran… [+3364 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Rica Bhattacharyya",
        "title": "India Inc makes a gig shift in hiring - Economic Times",
        "description": "The number of freelance projects on gig platform Flexing It rose 25% in the January-June period from a year earlier. The data was shared exclusively by Flexing It with ET. A separate survey done exclusively for ET by executive search firm Ciel HR Services at …",
        "url": "https://economictimes.indiatimes.com/jobs/hr-policies-trends/india-inc-makes-a-gig-shift-in-hiring/articleshow/102047673.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-102047698,width-1070,height-580,imgsize-1726682,overlay-etcareers/photo.jpg",
        "publishedAt": "2023-07-23T00:40:00Z",
        "content": "Demand for freelance professionals has reached an all-time high in India as companies in sectors such as technology, professional services and consulting, fast-moving consumer goods (FMCG), healthcar… [+3580 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "2nd Test: Ashwin, Siraj keep India's hopes alive as West Indies employ negative batting tactic - IndiaTimes",
        "description": "Cricket News: India bowlers toiled hard, managing four wickets as a defensive West Indies crawled their way to 229 for five on a rain-marred third day of the second",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-west-indies/2nd-test-ashwin-siraj-keep-indias-hopes-alive-as-windies-employ-negative-batting-tactic/articleshow/102046613.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102046997,width-1070,height-580,imgsize-66526,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-07-22T22:17:00Z",
        "content": null
        },
        ]
    }
    constructor(){
        super();
        this.state = {
            articles: this.data.articles,
            country: this.data.country,
            loading: false
      }
    }
  render() {

    return (
        <div className="container">
            <div className="row states">     
            {this.state.articles.map((element,index)=>{
            const isFirstElement = `${index % 5 === 0}`;
            console.log(isFirstElement);
            return <>
                <div className={`${index % 5 === 0 ? 'col-md-6' : 'col-md-3'}`} key={element.url}>
                <a href={element.url}  target="_blank" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    <p className={`${index % 5 === 0 ? 'headline text-center fw-bold h1' : 'headline text-center fw-bold h5'}`}>{element.title}</p>
                    <NewsItem description={element.description.slice(0, 150)+'...'} urlToImage={element.urlToImage}/> 
                    </a>
                </div>
            </>
            }
            )}
            </div>
        </div>
        )
  }
}

export default News
