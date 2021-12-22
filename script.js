let arr=[{
    name:"Naruto",
    lastMsgTime:"10:06pm",
    messages:[{
        content:"Hello",
        user:true
    },

    {
        content:"How are you doing",
        user:true
    },
    {
        content:"Hello",
        user:false,
    }
]
},

{
    name:"Itachi",
    lastMsgTime:"10:06pm",
    messages:[{
        content:"Hello",
        user:true
    },

    {
        content:"How are you doing",
        user:true
    },
    {
        content:"Hello",
        user:false,
    }
]
},

{
    name:"Sasuke",
    lastMsgTime:"10:06pm",
    messages:[{
        content:"Hello",
        user:true
    },

    {
        content:"How are you doing",
        user:true
    },
    {
        content:"Hello",
        user:false,
    },
    {
        content:"I an good what about you",
        user:false,
    }
]
},
]

function getPerson(i){
let person=`
<div class="personChat" id="person${i}">
      
         <img src="" alt="icon"  height="40" id="profile">
        
         <div class="chatName">
              ${this.name}
             <div class="chatMessage">${this.messages[this.messages.length-1].content}</div>
         </div>
         <div class="chatTime">
             ${this.lastMsgTime}
         </div>

</div>
`
return person
}

let content=``;

arr.forEach((ele,i)=> {

    let myCopy=getPerson.bind(ele)
    content+= myCopy(i)
}) 


document.getElementById('peopleContainer').innerHTML=content


function getReceivedMsg(content){
    msg=`<div class="msgBox">
    <div class="receivedMsg">
        ${content}
    </div>
</div>`
    return msg;
}


function getSendMsg(content){
    msg=`    

    <div class="msgBox msgBox2">

        <div class="sendMsg">
             ${content}
        </div>
    </div>`
    return msg;
}


arr.forEach((ele,i)=>{
    document.getElementById(`person${i}`).addEventListener('click',()=>{
        console.log(i)

    document.getElementById(`personName`).innerText=ele.name

    let innerContent=``;

    ele.messages.forEach(m =>{
        if(m.user==true)
        innerContent += getReceivedMsg(m.content)
        else
        innerContent += getSendMsg(m.content)
    })

    document.getElementById(`main`).innerHTML=innerContent
    })
})

