var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }

        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }


      // ----------------for small screens---------------

      var sidemeu = document.getElementById("sidemenu");

      function openmenu(){
        sidemeu.style.right = "0";
      }
      function closemenu(){
        sidemeu.style.right = "-200px";
      }




    //   -------------contact form----------------



    const scriptURL = 'https://script.google.com/macros/s/AKfycbxnN9eoVJz9objN8HvS4Lv3egmEOzahunygd8Xq6mfxlGyl2Cm2SJZ49k3bteDGM8oiIQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
          msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })



  // -----------------------count api---------------------------



  const countEl = document.getElementById("visit");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/portfolio/count?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }




// ------------hover effect-----------------


      const elements = document.getElementsByClassName('alpha');

  for (let i = 0; i<=elements.length; i++)
  {
      elements[i].addEventListener('animationend',function(e){
          elements[i].classList.remove('animated');
      });

      elements[i].addEventListener('mouseover',function(e){
          elements[i].classList.add('animated')
      })
  }