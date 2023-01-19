document.addEventListener("DOMContentLoaded", function() {

   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";
   fetch (url).then(resp=> resp.json()).then(data=>{
         let loader = document.getElementById("loader");

         loader.classList.toggle("lds-ring");
     
         createScheme(data)
         document.querySelectorAll("button").forEach((button)=>{
            button.addEventListener("click",(e)=>{
               
               
               
               let id = e.target.dataset.id
               createAside(data,id)
            }) 
           })
     })

     function createScheme (data){
         let schemeGroup = document.querySelector(".scheme-group")
         
         
         console.log(data)

        data.forEach((thing)=>{

         let h3 = document.createElement("h3")
         let caption = document.createTextNode(thing.title)
         h3.appendChild(caption)
         schemeGroup.appendChild(h3)
         let schemeSection = document.createElement("section")
         schemeSection.classList.add("scheme")
         schemeGroup.appendChild(schemeSection)

         let previewDiv = document.createElement("div")
         previewDiv.classList.add("preview")
         schemeSection.appendChild(previewDiv)
        
         thing.scheme.forEach((color)=>{
            let colorDiv = document.createElement("div")
            colorDiv.classList.add("color-box")
            
            colorDiv.style.backgroundColor = color.web
            previewDiv.appendChild(colorDiv)
          
         })
         let actionsDiv = document.createElement("div")
         actionsDiv.classList.add("actions")
         let button = document.createElement("BUTTON")
         let text = document.createTextNode("View")
         button.appendChild(text)
         button.setAttribute("data-id", thing.id)
         actionsDiv.appendChild(button)
         schemeSection.appendChild(actionsDiv)

        })
  
        return data;

         
     }
     function createAside(data,id){
        let selected =  data.find((temp)=>temp.id==id)
        console.log(selected)

        let aside = document.querySelector("aside")
        let h2 = document.createElement("h2")
        console.log(aside.hasChildNodes()) 
        if(aside.hasChildNodes()){
         //delete
         while(aside.firstChild){
            aside.removeChild(aside.firstChild)
         }
     }

        
        aside.appendChild(h2)
        let caption = document.createTextNode(selected.title)
        h2.appendChild(caption)

        let fieldset = document.createElement("fieldset")
        aside.appendChild(fieldset)

        let colorRowDiv = document.createElement("div")
        colorRowDiv.classList.add("colorRow")

        selected.scheme.forEach((temp)=>{
            console.log(temp)
            let colorRowDiv = document.createElement("div");
            colorRowDiv.classList.add("colorRow");
            fieldset.appendChild(colorRowDiv)
            let detailBoxDiv = document.createElement("div");
            detailBoxDiv.classList.add("detailBox");
            detailBoxDiv.style.backgroundColor = temp.web;
            colorRowDiv.appendChild(detailBoxDiv)

            let span1 = document.createElement("span");
            colorRowDiv.appendChild(span1)
            let textHex = document.createTextNode(temp.web)
            span1.appendChild(textHex)

            let span2 = document.createElement("span");
            colorRowDiv.appendChild(span2)
            console.log(temp.color.red)
            console.log(temp.color.green)
            let color = temp.color
            let red = color.red
            let green = color.green
            let blue = color.blue
            let textRgb = document.createTextNode(`rgb (${red},${green},${blue})`)
            span2.appendChild(textRgb)

            let label = document.createElement("label")
            colorRowDiv.appendChild(label)
            let colorText = document.createTextNode(temp.name)
            label.appendChild(colorText)


        })
        
     }
     
});




 
