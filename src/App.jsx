import { useState } from 'react';
import Slideshow from './Slideshow.jsx';

const App=()=> {

  // const[formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''});
  // const handleClick =(e)=>{
  //   e.preventDefault()
  //   alert("Form submitted successfully!");
  // console.log("here is the form data",formData);
  
  // }

  return (
    
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  {/* <form class="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
    <h2 class="text-2xl font-bold text-center">Contact Us</h2>

    <div>
      <label class="block text-gray-700 mb-1">Name</label>
      <input
        type="text"
        placeholder="Your name"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    
      />
    </div>

    <div>
      <label class="block text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>

    <div>
      <label class="block text-gray-700 mb-1">Message</label>
      <textarea
        rows="4"
        placeholder="Your message"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-1/2 bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transitionn focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
      onClick={(e)=>handleClick(e)}
      value={formData}
    >
      Send Message
    </button>
   
  </form> */}
  <Slideshow/>
</div>

  );
}
export default App;
