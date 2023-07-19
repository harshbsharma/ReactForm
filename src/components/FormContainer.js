import './FormContainer.css';
import {useState} from 'react';
import 'css-doodle';
function FormContainer()
{
    const [formData,setFormData] = useState({firstname:"", lastname:"", email:"", 
    country:"", address:"", city:"", state:"", zip:"", comments:false, candidate:false, offers:false,
    notification:"" })

    function changeHandler(event)
    {
         
        setFormData(prevFormData =>
            {
                const {name , value, checked, type} = event.target 
                return{
                    ...prevFormData,
                    [name] : type ==="checkbox" ? checked : value
                    
                }
            })
        
    }

    function submitHandler(event)
    {
        event.preventDefault()

    }

    console.log(formData)  

    return(
        <div className="division">
            <div className='formdiv'>
            <form>
            
            

            <div className="content-division">
            <a>First Name</a>
            <input 
            className='space'
            type="text"
            onChange={changeHandler}
            name="firstname"
            value={formData.firstname}
            required/>
            </div>

            <div className="content-division">
            <a>Last Name</a>
            <input type="text"
            className='space' 
            onChange={changeHandler}
            name="lastname"
            value={formData.lastname}/>
            </div>


            <div className="conten-division">
            <a>Email</a>
            <input type="email"
            className='space' 
            onChange={changeHandler}
            name="email"
            value={formData.email}
            required />
            </div>

            <div className="content-division">
            <a>Country</a>
            <select
            className='space-select'
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            >

            <option value="none" selected hidden>Select an Option</option>
            <option value="India">Indian Subcontinent</option>
            <option value="USA">United States</option>
            <option value="EU">Europe</option>

            </select>


            </div>

            <div className="content-division">
            <a>Street Address</a>
            <input type="textarea"
            className='space'
            onChange={changeHandler}
            name="address"
            value={formData.address} />
            </div>


            <div className="content-division">
            <a>City</a>
            <input type="text" 
            className='space'
            onChange={changeHandler} 
            name="city"
            value={formData.city}/>
            </div>

            <div className="content-division">
            <a>State</a>
            <input type="text" 
            className='space'
            onChange={changeHandler} 
            name="state"
            value={formData.state}/>
            </div>

            <div className="content-division">
            <a>Zip Code</a>
            <input type="number" 
            className='space'
            onChange={changeHandler}
            name="zip"
            value={formData.zip}/>
            </div>



            <div className='content-division'>

            <a className='email-heading'>By Email</a>   <br/>
            <div >
            &nbsp;
            <input type="checkbox"
            id="first"
            onChange={changeHandler}
            checked={formData.comments}
            name="comments"/>
            <label htmlFor="first">Comments</label><br/>
            <a className='subheading'>Get Notified When Someone post a comment on a posting</a>   
            </div>   

            <div>
            &nbsp;
            <input type="checkbox"
            id="first"
            onChange={changeHandler}
            checked={formData.candidate}
            name="candidate"/>
            <label htmlFor="first">Candidate</label><br/>
            <a className='subheading'>Get Notified When a candidate posts a job</a>

            </div>

            <div>
            &nbsp;
            <input type="checkbox"
            id="first"
            onChange={changeHandler}
            checked={formData.offers}
            name="offers"/>

            <label htmlFor='first'>Offers</label><br/>
            <a className='subheading'>Get Notified When a candidate accepts or rejects a offer</a>
            </div>


            </div>




            <div className='content-division'>
                <p className='email-heading'>Push Notification</p>
            <div>
            &nbsp;
            <input
            type='radio'
            onChange={changeHandler}
            name="notification"
            value="email"
            id="email"
            checked = {formData.notification === "email"}
            />
            <label htmlFor='email'>Email Only</label>
            </div>

            <div>
            &nbsp;
            <input
            type='radio'
            onChange={changeHandler}
            name="notification"
            value="phone"
            id="phone"
            checked = {formData.notification === "phone"}
            />
            <label htmlFor='phone'>Phone Only</label>
            </div>

            <div>
            &nbsp;
            <input
            type='radio'
            onChange={changeHandler}
            name="notification"
            value="no_notification"
            id="nonoti"
            checked = {formData.notification === "no_notification"}
            />
            <label htmlFor='nonoti'>No Notification</label>
            </div>


            </div>
            <br/>

            <div className='finalbutton'> 
            
            <button  className="testbutton" onClick={submitHandler}>Submit</button>
           
            </div>
            



                    </form>
            </div>
        </div>
        
    );
}
export default FormContainer;