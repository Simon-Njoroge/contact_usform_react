
import './App.scss'

function App() {
  
  
const sendinfo= (e:any)=>{{
  e.preventDefault()
  const emailed:any=document.querySelector("#email")
  const fname:any=document.querySelector(".first")
  const lname:any =document.querySelector("#last")
  const fnameerr:any=document.querySelector(".err1")
  const lnameerr:any=document.querySelector(".err2")
  const emailerr:any=document.querySelector(".err3")
  if(emailed.value == "" || fname.value == "" || lname == ""){
    document.body.classList.toggle("err")
    fnameerr.textContent="enter a field"
    lnameerr.textContent="enter a field"
  }
  else if(!emailed.value.includes("@gmail.com")|| !emailed.value.includes("@0utlook.com")){
   emailerr.textContent="enter a valid email"
  }
else{
 
  setTimeout(()=>{
    window.alert("information sent")
  },5000)
{const simon:any=document.querySelector(".sending")
 
simon.textContent="sending you information......"}
}
}
}

  return (
    <>
    <p className='sending'></p>
      <form action="">
        <h1>CONTACT US FORM</h1>
        <div className="contactinfo">
          <div className="names">
            <div className="first">
              <label htmlFor='first'>First Name:</label><br />
              <input type="text"  className='first'/>
              <p className="err1"></p>
            </div>
            <div className="last">
              <label htmlFor='last'>Last Name:</label><br />
              <input type="text" id='last' />
              <p className='err2'></p>
            </div>
          </div>
          <label htmlFor="email">Emial</label><br />
          <input type="email" id="email" />
          <p className='err3'></p>
          <br />
          <label htmlFor="gender" className='gen'>Gender:</label><br /><br />
          <div className="selectg">
            <label htmlFor=""><input type="radio" name="gender" />Male</label>
            <label htmlFor=""><input type="radio" name="gender" />Female</label>
          </div>
          <div className="select">
            <label htmlFor="course">Course:</label>
            <select name="" id="">
              <option value="default">default</option>
              <option value="default">Computer Science</option>
              <option value="default">Software Engineering</option>
              <option value="default">Information Technology</option>
              <option value="default">Bussiness and Information</option>
            </select>
          </div>
          <div className="age">
            <label htmlFor="age">Age:</label><br />
            <input type="number" />
          </div>
          <div className="accept">
          <p><input type="checkbox" /> I agree with the terms and conditions <a href='#'>terms and conditions</a></p>
          </div>
          <button onClick={sendinfo}>SUBMIT</button>
        </div>
      </form>
    </>
  )
}

export default App
