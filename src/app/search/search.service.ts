import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Site } from '../model/site';


  const YELP_RESPONSE = {
    "businesses": [
        {
            "id": "moes-original-bar-b-que-bangor",
            "name": "Moe's Original Bar B Que",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/PlKzxp-zKN6M9fOxLkb8zA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/moes-original-bar-b-que-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 99,
            "categories": [
                {
                    "alias": "bbq",
                    "title": "Barbeque"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.8229,
                "longitude": -68.77903
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "650 Broadway",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "650 Broadway",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079929000",
            "display_phone": "(207) 992-9000",
            "distance": 1072.6482844959999
        },
        {
            "id": "the-fiddlehead-restaurant-bangor",
            "name": "The Fiddlehead Restaurant",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7QGKV15sdD4Kuk57lQ8Rbg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-fiddlehead-restaurant-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 107,
            "categories": [
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.80141,
                "longitude": -68.77263
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "84 Hammond St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "84 Hammond St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079423336",
            "display_phone": "(207) 942-3336",
            "distance": 3388.328415166
        },
        {
            "id": "o-donnells-sub-and-deli-bangor",
            "name": "O'Donnell's Sub & Deli",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ElvlT0mBt_VE9XqvcGdQSg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/o-donnells-sub-and-deli-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 24,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 44.8004391,
                "longitude": -68.7760921
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "204 Union St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "204 Union St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079072020",
            "display_phone": "(207) 907-2020",
            "distance": 3387.690311856
        },
        {
            "id": "panda-garden-bangor-2",
            "name": "Panda Garden",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/n6wzOeeYLGqccH6oNy_ywA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/panda-garden-bangor-2?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 34,
            "categories": [
                {
                    "alias": "chinese",
                    "title": "Chinese"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.80375,
                "longitude": -68.77167
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "123 Franklin St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "123 Franklin St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079422704",
            "display_phone": "(207) 942-2704",
            "distance": 3183.1114938579994
        },
        {
            "id": "kobe-ninja-house-japanese-grill-bangor-3",
            "name": "Kobe Ninja House Japanese Grill",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UAzVIzUrjsuGfYIHdFLHXg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kobe-ninja-house-japanese-grill-bangor-3?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 60,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.841491,
                "longitude": -68.747055
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "829 Hogan Rd",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "829 Hogan Rd",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079929983",
            "display_phone": "(207) 992-9983",
            "distance": 3552.5906912199994
        },
        {
            "id": "jamaican-vybz-take-out-restaurant-bangor",
            "name": "Jamaican Vybz Take-Out Restaurant",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TwPqbgihr9wt76z7_ltuuw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jamaican-vybz-take-out-restaurant-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 15,
            "categories": [
                {
                    "alias": "caribbean",
                    "title": "Caribbean"
                },
                {
                    "alias": "chickenshop",
                    "title": "Chicken Shop"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.80691,
                "longitude": -68.7712
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "97 Center St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "97 Center St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079731999",
            "display_phone": "(207) 973-1999",
            "distance": 2872.122632258
        },
        {
            "id": "cubita-libre-cafeteria-bangor",
            "name": "Cubita Libre Cafeteria",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0pHAZgFRJgD5jQdwhEm2XQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cubita-libre-cafeteria-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 16,
            "categories": [
                {
                    "alias": "cuban",
                    "title": "Cuban"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "cafeteria",
                    "title": "Cafeteria"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.8365,
                "longitude": -68.74245
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "659 Hoghan Rd",
                "address2": null,
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "659 Hoghan Rd",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12075731971",
            "display_phone": "(207) 573-1971",
            "distance": 3844.0804675119994
        },
        {
            "id": "fork-and-spoon-downtown-eatery-bangor",
            "name": "Fork & Spoon | Downtown Eatery",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/8Hi1-18ONkIaiqI8jERrzg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fork-and-spoon-downtown-eatery-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 27,
            "categories": [
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                },
                {
                    "alias": "bakeries",
                    "title": "Bakeries"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.8003122210503,
                "longitude": -68.7717224657536
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "76 Main St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "76 Main St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12074337646",
            "display_phone": "(207) 433-7646",
            "distance": 3522.420716108
        },
        {
            "id": "nocturnem-draft-haus-bangor",
            "name": "Nocturnem Draft Haus",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EF2SHL0uAoAZzxBSoHkC2w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/nocturnem-draft-haus-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 48,
            "categories": [
                {
                    "alias": "bars",
                    "title": "Bars"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.8005569726229,
                "longitude": -68.7716165184975
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "56 Main St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "56 Main St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079074380",
            "display_phone": "(207) 907-4380",
            "distance": 3494.5485566479997
        },
        {
            "id": "paddy-murphys-irish-pub-bangor",
            "name": "Paddy Murphy's Irish Pub",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/1e1I8Pdgjdfuxhf8KCPKMg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/paddy-murphys-irish-pub-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 80,
            "categories": [
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "irish",
                    "title": "Irish"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.8009237647057,
                "longitude": -68.7714589387178
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "26 Main St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "26 Main St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079456800",
            "display_phone": "(207) 945-6800",
            "distance": 3454.0332612139996
        },
        {
            "id": "nickys-crusin-diner-bangor-3",
            "name": "Nicky's Crusin Diner",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3yO-Os_b33f54zjJa-6qEw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/nickys-crusin-diner-bangor-3?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 42,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "diners",
                    "title": "Diners"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.8153549751653,
                "longitude": -68.8053678680909
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "957 Union St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "957 Union St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079423430",
            "display_phone": "(207) 942-3430",
            "distance": 2046.0023831339997
        },
        {
            "id": "eagles-nest-restaurant-brewer",
            "name": "Eagles Nest Restaurant",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Ja4POLxDQcCjc9CG7CZ5Yg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/eagles-nest-restaurant-brewer?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 194,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.8195865018336,
                "longitude": -68.7162565162529
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1016 N Main St",
                "address2": "",
                "address3": "",
                "city": "Brewer",
                "zip_code": "04412",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "1016 N Main St",
                    "Brewer, ME 04412"
                ]
            },
            "phone": "+12079897635",
            "display_phone": "(207) 989-7635",
            "distance": 5829.8796943219995
        },
        {
            "id": "umami-noodle-bar-bangor",
            "name": "Umami Noodle Bar",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/f0nnJl4O-a4e2R0Wyv8DFg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/umami-noodle-bar-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 49,
            "categories": [
                {
                    "alias": "noodles",
                    "title": "Noodles"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.8015467077494,
                "longitude": -68.7713684141636
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1 Main St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "1 Main St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079479991",
            "display_phone": "(207) 947-9991",
            "distance": 3400.3406898599997
        },
        {
            "id": "giacomos-bangor",
            "name": "Giacomo's",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/OiFPndHX85h8H_otEKlrkA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/giacomos-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 64,
            "categories": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.8033051489879,
                "longitude": -68.7707439228531
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1 Central St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "1 Central St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079473702",
            "display_phone": "(207) 947-3702",
            "distance": 3374.762322702
        },
        {
            "id": "franks-bake-shop-bangor",
            "name": "Frank's Bake Shop",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/09Iw8zeTOp0fQbEIWNHDlQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/franks-bake-shop-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 25,
            "categories": [
                {
                    "alias": "bakeries",
                    "title": "Bakeries"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "donuts",
                    "title": "Donuts"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.804998,
                "longitude": -68.7622254
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "199 State St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "199 State St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079474594",
            "display_phone": "(207) 947-4594",
            "distance": 3442.30423036
        },
        {
            "id": "green-tea-bangor",
            "name": "Green Tea",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/0EARcnrfbg7cvcntBxJrAA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/green-tea-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 51,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "chinese",
                    "title": "Chinese"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.83581,
                "longitude": -68.74293
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "11 Bangor Mall Blvd",
                "address2": "Ste E",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "11 Bangor Mall Blvd",
                    "Ste E",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12072625566",
            "display_phone": "(207) 262-5566",
            "distance": 3680.11640216
        },
        {
            "id": "verve-bangor",
            "name": "Verve",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/41ESKGACDrBCDhMS2hpp1g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/verve-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 32,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.7999853142018,
                "longitude": -68.7724309042096
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "91 Main St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "91 Main St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079222556",
            "display_phone": "(207) 922-2556",
            "distance": 3531.244244526
        },
        {
            "id": "angelos-pizzeria-bangor-2",
            "name": "Angelo's Pizzeria",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/GevwrwthYeldcu3yHyAv3A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/angelos-pizzeria-bangor-2?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 25,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "wraps",
                    "title": "Wraps"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 44.800379,
                "longitude": -68.787802
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "499 Hammond St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "499 Hammond St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079425553",
            "display_phone": "(207) 942-5553",
            "distance": 3242.5597087879996
        },
        {
            "id": "papa-gambinos-pizzas-subs-bangor",
            "name": "Papa Gambino's Pizzas Subs",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/SG2ikwz1xuGHVnYLA39UOg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/papa-gambinos-pizzas-subs-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 12,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 44.806,
                "longitude": -68.75922
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "267 State St",
                "address2": "",
                "address3": "",
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "267 State St",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079453511",
            "display_phone": "(207) 945-3511",
            "distance": 3506.19824704
        },
        {
            "id": "whats-the-scoop-bangor",
            "name": "What's the Scoop",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/edyj5vbvH4MAcQ4cPGCfCg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/whats-the-scoop-bangor?adjust_creative=a6BEMaDtWlsRI9YSGZrUXg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=a6BEMaDtWlsRI9YSGZrUXg",
            "review_count": 8,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 44.8140910410831,
                "longitude": -68.8071067949787
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "541 Maine Ave",
                "address2": null,
                "address3": null,
                "city": "Bangor",
                "zip_code": "04401",
                "country": "US",
                "state": "ME",
                "display_address": [
                    "541 Maine Ave",
                    "Bangor, ME 04401"
                ]
            },
            "phone": "+12079472667",
            "display_phone": "(207) 947-2667",
            "distance": 2241.7015067479997
        }
    ],
    "total": 641,
    "region": {
        "center": {
            "latitude": 44.82953193842756,
            "longitude": -68.78883361816406
        }
    }
};

const YELP_URL = "https://api.yelp.com/v3/businesses/search"

@Injectable()
export class SearchService {

  private token:string = "NdcBtZnqB6tjEhirhhzgtgG-6oEAZcUmAk23bpTcJ2lhapV_UGGSbTb70UqCnifLyOfeeUoBPmKr62-ZQGmJf9K7be7JsNupQWHCyIFrdqkTvRo98ghciQOQjGM-WXYx";

  constructor(private http:Http) { }

  private find( delay:number = 0): Promise<Site[]> {

    return new Promise( function(resolve, reject) {
      setTimeout(() => {
        resolve(YELP_RESPONSE.businesses.map(original => {
          let {url, name, display_phone, phone, rating, image_url,
            review_count, ...yelp } = original;
          let b = {
            url: url,
            name: name,
            display_phone: display_phone,
            //display_address: b.display_address,
            phone: phone,
            rating: rating * 2,
            image_url: image_url,
            reviews: review_count,
            yelp: yelp
          };
          return b;
        }))
      }, delay);
    });
  }

  findLocation(location: string) : Promise<Site[]> {
    console.log('search for location', location);
    return this.find();
  }
  findLonLat(longitude: number, latitude: number) {
    console.log('search for position', longitude, latitude);
    return this.find();
  }
}
