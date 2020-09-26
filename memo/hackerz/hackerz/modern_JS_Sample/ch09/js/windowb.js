var something = 23;



function addToSomething(what) {
  
 something += what;
 console.log('addToSomethingの結果 : ' + something);

}

function useFormData(num){
  console.log('useFormDataの結果 : ' + num);

  var windowA = window.opener;
  console.log(windowA.window.popup);
  console.log(windowA.window.windowAVal);
}


