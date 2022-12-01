
/*
    usr: nombre de usuario
    eme: email
    psw: contraseña
    age: edad
    loc: ubicación
    fll: número de seguidores
*/

try {  
    const properties = ['usr','eme','psw','age','loc','fll'];
    const FILE_URL = "https://codember.dev/users.txt";

    fetch(FILE_URL)
    .then((response) => response.text())
    .then((text) => {
        let correctUsers = 0;
        let lastUser = null;
        let userName = null;
        text.split("\n\n").forEach((user) =>{
          
          userName = user.split("eme:")[1].split(" ")[0]
          const userProperties = user.replaceAll('\n',' ').split(' ').map(prop =>{
                   return prop.split(":")[0]                            
          });
          if (properties.every(item => userProperties.includes(item))){
            console.log(userName  +  " " + properties.every(item => userProperties.includes(item)) + "\n");
            correctUsers++;
            lastUser = userName;
         }
        });
        console.log(correctUsers + userName)
    });
 
    
     
}catch(e) {

    // Printing error 
    console.log('Error:', e.stack);
}
