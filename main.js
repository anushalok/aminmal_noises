function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        + random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('cinnamoroll(3)');
        img1 = document.getElementById('pom-pom(2)');
        img2 = document.getElementById('pusheen-cat');
        

        if(results[0].label == "Clap"){
        img.src = 'cinnaromoroll.gif';
        img1.src = 'pom-pom.png';
        img2.src = 'pusheen-cat.png';
        }else if(results[0].label == "Bell"){
            img.src = 'cinnamoroll(3).png';
            img1.src = 'pom-pon.gif';
            img2.src = 'pusheen-cat.png';
        }else if (results[0].label == "Snapping"){
            img.src = 'cinnamoroll(3).png';
            img1.src = 'pom-pom.png';
            img2.src = 'pusheen-cat-icegif.gif';
        }
}
}