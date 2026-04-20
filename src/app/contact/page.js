export default function Contact() {
  return (
      <main className="container mx-auto p-4 text-center mt-20">
        <h1 className="font-serif text-3xl font-bold mt-3">Contact Us</h1>
        <p className="text-gray-500 italic">
          Get in touch with us!
        </p>
        
        <form className="contact-form block text-left gap-4 mt-4 border-olive-600 border p-4 rounded max-w-md mx-auto">
          <label htmlFor="name" >Name:</label>
          <input type="text" className="border border-olive-600 rounded mb-4 p-1 w-full focus:outline-none" id="name" name="name" /> <br />
          
          <label htmlFor="email" >Email:</label>
          <input type="email" className="border border-olive-600 rounded mb-4 p-1 w-full focus:outline-none" id="email" name="email" /> <br />
          
          <label htmlFor="message">Message:</label> <br />
          <textarea className="border border-olive-600 rounded m-0 mb-2 w-100 h-32 p-2 w-full focus:outline-none" id="message" name="message"></textarea> <br />
          
          <button type="submit" className="bg-olive-800
            text-white mx-auto p-2 rounded-md
            hover:bg-olive-600
            transition-all duration-300" >
            Send Message
          </button>
          <button type="reset" className="bg-gray-800
            text-white mx-3 p-2 rounded-md
            hover:bg-gray-600
            transition-all duration-300" >
            Reset
          </button>
        </form>

      </main>
  );
}
