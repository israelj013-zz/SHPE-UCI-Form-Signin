function onSubmit(e) {
  // Leave the line below to create some access to Forms
  var aBlankFormVarNeccessary = FormApp.getActiveForm();
  
  var formQuestions = e.response.getItemResponses();
  
  const emailFromSubmitter = formQuestions[2].getResponse();
  
  var emailSubject = "Thank you for signing in for " + aBlankFormVarNeccessary.getTitle();
  
  //remove text below and add your zoom link
  var zoomLink = "zoom link"

  //Feel free to edit this message if you please
  var emailBody = 'Here is the zoom link for the event ' + zoomLink + ' \n\n'; 
  
  /*
    Notes on Email Quota: 
    
    Email recipients per day 	       100* / day 	
    Email read/write (excluding send) 	20,000 / day
  */
  
  MailApp.sendEmail(emailFromSubmitter, emailSubject, emailBody);
 

}
