interface DataShape{
    
    uuid: number;
    photosug: string;
    usersug: string;
    information:string;
    followinfo: string;
    

}


const dataSuge: DataShape[] = [
    {
        uuid:1,
        photosug: "./images/twsug.jpg",
        usersug: "twitter",
        information: "Nuevo en Instagram",
        followinfo: "Seguir"

    },

    {
    
        uuid:2,
        photosug: "./images/badbsug.jpeg",
        usersug: "badbunny",
        information: "Te sigue",
        followinfo: "Seguir"

    },


    {
        uuid:3,
        photosug:"./images/lgsug.png",
        usersug: "latingrammys",
        information: "Nuevo en Instagram",
        followinfo: "Seguir"

            
    },

    {

        uuid:4,
        photosug:"./images/drksug.jpg",
        usersug:"drake",
        information: "Te sigue",
        followinfo: "Seguir"
             
    },

    {

        uuid:5,
        photosug:"./images/jlosug.jpg",
        usersug:"jlo",
        information: "Nuevo en Instagram",
        followinfo: "Seguir"
             
    },

    

];

export default dataSuge;
