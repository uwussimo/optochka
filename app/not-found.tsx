export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-80">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        404 - Page Not Found
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl pt-2">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}
