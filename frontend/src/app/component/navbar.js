import { Code2, Zap, Smartphone, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useRouter } from 'next/navigation'

function Navbar () {
    const router = useRouter()
  return (
    <div className="bg-transparent flex justify-center items-center ">
      <nav className="fixed top-3 left-0 right-0">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 mt-4 backdrop-blur-2xl w-[90%] rounded-4xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-lg">RN Editor</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
            <button onClick={()=> {router.push('/login')}} className="hover:cursor-pointer" size="sm">Get Started</button>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;