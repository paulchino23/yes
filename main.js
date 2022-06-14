function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');

}
function clearCanvas(){
    background("white");

}