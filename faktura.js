const selectMenu = document.getElementById("operators")

            const addBtn = document.querySelector("#addbtn");
            addBtn.addEventListener("click", additemToList);

            function additemToList(){


               const item= document.querySelector("#item").value;
               const value= document.querySelector("#value").value;
               const inkomstTotalSpan = document.querySelector(".inkomstTotal")
               const inkomstTotalInteger = inkomstTotalSpan.textContent
               const kostnadTotalSpan = document.querySelector(".kostadTotal")
               const kostnadTotalInteger = kostnadTotalSpan.textContent

               const vinst = document.querySelector(".vinst")

               const inkomstTotal = Number(inkomstTotalInteger)
               const kostnadTotal = Number(kostnadTotalInteger)
               const valueNumber = Number(value)


               const itemP = document.createElement("p")
               const itemInnehal = document.createTextNode(item +": " +value)
               itemP.appendChild(itemInnehal)

                if (selectMenu.selectedIndex == 0 && item && value){
                    const inkomstCount = inkomstTotal + valueNumber
                    inkomstTotalSpan.textContent = inkomstCount
                    

                const itemDiv = document.querySelector(".inkomst")
                itemDiv.appendChild(itemP)

                CountVinst()

                } else if (selectMenu.selectedIndex == 1 && item && value){

                    const kostnadCount = kostnadTotal + valueNumber
                    kostnadTotalSpan.textContent= kostnadCount
                    

                const itemDiv = document.querySelector(".kostnad")
                itemDiv.appendChild(itemP)

                CountVinst()
                
                }

                
            }

            function CountVinst(){
                
               const inkomstTotalSpan = document.querySelector(".inkomstTotal")
               const inkomstTotalInteger = inkomstTotalSpan.textContent
               const kostnadTotalSpan = document.querySelector(".kostadTotal")
               const kostnadTotalInteger = kostnadTotalSpan.textContent

               const vinst = document.querySelector(".vinst")

               const inkomstTotal = Number(inkomstTotalInteger)
               const kostnadTotal = Number(kostnadTotalInteger)

                const vinstCount = inkomstTotal - kostnadTotal
                vinst.textContent = vinstCount
            }




    