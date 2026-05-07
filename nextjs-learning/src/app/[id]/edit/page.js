
import Form from "../../components/Form"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Edit = () => {
  return (
    
    <>
    <Navbar />
     <section className="py-10 my-10 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-600">
          Edit Your Recipe
        </h2>
        <Form text=" Save Changes"  />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Edit
