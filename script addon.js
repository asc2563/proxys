(function(){
  
    var launchNum = parseInt(prompt("What would you like to do? \n 1): Launch Aluben \n 2): Launch aluben Hub \n 3): Launch procky list")); 
    var win = null;
    var url = null;
    var iframe = null;
    
    switch (launchNum){
   
      case 1:
        window.open('https://is.gd/Aluben');
        break;
    
    case 2:
        window.open('https://is.gd/AlubenHub');
        break;
    
    case 3:
        window.open('https://is.gd/prockylist');
        break;
    
    default:
        alert('please select a valid option')
        break;
    }
  })();