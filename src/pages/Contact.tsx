import Sidebar from "../components/Sidebar";
import Signature from "../components/Signature";

const Contact = () => {
  return (
    <div className="flex flex-col relative">
      <Sidebar asPage={true} />
      <div className="w-full h-32 bottom-1/4 z-10 flex justify-center absolute ">
        <Signature />
      </div>
    </div>
  );
};

export default Contact;
