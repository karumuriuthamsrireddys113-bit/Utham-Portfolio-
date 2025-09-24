const vari= document.getElementById("asdf");
if (vari){
    const text = "My name is Karumuri Utham Reddy.";
    let i=0;

    function typeWriter(){
        if (i < text.length){
            vari.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);

        }
    }
    typeWriter();
}


