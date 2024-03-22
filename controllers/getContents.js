async function getContents(req, res) {
    try {
        const content = [
            {
                "id": 1,
                "title": {
                    "name": "iPhone 15 Pro",
                    "color": "white"
                },
                "sub_title": {
                    "name": "Titanium. So strong. So light. So Pro.",
                    "color": "white"
                },
                "hyperlinks": [
                    { "title": "Learn more", "link": "", "color": "rgb(41, 151, 255)" },
                    { "title": "Buy", "link": "", "color": "rgb(41, 151, 255)" },
                ],
                "url": [{
                    "width": 2,
                    "height": 2,
                    "link": "https://www.apple.com/v/home/bl/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg"
                }, {
                    "width": 2,
                    "height": 2,
                    "link": "https://www.apple.com/v/home/bl/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_medium_2x.jpg"
                }],
                "background": "black",
                "responsiveImageUrl": ""
            },
            {
                "id": 2,
                "title": {
                    "name": "iPhone 15",
                    "color": "black"
                },
                "sub_title": {
                    "name": "New Camera. New Design. Newphoria.",
                    "color": "black"
                },
                "hyperlinks": [
                    { "title": "Learn more", "link": "", "color": "rgb(41, 151, 255)" },
                    { "title": "Buy", "link": "", "color": "rgb(41, 151, 255)" },
                ],
                "url": [{
                    "width": 2,
                    "height": 2,
                    "link": "https://www.apple.com/v/home/bl/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_medium_2x.jpg"
                }, {
                    "width": 2,
                    "height": 2,
                    "link": "https://www.apple.com/v/home/bl/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_small_2x.jpg"
                }],
                "background": "black",
                "responsiveImageUrl": ""
            }
        ]
        res.json(content)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

module.exports = [
    getContents
]