import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return ( 
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="flex gap-4">
        <Link href="/sign-in">
          <Button>
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Sign Up
          </Button>
        </Link>   
      </div>      
    </div>
   );
}

export default LandingPage