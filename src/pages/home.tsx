import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: "Ask Chanakya",
    description: "Ask any question and get wisdom from Chanakya.",
    route: "/ask",
  },
  {
    title: "Daily Challenge",
    description: "Take on a new challenge every day to sharpen your mind.",
    route: "/challenge",
  },
  {
    title: "Chanakya Chronicles",
    description: "Read stories and lessons from the life of Chanakya.",
    route: "/chronicles",
  },
  {
    title: "Quiz",
    description: "Test your knowledge with interactive quizzes.",
    route: "/quiz",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to NEETIBOT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => navigate(feature.route)}
            >
              Go
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;