export default function FlameBackground() {
  return (
    <div className="fixed inset-0 -z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -inset-x-20 -top-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -inset-x-20 -bottom-10 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.35),transparent_60%)] blur-2xl" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\' viewBox=\'0 0 160 160\'><defs><radialGradient id=\'g\' cx=\'50%\' cy=\'50%\'><stop offset=\'0%\' stop-color=\'%23fb923c33\'/><stop offset=\'100%\' stop-color=\'transparent\'/></radialGradient></defs><circle cx=\'80\' cy=\'80\' r=\'60\' fill=\'url(%23g)\'/></svg>')] bg-repeat opacity-10 animate-pulse" />
      </div>
    </div>
  )
}
