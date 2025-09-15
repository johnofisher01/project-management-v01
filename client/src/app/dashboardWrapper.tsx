

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
    { /* Sidebar */ }
    Sidebar
    <div className="bg-blue-500 text-white p-4">
  Tailwind test: This should be a blue box!
</div>

    <main className={`dark:bg-dark-bg  flex w-full flex-col bg-gray-50 md:pl-64`}>
        {/* Navbar */}
        navbar
        {children}

        </main>
  </div>
}

export default DashboardWrapper
