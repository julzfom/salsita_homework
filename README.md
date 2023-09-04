
# salsita_homework
This is the repo for the homework assignment which will be discussed in the next round of the interview
<p></p>
<p><b>Task: </b></p>
Use Cypress (or Playwright) to create following test case. Upload solution to the github and send the me the link
The test scenario is the following:
<p>The test script shall</p>
 <p><b> ** Start **</b></p>
      <p>- start the browser and open https://salsita-qa-homework.netlify.app/</p>
  <p><b>** Main Page **</b></p>
      <p>- click the Enter button -- "code" page loads</p>
  <p><b>** Code Page **</b></p>
     <p> - on the code page: find a "secret" input element and enter its value into the input field</p>
     <p> - ensure that the "robot" checkbox is checked</p>
     <p> - submit the form -- "lists" page loads (list of famous quotes)</p>
  <p><b>** Lists Page **</b></p>
      <p>On this page there are quote categories "Famous Quotes" and "Awesome Quotes",
      each having several quotes. Each quote has a score number in parentheses.
      At the bottom there is a "Total score" number.
      The texts (category names and quotes in each category) are always the same,
      however they are presented in random order. The score numbers are volatile.
      <p>The test script shall:</p>
      <p> - verify that all the categories and their quotes are displayed. No extra quotes, no missing ones.</p>
      <p> - verify that the "Total score:" is the sum of all quote scores</p>
