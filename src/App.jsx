import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ChartBarIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'
import Card from './components/Card'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const cards = [
    {
      title: 'Active Projects',
      description: 'Track your ongoing project progress and milestones.',
      icon: ChartBarIcon,
      stats: [
        { value: '12', label: 'Total Projects' },
        { value: '8', label: 'In Progress' }
      ]
    },
    {
      title: 'Team Members',
      description: 'Manage your team and their project assignments.',
      icon: UserGroupIcon,
      stats: [
        { value: '24', label: 'Total Members' },
        { value: '18', label: 'Active Now' }
      ]
    },
    {
      title: 'System Status',
      description: 'Monitor system performance and resource usage.',
      icon: CogIcon,
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '45ms', label: 'Latency' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            <h1 className="text-xl font-semibold">MobiusEngine.ai</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </main>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-6">
          <nav className="space-y-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Settings</a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
