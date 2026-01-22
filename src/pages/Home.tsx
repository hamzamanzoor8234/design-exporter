import { Link } from "react-router-dom";

const routes = [
  { path: "/tech-stack-grid", name: "Tech Stack Grid", description: "Interactive tech stack visualization" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Design Exporter</h1>
        <p className="text-gray-600 text-center mb-12">Create and export beautiful designs</p>
        
        <div className="grid gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{route.name}</h2>
              <p className="text-gray-600">{route.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}