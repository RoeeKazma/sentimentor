const SENTIM_API = "https://sentim-api.herokuapp.com/api/v1/"

async function textChecker (text) {
   let result = await fetch(SENTIM_API,{
       method:'POST',
       body: JSON.stringify({"text": `${text}`}),
       headers:{
         Accept: "application/json",
        "Content-Type": "application/json"
       }
   });

   const json = await result.json()

   let polarity = document.getElementById("polarity");
   polarity.innerText ="Polarity: " + json["result"]["polarity"]

   let type = document.getElementById("type");
   type.innerText ="Type: " + json["result"]["type"]

   switch (json["result"]["type"])
   {
       case "neutral":
        type.style.backgroundColor = "gray";
        break;

        case "positive":
        type.style.backgroundColor = "green";
        break;

        case "negative":
        type.style.backgroundColor = "red";
        break;

   }
}


