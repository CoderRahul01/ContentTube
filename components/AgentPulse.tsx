
type AgentPulseProps = {
    size?: "small" | "medium" | "large";
    color?: "blue" | "green" | "purple";
    pulse: boolean;
}

function AgentPulse({size = "medium",color = "blue",pulse,}: AgentPulseProps) {
    const sizeClassees = {
        small: "h-4 w-4",
        medium: "h-12 w-12",
        large: "h-16 w-16",
    }
    const colorClasses = {
        blue: "bg-blue-500 shadow-[0 0 10px 2px rgba(59,130,246,0.5)]", 
        green: "bg-green-500 shadow-[0 0 10px 2px rgba(16,185,129,0.5)]",
        purple: "bg-purple-500 shadow-[0 0 10px 2px rgba(139,92,246,0.5)]",
    }
  return (
    <div className={`${sizeClassees[size]} ${colorClasses[color]} rounded-full animate-pulse`}> 
    </div>
  )
}

export default AgentPulse
