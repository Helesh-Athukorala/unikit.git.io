import { useState } from 'react';

const tools = [
  { name: 'Online Notepad', url: '/tools/notepad.html' },
  { name: 'AI Assistant', url: '/tools/ai.html' },
  { name: 'GPA Calculator', url: '/tools/gpa.html' },
  { name: 'Planner', url: '/tools/planner.html' },
  { name: 'Reminder', url: '/tools/reminder.html' },
  { name: 'File Share', url: '/tools/fileshare.html' },
  { name: 'File Converters', url: '/tools/converters.html' },
  { name: 'Spreadsheets', url: '/tools/spreadsheet.html' },
  { name: 'Word Processing', url: '/tools/word.html' },
  { name: 'Presentation', url: '/tools/presentation.html' },
];

export default function UniKitDashboard() {
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (replace with real auth later)
    if (email && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter email and password');
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login to Uni Kit</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Uni Kit</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tools.map((tool) => (
          <button
            key={tool.name}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              activeTool.name === tool.name
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
            onClick={() => setActiveTool(tool)}
          >
            {tool.name}
          </button>
        ))}
      </div>

      <div className="w-full h-[80vh] border rounded-lg shadow-inner overflow-hidden">
        <iframe
          title={activeTool.name}
          src={activeTool.url}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}


