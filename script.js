function nextStep(step){
document.querySelectorAll('.step').forEach(s=>s.classList.remove('active'));
document.getElementById('step'+step).classList.add('active');
}

function prevStep(step){
nextStep(step);
}

function generateLink(){

let data = {
partner: document.getElementById("partnerName").value,
you: document.getElementById("yourName").value,
date: document.getElementById("specialDate").value,
story: document.getElementById("eventDesc").value,
letter: document.getElementById("loveLetter").value,
r1: document.getElementById("reason1").value,
r2: document.getElementById("reason2").value,
r3: document.getElementById("reason3").value,
d1: document.getElementById("dream1").value,
d2: document.getElementById("dream2").value,
d3: document.getElementById("dream3").value,
secret: document.getElementById("secretMsg").value
};

let encoded = btoa(JSON.stringify(data));

let link = window.location.origin + window.location.pathname + "?data=" + encoded;

document.getElementById("linkBox").innerHTML =
"<h3>Send this link to your partner ❤️</h3><a href='"+link+"' target='_blank'>"+link+"</a>";
}
