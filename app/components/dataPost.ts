export interface DataShape { 

    uuid: number;
    photouser: string;
    photopost: string;
    username1: string;
    username2: string;
    
  
    location: string;
    caption: string;
    days: string;
    sistem: string;
    views: string; 
    

}

const dataPost: DataShape[] = [
    {
        
        uuid: 1,
        photouser: "./images/rossy.jpg",
        photopost: "./images/rspost.jpg",
        username1: "rossyhurtado",
        username2: "rossyhurtado",
        location: "New York",
        caption: "New studio ready!",
        days: "HACE 3 DIAS ",
        sistem: "Ver los 500 comentarios",
        views: "1.000.000 vistas",
    

    },

    {

        
        uuid: 2,
        photouser: "./images/dannyjpg",
        photopost: "./images/dpost.jpg",
        username1: "dannocean",
        username2: "dannocean",
        
        location: "Miami",
        caption: "____________",
        days: "8 DAYS AGO",
        sistem: "View all 1000 comments",
        views: "800.000 view",
    
            
        },
        
    {
    
        uuid: 3,
        photouser: "./images/margot.jpg",
        photopost: "./images/mpost.jpg",
        username1: "margotrobbie",
        username2: "margotrobbie",
        
        location: "Australia",
        caption: "___________",
        days: "5 DAYS AGO",
        sistem: "View all 5000 comments",
        views: "10.000.000 view",
    
    },


    {
        
        uuid: 4,
        photouser: "./images/mads.jpg",
        photopost: "./images/mdspost.jpg",
        username1: "madelame",
        username2: "madelame",
      
        location: "Los Angeles",
        caption: "_______",
        days: "2 DAYS AGO",
        sistem: "View all 4000 comments",
        views: "3.000.000 view",
            
    
},

    {

        uuid: 5,
        photouser: "./images/zac.jpg",
        photopost: "./images/zpost.jpg",
        username1: "zacefron",
        username2: "zacefron",
      
        location: "Vancouver",
        caption: "_______",
        days: "1 DAYS AGO",
        sistem: "View all 9000 comments",
        views: "7.000.000 view",
            

  },

    {
        
        uuid: 6,
        photouser: "./images/karolg.jpg",
        photopost: "./images/kpost.jpg",
        username1: "karolg",
        username2: "karolg",
      
        location: "Medellin",
        caption: "_______",
        days: "1 DAYS AGO",
        sistem: "View all 9000 comments",
        views: "7.000.000 view",

    },
    {

        uuid: 7,
        photouser: "./images/tom.jpg",
        photopost: "./images/tpost.jpg",
        username1: "tomellis",
        username2: "tomellis",
     
        location: "London",
        caption: "_______",
        days: "10 DAYS AGO",
        sistem: "View all 2000 comments",
        views: "900.000 view",
        
    
    },
    {
       
        uuid: 8,
        photouser: "./images/camilo.jpg",
        photopost: "./images/cpost.jpg",
        username1: "camilo",
        username2: "camilo",
       
        location: "Cali",
        caption: "_______",
        days: "6 DAYS AGO",
        sistem: "View all 30000 comments",
        views: "1.300.000 view",
    
            
    },
    {
         
        
        uuid: 9,
        photouser: "./images/maluma.jpg",
        photopost: "./images/malupost.jpg",
        username1: "maluma",
        username2: "maluma",
      
        location: "Madrid",
        caption: "_______",
        days: "30 DAYS AGO",
        sistem: "View all 200000 comments",
        views: "6.000.000 view",
    
    
    },
    {
        
        uuid: 10,
        photouser: "./images/rauw.jpg",
        photopost: "./images/rwpost.jpg",
        username1: "rauwalejandro",
        username2: "rauwalejandro",
    
        location: "Puerto Rico",
        caption: "_______",
        days: "30 DAYS AGO",
        sistem: "View all 20000 comments",
        views: "20.000.000 view",

    },

];

export default dataPost;