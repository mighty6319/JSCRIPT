
function Main(){
    const menu={1 : "Add song",
                2 : "Remove song",
                3 : "Insert song at position",
                4 : "Show playlist",
                5 : "Copy first 3 songs",
                6 : "Join playlist into one string",
                7 : "EXIT"
                }
    const keys=Object.keys(menu);
    //console.log(keys)
    for (let i = 0; i < Object.keys(menu).length; i++) {
        console.log(keys[i]+" : "+menu[keys[i]])
        
    }while(true){
        
    let option=parseInt(prompt("Enter your option : "))
    
    switch (option) {
        case 1:addSong();
            break;
        case 2:removeSong();
            break;
        case 3:insertSong();
            break;
        case 4:show();
            break;
        case 5:copySong();
            break;
        case 6:join();
            break;
        case 7:process.exit();break;
        default:
            console.log("Enter a valid option...\n"+"-".repeat(50))
            break;
    }}

}
function addSong(){
    let song = prompt("Add a song: ");
    if(playlist.includes(song)){
        console.log("song already exists..");return}
    playlist.push(song);
}
function removeSong(){
    let remove = prompt("Enter the song to remove: ");
    let index=-1;
    for(let i=0;i<playlist.length;i++){
        if(playlist[i]===remove)
            index=i;         
    }
    if(index===-1){ 
        console.log("Can't find the song")
    }
    else{
        playlist.splice(index,1); 
    }
}
function insertSong(){
    const pos = parseInt(prompt("\nEnter the position to insert: "));
    const song = prompt("Enter the song: ")
    if(pos<0 || pos>playlist.length){
        console.log("position not Find");
    }
    else{
        playlist.splice(pos,0,song);
    }
}
function show(){
    console.log("-".repeat(50)+"\nYOUR PLAYLIST\n"+"-".repeat(50))
    for (let index = 0; index <playlist.length; index++) {
        console.log((index+1)+". "+playlist[index])
    }
    
}
function copySong(){
    let firstThree = playlist.slice(0,3);
    console.log("\nYour Top three songs:\n"+("-".repeat(50))+"\n"+firstThree[0]+"\n"+firstThree[1]+"\n"+firstThree[2]);
} 
function join(){
    console.log(playlist.join(" "));
}
const prompt=require("prompt-sync")();
const process=require("process")
const playlist=[]
console.log("WELCOME TO PLAYLIST-MANIA\n"+"-".repeat(50))

Main()
