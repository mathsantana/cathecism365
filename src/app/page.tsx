import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="w-screen h-16 bg-background-tertiary flex justify-center">
        <div className="w-full max-w-7xl h-full flex items-center justify-between p-5">
          <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />
          <Avatar>
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <main></main>
    </>
  );
}
