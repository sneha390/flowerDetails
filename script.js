
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
          reject(error);
      };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  const base64 = await convertBase64(file);
  // fetchDetails([base64])
  return {
    "id": 85194390,
    "custom_id": null,
    "meta_data": {
        "latitude": null,
        "longitude": null,
        "date": "2023-06-04",
        "datetime": "2023-06-04"
    },
    "uploaded_datetime": 1685885188.080852,
    "finished_datetime": 1685885188.969997,
    "images": [
        {
            "file_name": "bd708771c2094565a37d42ff9737d238.jpg",
            "url": "https://plant.id/media/images/bd708771c2094565a37d42ff9737d238.jpg"
        }
    ],
    "suggestions": [
        {
            "id": 469531716,
            "plant_name": "Rosa",
            "plant_details": {
                "common_names": [
                    "rose"
                ],
                "url": "https://en.wikipedia.org/wiki/Rosa_(genus)",
                "name_authority": "Rosa L.",
                "wiki_description": {
                    "value": "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa. Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development of the wide range of garden roses.",
                    "citation": "https://en.wikipedia.org/wiki/Rosa_(genus)",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Rosa",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Bakeria",
                    "Chabertia",
                    "Chavinia",
                    "Cottetia",
                    "Crepinia",
                    "Ernestella",
                    "Hesperhodos",
                    "Hulthemia",
                    "Juzepczukia",
                    "Lowea",
                    "Platyrhodon",
                    "Rhodophora",
                    "Rhodopsis",
                    "Saintpierrea",
                    "× Hulthemosa"
                ],
                "language": "en",
                "scientific_name": "Rosa",
                "structured_name": {
                    "genus": "rosa"
                }
            },
            "probability": 0.7979519544525863,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "ad2c4f5d72b90dece99b1c0adcac50e7",
                    "similarity": 0.2521304303990881,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/ad2/c4f5d72b90dece99b1c0adcac50e7.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/ad2/c4f5d72b90dece99b1c0adcac50e7.small.jpg"
                },
                {
                    "id": "72538d9a5103b3ea6e6009221701f089",
                    "similarity": 0.23600781268017867,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/725/38d9a5103b3ea6e6009221701f089.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/725/38d9a5103b3ea6e6009221701f089.small.jpg"
                }
            ]
        },
        {
            "id": 469531717,
            "plant_name": "Rosa rugosa",
            "plant_details": {
                "common_names": [
                    "rugosa rose",
                    "beach rose",
                    "Japanese rose",
                    "Ramanas rose",
                    "letchberry"
                ],
                "url": "https://en.wikipedia.org/wiki/Rosa_rugosa",
                "name_authority": "Rosa rugosa Thunb.",
                "wiki_description": {
                    "value": "Rosa rugosa (rugosa rose, beach rose, Japanese rose, Ramanas rose, or letchberry) is a species of rose native to eastern Asia, in northeastern China, Japan, Korea and southeastern Siberia, where it grows on beach coasts, often on sand dunes. It should not be confused with Rosa multiflora, which is also known as \"Japanese rose\". The Latin word \"rugosa\" means \"wrinkled\", referring to the wrinkled leaves.",
                    "citation": "https://en.wikipedia.org/wiki/Rosa_rugosa",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Rosa",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Rosa andreae",
                    "Rosa coruscans",
                    "Rosa fastuosa",
                    "Rosa ferox",
                    "Rosa kamtchatica",
                    "Rosa maikwai",
                    "Rosa pubescens",
                    "Rosa regeliana",
                    "Rosa rugosa var. chamissoniana"
                ],
                "language": "en",
                "scientific_name": "Rosa rugosa",
                "structured_name": {
                    "genus": "rosa",
                    "species": "rugosa"
                }
            },
            "probability": 0.02999706379972522,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "981d88eb824c4eae0d579230f83a6aa6",
                    "similarity": 0.2821836066325446,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/981/d88eb824c4eae0d579230f83a6aa6.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/981/d88eb824c4eae0d579230f83a6aa6.small.jpg"
                },
                {
                    "id": "31b487f3a00290d6ae1573b9a86140e6",
                    "similarity": 0.2173752997224468,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/31b/487f3a00290d6ae1573b9a86140e6.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/31b/487f3a00290d6ae1573b9a86140e6.small.jpg"
                }
            ]
        },
        {
            "id": 469531718,
            "plant_name": "Rosa chinensis",
            "plant_details": {
                "common_names": [
                    "China rose",
                    "Chinese rose",
                    "Bengal rose",
                    "Bengal Crimson",
                    "Bengal Beauty"
                ],
                "url": "https://en.wikipedia.org/wiki/Rosa_chinensis",
                "name_authority": "Rosa chinensis Jacq.",
                "wiki_description": {
                    "value": "Rosa chinensis (Chinese: 月季; pinyin: yuèjì), known commonly as the China rose or Chinese rose, alternatively known as Bengal rose or Bengal Crimson or Bengal Beauty is a member of the genus Rosa native to Southwest China in Guizhou, Hubei, and Sichuan Provinces. The first publication of Rosa chinensis was in 1768 by Nikolaus Joseph von Jacquin in Observationum Botanicarum, 3, p. 7, p. 55.",
                    "citation": "https://en.wikipedia.org/wiki/Rosa_chinensis",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Rosa",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Rosa bengalensis",
                    "Rosa bengalensis chinensis",
                    "Rosa chinensis var. spontanea",
                    "Rosa diversifolia",
                    "Rosa lawranceana",
                    "Rosa longifolia",
                    "Rosa monstrosa",
                    "Rosa mutabilis",
                    "Rosa nankinensis",
                    "Rosa nanula",
                    "Rosa rouletii",
                    "Rosa semperflorens",
                    "Rosa sinica"
                ],
                "language": "en",
                "scientific_name": "Rosa chinensis",
                "structured_name": {
                    "genus": "rosa",
                    "species": "chinensis"
                }
            },
            "probability": 0.023706448905699527,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "79daef2fc74f14ab81cc4a15bd85f51b",
                    "similarity": 0.23411704929834737,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/79d/aef2fc74f14ab81cc4a15bd85f51b.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/79d/aef2fc74f14ab81cc4a15bd85f51b.small.jpg",
                    "citation": "Anna reg",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                {
                    "id": "679c317c2663c90ebd68ee28083c915c",
                    "similarity": 0.2316195664894411,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/679/c317c2663c90ebd68ee28083c915c.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/679/c317c2663c90ebd68ee28083c915c.small.jpg",
                    "citation": "Edwards Amber",
                    "license_name": "CC BY-SA 4.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/"
                }
            ]
        },
        {
            "id": 469531719,
            "plant_name": "Callirhoe involucrata",
            "plant_details": {
                "common_names": [
                    "purple poppy-mallow"
                ],
                "url": "https://en.wikipedia.org/wiki/Callirhoe_involucrata",
                "name_authority": "Callirhoe involucrata (Torr. & A.Gray) A.Gray",
                "wiki_description": {
                    "value": "Callirhoe involucrata is a species of flowering plant in the mallow family known by the common name purple poppy-mallow. It is native to the United States and northern Mexico.",
                    "citation": "https://en.wikipedia.org/wiki/Callirhoe_involucrata",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Malvaceae",
                    "genus": "Callirhoe",
                    "kingdom": "Plantae",
                    "order": "Malvales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Callirhoe involucrata f. incisa",
                    "Callirhoe involucrata f. novomexicana",
                    "Callirhoe involucrata var. novomexicana",
                    "Callirhoe verticillata",
                    "Malva involucrata",
                    "Nuttallia involucrata",
                    "Sesquicella involucrata"
                ],
                "language": "en",
                "scientific_name": "Callirhoe involucrata",
                "structured_name": {
                    "genus": "callirhoe",
                    "species": "involucrata"
                }
            },
            "probability": 0.02243487389291926,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "d27555fde8df31c4e6a9095fb7dbbfa8",
                    "similarity": 0.21459321062411274,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/d27/555fde8df31c4e6a9095fb7dbbfa8.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/d27/555fde8df31c4e6a9095fb7dbbfa8.small.jpg",
                    "citation": "Clay",
                    "license_name": "CC BY 4.0",
                    "license_url": "https://creativecommons.org/licenses/by/4.0/"
                },
                {
                    "id": "e53f5433555cb69f8d1a1493e1f2b308",
                    "similarity": 0.2054684743250269,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/e53/f5433555cb69f8d1a1493e1f2b308.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/e53/f5433555cb69f8d1a1493e1f2b308.small.jpg"
                }
            ]
        },
        {
            "id": 469531722,
            "plant_name": "Rosa pendulina",
            "plant_details": {
                "common_names": [
                    "Alpine rose",
                    "mountain rose"
                ],
                "url": "https://en.wikipedia.org/wiki/Rosa_pendulina",
                "name_authority": "Rosa pendulina L.",
                "wiki_description": {
                    "value": "Rosa pendulina, (syn. Rosa alpina), the Alpine rose or mountain rose, is a species of wild rose found in the mountains of central and southern Europe. It appears to have survived in glacial refugia in the Alps and Carpathians, and spread out from there. It prefers to grow in relatively warmer, shadier, and wetter areas alongside streams, in openings in forests, or on rock piles, between 350 and 2,500 m above sea level. It has been introduced to New England and can be found growing as a garden escapee elsewhere.",
                    "citation": "https://en.wikipedia.org/wiki/Rosa_pendulina",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Rosa",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Rosa adenophora",
                    "Rosa adjecta",
                    "Rosa affinis",
                    "Rosa alpina",
                    "Rosa alpiniformis",
                    "Rosa balcanica",
                    "Rosa cinnamomea",
                    "Rosa coccialba",
                    "Rosa diplacantha",
                    "Rosa glandulosa",
                    "Rosa hispida",
                    "Rosa hybrida",
                    "Rosa inermis",
                    "Rosa intercalaris",
                    "Rosa lagenaria",
                    "Rosa majalis var. globosa",
                    "Rosa malyi",
                    "Rosa odoratissima",
                    "Rosa pendula",
                    "Rosa pendulina f. eriocephala",
                    "Rosa pyrenaica",
                    "Rosa rupestris",
                    "Rosa semisimplex",
                    "Rosa stenodonta",
                    "Rosa tenuiflora",
                    "Rosa turbinata",
                    "Rosa villarsii"
                ],
                "language": "en",
                "scientific_name": "Rosa pendulina",
                "structured_name": {
                    "genus": "rosa",
                    "species": "pendulina"
                }
            },
            "probability": 0.01441242627391272,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "8bfb658eb097109e4a709d588d89808e",
                    "similarity": 0.2507728461953697,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/8bf/b658eb097109e4a709d588d89808e.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/8bf/b658eb097109e4a709d588d89808e.small.jpg",
                    "citation": "Iliadis Panos",
                    "license_name": "CC BY-SA 4.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/"
                },
                {
                    "id": "8ea6e8cc508e51a1ccabc1b29c1491e9",
                    "similarity": 0.2296621142910477,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/8ea/6e8cc508e51a1ccabc1b29c1491e9.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/8ea/6e8cc508e51a1ccabc1b29c1491e9.small.jpg",
                    "citation": "Julie",
                    "license_name": "CC BY-SA 4.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/"
                }
            ]
        }
    ],
    "modifiers": [
        "similar_images",
        "crops_fast"
    ],
    "secret": "mFEsJxWp6IEGanl",
    "fail_cause": null,
    "countable": true,
    "feedback": null,
    "is_plant_probability": 0.9343320723999999,
    "is_plant": true
}
};



  document.getElementById('fileUpload').addEventListener('change', (e)=>{
    uploadImage(e)
})


const showResult = ()=> {

}


const createDetails = () => {

  

}


// fetchDetails()
  
