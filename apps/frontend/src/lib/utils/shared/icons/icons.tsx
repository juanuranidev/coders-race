import { ChevronDown, User, LogOut } from "lucide-react";

const Icons = {
  user: (props: any) => <User {...props} color="#F0F0F0" />,
  logOut: (props: any) => <LogOut {...props} color="#F0F0F0" />,
  chevronDown: (props: any) => <ChevronDown {...props} color="#F0F0F0" />,
};

export default Icons;
