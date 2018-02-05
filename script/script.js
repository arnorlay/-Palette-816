function couleur(){
    let couleur_hexa = '000000';
    let liste_couleur_hexa = [];
    let couleur;
    let taille = 51;
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('020005', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('000005', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('000205', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('020505', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('000505', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('000500', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('000502', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('020500', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050500', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050502', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050200', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050000', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050002', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050005', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050205', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    for(let i=1; i<=taille; i++){
        couleur = (Math.abs(Number.parseInt(couleur_hexa, 16) + (Number.parseInt('050505', 16) * i))).toString(16);
        liste_couleur_hexa.push('#' + '0'.repeat(6 - couleur.length) + couleur);
    }
    
    return liste_couleur_hexa;
}

function construction(liste_couleur_hexa) {
    let liste_indice_navigateur = [50, 101, 152, 203, 254, 305, 356, 407, 458, 509, 560, 611, 662, 713, 764, 815];
    let menu = document.getElementById('menu');
    let ul = document.getElementById('liste');
    for(let i=0; i<liste_couleur_hexa.length; i++){
        li = document.createElement('li');
        li.id = liste_couleur_hexa[i];
        li.setAttribute('onclick', 'couleurHeader('+'"'+liste_couleur_hexa[i]+'"'+')');
        div = document.createElement('div');
        div.setAttribute('class', 'couleur');
        div.style.backgroundColor = liste_couleur_hexa[i];
        divText = document.createTextNode(liste_couleur_hexa[i]);
        if(liste_couleur_hexa[i] > '#00cccc' && liste_couleur_hexa[i] <= '#00ffff' || liste_couleur_hexa[i] > '#ccee00' && liste_couleur_hexa[i] <= '#ffffff'){
            div.style.color = "#000000";
        }
        div.appendChild(divText);
        li.appendChild(div);
        ul.appendChild(li);
    }
}

function changer(){
    let balise = document.getElementById('couleur_choisie');
    ajoutTemoin(balise.value);
    balise.value = '';
}

function copier(id){
    balise = document.getElementById('selection');
    balise.setAttribute('value', id);
    balise.select();
    document.execCommand('copy');
}

function couleurHeader(id){
    copier(id)
    document.getElementById('entete').style.borderColor = id;
    ajoutTemoin(id);
}

function ajoutTemoin(couleur){
    let liste = document.getElementById('liste_temoins');
    if(liste.children.length == 4){
        liste.children[0].remove();
    }
    li = document.createElement('li');
    div = document.createElement('div');
    div.setAttribute('onclick', 'copier('+'"'+couleur+'"'+')');
    div.style.backgroundColor = couleur;
    div.setAttribute('class', 'temoin');
    bulle = document.createElement('div');
    bulle.setAttribute('class', 'bulle');
    code = document.createTextNode(couleur);
    bulle.appendChild(code);
    div.appendChild(bulle);
    li.appendChild(div);
    liste.appendChild(li);
}