interface DataShape{

   uuid:number;
   photostory: string;
   namestory: string;

};

const dataStory: DataShape[] = [
    {
    
        uuid: 1,
        photostory: "./images/netstory.jpg",
        namestory: "netflix",

    },
    {
       
        uuid:2,
        photostory:"./images/jbstory.jpg",
        namestory: "jbalvin",
    
    
    },
    {

        uuid:3,
        photostory:"./images/mikestory.jpg",
        namestory: "mikebahia",
      
    },
    {
       
        uuid:4,
        photostory:"./images/ovystory.jpg",
        namestory: "ovydrums",
            
   },
   {

        uuid:5,
        photostory:"./images/wbstory.jpg",
        namestory: "wbpictures",
       
    },
    {
        
        uuid:6,
        photostory:"./images/lalostory.jpg",
        namestory: "laloebratt",
    
    },
  
];

export default dataStory;