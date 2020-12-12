function onSubmit()
{ 
  debugger;
	 var input={ 
             "firsts":document.getElementById('firsts').value,
             "second":document.getElementById('second').value,
             "third":document.getElementById('third').value,
             "adj":document.getElementById('adj').value,
             "verb":document.getElementById('verb').value,
             "response":document.getElementById('response').checked,
             "speed":document.getElementById('speed').value,
             "quote":document.getElementById('quote').value,
             "msg":document.getElementById('msg').value,
             "msgs":document.getElementById('msgs').value
           };
  
           sessionStorage.setItem('input',JSON.stringify(input));

console.log(input);
	
}

function getdata()
{

 var input=sessionStorage.getItem('input');

 input=JSON.parse(input);

 var span=document.getElementsByTagName('span');

 for (var i = 0; i < span.length; i++)
  {
  	switch(span[i].className)
  	{
  		case "firsts":
       		span[i].innerText=input['firsts'];
      break;
      case "second":
          span[i].innerText=input['second'];
      break;
      case "third":
          span[i].innerText=input['third'];
      break;
      case "adj":
          span[i].innerText=input['adj'];
      break;
      case "verb":
          span[i].innerText=input['verb'];
      break;
      case "response":
          var response=input['response'];

           if(response)
           {
              span[i].innerText='Yes';
           }
           else
           {
             span[i].innerText='No';
           }
             break; 
      case "speed":
          span[i].innerText=input['speed'];
      break;
      case "quote":
          span[i].innerText=input['quote'];
      break;
      case "msg":
          span[i].innerText=input['msg'];
      break;
      case "msgs":
          span[i].innerText=input['msgs'];
      break;
    }
  } 
}