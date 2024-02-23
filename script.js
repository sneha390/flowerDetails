

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

document.getElementById('fileUpload').addEventListener('click', async () => {

    let input = document.createElement('input');
  input.type = 'file';
  input.onchange = async _ => {
    let files =   Array.from(input.files);

    if (files.length > 1) {
        alert('Please select only one image')
        return
    }
    const file = files[0];
    const base64 = await convertBase64(file);

    const data = await fetchDetails([base64])
    if (data) {

        const scientific_name = document.getElementById("scientificName")
        const kingdom = document.getElementById("kingdom")
        const phylum = document.getElementById("phylum")
        const flowerClass = document.getElementById("class")
        const genus = document.getElementById("genus")        
        const family = document.getElementById("family")


        scientific_name.innerHTML = data.suggestions[0].plant_name;
        kingdom.innerHTML = data.suggestions[0].plant_details.taxonomy.kingdom
        phylum.innerHTML = data.suggestions[0].plant_details.taxonomy.phylum
        flowerClass.innerHTML = data.suggestions[0].plant_details.taxonomy.class
        genus.innerHTML = data.suggestions[0].plant_details.taxonomy.genus
        family.innerHTML = data.suggestions[0].plant_details.taxonomy.family

        const img = document.createElement('img')
        img.setAttribute('src', data.suggestions[0].similar_images[0].url);
        document.getElementById('container').innerHTML = ""
        document.getElementById('container').appendChild(img)
        };
    }
  input.click();

});


