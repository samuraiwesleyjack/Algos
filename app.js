function day(){                     /*daynightmode*/
            c.className='container';        
            body.className='container';
        }
function night(){
            c.className='night container';
            body.className='night container';
        }

/* Dark Mode */
function main() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    event.target.checked ? night() : day();
  });
}
