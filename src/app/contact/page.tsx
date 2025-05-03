import FormInput from '@/components/ui/FormInput';

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-8 max-w-md mx-auto">
        <FormInput label="Name" type="text" name="name" />
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Message" type="textarea" name="message" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
