/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure,getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolor,hobby,profession) {
    const kk={
        "name": name,
        "eyecolor": eyecolor,
        "hobby": hobby,
        "profession": profession
 }
 arr.push(kk);
 console.log("Minted= " +name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<arr.length;i++)
    {
        console.log("\n Name= " +kk[i].name);
        console.log("\n Eyecolour= " +kk[i].eyecolor);
        console.log("\n hobby= " +kk[i].hobby);
        console.log("\n Profession= " +kk[i].profession);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(kk.length);
}

// call your functions below this line

mintNFT("Ramu","blue","drawing","Student");
mintNFT("Sam","Black","Games","Student");
mintNFT("robi","black","reading","Teacher");
listNFTs();
getTotalSupply();
