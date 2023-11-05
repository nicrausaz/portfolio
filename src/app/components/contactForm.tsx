export default function ContactForm() {
  return (
    <div className='px-4'>
      <p className='text-center text-white mb-10'>
        Want to talk about a project or just want to say hi? Send me a message and I'll get back to you as soon as
        possible!
      </p>
      <div className='w-full rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10'>
        <form
          name='contact'
          method='post'
          action='https://formspree.io/mknqbjkw'
          className='w-full p-8 my-4 mr-auto rounded-2xl shadow-2xl bg-emerald-500 transform translate-x-4 translate-y-4'
        >
          <div className='flex'>
            <h1 className='font-bold uppercase text-3xl'>Your message</h1>
          </div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
            <input
              className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-[#001825]'
              name='name'
              type='text'
              placeholder='Your name'
              required
            />
            <input
              className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              name='email'
              type='email'
              placeholder='Your email'
              required
            />
          </div>
          <div className='my-4'>
            <textarea
              placeholder='Your message ...'
              name='message'
              className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              required
            ></textarea>
          </div>
          <div className='my-2'>
            <button
              type='submit'
              className='uppercase text-sm font-bold tracking-wide bg-[#001825] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
