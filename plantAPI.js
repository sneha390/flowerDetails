const fetchDetails = async (base64files) => {
    const data = {
        
        api_key: "ozj6Gtx747XbiqvRrQQcedGPcOGXOUquNOZW0Z4oMio44wHmjN",
        
        images: base64files,
        /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"],
    };

    const respone = await axios.post('https://api.plant.id/v2/identify', data)
    return respone.data
}