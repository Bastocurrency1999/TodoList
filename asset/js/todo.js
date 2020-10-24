// alert("YOU ARE WELCOME TO BASTO TODO LIST. \n YOU CAN ADD MESSAGE TO YOUR TODO LIST BY \n CLICKING ADD MESSAGE TODO +");
// create an array for the sample todo Message
SampleMessage = JSON.parse(localStorage.getItem("TodoMessages"));

// create a function to display Message
// declare it as a global variable so as to be readily accessible 
ToDisplayMessage()
function ToDisplayMessage()
{
    displayMessages='';
    for(i=0;i<SampleMessage.length;i++)
    {
        displayMessages+=`
 	   <div class="message-wrapper">
            <div class="checked">
				<input type="radio" name="" id="" style="display:none;">
			</div>
		   <div class="message">
			   <span>${SampleMessage[i].message}</span>
		   </div>
            <div class="button-wrapper">
				<img src="/asset/image/trash24.png" alt="" title="Delete Message" onclick="DeleteMessage(${i})">
				<img src="/asset/image/pencil24px.png" alt="" title="Edit Message" onclick="EditMessage(${i})">
				<img src="/asset/image/loop.png" alt="" title="Update Message">
			</div>
	   </div>
        `
    }
    // display the output as a child to the todo wrapper
    document.getElementById('TodoWrapper').innerHTML = displayMessages;
}

// function to add new message to todo list
ToDisplayMessage()
function AddMessage()
{
    NewMessage = {
        "message" : prompt("Wanna add Message to your todo list? \n tip: your message must not be greater than 30, make it short as possible")
    } 
    // if(SampleMessage == null || SampleMessage == ''){
    //     alert("can't be null");
    // }
    // else
    // if(SampleMessage.length < 30){
    //     alert("Message Must not be greater than 30 !!!");
    // }else{
    SampleMessage.push(NewMessage);
    ToDisplayMessage()
    localStorage.setItem("TodoMessages", JSON.stringify(SampleMessage));
    // }
}

// function to delete Message
function DeleteMessage(del)
{
    SampleMessage.splice(del,1);
    ToDisplayMessage()
    localStorage.setItem("TodoMessages", JSON.stringify(SampleMessage));
}

//function to Edit message
function EditMessage(edit)
{
    NewMessage = {
        // wanna add placeholder to the edit
        "message" : prompt("Edit your Message ",SampleMessage[edit].Message)
    }
    SampleMessage[edit] = NewMessage;
    ToDisplayMessage()
    localStorage.setItem("TodoMessages", JSON.stringify(SampleMessage));
}