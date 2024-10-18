import {
  Star,
  User,
  Info,
  Clock,
  LogOut,
  Github,
  ChartSpline,
  ChevronDown,
} from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const Icons = {
  user: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <User className={className} color={color} {...props} />
  ),
  github: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <Github className={className} color={color} {...props} />
  ),
  logOut: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <LogOut className={className} color={color} {...props} />
  ),
  chevronDown: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <ChevronDown className={className} color={color} {...props} />
  ),
  chartSpline: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <ChartSpline className={className} color={color} {...props} />
  ),
  star: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <Star className={className} color={color} {...props} />
  ),
  clock: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <Clock className={className} color={color} {...props} />
  ),
  info: ({ color = "#F0F0F0", className, ...props }: IconProps) => (
    <Info className={className} color={color} {...props} />
  ),
};

export default Icons;
