// import PhoneNumber from "./PhoneNumber/PhoneNumber"
import "./freeestimateform.css"
import emailIcon from "./icons/email.svg"
import locationIcon from "./icons/location.svg"
import personIcon from "./icons/person.svg"
import phoneIcon from "./icons/phone.svg"

export default function FreeEstimateForm() {
  return (
    <>
    <form method="POST" action="https://formsubmit.co/97aca8e29358f1aec86ce3da24c5e17f" id="estimateForm">
        {/* <input type="hidden" name="_cc" value="example@gmail.com"/> */}
        <input type="hidden" name="_next" value={`${window.location.origin}?messagesuccess=true${location.hash}`}/>
        <input type="hidden" name="_captcha" value="false"/>
            
            <h2 id="estimateFormTitle">Get a <em>Free</em><br />Estimate!</h2>
            <div className="input-wrapper">
                <img id="formPersonIcon" src={personIcon} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            <div className="input-wrapper">
                <img id="formEmailIcon" src={emailIcon} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>
            <div className="input-wrapper">
            <img id="formPhoneIcon" src={phoneIcon} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
            <img id="formLocationIcon" src={locationIcon} alt="Location Icon" />
                <input required type="text" name="location" id="locationInput" placeholder={"Address"} />
            </div>
            <div className="input-wrapper">
                <textarea maxLength={2000} name="message" id="messageInput" placeholder={"Any Additional Details..."}></textarea>
            </div>

            <input id="estimateFormSubmit" type="submit" value="Get Your Free Estimate!" />
        </form>
    </>
  )
}
