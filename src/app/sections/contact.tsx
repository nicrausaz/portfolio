import ContactForm from "../components/contactForm";

export default function ContactSection() {
  return (
    <section className='w-screen h-screen flex flex-col items-center justify-center' id='contact'>
      <div className='w-1/2'>
        <div>
          <h1 className='section-title'>Contact</h1>
        </div>
        <div className='mt-10'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
