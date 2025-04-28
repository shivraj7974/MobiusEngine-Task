export default function Card({ title, description, icon: Icon, stats }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
        {Icon && (
          <div className="ml-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>
      
      {stats && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 