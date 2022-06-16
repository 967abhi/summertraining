var name ;
name=prompt("enter your name to know your future ");
var n=Math.floor(Math.random()*7);
switch(n){
    case 0:{
        alert("Hello!" +name +" you can become software engineer ");
        break;
    }
    case 1:
        { 
            alert("hello this is 1");
            break;

        }

    case 2:{
        alert("you will "+ name +" marry soon ");
        break;
    }
        case 3:
            {   
                alert(" you are "+ name + " aliens ");
                break;

            }

      default:{
          alert(" you are on default case ");
          break;

      }

}
