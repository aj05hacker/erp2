import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  MessageSquare, 
  PlusCircle, 
  LineChart, 
  Settings,
  Globe,
  Code
} from 'lucide-react';

function AppRoutes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="https://img.jagranjosh.com/images/2022/May/3152022/opfRJpPW_400x400.jpg" 
                alt="College Logo" 
                className="w-10 h-10 rounded-full shadow-md"
              />
              <span className="text-lg font-semibold text-gray-800">Navigation</span>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 px-3">
            <div className="space-y-2 mb-8">
              <a
                href="https://erp.abdulhajees.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a
                href="https://askit.abdulhajees.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>AskIT AI</span>
              </a>
              <a
                href="https://erp.abdulhajees.in/add-marks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Add Marks</span>
              </a>
              <a
                href="https://erp.abdulhajees.in/view-marks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <LineChart className="w-5 h-5" />
                <span>View Marks</span>
              </a>
              <a
                href="https://erp.abdulhajees.in/settings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </div>

            {/* External Links Section */}
            <div className="border-t pt-6">
              <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href="https://mamcet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                >
                  <Globe className="w-5 h-5" />
                  <span>College Website</span>
                </a>
                <a
                  href="https://abdulhajees.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                >
                  <Code className="w-5 h-5" />
                  <span>Developer</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <nav className="bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-md">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold">Student Information System</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Registration Form
                </Link>
                <Link
                  to="/students"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Student Records
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<StudentForm />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:rollNo" element={<StudentDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppRoutes;