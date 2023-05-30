import '../Style/style.css';
import { Form, Field, Formik } from 'formik';
import { object, string } from 'yup';


export default function Contact() {

  const messageSchema = object({
    username: string().required().min(3).max(15),
    email: string().required().email(),
    message: string().required().max(100)
  })

  const initValue = {
    username: '',
    email: '',
    message: ''
  }

  const handleSubmit = (value) => { console.log(value) }

  return (
    <div className='contact'>

      <Formik initialValues={initValue} validationSchema={messageSchema} onSubmit={handleSubmit}>
        <div className='container d-flex align-items-center justify-content-center vh-100 '>
          <div className='card p-4 w-50 my-3 mx-auto bg-success p-5 text-dark bg-opacity-10 text-white' style={{ width: '600px' }}>
            <h2 className="mb-8 text-center ">Contact us</h2>
            <Form onSubmit={handleSubmit} >
              <div className="mb-3">
              <label htmlFor="name" className="form-label ">Username</label>
                <input name="username" type="text" className="form-control" id="name" placeholder='Enter name' />

                <div style={{ color: 'red' }}>{ }</div>

              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com" />
                <div style={{ color: 'red' }}>{ }</div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" className="form-control" id="message" rows="3" placeholder='Enter message'></textarea>
                <div style={{ color: 'red' }}>{ }</div>
              </div>
              <div className="mb-3">
                <button type="submit" className='btn btn-dark'>Send Message</button>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}
