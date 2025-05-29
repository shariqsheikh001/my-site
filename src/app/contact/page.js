
import Footer from "@/components/Footer";
import Navebar from "@/components/Navebar";


export default function Contact() {
    return (
        <>
       <Navebar/>

         <div class="container">
    <h1>Contact Us</h1>
    <p class="subtitle">We'd love to hear from you! Please fill out the form below.</p>
    <form>
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required />

      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" />

      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit" id="cbtn">Send Message</button>
    </form>
  </div>
        
  <Footer/>

        </>



    )
}