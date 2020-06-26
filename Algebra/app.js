function day(){                     /*daynightmode*/
            c.className='day';        
            body.className='day';
        }
function night(){
            c.className='night';
            body.className='night';
        }

/* Dark Mode */
function main() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    event.target.checked ? night() : day();
  });
}
