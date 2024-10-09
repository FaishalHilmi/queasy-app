import { Link } from "react-router-dom";

export default function RouterLink({ children, path }) {
  return (
    <Link
      to={path}
      className="py-2 px-6 text-white rounded-full border border-fourth"
    >
      {children}
    </Link>
  );
}
