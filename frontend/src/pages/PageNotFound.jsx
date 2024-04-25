const PageNotFound = () => {
  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="border p-4 shadow-md">
        <h1 className="text-2xl text-center text-red-600">Error: 404</h1>
        <p className="font-semibold text-lg">Page not found</p>
      </div>
    </div>
  )
}

export default PageNotFound