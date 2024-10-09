import Navbar from "../organisms/Navbar";
import HomePage from "../organisms/HomePage";

export default function home() {
  return (
    <div className="bg-primary relative">
      <Navbar />
      <HomePage />
    </div>
  );
}
