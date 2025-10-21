const img = "https://images.unsplash.com/photo-1683286184221-8cf617788918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZyZWNrbGVzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNzkxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function Component() {
  return (
    <div className="relative size-full" data-name="окогора">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}